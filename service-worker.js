const CACHE_NAME = "peco-cache-v1";
const FILES_TO_CACHE = [
  "/Peco-lens/",
  "/Peco-lens/index.html",
  "/Peco-lens/style.css",
  "/Peco-lens/app.js",
  "/Peco-lens/manifest.json",
  "/Peco-lens/icons/peco-192.png",
  "/Peco-lens/icons/peco-512.png",
  "/Peco-lens/icons/peco-maskable-192.png",
  "/Peco-lens/icons/peco-maskable-512.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
