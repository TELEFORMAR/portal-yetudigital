"use client";

import Link from "next/link";
import TeamCarousel from "../components/TeamCarousel";
import { MapPin, MessageCircle } from "lucide-react";

const produtos = [
  { id: 1, nome: "Electrónicos", descricao: "Tecnologia de qualidade ao melhor preço.", preco: 999 },
  { id: 2, nome: "Maquetes", descricao: "Transformamos os teus projectos em Maquetes incríveis e realistas.", preco: 5990 },
  { id: 3, nome: "Acessórios de Casa e Cozinha", descricao: "Transforme a sua casa e cozinha com acessórios práticos, modernos e cheios de estilo.", preco: 1500 },
  { id: 4, nome: "Comida e Bebida", descricao: "Pratos, snacks e bebidas deliciosas com entrega rápida e segura.", preco: 2500 },
  { id: 5, nome: "Buquês e Presentes", descricao: "Buquês e Presentes exclusivos para tornar cada ocasião especial.", preco: 3200 },
];

const servicos = [
  { id: 1, nome: "Consultoria de Design", descricao: "Transformação de ideias em projectos interiores e mobiliário, oferecendo soluções criativas e personalizadas.", link: "/contactos" },
  { id: 2, nome: "Buquês e Presentes Personalizados.", descricao: "Surpreenda quem você ama com Buquês e Presenttes Personalizados.", link: "/contactos" },
  { id: 3, nome: "Workshops e Treinamentos", descricao: "Formação para estudantes e profissionais.", link: "/contactos" },
];

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen relative">

      {/* 🩵 Banner Principal */}
      <section className="relative bg-black text-white py-20 sm:py-28 px-4 sm:px-6 text-center rounded-b-3xl shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-[url('/icons/fabric-texture.png')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-3 leading-tight">
            Yetu Modelagem Digital
          </h1>
          <p className="text-[clamp(0.9rem,2vw,1.3rem)] mb-6 leading-relaxed text-blue-100">
            Inovação em cada personalização.
          </p>
          <Link
            href="/produtos"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition text-[clamp(0.8rem,1.8vw,1rem)]"
          >
            Loja Online
          </Link>
        </div>
      </section>

      {/* 🧵 Produtos */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-blue-700 mb-10 text-center">
          Produtos em destaque:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 transform transition"
            >
              <div className="h-40 sm:h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400 text-[clamp(0.9rem,2vw,1.1rem)]">
                Imagem
              </div>
              <h3 className="font-semibold text-[clamp(1rem,2.2vw,1.2rem)] mb-1">{p.nome}</h3>
              <p className="text-gray-600 text-[clamp(0.8rem,1.8vw,1rem)] mb-3">{p.descricao}</p>
              <span className="text-blue-700 font-bold text-[clamp(0.9rem,2vw,1.1rem)]">
                Preço: {p.preco.toLocaleString()} AOA
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/produtos"
            className="inline-block bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition text-[clamp(0.8rem,1.8vw,1rem)]"
          >
            Todos os Produtos
          </Link>
        </div>
      </section>

      {/* ✂️ Serviços */}
      <section className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-blue-700 mb-10 text-center">
          Serviços Personalizados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicos.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transform transition"
            >
              <h3 className="font-semibold text-[clamp(1rem,2.2vw,1.2rem)] mb-1">{s.nome}</h3>
              <p className="text-gray-600 text-[clamp(0.8rem,1.8vw,1rem)] mb-3">{s.descricao}</p>
              <Link
                href={s.link}
                className="text-blue-700 font-semibold hover:underline text-[clamp(0.8rem,1.8vw,1rem)]"
              >
                Solicitar Orçamento
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ⚒ Trabalhos Acadêmicos */}
      <section className="max-w-4xl mx-auto py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-blue-700 mb-4">
          Trabalhos Acadêmicos
        </h2>
        <p className="text-gray-600 text-[clamp(0.85rem,1.8vw,1rem)] mb-6 leading-relaxed">
          Veja alguns exemplos dos nossos trabalhos para instituições e estudantes.
        </p>
        <Link
          href="/trabalhos"
          className="inline-block bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition text-[clamp(0.8rem,1.8vw,1rem)]"
        >
          Ver Trabalhos
        </Link>
      </section>

      {/* 🎡 Direcção da Yetu */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        <TeamCarousel />
      </section>

      {/* 🌍 Ícones Flutuantes — Mapa + WhatsApp */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        {/* 📍 Mapa Pulsante */}
        <a
          href="https://www.google.com/maps/place/Soyo,+Zaire,+Angola/"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver localização no mapa"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse flex items-center justify-center"
        >
          <MapPin className="w-6 h-6" />
        </a>

        {/* 💬 WhatsApp */}
        <a
          href="https://wa.me/244943175418"
          target="_blank"
          rel="noopener noreferrer"
          title="Fale conosco "
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </main>
  );
}
