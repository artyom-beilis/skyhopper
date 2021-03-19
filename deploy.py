import re
import os
import sys

from create_data import create_db

script=re.compile(r'^<script src="(.*)"></script>')

create_db()

with open("skyhopper.html","r") as f, open("skyhopper_deploy.html","w") as out:
    for line in f.readlines():
        m = script.match(line)
        if m:
            with open(m.group(1),"r") as inline:
                line = inline.read()
                out.write('<script>\n')
                out.write(line)
                out.write('</script>\n')
        else:
            out.write(line)

if len(sys.argv) == 2:
    target = sys.argv[1]
    os.system("cp -v skyhopper_deploy.html " + target + "/skyhopper.html")
    os.system("cp -v README.md LICENSE COPYING.md " + target + "/") 
