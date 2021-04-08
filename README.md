# SkyHopper

[TOC]

[SkyHopper](https://artyom-beilis.github.io/skyhopper.html) is a web application that helps
to find objects across the night sky by hopping from a well know and easily identifiable 
star to other fainter stars or DSO by measuring changes in angles of the cell phone
using built in gyroscope and gravity sensors. It is similar to Digital Setting Circles 
implemented in a smart phone.

The smart phone has to have gyro, gravity sensors and preferably compass.

It is a web based application that contains a single HTML page and JavaScript objects 
database that will continue working even offline as long as it is cached by a browser.

## Operation

You attach the cellphone to the telescope such that the physical **top** part of the phone 
points towards viewing direction. Note it is different from typical sky observing apps
that simulate camera view of the sky. For this application the screen is parallel to the
viewing direction.


Before you attach the smartphone, open the application and calibrate the compass using "8" like movements. The calibration will significantly improve compass direction accuracy.


1. Align your telescope with an easily identifiable star near the object you want to observe
2. Click `Align` button on
3. Click the star you selected. 3s timer is started to make sure there is no shaping. After 3 seconds the application is aligned on the selected star. "Aligned" message is shown and a cross that represents the direction your telescope is looking to is shown in the center of the screen.
4. Click on an object you want to observe and you get a line showing a direction you need to move the telescope to and the changes in altitude and azimuth are shown at the right and bottom part of the screen
5. Move the telescope till these numbers are close to zero - at this point your telescope should point to the requested object
6. In order to move to next object - repeat the alignment process from the step 1 since the builtin cellphone gyros don't keep the accuracy for a long time/multiple movements

Here you can find a demonstration video: <https://youtu.be/3VXCSMidhe0>

## Notes for iOS Users

- For iOS 13.0 and above you need to allow access to device orientation information by pressing `Enable Device Orientation` button once application loads
- For iOS 12.2 and before 13 you need to allow access via: _Settings > Safari > Motion and Orientation access_

## Troubleshooting 

-   _The sky in application look different from what I expect?_

    Make sure your browser provided location information. If it is not "No Geolocation" message will be shown. Check the geographica coordinates in settings menu to make sure they match your location

-   _I move the phone but nothing moves?_

    Make sure your cellphone has working sensors. Does SkyMap like applications work for you?

-   _I move the application but only Altitude is changing. Azimuth is poining to Polaris/North?_

    Your browser may not support compass heading (for example Firefox) or you don't have such a sensor in the phone.
    You can adjust azimuth manually by swipping the screen till you get required azimuth and then align.

-   _I pointed my telescope to a star but the cell phone seems to point to a different direction?_

    The compass of the cell phone may be significantly misaligned you may to do following:

    1. Move your cell phone in compass calibration/waving pattern to increase compass accuracy
    2. Increase application's field of view by pressing `+` at the top left corner near value `∠60°` - default FOV.
    3. You may switch to manual azimuth mode by pressing `✋` icon at the right side and adjust the azimuth manually

-   _The screen becomes dim very fast and I don't have time to align/point the telescope?_

    Modify the "sleeping" settings for the cell phone. It is under "Settings -> Display" in Android

-   _I start moving the telescope to modify azimuth direction but according to the application it stopped moving, or going back - behaves strangly?_

    It seems that gyro lost accuracy. It happens. Try again. If it still happens all the time and you can't reach the target. Try one of following:

    1. Select a start that is closer on its azimuth to target object - altitude has much more accurate tracking.
    2. Correct altitude first and than search for the object on azimuth axis 

## Controls

- Left side, from top to bottom:

    - Field of view - modify with `+`, `-` to adjust 
    - Maximal star magnitude to display/align on - adjust with `+`, `-` controls
    - Align button and status - pressing on it starts alignment process - you need to select a star you aligning on to.

- Right side, from top to bottom

    - `⚙` - settings button
    - `↻` button - reset alignment
    - `✋` - switch to manual mode,  `⎋` switch to compass mode, <del>`⎋`</del> - no compass available use manual mode only

- Settings Menu:

    - Small Screen Mode - optimize for small screen, move some controls to settings menu
    - Night Mode - enable or disable red-night mode screen
    - Full Screen - switch application to full screen
    - Maximal apparent magnitude of DSO objects to be displayed
    - Filtering of the Astronomical objects by type 

## Constrols in Small Screen Mode

On screen controls:

- Left Top: `◎` - Align button
- Right:

    - Manual `✋` or Compass `⎋` mode
    - Settings Menu: `⚙`

Extra controls in settings menu:

- `↻` button - reset alignment
- `∠` with `-`/`+` buttons - change FOV
- `★` with `-`/`+` - modify stars magnitude


## Equatorial Mount Users

The application assumes you work with alt-azimuth mount. If you are using equatorial mount an additional error may be introduced due to misalignment between the cell phone major axis and the telescope axis.

If the targets are close to poles and significant changes in right ascension are required for the hop any misalignment error between cell phone axis and telescope axis will affect the accuracy. Final error can be calculated as 2e⋅sin(Δα/2)⋅sin(δ), where e - misalignment error between cell phone and telescope, Δα - change in right ascension required for the hop and δ - declination of the target.

So it may not work reliably for equatorial mounts. Alt-Az mounts are recommended.

## Road Map

1. Add user's object list: so user can add any object by RA, DE
2. Develop procedure for phone alignment for equatorial mounts.
3. Add search of objects by names
4. Implement zoom-via-pinch.

## Notes

It is experimental open source web application that would work only with well working sensors. No guarantee so. It is released under GPL license.

