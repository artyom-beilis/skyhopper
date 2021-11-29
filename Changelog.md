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

