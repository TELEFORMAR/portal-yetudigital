"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js") // ✅ aponta para o ficheiro em public/
          .then((registration) => {
            console.log("Service Worker registrado com sucesso:", registration);
          })
          .catch((error) => {
            console.error("Falha ao registrar Service Worker:", error);
          });
      });
    }
  }, []);

  return null;
}
