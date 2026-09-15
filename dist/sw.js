const CACHE_NAME = 'sarvasetu-live-1789437312';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // हमेशा लाइव नेटवर्क से नया डेटा लोड करें
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
