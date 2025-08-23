echo "Run copy(JSON.stringify(g_original)) in console of chrome as save as tags.json"
rm -f tags_filtered.json tags.pot astrohopper.pot po/astrohopper.pot
xgettext astrohopper.html --keyword=_tr --output astrohopper.pot || exit 1
python3 po/filter_tags.py || exit 1
json2po tags_filtered.json tags.pot || exit 1
msgcat -o po/astrohopper.pot astrohopper.pot tags.pot
rm -f tags_filtered.json tags.pot astrohopper.pot 
if [ "$1" == "--update" ]
then
    for po in po/*.po
    do
        msgmerge -U $po po/astrohopper.pot
    done
fi  
python3 po/tojson.py
