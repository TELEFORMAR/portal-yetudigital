"use client";

import Image from "next/image";
import Link from "next/link";

// Lista de trabalhos
const trabalhos = [
  {
    id: 1,
    nome: "Maquetes Escolares",
    descricao: "Modelo feito sob medida com corte moderno e tecido africano.",
    imagem: "/images/trabalhos/vestido1.jpg",
  },
  {
    id: 2,
    nome: "Conjunto Casual Premium",
    descricao: "Design leve, confortável e ideal para o clima tropical.",
    imagem: "/images/trabalhos/conjunto1.jpg",
  },
  {
    id: 3,
    nome: "Farda Profissional",
    descricao: "Uniforme corporativo personalizado com logotipo da empresa.",
    imagem: "/images/trabalhos/farda1.jpg",
  },
  {
    id: 4,
    nome: "Roupa de Gala",
    descricao: "Peça sofisticada, feita à mão com acabamentos de luxo.",
    imagem: "/images/trabalhos/gala1.jpg",
  },
  {
    id: 5,
    nome: "Saia Tradicional",
    descricao: "Inspirada em tecidos locais, perfeita para eventos culturais.",
    imagem: "/images/trabalhos/saia1.jpg",
  },
  {
    id: 6,
    nome: "Camisa Estilizada",
    descricao: "Corte elegante e tecido respirável, ideal para o dia a dia.",
    imagem: "/images/trabalhos/camisa1.jpg",
  },
];

export default function TrabalhosPageClient() {
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
          Nossos Trabalhos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trabalhos.map((trabalho) => (
            <div
              key={trabalho.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-60 overflow-hidden">
                <Image
                  src={trabalho.imagem}
                  alt={trabalho.nome}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="p-4 text-center">
                <h2 className="font-semibold text-sm sm:text-base md:text-lg mb-1 text-gray-800">
                  {trabalho.nome}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3">
                  {trabalho.descricao}
                </p>

                <div className="flex gap-2 justify-center flex-wrap">
                  <Link
                    href="/servicos"
                    className="flex items-center justify-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-blue-700 transition"
                  >
                    🎓 Quero aprender
                  </Link>

                  <Link
                    href={`https://wa.me/244943175418?text=Olá! Gostei do trabalho "${encodeURIComponent(
                      trabalho.nome
                    )}" e quero algo semelhante!`}
                    target="_blank"
                    className="flex items-center justify-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-green-700 transition"
                  >
                    💬 Solicitar Similar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
