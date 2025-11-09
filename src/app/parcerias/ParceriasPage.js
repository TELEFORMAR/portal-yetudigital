"use client";

import Image from "next/image";
import Link from "next/link";

const parceiros = [
  {
    id: 1,
    nome: "Hospedaria Lineck",
    descricao: "Parceira em hospitalidade e logística.",
    imagem: "/images/parceiros/lineck.jpg",
    link: "https://wa.me/244943175418?text=Olá! Gostaria de saber mais sobre a parceria com a Hospedaria Lineck.",
  },
  {
    id: 2,
    nome: "Guta Serviços",
    descricao: "Serviços técnicos e manutenção de equipamentos.",
    imagem: "/images/parceiros/guta.jpg",
    link: "https://wa.me/244943175418?text=Olá! Quero informações sobre os serviços da Guta.",
  },
  {
    id: 3,
    nome: "Dilu Construção Civil",
    descricao: "Parceira em design e estrutura física de espaços comerciais.",
    imagem: "/images/parceiros/dilu.jpg",
    link: "https://wa.me/244943175418?text=Olá! Gostei da parceria com a Dilu Construção Civil.",
  },
];

export default function ParceriasPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
          Nossos Parceiros
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {parceiros.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-44 sm:h-52 md:h-60 overflow-hidden">
                <Image
                  src={p.imagem}
                  alt={p.nome}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="p-4 text-center">
                <h2 className="font-semibold text-sm sm:text-base md:text-lg mb-1 text-gray-800">
                  {p.nome}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3">
                  {p.descricao}
                </p>
                <Link
                  href={p.link}
                  target="_blank"
                  className="inline-block bg-green-600 text-white px-3 py-1.5 rounded-md text-xs sm:text-sm hover:bg-green-700 transition"
                >
                  🤝 WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
