// public/sw.js
const CACHE_NAME = "yetu-cache-v1";
const urlsToCache = [
  "/",
  "/produtos",
  "/servicos",
  "/contactos",
  "/images/logo-yetu.png",
  "/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  console.log("✅ Service Worker instalado e cache inicial criado");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response; // retorna do cache

      // tenta buscar online e atualizar o cache
      return fetch(event.request)
        .then((resp) => {
          if (!resp || resp.status !== 200 || resp.type !== "basic") {
            return resp;
          }

          const responseToCache = resp.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return resp;
        })
        .catch(() => caches.match("/")); // fallback offline
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  console.log("♻️ Cache antigo removido, SW ativo");
});
