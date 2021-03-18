import re

script=re.compile(r'^<script src="(.*)"></script>')

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


