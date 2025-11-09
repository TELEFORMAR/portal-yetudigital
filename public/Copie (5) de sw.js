// public/sw.js
const CACHE_NAME = "yetu-cache-v3";

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

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
  console.log("✅ SW instalado e pré-cache inicial concluído");
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (!cacheWhitelist.includes(key)) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
  console.log("♻️ SW ativo e caches antigos limpos!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(async (cached) => {
      if (cached) return cached;

      try {
        const response = await fetch(event.request);
        if (!response || response.status !== 200 || response.type !== "basic")
          return response;

        const responseToCache = response.clone();
        const cache = await caches.open(CACHE_NAME);

        // Se for imagem do catálogo ou logo, adiciona ao cache
        if (event.request.url.includes("/images/")) {
          cache.put(event.request, responseToCache);
        }

        return response;
      } catch (err) {
        // fallback offline
        if (event.request.destination === "document") {
          return caches.match("/offline.html");
        }
      }
    })
  );
});




