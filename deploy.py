import re
import os
import sys
import markdown
import shutil
import base64

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


def embed_service_worker(version):
    with open("sw.js","r") as f, open("sw_deploy.js","w") as out:
        content=f.read()
        content = content.replace('VERSION',version)
        out.write(content)

def png_encode(path):
    with open(path,'rb') as f:
        png = f.read()
        b64png = base64.b64encode(png).decode()
    return 'data:image/png;base64,%s' % b64png

def embed(manual,version):
    script=re.compile(r'^<script src="(.*)"></script>')
    ver=re.compile(r'.*Settings \((version)\).*')
    urlpng=re.compile(r'^(.*)url\(([a-z0-9_\-]*\.png)\)(.*)$')
    urlpng2=re.compile(r'^(.*<img.*)src="([a-z0-9_\-\/]*\.png)"(.*)$')
    
    with open("astrohopper.html","r") as f, open("astrohopper_deploy.html","w") as out:
        for line in f.readlines():
            m = script.match(line)
            v = ver.match(line)
            u = urlpng.match(line)
            u2 = urlpng2.match(line)
            if m:
                with open(m.group(1),"r") as inline:
                    line = inline.read()
                    out.write('<script>\n')
                    out.write(line)
                    out.write('</script>\n')
            elif v:
                out.write(line.replace('version',version))
            elif u or u2:
                if u:
                    pat = '%surl(%s)%s\n'
                else:
                    pat = '%ssrc="%s"%s\n'
                    u=u2
                b64png = png_encode(u.group(2))
                new_line = pat % (u.group(1),b64png,u.group(3))
                out.write(new_line)
            elif line.find('MANUAL') == 0:
                out.write(manual)
            else:
                out.write(line)

def deploy_files(target):
    copyf('astrohopper_deploy.html',target + "/astrohopper.html");
    copyf('sw_deploy.js',target + "/sw.js");
    for f in ['LICENSE','COPYING.md','manual.html','manifest.json']:
        copyf(f,target+ "/" + f)

def add_ga():
    print("Adding Google Analytics to the file")
    with open('ga.html') as f:
        cnt=f.read()
    with open('astrohopper_deploy.html') as f:
        page = f.read()
    page = page.replace('</head>',cnt + '</head>')
    with open('astrohopper_deploy.html','w')  as f:
        f.write(page)

def main():
    create_db()
    ver = get_ver()
    man = make_manual()
    embed(man,ver)
    embed_service_worker(ver)
    if len(sys.argv) >= 2:
        if sys.argv[1] == '-g':
            add_ga()
            del sys.argv[1]
    if len(sys.argv) == 2:
        deploy_files(sys.argv[1])

if __name__ == "__main__":
    main()

