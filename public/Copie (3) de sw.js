// public/sw.js
const CACHE_NAME = "yetu-cache-v1";
const urlsToCache = [
  "/",
  "/produtos",
  "/servicos",
  "/contactos",
  "/manifest.json",
  "/offline.html",
  "/images/logo-yetu.png"
];

// Instalando SW e cache inicial
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Interceptando requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((resp) => {
          if (!resp || resp.status !== 200 || resp.type !== "basic") return resp;

          const responseToCache = resp.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // Cacheia dinamicamente imagens do catálogo e outros assets
            if (event.request.url.includes("/images/")) {
              cache.put(event.request, responseToCache);
            }
          });

          return resp;
        })
        .catch(() => {
          // fallback
          if (event.request.destination === "document") {
            return caches.match("/offline.html");
          }
        });
    })
  );
});

// Ativando e limpando caches antigas
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (!cacheWhitelist.includes(key)) return caches.delete(key);
      }))
    )
  );
});


