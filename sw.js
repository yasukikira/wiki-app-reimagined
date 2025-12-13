const CACHE_NAME = 'wiki-modern-v28'; // Version Bump
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  // Network First for API calls
  if (event.request.url.includes('wikipedia.org')) {
    event.respondWith(fetch(event.request).catch(() => new Response(JSON.stringify({ error: 'Network Error' }))));
    return;
  }
  // Cache First for App Files
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
    if (cacheWhitelist.indexOf(cacheName) === -1) return caches.delete(cacheName);
  }))));
});