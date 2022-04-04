# AstroHopper - (f.k.a. SkyHopper)

[TOC]

[AstroHopper](https://artyom-beilis.github.io/astrohopper.html) (formerly known as skyhopper) is a free and open source
web application developed by [Artyom Beilis](https://github.com/artyom-beilis/skyhopper) that helps to find objects across the night sky.
It does it by allowing an accurate hop from a well know and easily identifiable 
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


1. Align your telescope with an easily identifiable star or a planet near the object you want to observe
2. Tap on `Align` button 
3. Tap on the star or the planet you selected. 3s timer is started to make sure there is no shaking. After 3 seconds the application is aligned on the selected object. "Aligned" message is shown and a cross that represents the direction your telescope is looking to is shown in the center of the screen.
4. Tap on an object you want to observe and you get a line showing a direction you need to move the telescope to and the changes in altitude and azimuth are shown at the right and bottom part of the screen
5. Move the telescope till these numbers are close to zero - at this point your telescope should point to the requested object
6. In order to move to next object - repeat the alignment process from the step 1 since the builtin cellphone gyros don't keep the accuracy for a long time/multiple movements

Here you can find a demonstration and tutorial video created by Nir Zonshine: <https://youtu.be/AtArqBLWWJ8>

## Notes for iOS Users

You need to provide some permissions to Safari in order to run AstroHopper Properly

Device Orientation Sensors:

- For iOS 13.0 and above you need to allow access to device orientation information by pressing `Enable Device Orientation` button once application loads
- For iOS 12.2 and before 13 you need to allow access via: _Settings > Safari > Motion and Orientation access_

Geolocation (watch for No Geolocation message on screen):

- Settings > Privacy > Location Services ON. Then scroll down to "Safari Web..." and check mark "While Using the App". For iOS 14.0 and above both precise and approximate location should work.




## Installing AstroHopper

AstroHopper is a "Progressive Web Application". It can be installed as regular application on your smart phone. Once it is installed it is fully accessible offline.

In order to install the application, open the URL <https://artyom-beilis.github.io/astrohopper.html> and install it.

- Android/Chrome - tap on "..." near the URL, and select "Install App" or "Add to Home Screen" 
- Samsung Browser - tap on `↓` symbol near URL
- Android/Firefox - tap on "..." near the URL, and select "Install"
- Android/Edge - tap on "..." at the bottom and select "Add to Phone"
- iPhone/Safari - tap the "Share" button scroll down and select "Add to Home Screen"

The application will be installed on home screen or in applications screen - depending on browser.

Test it works offline:

1. Close all applications/browsers
2. Put your phone to "Flight/Airplane" mode, make sure WiFi is closed
3. Tap on application icon and make sure it works as is.

You can usually update the installed version of AstroHopper by refereshing the page. If this does not work for your browser, uninstall it and install from the scratch.

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
    3. You may switch to manual azimuth mode by pressing "hand" `✋` icon at the right side and adjust the azimuth manually

-   _The screen becomes dim very fast and I don't have time to align/point the telescope?_

    Modify the "sleeping" settings for the cell phone. It is under "Settings -> Display" in Android

-   _I start moving the telescope to modify azimuth direction but according to the application it stopped moving, or going back - behaves strangly?_

    It seems that gyro lost accuracy. It happens. Try again. If it still happens all the time and you can't reach the target. Try one of following:

    1. Select a start that is closer on its azimuth to target object - altitude has much more accurate tracking.
    2. Correct altitude first and than search for the object on azimuth axis 

## Controls

- Left side, from top to bottom:

    - Align button and status - pressing on it starts alignment process - you need to select a star or planet you aligning on to.
    - Field of view - modify with `+`, `-` to adjust 
    - If watch list is selected `<`,`>` controls for browsing watch list object. Selected object name is shown below

- Right side, from top to bottom

    - `⚙` - settings button
    - `✋` - switch to manual mode, "_compass_" switch to compass mode, "_compass crossed_" - no compass available use manual mode only

- Settings Menu:

    - `↻` button - reset alignment and target
    - Small Screen Mode - optimize for small screen, move some controls to settings menu
    - Full Screen - switch application to full screen
    - Night Mode - enable or disable red-night mode screen
    - In "Small Screen Mode" only: Field of view - modify with `+`, `-` to adjust 
    - Maximal star magnitude to display/align on - adjust with `+`, `-` controls
    - Maximal apparent magnitude of DSO objects to be displayed - modify with `+`, `-` controls
    - Font size increase option to allow bigger fonts if needed
    - Watch List selection and editing 
    - Search target by name field
    - Allow alignment using any DSO object. Use with care since it is hard to define a center of big DSO object like open cluster.
    - Filtering of the Astronomical objects by type 
    - User Added Objects List
    - Status of geolocation and reload geolocation button
    - Sensors information

## Controls in Small Screen Mode

On screen controls:

- Left Top: `◎` - Align button with status: `✓` - aligned, `✗` - not aligned, `?` - select alignment star
- If watch list is selected, on the left `<`,`>` controls for browsing watch list object. Selected object name is shown below
- Right:

    - Manual `✋` or "_compass_" mode
    - Settings Menu: `⚙`


## Watch List

A user can create a custom watch list in advance to browse them easily during the night.
There is `List` option in "Settings" menu.  It has  `[edit]` control to open watch list editing tool/

A watch list is defined by a simple list of object names separated by space, new lines or commas. 
For example below the "default" list:

    M411, M47, M49, M50, M44, M45

Several named lists can be defined by giving watch list a name followed by `:`:

    clusters: M41 M47 M49
     M50 M44 M45
    dbstars: Polaris, "Cor Caroli"

Lists can be selected by pressing `<` and `>` buttons in "Lists" control. When the list is selected two buttons `<` and `>` are shown in main screen under "Align" button. They allow browsing the objects forward and backward. The current selected object's name is shown under the conrols.

The watch lists are stored at your phone on per domain basis. They are kept even when you reopen the app. 

_Note:_ if you accessing the app from different location (for example from local server) than it is stored saparetly, so prepare the list in advance.

## User Objects

This application does not contain every possible star or DSO. If you want to access objects that are not listed in the database you can add them via "User Objects" in settings menu.

User object are defined in CSV format when first column contains object name, second right ascension (RA) and the third the declination (DEC).
Both RA and DEC can be given as decimal degrees (0-360 for RA and -90 +90 for DEC) or in hour/degree with minutes and seconds. Seconds may be omitted. Fields can be separated by spaces, by ":" or by apropriate symbols like "h", "m", "s", "d". For example 

- RA: `170.6358`, `11:22:32.6`, `11h 22m 32.6s`, `11h 22' 32.6''`, `11 22′ 32.6″`, `11 22 32.6`, `11:32`
- DEC: `-87.3757`, `-87:22:32.6`, `-87d 22m 32.6s`, `-87d 22' 32.6''`, `-87° 22′ 32.6″`, `-87 22 32.6`, `-87:22`

This is an example of such a list:

    V1405,23h 24m 48s, +61° 11′ 15″
    Pluto,19:55:16,-22:13:42

The user objects are stored on your phone on per domain basis. They are kept even when you reopen the app. 

_Note:_ if you accessing the app from different location (for example from local server) than it is stored separetly, so prepare the list in advance.


## Equatorial Mount Users

The application assumes you work with alt-azimuth mount. If you are using equatorial mount an additional error may be introduced due to misalignment between the cell phone major axis and the telescope axis.

If the targets are close to poles and significant changes in right ascension are required for the hop any misalignment error between cell phone axis and telescope axis will affect the accuracy. Final error can be calculated as 2e⋅sin(Δα/2)⋅sin(δ), where e - misalignment error between cell phone and telescope, Δα - change in right ascension required for the hop and δ - declination of the target.

So it may not work reliably for equatorial mounts. Alt-Az mounts are recommended.

## Road Map

1. Develop procedure for phone alignment for equatorial mounts.
2. Implement zoom-via-pinch.

## Known Issues

- Pinch zoom or double tap on iOS devices zooms the screen when not suppose to, pinch zoom is also zooming on Samsung Browser
- On some iPad versions (iOS 12.5) the star/target selection does not work


## Reporting Bugs and Getting Support

- Best way to report bugs is on github project: <https://github.com/artyom-beilis/skyhopper>
- Also the author of the program (Artyom Beilis) is frequent visitor of [Cloudy Nights](https://www.cloudynights.com/index/) forum so you can get help there. Make mention the application name correctly "AstroHopper".

## Notes

(C) 2021-2022 Artyom Beilis.

It is an open source web application licensed under GPL license. It may work only with well working sensors. No warranty of any kind is given. For detailed copyrights
of different parts of the project refer to <https://github.com/artyom-beilis/skyhopper/blob/main/COPYING.md>
