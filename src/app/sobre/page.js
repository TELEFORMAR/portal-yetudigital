"use client";

import Image from "next/image";

// Dados
const teamMembers = [
  { id: 1, nome: "Sá de Carvalho", cargo: "CEO", foto: "/images/direccao/ceo.jpg" },
  { id: 2, nome: "João Santos", cargo: "Director Financeiro", foto: "/images/direccao/joao.jpg" },
  { id: 3, nome: "Ana Costa", cargo: "Directora de Marketing", foto: "/images/direccao/ana.jpg" },
  { id: 4, nome: "Carlos Mendes", cargo: "Director Técnico", foto: "/images/direccao/carlos.jpg" },
  { id: 5, nome: "Paula Fernandes", cargo: "Directora de Operações", foto: "/images/direccao/paula.jpg" },
  { id: 6, nome: "Miguel Pereira", cargo: "Director Comercial", foto: "/images/direccao/miguel.jpg" },
];

const valores = [
  { id: 1, titulo: "Criatividade", descricao: "Inovamos sempre, trazendo ideias frescas e modernas." },
  { id: 2, titulo: "Qualidade", descricao: "Cada peça é pensada para ser durável e elegante." },
  { id: 3, titulo: "Sustentabilidade", descricao: "Valorizamos materiais orgânicos e processos conscientes." },
];

export default function SobrePage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Banner Superior */}
      <section className="relative bg-black text-white py-24 sm:py-28 px-4 sm:px-6 text-center rounded-b-3xl shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-[url('/fabric-texture.png')] opacity-9 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mx-auto mb-4 w-20 h-20 relative">
            <Image src="/images/logo-yetu.png" alt="Yetu Modelagem" fill className="object-contain" />
          </div>
          <h1 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold mb-4 leading-tight">
            Sobre a Yetu Modelagem
          </h1>
          <p className="text-[clamp(0.85rem,2.5vw,1.3rem)] mb-6 leading-relaxed text-blue-100">
            Criamos, costuramos e desenhamos com paixão. Nossa missão é valorizar o talento local, inovando com estilo e qualidade.
          </p>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {valores.map((v) => (
          <div key={v.id} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:scale-105 transform transition">
            <h3 className="font-bold text-blue-700 text-[clamp(1rem,2.5vw,1.5rem)] mb-2">{v.titulo}</h3>
            <p className="text-gray-600 text-[clamp(0.8rem,2vw,1rem)]">{v.descricao}</p>
          </div>
        ))}
      </section>

      {/* Equipa da Yetu – Carrossel infinito */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-[clamp(1.25rem,4vw,2.25rem)] font-bold text-blue-700 mb-6 sm:mb-8 text-center">
          Equipa da Yetu
        </h2>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 sm:gap-6 animate-scroll">
            {teamMembers.concat(teamMembers).map((member, idx) => (
              <div
                key={idx}
                className="flex-none w-28 sm:w-32 md:w-36 lg:w-40 p-1 text-center hover:scale-105 transform transition"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-blue-600 mx-auto">
                  <Image
                    src={member.foto}
                    alt={member.nome}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-[clamp(0.75rem,2vw,1rem)] mt-2">{member.nome}</h3>
                <p className="text-gray-600 text-[clamp(0.65rem,1.8vw,0.85rem)]">{member.cargo}</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            gap: 1rem;
            animation: scroll 30s linear infinite;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Slogan / CTA final */}
      <section className="bg-blue-700 text-white py-12 sm:py-16 px-4 sm:px-6 text-center rounded-t-3xl">
        <h2 className="text-[clamp(1.25rem,4vw,2.25rem)] font-bold mb-4">Pronto para criar connosco?</h2>
        <p className="text-[clamp(0.85rem,2.5vw,1.2rem)] mb-6">
          Entre em contacto e transforme suas ideias em produtos de moda exclusivos.
        </p>
        <a
          href="/contactos"
          className="inline-block bg-white text-blue-700 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow hover:bg-gray-100 transition text-[clamp(0.8rem,2vw,1rem)]"
        >
          Fale Conosco
        </a>
      </section>

    </main>
  );
}
