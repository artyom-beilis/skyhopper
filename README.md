# AstroHopper - (f.k.a. SkyHopper)

[TOC]

[AstroHopper](https://artyom-beilis.github.io/astrohopper.html) (formerly known as SkyHopper) is a free and open-source
web application developed by [Artyom Beilis](https://github.com/artyom-beilis/skyhopper) that helps to find objects across the night sky.
It does this by allowing an accurate hop from a well-known and easily identifiable 
star to other fainter stars or DSO by measuring changes in pointing angles of the cell phone
using built in gyroscope and gravity sensors. It is similar to Digital Setting Circles 
implemented in a smart phone.

The smart phone must have gyro and gravity sensors and preferably compass.

AstroHopper is a web-based application that contains a single HTML page with a JavaScript objects 
database that will continue working even offline as long as it is cached by the browser.

## Operation

You attach the cellphone to the telescope such that the physical **top** part of the phone 
points towards viewing direction. Note this is different from typical sky observing apps
that simulate camera view of the sky. For AstroHopper the screen is parallel to the
viewing direction.


Before you attach the smartphone, open AstroHopper application and calibrate the compass using "8" like movements.
The calibration will significantly improve compass direction accuracy.
But if your compass fails to work properly, press the hand button `✋` to use Manual Mode.

When AstroHopper starts, a Quick Start Guide appears.  You can also get help by pressing the gear `⚙` button at upper right and then the `?` button. 


1. Align your telescope with an easily identifiable star or a planet near the object you want to observe
2. Tap on `[Align]` button at top left of screen 
3. Tap on the star or the planet you selected. A 3 sec timer is started to make sure there is no shaking. After 3 seconds the application is aligned on the selected object. "Aligned" message is shown and a cross appears in the center of the screen showing the viewing direction your telescope on the map.
4. Tap on an object you want to observe or type its name in the search box in the Settings Menu (accessed via the gear `⚙` button). You will see a line showing the direction you need to move the telescope and the changes in altitude and azimuth are shown at the right and bottom part of the screen
5. Move the telescope till these numbers are close to zero - at this point your telescope should point to the requested object
6. In order to move to next object - repeat the alignment process from the step 1 since the built-in cellphone gyros don't keep the accuracy for a long time or multiple movements

Tutorial and Introduction Videos:

- Here you can find a demonstration and tutorial video created by Nir Zonshine: <https://youtu.be/AtArqBLWWJ8>
- Another very good review created by John Dreese (a.k.a. Reflactor) can be found here: <https://youtu.be/6-_58mSGz1Q>

## Notes for iOS Users

You need to provide some permissions to Safari in order to run AstroHopper.

Device Orientation Sensors:

- For iOS 13.0 and above you need to allow access to device orientation information by pressing `Enable Device Orientation` button once application loads
- For iOS 12.2 and before 13 you need to allow access via: _Settings > Safari > Motion and Orientation access_

Geolocation (watch for No Geolocation message on screen):

- Settings > Privacy > Location Services ON. Then scroll down to "Safari Web..." and check "While Using the app". For iOS 14.0 and above both precise and approximate location should work.
    
    Some users reported need for reboot of the device for these changes to take an effect.


## Installing AstroHopper

AstroHopper is a Progressive Web Application. It can be installed as regular application on your smart phone. Once it is installed it is fully accessible offline. You can also run AstroHopper as a demo on a laptop computer.

In order to install the application, open the URL <https://artyom-beilis.github.io/astrohopper.html> and install it.

- Android/Chrome - tap on "..." near the URL, and select "Install App" or "Add to Home Screen" 
- Samsung Browser - tap on `↓` symbol near URL
- Android/Firefox - tap on "..." near the URL, and select "Install"
- Android/Edge - tap on "..." at the bottom and select "Add to Phone"
- iPhone/Safari - tap the "Share" button (a square with an arrow pointing up) scroll down and select "Add to Home Screen"

The application will be installed on home screen or in applications screen - depending on browser.

To test if AstroHopper works offline:

1. Close all applications/browsers
2. Put your phone in "Flight/Airplane" mode, make sure WiFi is closed
3. Tap on application icon and make sure it works.

You can usually update the installed version of AstroHopper by refreshing the page. If this does not work for your browser, uninstall it and reinstall from scratch.

## Troubleshooting 

-   _The sky in application looks different from what I expect?_

    Make sure your browser provides correct location information. If not "No Geolocation" message will be shown. Check the geographical coordinates in settings menu to make sure they match your location

-   _I move the phone but nothing moves?_

    Make sure your cellphone has working sensors. Do SkyMap like applications work for you?

-   _I move the telescope but only Altitude is changing. Azimuth is pointing to Polaris/North?_

    Your browser may not support compass heading (for example Firefox) or you don't have such a sensor in the phone. A compass with a line crossing it will be shown.
    You can adjust azimuth manually by swiping the screen till you get required azimuth and then align.

-   _I pointed my telescope to a star but the cell phone seems to point to a different direction?_

    The compass of the cell phone may be significantly misaligned you may to do following:

    1. Move your cell phone in compass calibration/waving pattern to increase compass accuracy
    2. Increase application's field of view by pressing `+` at the top left corner near value `∠60°` - default FOV.
    3. You may switch to manual azimuth mode by pressing "hand" `✋` icon at the right side and adjust the azimuth manually

-   _The screen becomes dim very fast and I don't have time to align/point the telescope?_

    Modify the "sleep" settings for the cell phone. It is under "Settings -> Display" in Android and "Settings -> Display and Brightness -> Auto-Lock” in IOS

-   _I start moving the telescope to modify azimuth direction but according to the application it stopped moving, or going back - behaves strangely?_

    It seems that gyro lost accuracy. It happens. Try again. If it still happens all the time and you can't reach the target. Try one of following:

    1. Select an alignment point that is closer on its azimuth to target object - altitude has much more accurate tracking.
    2. Correct altitude first and then search for the object on azimuth axis 

-   _Pinch gesture zooms the entire web page instead of changing the field of view of the sky map_

    It related to configuration:

    - Chrome: settings ->accessibility -> enable force zoom -> off
    - Firefox:settings -> accessibility -> always enable zoom -> off
    - Samsung Browser: settings ->appearance -> manual zoom -> off
    - Edge: settings -> font size -> zoom on all sites -> off or settings -> Accessibility -> zoom on all websites -> off

    Unfortunately, there is no option to disable full web page zoom on iOS.

## Controls

- Left side, from top to bottom:

    - Align button and status - pressing on it starts alignment process - you need to select a star or planet you aligning on to.
    - Field of view - modify with `+`, `-` to adjust 
    - If watch list is selected `<`,`>` controls for browsing watch list object. Selected object name is shown below

- Right side, from top to bottom, right to left

    - `⚙` - settings button
    - Object search box, allows to enter object name or code. Once found press Enter on keyboard. Note if you want to do same search once again, press on the "Magnifing Glass" and it would return to the selected object.
    - `✋` - switch to manual mode, "_compass_" switch to compass mode, "_compass crossed_" - no compass available use manual mode only
    - `W` - appears when a named object selected - pressing on it opens Wikipedia page about the object, requires network.

- Settings Menu (accessed from gear `⚙` icon):

    - `↻` button - reset alignment and target
    - Small UI Mode - optimize for small screen: make buttons smaller, move field of view controls to settings menu
    - Full Screen - switch application to full screen
    - Night Mode - enable or disable red-night mode screen
    - In "Small Screen Mode" only: Field of view - modify with `+`, `-` to adjust 
    - Maximum star magnitude to display/align on - adjust with `+`, `-` controls
    - Maximum apparent magnitude of DSO objects to be displayed - modify with `+`, `-` controls
    - Font size increase option to allow bigger fonts if needed
    - Watch List selection and editing 
    - Search target by name field
    - Allow alignment using any DSO object. Use with care since it is hard to define a center of big DSO object like open cluster.
    - Filtering of the Astronomical objects by type
    - Enable/Disable pinch zoom
    - Wiki information configuration
    - Show quick-start tutorial on startup 
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

- Left `W` - appears when a named object selected - pressing on it opens Wikipedia page about the object, requires network

## Wikipedia Page Info

When `W` button appears you can tap on it and open a frame with Wikipedia page about the selected object.

_Note:_ But be careful - the app has no control over style of the page and by default it would be black text over white page. It is something not desirable for night vision.

Thus by default the Wiki page info support is disabled in Night mode. You can change behavior in settings menu "Wiki".

## Watch List

A user can create a custom watch list in advance to browse them easily during the night.
There is `List` option in "Settings" menu.  It has  `[edit]` control to open watch list editing tool.

A watch list is defined by a simple list of object names separated by space, new lines or commas. 
For example below the "default" list:

    M411, M47, M49, M50, M44, M45

Several named lists can be defined by giving watch list a name followed by `:`, for example:

    clusters: M41 M47 M49
     M50 M44 M45
    doublestars: Polaris, "Cor Caroli"

It is possible to add user comment between `(` and `)` to explain the object id. It would be shown in UI upon object selection, for example:

    Galaxies: M31 (Andromeda), M64 (Black Eye)

_Note:_ if you adding a comment or use a name that contains spaces you need to add a comma `,` as a separator

Lists can be selected by pressing `<` and `>` buttons in "Lists" control. When the list is selected two buttons `<` and `>` are shown in main screen under "Align" button. They allow browsing the objects forward and backward. The current selected object's name is shown under the controls.

The watch lists are stored at your phone on per domain basis. They are kept even when you reopen the app. 

_Note:_ if you accessing the app from different location (for example from local server) than it is stored separately, so prepare the list in advance.

## User Objects

This application does not contain every possible star or DSO. If you want to access objects that are not listed in the database you can add them via "User Objects" in settings menu.

User object are defined in CSV format when first column contains object name, second right ascension (RA) and the third the declination (DEC).
Both RA and DEC can be given as decimal degrees (0-360 for RA and -90 +90 for DEC) or in hour/degree with minutes and seconds. Seconds may be omitted. Fields can be separated by spaces, by ":" or by appropriate symbols like "h", "m", "s", "d". For example 

- RA: `170.6358` or `11:22:32.6` or `11h 22m 32.6s` or `11h 22' 32.6''` or `11 22′ 32.6″` or  `11 22 32.6`, `11:32`
- DEC: `-87.3757` or `-87:22:32.6` or `-87d 22m 32.6s` or `-87d 22' 32.6''` or `-87° 22′ 32.6″` or `-87 22 32.6`, `-87:22`

This is an example of such a list:

    V1405,23h 24m 48s, +61° 11′ 15″
    Pluto,19:55:16,-22:13:42

The user objects are stored on your phone on per domain basis. They are kept even when you reopen the app. 

_Note:_ if you are accessing the app from different location (for example from local server) than it is stored separately, so prepare the list in advance.


## Equatorial Mount Users

The application assumes you work with alt-azimuth mount. If you are using equatorial mount an additional error may be introduced due to misalignment between the cell phone major axis and the telescope axis.

If the targets are close to poles and significant changes in right ascension are required for the hop any misalignment error between cell phone axis and telescope axis will affect the accuracy. Final error can be calculated as 2e⋅sin(Δα/2)⋅sin(δ), where e - misalignment error between cell phone and telescope, Δα - change in right ascension required for the hop and δ - declination of the target.

So it may not work reliably for equatorial mounts. Alt-Az mounts are recommended.

## Road Map

1. Develop procedure for phone alignment for equatorial mounts.
2. Implement zoom-via-pinch.

## Known Issues

- Pinch zoom does not work properly on iOS - no way to disable browser zoom
- Pinch zoom or double tap on iOS devices zooms the screen when not supposed to
- On some iPad versions (iOS 12.5) the star/target selection does not work


## Reporting Bugs and Getting Support

- Best way to report bugs is on github project: <https://github.com/artyom-beilis/skyhopper>
- Also the author of the program (Artyom Beilis) is frequent visitor of [Cloudy Nights](https://www.cloudynights.com/index/) forum so you can get help there. Make mention the application name correctly "AstroHopper".

## Copyrights

(C) 2021-2023 Artyom Beilis.

It is an open source web application licensed under GPL license. It may work only with well working sensors. No warranty of any kind is given. For detailed copyrights
of different parts of the project refer to <https://github.com/artyom-beilis/skyhopper/blob/main/COPYING.md>
