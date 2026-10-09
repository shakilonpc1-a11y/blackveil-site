/* Blackveil — offline cache
   Core files are cached on install; songs and images are cached the first
   time they are used, so the site keeps working without internet.
   Bump CACHE when you change index.html so phones pick up the new version. */

const CACHE = 'blackveil-v10';

const CORE = [
  './',
  './index.html',
  './content.js',
  './manifest.json',
  './icon.png',
  './icon-192.png',
  './icon-512.png',
  './favicon-32.png',
  './maskable-512.png',
  './bg-horror-dark.jpg',
  './bg-horror-portrait-dark.jpg',
  './blackveil-logo.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(CORE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;   // let fonts / outbound links go straight to the network

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504, statusText: 'offline' });
      });
    })
  );
});