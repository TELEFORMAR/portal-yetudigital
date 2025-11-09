"use client";
import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("✅ Service Worker registado:", reg))
        .catch((err) => console.error("❌ Falha ao registar SW:", err));
    }
  }, []);

  return null;
}
