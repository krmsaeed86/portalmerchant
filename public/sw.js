self.addEventListener("install", (e) => {
  console.log("install");
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("activate");
  self.registration
    .unregister()
    .then(() => self.clients.matchAll())
    .then((clients) => {
      clients.forEach((client) => {
        if (client instanceof WindowClient) client.navigate(client.url);
      });
      return Promise.resolve();
    })
    .then(() => {
      self.caches.keys().then((cacheNames) => {
        Promise.all(
          cacheNames.map((cacheName) => {
            return self.caches.delete(cacheName);
          }),
        );
      });
    });
});

self.addEventListener("message", (event) => {
  console.log("message");
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  console.log("fetch");
  event.respondWith(fetch(event.request));
});
