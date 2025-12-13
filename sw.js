const CACHE_NAME = 'wiki-modern-v30-stable';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force immediate activation
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  // 1. API Calls: ALWAYS Network (Never Cache)
  if (event.request.url.includes('wikipedia.org')) {
    event.respondWith(fetch(event.request).catch(() => {
        return new Response(JSON.stringify({ error: 'Network Error' }));
    }));
    return;
  }

  // 2. App Files: Cache First, then Network
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Delete ALL old caches to ensure a clean slate
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
      })
    ))
  );
});
