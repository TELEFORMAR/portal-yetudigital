const CACHE_NAME = "yetu-cache-v1";
const OFFLINE_URL = "/offline.html";

// Assets e rotas que queremos pré-cachear
const PRECACHE_URLS = [
  "/",
  "/produtos",
  "/servicos",
  "/sobre",
  "/offline.html",
  "/favicon.ico",
  "/images/logo-yetu.png",
  // coloque aqui todas as imagens ou assets essenciais
];

// Install: pré-cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate: limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: serve do cache ou da rede, com fallback
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          // Clone para colocar no cache
          const responseClone = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            // Cacheia páginas, JS, CSS, imagens
            if (
              event.request.destination === "document" ||
              event.request.destination === "script" ||
              event.request.destination === "style" ||
              event.request.destination === "image"
            ) {
              cache.put(event.request, responseClone);
            }
          });

          return response;
        })
        .catch(() => {
          // Fallback offline
          if (event.request.destination === "document") {
            return caches.match(OFFLINE_URL);
          }
        });
    })
  );
});




