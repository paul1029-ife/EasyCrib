self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("easycrib-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/manifest.json",
        "/icons/icon-72x72.png",
        "/icons/icon-96x96.png",
        "/icons/icon-128x128.png",
        "/icons/icon-144x144.png",
        "/icons/icon-152x152.png",
        "/icons/icon-192x192.png",
        "/icons/icon-384x384.png",
        "/icons/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
