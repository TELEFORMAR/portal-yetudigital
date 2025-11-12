// public/sw.js

self.addEventListener("install", (event) => {
  console.log("Service Worker: instalado");
  // Pré-cache opcional
  event.waitUntil(
    caches.open("yetu-cache-v1").then((cache) => {
      return cache.addAll([
        "/",                // página inicial
        "/manifest.json",   // manifest
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: ativado");
  // Limpar caches antigos se necessário
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== "yetu-cache-v1") {
          return caches.delete(key);
        }
      }))
    )
  );
});

self.addEventListener("fetch", (event) => {
  // Estratégia: cache first, fallback para rede
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
