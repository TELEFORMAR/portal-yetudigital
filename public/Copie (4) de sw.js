// public/sw.js
const CACHE_NAME = "yetu-cache-v2";

// URLs fixas para pré-cache
const urlsToCache = [
  "/",
  "/produtos",
  "/servicos",
  "/contactos",
  "/manifest.json",
  "/offline.html",
  "/images/logo-yetu.png"
];

// Lista de imagens do catálogo (pré-cache)
const productImages = [
  "/images/produtos/produto1.png",
  "/images/produtos/produto2.png",
  "/images/produtos/produto3.png",
  "/images/produtos/produto4.png"
  // Adicione aqui todas as imagens do catálogo Yetu
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cacheia páginas fixas + imagens do catálogo
      return cache.addAll([...urlsToCache, ...productImages]);
    })
  );
  self.skipWaiting(); // ativa imediatamente
  console.log("✅ SW instalado e pré-cache feito!");
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
  self.clients.claim(); // assume controle de todas as tabs
  console.log("♻️ SW ativo e caches antigos limpos!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((resp) => {
          if (!resp || resp.status !== 200 || resp.type !== "basic") return resp;

          const responseToCache = resp.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // Cacheia dinamicamente imagens novas
            if (event.request.url.includes("/images/")) {
              cache.put(event.request, responseToCache);
            }
          });

          return resp;
        })
        .catch(() => {
          // fallback offline para páginas HTML
          if (event.request.destination === "document") {
            return caches.match("/offline.html");
          }
        });
    })
  );
});



