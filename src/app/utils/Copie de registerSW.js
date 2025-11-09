// src/utils/registerSW.js
export function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('Service Worker registrado com sucesso:', reg))
        .catch((err) => console.error('Falha ao registrar Service Worker:', err));
    });
  }
}
