from translate.storage import po
import sys
import os
import json
import glob
res = dict()


for file in glob.glob('po/*.po'):
    print("Processing ",file)
    lang = os.path.basename(file).replace('.po','')
    fd = open(file,'rb')
    store = po.pofile()
    store.parse(fd)
    d = dict()
    for k in store.getids():
        d[k] = store.translate(k)
    res[lang] = d
    fd.close()

with open('po/messages.js','w', encoding='utf8') as js:
    js.write('var i18n_dicts = ');
    json.dump(res,js,indent=4,ensure_ascii=False)
    js.write('\n')

