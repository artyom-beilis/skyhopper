/*
 *
 *  AstroHopper Copyright 2021 Artyom Beilis
 *
 *  Adopted from AirHorner
 * 
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

const version = "VERSION";
const cacheName = `astrohopper-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/astrohopper.html`
      ])
      .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(caches.keys().then(function(names) {
      return Promise.all(
            names.filter(function(name) {
                let delName =  name.startsWith('astrohopper') && name != cacheName;
                if(delName) {
                    console.log("delete from cache " + name)
                }
                return delName;
            }).map(function(name) {
                return caches.delete(name);
            })
      );
  }));
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
