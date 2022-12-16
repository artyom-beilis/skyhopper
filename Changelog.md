2022-12-16: v1.0.8

- Fixed issue #12 - Center of constellations database is highly inaccurate and leads to incorrect names location/collision between names. The location was recalculated from stars
- Restored previous behavior when other target is selected pressing on objects next/prev resores current item
- Manual, typo fixes small improvement

2022-11-07: v1.0.7

- Various improvements of the manual - thanks for FredOS from CN forum
- Fixed issue #11 - adding "Veil Nebula" breaks watch list fw/bw options. The bug is related actually to any object not named by its primary name.
- Added more troubleshooting info for iOS

2022-05-20: v1.0.6.2

- Added Google Analytics 

2022-05-19: v1.0.6.1

- Auto update check

2022-05-19: v1.0.6

- All settings are now saved upon application restart with exception of: full screen mode and current field of view/zoom.
- Rearranged settings menu to take less place on screen
- Experimental support of pinch zoom added, it is disabled by default on iOS due to issues with "double zoom" by browser. Can be disabled or enabled in settings by unchecking "Pinch Zoom"
- After updating to this version auto-update should work automatically.
- Fixed handling of target selection on older iOS 10. Now the application uses touch events for target selection and not click only

2022-05-06: v1.0.5

- Fixed bug in parsing object list

2022-05-06: v1.0.4

- Added option to include comments on the objects in watch list by adding them between parentheses after the object id, for example:

        list: M31 (Andomeda), M64 (Black Eye)

    And it will be shown upon oject selection

- Common object names like Andromeda for M31 are shown on object selection
- It is possible to search object by their common names - Andromeda - M31
- Added option to hide star names
- Fixed search for a star with a space in the name "Cor Carolli"

2022-04-05: v1.0.3

- Fixed typo in manual

2022-04-05: v1.0.2

- Added manual direction option description to quick start manual

2022-04-04: v1.0.1

- Updated video tutorial, added link to video tutorial to quick start manual
- Manual updates
- Fixed issue #7: Align on DSO does not work if DSO is shown (as result of search) but under MAG limit

2022-03-18: v1.0.0

- Added quick start manual to the app
- Released version 1.0.0 so it is no longer considered beta

2021-12-12: v0.99.5

- Now AstroHopper is installable as progressive web application
- Buttons have rounded corners
- Typos in code

2021-11-29: v0.99.4

- SkyHopper renamed to AstroHopper

2021-11-25: v0.99.3

-   Added names normalization such that NGC0171, NGC 171 and NGC171 will refer to same object
-   Added using of B-Mag when V-Mag does not provides, reduced maximal DSO magnitude to 14 instead of 16
    to make sure the size remains small
-   Added support of display font size modifcation

2021-07-03: v0.99.2

- Fixed a bug of compass, hand and settings icons now showing in Samsung browser
- Allow alignment on planets by default
- Allow alignment on DSO objects by user request

2021-05-07: v0.99.1

- Manual content improvement thanks to David Gudewicz.
- Search box improvement:
    - Completing search in the search box (submit/enter) closes settings menu if the object was found
    - Search box in cleaned on input start.
    - If you want to research same object press on search:`⌕` button
- Added mangitude information for stars without names
- Added UTC time to debug information

2021-04-25: v0.0.30

- Improved contrast of selected target in night mode
- Moved star magnitude control to settings to cleanup UI
- Cleanup of settings user interfaces
- Added informaton on object sizes in addition to magnitude
- Fixed selection of DSO in non-aligned mode

2021-04-24: v0.0.29

- Added support of adding user's object to the map
- Added support of watch list
- Various modifications in UI 
- Target can now be selected even without alignment

2021-04-16: v0.0.28

- Added search target by name functionality
- Added python server for serving the app via termux python
- Added manual geolocation reload control

2021-04-08: v0.0.27

- Improved multi-star hopping without compass - adjust AZ offset to new position
- Added support of higher zoom levels
- Improved highlighting target/source
- Removed some Linux-isms from the python code
- Added readme for developers

2021-04-05: v0.0.26

- Added small screen optimized mode
- Added in-app manual

2021-04-04: v0.0.25

  - Fixed Planets Calculations
  - Added version information

2021-03-29: v0.0.24

  - Removed Planets Due to Inaccurate Calculations

2021-03-24: v0.0.23

  - Added message on missing Geolocation
  - IOs Fixes
  - Added debug information about sensors

