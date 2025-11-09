// public/sw.js
const CACHE_NAME = "yetu-cache-v1";
const urlsToCache = [
  "/",
  "/produtos",
  "/servicos",
  "/contactos",
  "/images/logo-yetu.png",
  "/manifest.json",
  "/offline.html", // adiciona a página offline ao cache
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;

      return fetch(event.request)
        .then((resp) => {
          if (!resp || resp.status !== 200 || resp.type !== "basic") return resp;

          const responseToCache = resp.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return resp;
        })
        .catch(() => caches.match("/offline.html")) // fallback
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (!cacheWhitelist.includes(key)) return caches.delete(key);
        })
      )
    )
  );
});
