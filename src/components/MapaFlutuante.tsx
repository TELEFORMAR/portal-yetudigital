"use client";

import { MapPin } from "lucide-react";

export default function MapaFlutuante() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://www.google.com/maps/place/Soyo,+Zaire,+Angola/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg border border-blue-200 text-blue-700 rounded-full px-4 py-2 hover:bg-blue-50 hover:scale-105 transition-transform text-[clamp(0.8rem,1.8vw,1rem)] font-medium"
      >
        <MapPin className="text-blue-600 w-[clamp(1rem,2vw,1.3rem)] h-[clamp(1rem,2vw,1.3rem)]" />
        <span>Soyo - Zaire, Angola 🇦🇴</span>
      </a>
    </div>
  );
}
