const CACHE_NAME = 'wiki-modern-v1.1.0-seasonal'; // Version Bumped
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // You must include the new files here so they work offline
  './seasonal.js',
  './seasonal.css',
  './easter-eggs.js',
  './easter-eggs.css'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
    if (cacheWhitelist.indexOf(cacheName) === -1) return caches.delete(cacheName);
  }))));
});