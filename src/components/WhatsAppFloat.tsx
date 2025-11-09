"use client";

import React from "react";

export default function WhatsAppFloat() {
  const number = "244943175418"; // número oficial Yetu (sem +)
  const url = `https://wa.me/${number}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Yetu"
      title="Nosso WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse flex items-center justify-center"
    >
      {/* Ícone oficial do WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M16.003 2.003a13.916 13.916 0 0 0-11.86 21.347L2 30l6.783-2.107A13.916 13.916 0 1 0 16.003 2.003zm.004 25.434a11.46 11.46 0 0 1-5.86-1.615l-.42-.25-3.993 1.24 1.287-3.877-.27-.43a11.442 11.442 0 1 1 9.256 4.932z" />
        <path d="M23.49 18.753c-.35-.175-2.06-1.015-2.379-1.13-.32-.12-.554-.175-.788.175s-.903 1.13-1.11 1.365c-.204.24-.408.27-.757.09s-1.473-.54-2.805-1.725c-1.035-.925-1.734-2.07-1.938-2.415-.2-.345-.022-.532.15-.707.15-.15.345-.39.52-.585.175-.195.232-.33.35-.555.12-.225.06-.42-.03-.6-.09-.18-.787-1.89-1.08-2.58-.285-.675-.573-.585-.787-.6l-.675-.015c-.225 0-.585.09-.892.42s-1.17 1.14-1.17 2.775 1.2 3.225 1.365 3.45c.165.225 2.34 3.6 5.67 5.04.795.345 1.415.555 1.897.712.797.255 1.522.22 2.097.134.64-.095 2.06-.84 2.355-1.65.29-.81.29-1.507.203-1.65-.09-.15-.32-.24-.67-.42z" />
      </svg>
    </a>
  );
}
