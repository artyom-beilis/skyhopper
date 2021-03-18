///
/// Adapted from https://github.com/TheSiebi/SpacePointer/blob/master/RPi_Calculations%2BInterface.py
//
// Copyright © Michael Siebenmann, Artyom Beilis,  License GPL
//
// 

function getSolarSystemObject(p)
{
	var d = Date.now() *1e-3 / 86400.0 - 10956.0;
    var ref = {
        "Sun":      [0.0,
                    0.0,
                    282.9404 + 4.70935E-5 * d,
                    1.000000,
                    0.016709 - 1.151E-9 * d,
                    356.0470 + 0.9856002585 * d],
           
        "Moon":    [125.1228 - 0.0529538083 * d,
                    5.1454,
                    318.0634 + 0.1643573223 * d,
                    60.2666,
                    0.054900,
                    115.3654 + 13.0649929509 * d],

        "Mercury":  [48.3313 + 3.24587E-5 * d,
                    7.0047 + 5.00E-8 * d,
                    29.1241 + 1.01444E-5 * d,
                    0.387098,
                    0.205635 + 5.59E-10 * d,
                    168.6562 + 4.0923344368 * d],

        "Venus":   [76.6799 + 2.46590E-5 * d,
                    3.3946 + 2.75E-8 * d,
                    54.8910 + 1.38374E-5 * d,
                    0.723330,
                    0.006773 - 1.302E-9 * d,
                    48.0052 + 1.6021302244 * d],

        "Mars":    [49.5574 + 2.11081E-5 * d,
                    1.8497 - 1.78E-8 * d,
                    286.5016 + 2.92961E-5 * d,
                    1.523688,
                    0.093405 + 2.516E-9 * d,
                    18.6021 + 0.5240207766 * d],

        "Jupiter": [100.4542 + 2.76854E-5 * d,
                    1.3030 - 1.557E-7 * d,
                    273.8777 + 1.64505E-5 * d,
                    5.20256,
                    0.048498 + 4.469E-9 * d,
                    19.8950 + 0.0830853001 * d],

        "Saturn":  [113.6634 + 2.38980E-5 * d,
                    2.4886 - 1.081E-7 * d,
                    339.3939 + 2.97661E-5 * d,
                    9.55475,
                    0.055546 - 9.499E-9 * d,
                    316.9670 + 0.0334442282 * d],

        "Uranus":  [74.0005 + 1.3978E-5 * d,
                    0.7733 + 1.9E-8 * d,
                    96.6612 + 3.0565E-5 * d,
                    19.18171 - 1.55E-8 * d,
                    0.047318 + 7.45E-9 * d,
                    142.5905 + 0.011725806 * d],

        "Neptune":  [131.7806 + 3.0173E-5 * d,
                    1.7700 - 2.55E-7 * d,
                    272.8461 - 6.027E-6 * d,
                    30.05826 + 3.313E-8 * d,
                    0.008606 + 2.15E-9 * d,
                    260.2471 + 0.005995147 * d]
    };
   
    var d2r = Math.PI / 180; 
    var r2d = 1.0 / d2r;
    var ws = d2r*(ref["Sun"][2]%360)
    var es = ref["Sun"][4]
    var Ms = d2r*(ref["Sun"][5]%360)

    var Es = Ms + es * Math.sin(Ms) * (1.0 + es * Math.cos(Ms))

    var xvs = Math.cos(Es) - es
    var yvs = Math.sqrt(1.0 - es*es) * Math.sin(Es)

    var vs = Math.atan2(yvs, xvs)
    var rs = Math.sqrt(xvs*xvs + yvs*yvs)

    var lonsun = (vs + ws)%(2*Math.PI)

    var xs = rs * Math.cos(lonsun)
    var ys = rs * Math.sin(lonsun)
    
    var N = d2r*(ref[p][0]%360)
    var i = d2r*(ref[p][1]%360)
    var w = d2r*(ref[p][2]%360)
    var a = ref[p][3]
    var e = ref[p][4]
    var M = d2r*(ref[p][5]%360)
    
    // Eccentric anomaly E

    var E0 = M
    while(true) {
        var E1 = M + e * Math.sin(E0)
        if(Math.abs(E1-E0) < 0.0000001)
            break;
        E0 = E1
    }
    var v = 2 * Math.atan(Math.sqrt((1+e)/(1-e)) * Math.tan(E0/2))
    var r = a * (1-e*Math.cos(E0))
    var xh = r * (Math.cos(N) * Math.cos(v+w) - Math.sin(N) * Math.sin(v+w) * Math.cos(i))
    var yh = r * (Math.sin(N) * Math.cos(v+w) + Math.cos(N) * Math.sin(v+w) * Math.cos(i))
    var zh = r * (Math.sin(v+w) * Math.sin(i))

    var lon = Math.atan2(yh, xh)
    var lat = Math.atan2(zh, Math.sqrt(xh*xh+yh*yh))

    // Geocentric ecliptical coordinaates

    var xg = xh + xs
    var yg = yh + ys
    var zg = zh

    // Equatorial coordinates

    var ecl = d2r*(23.4393 - 3.563E-7 * d)

    var xe = xg
    var ye = yg * Math.cos(ecl) - zg * Math.sin(ecl)
    var ze = yg * Math.sin(ecl) + zg * Math.cos(ecl)

    var RA  = Math.atan2(ye, xe)

    if(RA < 0) {
        RA += 2 * Math.PI
    }

    var DEC = Math.atan2(ze, Math.sqrt(xe*xe + ye*ye))

    var r ={ "RA" : RA * r2d, "DE": DEC *r2d, "name": p, "AM" : -1 };
    return r;
}

