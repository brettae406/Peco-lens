// Name of the cache
const CACHE_NAME = "Peco-lens-cache-v1";

// Files to cache (add more later as your app grows)
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/service-worker.js",
  "/icons/peco-192.png",
  "/icons/peco-512.png",
  "/icons/peco-maskable-192.png",
  "/icons/peco-maskable-512.png"
];

// Install event - caches files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event - cleans old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serves cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
