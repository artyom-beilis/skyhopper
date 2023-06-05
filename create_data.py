import os
import csv
import sys
import json
import re
import math


global_dso_mag_limit = 14
global_mag_limit = 6
zeros=re.compile('^(.*)(([A-Z]+)[ 0]+)([^0].*)$')

def normalize_name(name):
    m=zeros.match(name)
    if m:
       new_name = m.group(1) + m.group(3) + m.group(4)
       return normalize_name(new_name)
    return name

class DSODB(object):
    def __init__(self):
        self._db = dict()
    def append(self,v):
        t = v['t']
        if t not in self._db:
            self._db[t] = []
        self._db[t].append(v)

    @property
    def json(self):
        index=dict()
        names=[]
        poss=[]
        result = []
        for n in self._db:
            self._db[n].sort(key=lambda v:v['AM'])
            if n not in ['Ca','S']:
                result += self._db[n]
                index[n]=len(result)
        result += self._db['Ca']
        index['Ca']=len(result)
        result += self._db['S']
        index['S']=len(result)
        index['U']=len(result) # user points
        for i,v in enumerate(result):
            if 'name' in v and v['t'] != 'Ca':
                obj_id = v['name'].upper()
                names.append(normalize_name(obj_id.upper()))
                poss.append(i)
                if 'n2' in v:
                    for alt_id in v['n2']:
                        names.append(normalize_name(alt_id.upper()))
                        poss.append(i)
        nindex = {"names":names,"index":poss}
        return result,index,nindex



def parse_ra(val):
    h,m,s = val.split(':')
    return 15*(int(h)  + (60*int(m) + float(s))/3600)

def parse_de(val):
    d,m,s = val.split(':')
    deg = int(d)
    sign = 1 if deg >= 0 else -1
    return sign*(abs(deg)  + (60*int(m) + float(s))/3600)

def get_OpenNGC_DSO(result):
    # M45 is missing
    result.append(dict(DE=24.11666,RA=56.75,name='M45',t='Oc',AM=1.6))
    with open('OpenNGC/NGC.csv','r') as f:
        mapped = set(range(1,111));
        ngc_mapping = {
            '*': None,
            '**': None,
            '*Ass': 'Oc',
            'OCl': 'Oc',
            'GCl': 'Gc',
            'Cl+N': 'Ne',
            'G': 'Ga',
            'GPair': 'Ga',
            'GTrpl': 'Ga',
            'GGroup': 'Ga',
            'PN': 'Ne',
            'HII': 'Ne',
            'DrkN': 'Ne',
            'EmN': 'Ne',
            'Neb': 'Ne',
            'RfN': 'Ne',
            'SNR': 'Ne',
            'Nova': None,
            'NonEx': None,
            'Dup': None,
            'Other': None
        }
        for i,row in enumerate(csv.reader(f,delimiter=';')):
            if i<=1:
                continue
            object_id = row[0]
            object_type = row[1]
            object_type = ngc_mapping.get(object_type)
            if object_type is None:
                continue
            ra = parse_ra(row[2])
            de = parse_de(row[3])
            size = 0 if row[5]=='' else float(row[5])
            mag_str = row[9]
            if mag_str == '': # try V-Mag First than B-Mag
                mag_str = row[8] 
                if mag_str == '': 
                    continue
            mag = float(mag_str)
            if mag > global_dso_mag_limit:
                continue
            messier = int(row[18]) if row[18]!='' else 0
            #hack data
            if object_id == 'NGC5866':
                messier = 102
            if messier:
                mapped.remove(messier)
                object_id = 'M%d' % messier
            alt_names = None
            if row[23]!='':
                alt_names = row[23].split(',')
            object_id = normalize_name(object_id)
            entry = dict(RA=ra,DE=de,AM=mag,name=object_id,t=object_type,s=size)
            if alt_names:
                entry['n2'] = alt_names
            result.append(entry)
    return result

def get_stars(allstars):
    starpos = dict()
    with open('western_constellations_atlas_of_space/data/hygdata_v3/hygdata_v3.csv','r') as f:
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
            if mag <= global_mag_limit:
                star = dict(DE=de,RA=ra,AM=mag,t='S')
                if name:
                    star['name']=name
                allstars.append(star)

    return starpos


def get_constellation_names():
    src_path = 'western_constellations_atlas_of_space/data/processed/centered_constellations.csv'
    names=dict()
    with open(src_path,'r',encoding='latin1') as f:
        for i,row in enumerate(csv.reader(f)):
            if i <= 0:
                continue
            name=row[0]
            code=row[3]
            names[code]=name
    return names;
def get_center_ra_de(starset):
    sx=0.0
    sy=0.0
    sz=0.0
    for ra,de in starset:
        z=math.sin(de*math.pi/180)
        xy = math.cos(de*math.pi/180)
        x=math.sin(ra*math.pi/180)*xy
        y=math.cos(ra*math.pi/180)*xy
        sx+=x
        sy+=y
        sz+=z
    norm=math.sqrt(sx*sx+sy*sy+sz*sz)
    x = sx/norm
    y = sy/norm
    z = sz/norm
    ra = math.atan2(x,y) * 180 /math.pi
    de = math.asin(z) * 180 / math.pi
    if ra < 0:
        ra += 360
    return ra,de



def get_constellation_lines(starpos,names,cons):
    lines =[]
    with open('western_constellations_atlas_of_space/data/stellarium_western_asterisms/constellationship.fab','r') as f:
        for line in f.readlines():
            row=line.split(' ')
            name = names[row[0]]
            starset=set()
            row=list(filter(lambda v:v!='',row))
            N=int(row[1])
            pairs = [int(v) for v in row[2:]]
            for k in range(N):
                p0 = pairs[k*2]
                p1 = pairs[k*2+1]
                r0=starpos[p0][0]
                d0=starpos[p0][1]
                r1=starpos[p1][0]
                d1=starpos[p1][1]
                starset.add((r0,d0))
                starset.add((r1,d1))
                line=dict(r0=r0,d0=d0,r1=r1,d1=d1)
                lines.append(line)

            ra,de = get_center_ra_de(starset)
            cons.append(dict(DE=de,RA=ra,AM=-1,name=name,t='Ca'))
    return lines

def get_planets(dso):
    for name in ['Moon','Mercury','Venus','Mars','Jupiter','Saturn','Neptune','Uranus']:
        dso.append(dict(DE=-1,RA=-1,AM=-1,name=name,t='P'))


def dumpjs(j,f):
    if isinstance(j,list):
        f.write('[');
        for i,v in enumerate(j):
            if i>0:
                f.write(',')
            dumpjs(v,f)
        f.write(']')
    elif isinstance(j,dict):
        f.write('{');
        for i,n in enumerate(j):
            if i>0:
                f.write(',')
            json.dump(n,f)
            f.write(':')
            dumpjs(j[n],f)
        f.write('}')
    elif isinstance(j,float):
        fv='%.4f' % j
        stripped = fv.rstrip('0').rstrip('.')
        f.write(stripped)
    else:
        json.dump(j,f)

def make_jsbd(dso,lines):
    with open('jsdb.js','w') as f:
        f.write("//Generated from https://github.com/eleanorlutz/western_constellations_atlas_of_space\n")
        f.write("// Lincense: https://github.com/eleanorlutz/western_constellations_atlas_of_space/blob/main/LICENSE (GPL)\n")
        f.write("// DSO data from https://github.com/mattiaverga/OpenNGC by CC-BY-SA-v4.0\n")
        f.write("// types: 'S' - star,'Ca' - canstelation,  'Oc' - open cluster, 'Gc' = globular cluster, 'Ga' - gallaxy, 'Ne' - nebula, 'P' - Planet\n")
        db,index,nindex=dso.json
        f.write('var allstars_index = ' + json.dumps(index) +';\n');
        f.write('var allstars = ')
        dumpjs(db,f)
        #json.dump(db,f,indent=2)
        f.write(';\n')
        f.write('var constellation_lines = ')
        dumpjs(lines,f)
        f.write(';\n')
        f.write('var allstars_index_name = ' + json.dumps(nindex) + ';\n')
        f.write('var allstars_db_specs={"items":%d,"index_size":%d,"index_name_size":%d};\n' % (len(db),len(index),len(nindex["names"])))

def create_db():
    objects = DSODB()
    get_OpenNGC_DSO(objects)
    get_planets(objects)
    mapping = get_stars(objects);
    cnames=get_constellation_names()
    lines = get_constellation_lines(mapping,cnames,objects)
    make_jsbd(objects,lines)


if __name__ == "__main__":
    create_db();

