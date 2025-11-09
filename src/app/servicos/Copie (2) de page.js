"use client";

import Image from "next/image";

const servicos = [
  {
    id: 1,
    nome: "Design Personalizado",
    descricao: "Transformamos ideias em peças únicas e modernas.",
    imagem: "/images/servicos/design.jpg",
    link: "/contactos",
  },
  {
    id: 2,
    nome: "Modelagem e Corte",
    descricao: "Criação de moldes e cortes precisos para roupas sob medida.",
    imagem: "/images/servicos/modelagem.jpg",
    link: "/contactos",
  },
  {
    id: 3,
    nome: "Costura Premium",
    descricao: "Acabamentos impecáveis e alta qualidade em cada peça.",
    imagem: "/images/servicos/costura.jpg",
    link: "/contactos",
  },
  {
    id: 4,
    nome: "Consultoria Criativa",
    descricao: "Aconselhamento completo para projectos de moda e design.",
    imagem: "/images/servicos/consultoria.jpg",
    link: "/contactos",
  },
];

export default function Servicos() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-20">
      <header className="text-center mb-16">
        <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-blue-700 mb-4">
          Serviços Personalizados
        </h1>
        <p className="text-gray-600 text-[clamp(1rem,2vw,1.25rem)] max-w-3xl mx-auto">
          Descubra como transformamos cada projeto em uma experiência única de moda e design.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicos.map((s) => (
          <div
            key={s.id}
            className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 bg-white"
          >
            {/* Imagem do Serviço */}
            <div className="relative w-full h-48">
              <Image
                src={s.imagem}
                alt={s.nome}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>

            {/* Conteúdo do Card */}
            <div className="p-6 text-center">
              <h3 className="font-semibold text-[clamp(1rem,2vw,1.25rem)] mb-2">{s.nome}</h3>
              <p className="text-gray-600 text-[clamp(0.85rem,1.8vw,1rem)] mb-4">{s.descricao}</p>
              <a
                href={s.link}
                className="inline-block bg-blue-700 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-800 transition text-[clamp(0.8rem,1.8vw,1rem)]"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
