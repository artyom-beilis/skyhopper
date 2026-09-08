const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Run the HTML's sensor handlers with a small browser stub.
function browser({ permission, absolute = true } = {}) {
    const elements = new Map();
    const listeners = new Map();
    const requests = [];
    const source = fs.readFileSync(path.join(__dirname, '../astrohopper.html'), 'utf8');
    const state = {
        console, Number,
        DeviceOrientationEvent: permission ? {
            requestPermission: async value => { requests.push(value); return permission; }
        } : {},
        ondeviceorientation: null,
        document: { getElementById(id) {
            if(!elements.has(id)) elements.set(id, { style: {}, innerHTML: '' });
            return elements.get(id);
        } },
        global_has_compass: false,
        global_use_compass: false,
        gdata: { alpha: 0, compass_alpha: 0, alpha_user_offset: 0, alpha_gyro: 0, beta: 0, gamma: 0 },
        canvas: { width: 400 },
        getFOV: () => ({ lr: 60 }),
        setUseGyro: () => {},
        unsupported: () => {},
        _tr: text => text,
        addEventListener(type, listener) {
            if(!listeners.has(type)) listeners.set(type, new Set());
            listeners.get(type).add(listener);
        }
    };
    state.window = state;
    if(absolute) state.ondeviceorientationabsolute = null;
    vm.createContext(state);
    for(const name of ['gyroListener', 'deviceOrientationListener', 'noCompass', 'manualMode',
        'compassMode', 'moveSky', 'setupOrientationEvents', 'formatValue',
        'requestOrientationPermission', 'setupGyros']) {
        const body = source.match(new RegExp('function ' + name + '\\([^]*?^\\}', 'm'));
        assert.ok(body, name);
        vm.runInContext(body[0], state);
    }
    return { state, requests, elements, emit(type, event) {
        for(const listener of listeners.get(type) || []) listener(event);
    } };
}

test('Chrome permission API uses absolute headings and leaves manual panning usable', async () => {
    const b = browser({ permission: 'granted' });
    b.state.setupGyros();
    assert.equal(b.elements.get('allow_orientation').style.display, 'inline');
    b.state.requestOrientationPermission();
    await new Promise(setImmediate);
    assert.deepEqual(b.requests, [true]);
    b.emit('deviceorientation', { alpha: 45, beta: 30, gamma: 0, absolute: false });
    assert.equal(b.state.gdata.alpha_gyro, 45);
    assert.equal(b.state.global_has_compass, false);
    for(const alpha of [45, 135]) {
        b.emit('deviceorientationabsolute', { alpha, beta: 30, gamma: 0, absolute: true });
        assert.equal(b.state.gdata.alpha, alpha);
    }
    assert.equal(b.elements.get('ang_c').innerHTML, '135.0');
    assert.equal(b.elements.get('nocompass_button').style.display, 'none');
    b.state.manualMode();
    b.state.moveSky({ x: 0 }, { x: 100 });
    assert.equal(b.state.gdata.alpha_user_offset, 150);
    b.emit('deviceorientationabsolute', { alpha: 200, absolute: true });
    assert.equal(b.state.gdata.alpha, 0);
    assert.equal(b.state.gdata.alpha_user_offset, 150);
});

test('Safari compass headings still work, including north', async () => {
    const b = browser({ permission: 'granted', absolute: false });
    b.state.requestOrientationPermission();
    await new Promise(setImmediate);
    b.emit('deviceorientation', { alpha: 20, beta: 30, gamma: 0, webkitCompassHeading: 90 });
    assert.equal(b.state.gdata.alpha, 270);
    b.emit('deviceorientation', { alpha: 20, beta: 30, gamma: 0, webkitCompassHeading: 0 });
    assert.equal(b.state.gdata.alpha, 0);
});

test('absolute deviceorientation events work without a permission API', () => {
    const b = browser({ absolute: false });
    b.state.setupGyros();
    b.emit('deviceorientation', { alpha: 125, beta: 30, gamma: 0, absolute: true });
    assert.equal(b.state.gdata.alpha, 125);
    assert.equal(b.state.global_use_compass, true);
});

test('invalid and relative readings cannot replace a valid compass heading', () => {
    const b = browser();
    b.state.setupGyros();
    b.emit('deviceorientationabsolute', { alpha: 80, absolute: true });
    for(const alpha of [null, undefined, NaN, Infinity, -1]) {
        b.emit('deviceorientationabsolute', { alpha, absolute: true });
        b.emit('deviceorientation', { webkitCompassHeading: alpha });
        assert.equal(b.state.gdata.alpha, 80);
    }
    b.emit('deviceorientationabsolute', { alpha: 360, absolute: true });
    assert.equal(b.state.gdata.alpha, 80);
    b.emit('deviceorientation', { webkitCompassHeading: 360 });
    assert.equal(b.state.gdata.alpha, 0);
    b.emit('deviceorientation', { alpha: 210, beta: 30, gamma: 0, absolute: false });
    assert.equal(b.state.gdata.alpha, 0);
    assert.equal(b.state.gdata.alpha_gyro, 210);
});

test('missing compass data leaves horizontal panning available', () => {
    const b = browser();
    b.state.setupGyros();
    b.emit('deviceorientation', { alpha: 45, beta: 30, gamma: 0, absolute: false });
    b.state.moveSky({ x: 0 }, { x: 100 });
    assert.equal(b.state.global_use_compass, false);
    assert.equal(b.state.gdata.alpha_user_offset, 15);
});

test('manual mode recovers from an invalid stored heading', () => {
    const b = browser();
    b.state.gdata.alpha = NaN;
    b.state.manualMode();
    b.state.moveSky({ x: 0 }, { x: 100 });
    assert.equal(b.state.gdata.alpha_user_offset, 15);
});

test('incomplete orientation samples preserve the previous valid orientation', () => {
    const b = browser();
    b.state.setupGyros();
    b.emit('deviceorientation', { alpha: 45, beta: 30, gamma: 5 });
    b.emit('deviceorientation', { alpha: 90, beta: null, gamma: NaN });
    assert.equal(b.state.gdata.alpha_gyro, 45);
    assert.equal(b.state.gdata.beta, 30);
    assert.equal(b.state.gdata.gamma, 5);
});

test('denied permission keeps the enable button available', async () => {
    const b = browser({ permission: 'denied' });
    b.state.setupGyros();
    b.state.requestOrientationPermission();
    await new Promise(setImmediate);
    assert.equal(b.elements.get('allow_orientation').style.display, 'inline');
    assert.equal(b.state.global_use_compass, false);
});
