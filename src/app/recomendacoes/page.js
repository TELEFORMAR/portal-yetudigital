"use client";

import Image from "next/image";

const recomendados = [
  {
    id: 1,
    nome: "Empresa da Boa Conta",
    descricao:
      "Parceiro recomendado para serviços de contabilidade e gestão financeira.",
    imagem: "/images/recomendacoes/boaconta.jpg",
    link: "https://wa.me/244943175418?text=Olá! Quero saber mais sobre a Empresa da Boa Conta.",
  },

{
    id: 2,
    nome: "Empresa TELEFORMAR",
    descricao:
      "Parceiro recomendado para serviços de desenvolvimento e suporte do Portal.",
    imagem: "/images/recomendacoes/icone.ico",
    link: "https://wa.me/244942411690?text=Olá! Quero saber mais sobre a Empresa TELEFORMAR.",
  },

];

export default function RecomendacoesPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-8">
          Recomendações de Negócios
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {recomendados.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[1/1] bg-gray-100">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fill
                  className="object-contain p-6 hover:scale-105 transition-transform"
                />
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg mb-1">
                  {item.nome}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">
                  {item.descricao}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  className="inline-block bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs sm:text-sm hover:bg-blue-800 transition"
                >
                  💬 Contactar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
