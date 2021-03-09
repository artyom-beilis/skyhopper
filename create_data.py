import os
import csv
import json
allstars = []

starpos = dict()

with open('data/hygdata_v3/hygdata_v3.csv','r') as f:
    for i,row in enumerate(csv.reader(f)):
        if i <= 1:
            continue
        sid = row[1]
        name=row[6]
        if name == '':
            name = None
        ra=float(row[7])*15.0
        de=float(row[8])
        if sid!='':
            starpos[int(sid)] = (ra,de,name)
        mag=float(row[13])
        allstars.append(dict(DE=de,RA=ra,AM=mag,name=name,t='S'))

allstars.sort(key=lambda v:v['AM'])
end=len(allstars)
for i in range(len(allstars)):
    if allstars[i]['AM'] > 6.5:
        end=i
        break
allstars = allstars[:end]

messier = []
with open('data/processed/messier_ngc_processed.csv','r') as f:
    for i,row in enumerate(csv.reader(f)):
        if i <= 0:
            continue
        name=row[0]
        t=row[1]
        ra=float(row[2])*15.0
        de=float(row[3])
        mag=float(row[4])
        if t.find('nebula')!=-1:
            t='Ne'
        elif t.find('open clu')!=-1:
            t='Oc'
        elif t.find('gallaxy')!=-1:
            t='Ga'
        elif t.find('globular')!=-1:
            t='Gc'
        elif t.find('clou')!=-1:
            t='Cl'
        else:
            continue
        messier.append(dict(DE=de,RA=ra,AM=-1,name=name,t=t))
os.system('iconv -f latin1 -t utf-8 data/processed/centered_constellations.csv -o ct_utf8.csv')
with open('ct_utf8.csv','r') as f:
    for i,row in enumerate(csv.reader(f)):
        if i <= 0:
            continue
        name=row[0]
        t=row[1]
        ra=float(row[4])*15.0
        de=float(row[5])
        messier.append(dict(DE=de,RA=ra,AM=-1,name=name,t='Ca'))

lines=[]

with open('data/stellarium_western_asterisms/constellationship.fab','r') as f:
    for line in f.readlines():
        row=line.split(' ')
        row=filter(lambda v:v!='',row)
        N=int(row[1])
        pairs = [int(v) for v in row[2:]]
        for k in range(N):
            p0 = pairs[k*2]
            p1 = pairs[k*2+1]
            line=dict(r0=starpos[p0][0],
                      d0=starpos[p0][1],
                      r1=starpos[p1][0],
                      d1=starpos[p1][1])
            lines.append(line)

with open('jsdb.js','w') as f:
    f.write("//Generated from https://github.com/eleanorlutz/western_constellations_atlas_of_space\n")
    f.write("// Lincense: https://github.com/eleanorlutz/western_constellations_atlas_of_space/blob/main/LICENSE (GPL)\n")
    f.write("// types: 'S' - star,'Ca' - canstelation,  'Oc' - open cluster, 'Gc' = globular cluster, 'Cl' - cloud, 'Ga' - gallaxy, 'Ne' - nebula\n")
    f.write('var allstars = ')
    json.dump(messier + allstars,f,indent=2)
    f.write(';\n')
    f.write('var constellation_lines = ')
    json.dump(lines,f,indent=2)
    f.write(';\n')

