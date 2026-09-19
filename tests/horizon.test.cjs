const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function sky() {
    const source = fs.readFileSync(path.join(__dirname, '../astrohopper.html'), 'utf8');
    const points = [];
    const s = {
        Math, degtorad: Math.PI / 180, global_fov: 90, global_camera_projection: true,
        global_use_gyro: false, global_align_matrix: [1,0,0,0,1,0,0,0,1],
        global_style: { ground: 'grey' }, canvas: { width: 1000, height: 800 },
        gdata: { alpha: 0, alpha_gyro: 0, alpha_diff: 0, alpha_user_offset: 0,
            beta: 0, gamma: 0, lat: 31.9, lon: 34.8, time: Date.UTC(2026,0,1) },
        context: {
            beginPath() { points.length = 0; },
            moveTo(x,y) { points.push([x,y]); },
            lineTo(x,y) { points.push([x,y]); },
            closePath() {}, fill() {}
        }
    };
    vm.createContext(s);
    for(const name of ['horizonPosition','shadeBelowHorizon','getCameraRays','getRotationMatrix',
        'mvec','crossProd','sprod','getFOV','xyzTo2d','rayFromPos','cameraBearing','projectToCamera']) {
        const body = source.match(new RegExp('function ' + name + '\\([^]*?^\\}', 'm'));
        assert.ok(body, name);
        vm.runInContext(body[0], s);
    }
    return { s, points };
}

test('horizon moves with altitude and centres the cardinal directions', () => {
    const { s } = sky();
    for(const az of [0,90,180,270]) {
        s.gdata.alpha = (360-az)%360;
        for(const altitude of [-20,0,5,20]) {
            s.gdata.beta = altitude;
            const point = s.horizonPosition(az,s.getCameraRays());
            const expected = .5 + Math.sin(altitude*s.degtorad)/(2*Math.sin(36*s.degtorad));
            assert.ok(Math.abs(point.x-.5)<1e-10);
            assert.ok(Math.abs(point.y-expected)<1e-10);
        }
    }
});

test('equatorial targets at zero altitude land on the horizon', () => {
    const { s } = sky(), r = s.degtorad;
    const latitude = s.gdata.lat*r;
    const days = s.gdata.time/86400000+2440587.5-2451545;
    const localAngle = (.7790572732640+1.00273781191135448*days)*360+s.gdata.lon;
    for(const az of [0,35,90,140,180,235,270,325]) {
        const angle = az*r;
        const dec = Math.asin(Math.cos(latitude)*Math.cos(angle));
        const hourAngle = Math.atan2(-Math.sin(angle),-Math.sin(latitude)*Math.cos(angle));
        const ra = ((localAngle-hourAngle/r)%360+360)%360;
        s.gdata.alpha = (360-az)%360;
        s.gdata.beta = 5;
        const camera = s.getCameraRays();
        const star = s.projectToCamera(ra,dec/r,camera,false);
        const horizon = s.horizonPosition(az,camera);
        assert.ok(Math.hypot(star.x-horizon.x,star.y-horizon.y)<1e-8);
    }
});

function insidePolygon(x,y,points) {
    let inside = false;
    for(let i=0,j=points.length-1;i<points.length;j=i++) {
        const [xi,yi] = points[i], [xj,yj] = points[j];
        if((yi>y)!==(yj>y) && x<(xj-xi)*(y-yi)/(yj-yi)+xi) inside = !inside;
    }
    return inside;
}

test('shading covers negative altitudes, including rotated alignment and pole views', () => {
    const { s, points } = sky(), r = s.degtorad;
    for(const aligned of [false,true]) for(const altitude of [-90,-70,-12,0,12,70,90]) {
        s.global_use_gyro = aligned;
        s.global_align_matrix = s.getRotationMatrix(25,18,13);
        s.gdata.beta = altitude;
        const camera = s.getCameraRays();
        s.shadeBelowHorizon(camera);
        for(let py=20;py<800;py+=40) for(let px=20;px<1000;px+=40) {
            const x = (2*px/1000-1)*Math.sin(45*r);
            const y = (1-2*py/800)*Math.sin(36*r);
            const z = Math.sqrt(1-x*x-y*y);
            const up = -camera[1][2]*x+camera[0][2]*y+camera[2][2]*z;
            if(Math.abs(up)<.025) continue;
            assert.equal(insidePolygon(px,py,points),up<0);
        }
    }
});
