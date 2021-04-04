import re
import os
import sys

from create_data import create_db

script=re.compile(r'^<script src="(.*)"></script>')
ver=re.compile(r'.*Settings \((version)\).*')

create_db()

def get_ver():
    with open('Changelog.md') as f:
        first = list(f.readlines())[0]
    ver = first[first.find(': v')+3:].strip()
    return ver

version = get_ver()

print "Version ",version

with open("skyhopper.html","r") as f, open("skyhopper_deploy.html","w") as out:
    for line in f.readlines():
        m = script.match(line)
        v = ver.match(line)
        if m:
            with open(m.group(1),"r") as inline:
                line = inline.read()
                out.write('<script>\n')
                out.write(line)
                out.write('</script>\n')
        elif v:
            out.write(line.replace('version',version))
        else:
            out.write(line)

if len(sys.argv) == 2:
    target = sys.argv[1]
    os.system("cp -v skyhopper_deploy.html " + target + "/skyhopper.html")
    os.system("cp -v README.md LICENSE COPYING.md " + target + "/") 
