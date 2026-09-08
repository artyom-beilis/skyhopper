const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Run the HTML's sensor handlers with a small browser stub.
function createBrowserStub({ permission, supportsAbsoluteEvents = true } = {}) {
    const elements = new Map();
    const listeners = new Map();
    const permissionRequests = [];
    const source = fs.readFileSync(path.join(__dirname, '../astrohopper.html'), 'utf8');
    const state = {
        console, Number,
        DeviceOrientationEvent: permission ? {
            requestPermission: async value => { permissionRequests.push(value); return permission; }
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
    if(supportsAbsoluteEvents) state.ondeviceorientationabsolute = null;
    vm.createContext(state);
    for(const name of ['gyroListener', 'deviceOrientationListener', 'noCompass', 'manualMode',
        'compassMode', 'moveSky', 'setupOrientationEvents', 'formatValue',
        'requestOrientationPermission', 'setupGyros']) {
        const body = source.match(new RegExp('function ' + name + '\\([^]*?^\\}', 'm'));
        assert.ok(body, name);
        vm.runInContext(body[0], state);
    }
    return { state, permissionRequests, elements, emit(type, event) {
        for(const listener of listeners.get(type) || []) listener(event);
    } };
}

test('Chrome permission API uses absolute headings and leaves manual panning usable', async () => {
    const browser = createBrowserStub({ permission: 'granted' });
    browser.state.setupGyros();
    assert.equal(browser.elements.get('allow_orientation').style.display, 'inline');
    browser.state.requestOrientationPermission();
    await new Promise(setImmediate);
    assert.deepEqual(browser.permissionRequests, [true]);
    browser.emit('deviceorientation', { alpha: 45, beta: 30, gamma: 0, absolute: false });
    assert.equal(browser.state.gdata.alpha_gyro, 45);
    assert.equal(browser.state.global_has_compass, false);
    for(const alpha of [45, 135]) {
        browser.emit('deviceorientationabsolute', { alpha, beta: 30, gamma: 0, absolute: true });
        assert.equal(browser.state.gdata.alpha, alpha);
    }
    assert.equal(browser.elements.get('ang_c').innerHTML, '135.0');
    assert.equal(browser.elements.get('nocompass_button').style.display, 'none');
    browser.state.manualMode();
    browser.state.moveSky({ x: 0 }, { x: 100 });
    assert.equal(browser.state.gdata.alpha_user_offset, 150);
    browser.emit('deviceorientationabsolute', { alpha: 200, absolute: true });
    assert.equal(browser.state.gdata.alpha, 0);
    assert.equal(browser.state.gdata.alpha_user_offset, 150);
});

test('Safari compass headings still work, including north', async () => {
    const browser = createBrowserStub({ permission: 'granted', supportsAbsoluteEvents: false });
    browser.state.requestOrientationPermission();
    await new Promise(setImmediate);
    browser.emit('deviceorientation', { alpha: 20, beta: 30, gamma: 0, webkitCompassHeading: 90 });
    assert.equal(browser.state.gdata.alpha, 270);
    browser.emit('deviceorientation', { alpha: 20, beta: 30, gamma: 0, webkitCompassHeading: 0 });
    assert.equal(browser.state.gdata.alpha, 0);
});

test('absolute deviceorientation events work without a permission API', () => {
    const browser = createBrowserStub({ supportsAbsoluteEvents: false });
    browser.state.setupGyros();
    browser.emit('deviceorientation', { alpha: 125, beta: 30, gamma: 0, absolute: true });
    assert.equal(browser.state.gdata.alpha, 125);
    assert.equal(browser.state.global_use_compass, true);
});

test('invalid and relative readings cannot replace a valid compass heading', () => {
    const browser = createBrowserStub();
    browser.state.setupGyros();
    browser.emit('deviceorientationabsolute', { alpha: 80, absolute: true });
    for(const alpha of [null, undefined, NaN, Infinity, -1]) {
        browser.emit('deviceorientationabsolute', { alpha, absolute: true });
        browser.emit('deviceorientation', { webkitCompassHeading: alpha });
        assert.equal(browser.state.gdata.alpha, 80);
    }
    browser.emit('deviceorientationabsolute', { alpha: 360, absolute: true });
    assert.equal(browser.state.gdata.alpha, 80);
    browser.emit('deviceorientation', { webkitCompassHeading: 360 });
    assert.equal(browser.state.gdata.alpha, 0);
    browser.emit('deviceorientation', { alpha: 210, beta: 30, gamma: 0, absolute: false });
    assert.equal(browser.state.gdata.alpha, 0);
    assert.equal(browser.state.gdata.alpha_gyro, 210);
});

test('missing compass data leaves horizontal panning available', () => {
    const browser = createBrowserStub();
    browser.state.setupGyros();
    browser.emit('deviceorientation', { alpha: 45, beta: 30, gamma: 0, absolute: false });
    browser.state.moveSky({ x: 0 }, { x: 100 });
    assert.equal(browser.state.global_use_compass, false);
    assert.equal(browser.state.gdata.alpha_user_offset, 15);
});

test('manual mode recovers from an invalid stored heading', () => {
    const browser = createBrowserStub();
    browser.state.gdata.alpha = NaN;
    browser.state.manualMode();
    browser.state.moveSky({ x: 0 }, { x: 100 });
    assert.equal(browser.state.gdata.alpha_user_offset, 15);
});

test('incomplete orientation samples preserve the previous valid orientation', () => {
    const browser = createBrowserStub();
    browser.state.setupGyros();
    browser.emit('deviceorientation', { alpha: 45, beta: 30, gamma: 5 });
    browser.emit('deviceorientation', { alpha: 90, beta: null, gamma: NaN });
    assert.equal(browser.state.gdata.alpha_gyro, 45);
    assert.equal(browser.state.gdata.beta, 30);
    assert.equal(browser.state.gdata.gamma, 5);
});

test('denied permission keeps the enable button available', async () => {
    const browser = createBrowserStub({ permission: 'denied' });
    browser.state.setupGyros();
    browser.state.requestOrientationPermission();
    await new Promise(setImmediate);
    assert.equal(browser.elements.get('allow_orientation').style.display, 'inline');
    assert.equal(browser.state.global_use_compass, false);
});
