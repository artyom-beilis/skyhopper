import re
import os
import sys
import markdown
import shutil

from create_data import create_db

def copyf(src,tgt):
    print("Copying %s -> %s" % (src,tgt))
    shutil.copyfile(src,tgt)

def get_ver():
    with open('Changelog.md') as f:
        first = list(f.readlines())[0]
    ver = first[first.find(': v')+3:].strip()
    return ver



def make_manual():
    with open("README.md", "r",encoding="utf-8") as input_file:
        text = input_file.read()
        md  = markdown.Markdown(extensions=['toc'])
        html = md.convert(text)

    with open("manual.html", "w",encoding="utf-8") as output_file:
        with open('header.html','r') as f:
            output_file.write(f.read())
        output_file.write(html)
        with open('footer.html','r') as f:
            output_file.write(f.read())
    return html


def embed(manual):
    script=re.compile(r'^<script src="(.*)"></script>')
    ver=re.compile(r'.*Settings \((version)\).*')
    
    version = get_ver()
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
            elif line.find('MANUAL') == 0:
                out.write(manual)
            else:
                out.write(line)

def deploy_files(target):
    copyf('skyhopper_deploy.html',target + "/skyhopper.html");
    for f in ['README.md','LICENSE','COPYING.md','manual.html']:
        copyf(f,target+ "/" + f)

def main():
    create_db()
    man = make_manual()
    embed(man)
    if len(sys.argv) == 2:
        deploy_files(sys.argv[1])

if __name__ == "__main__":
    main()

