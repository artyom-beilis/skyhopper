# Developers ReadMe

SkyHopper is deployed as a single static html file that embeds inside
all the stars and DSOs data base, all the code and external JS code.

Note: the code does not perform _any_ communications with external world
and needs to work offline as is.

For development you will need:

1. python3
2. python-markdown for converting manual
3. Any web server with SSL support to host the generated html file

Following files are used:

- The main code is located in starhopper.html
- README.md - manual - it is converted to html and embedded in the app
- `create_data.py` generates jsdb.js - JSON/JavaScript database of all the objects:
  stars, constellations and constellation lines, deep space objects
- `deploy.py` calls `create_data.py`, converts `README.md` to manual 
  and embeds all external JS code and manual into single HTML file `skyhopper_deploy.html`

Development cycle:

1. Do any modifications
2. Deploy `skyhopper.html` with all embeddings by running `python3 deploy.py /path/to/www/skyhopper/`

# Developers notes:

In order to include new JS code put it into skyhopper.js in following exact format:

    <script src="path/to/new/js/file.js"></script>

This way `deploy.py` will know to embed it.

Make sure changelog keeps first line format since `deoploy.py` takes version 
from there


