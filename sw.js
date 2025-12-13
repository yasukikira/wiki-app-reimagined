const CACHE_NAME = 'wiki-modern-v27'; // Version Bump
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
  // Network First strategy for API calls to prevent stale data hangs
  if (event.request.url.includes('wikipedia.org')) {
    event.respondWith(fetch(event.request).catch(() => {
        // Optional: Return offline fallback if needed, but for now just fail gracefully
        return new Response(JSON.stringify({ error: 'Network Error' }));
    }));
    return;
  }

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
