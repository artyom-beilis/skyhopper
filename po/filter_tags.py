import json

tags = json.load(open('tags.json','r'))
tags = list(set(tags))
with open('tags_filtered.json','w',encoding='utf8') as js:
    json.dump(tags,js,ensure_ascii=False)

