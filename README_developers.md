# Developers ReadMe

AstroHopper is deployed as a single static html file that embeds inside
all the stars and DSOs data base, all the code and external JS code.

Note: the code does not perform _any_ communications with external world
and needs to work offline as is.

For development you will need:

1. python3
2. python-markdown for converting manual

Following files are used:

- The main code is located in starhopper.html
- README.md - manual - it is converted to html and embedded in the app
- `create_data.py` generates jsdb.js - JSON/JavaScript database of all the objects:
  stars, constellations and constellation lines, deep space objects
- `deploy.py` calls `create_data.py`, converts `README.md` to manual 
  and embeds all external JS code, PNGs and and manual into single HTML file `astrohopper_deploy.html`

  It also generates astrohopper.py - a simple server for development. 

Development cycle:

1. Do any modifications
2. Run deploy.py /path/to/www-data
4. Test it over `https://Your-IP-Address:8443/`

# Developers notes:

In order to include new JS code put it into astrohopper.js in following exact format:

    <script src="path/to/new/js/file.js"></script>

In ordder to include new css image use 

    url(file-name.png)

This way `deploy.py` will know which JS and PNGs to embed into the final file.


Make sure changelog keeps first line format since `deploy.py` takes the version 
from there
