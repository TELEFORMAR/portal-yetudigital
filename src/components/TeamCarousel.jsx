"use client";

import Image from "next/image";

const teamMembers = [
  { id: 1, nome: "Sá de Carvalho", cargo: "CEO" , foto: "/images/direccao/ceo.jpg"},
  { id: 2, nome: "João Santos", cargo: "Director Financeiro", foto: "/images/direccao/joao.jpg"},
  { id: 3, nome: "Ana Costa", cargo: "Directora de Marketing", foto: "/images/direccao/ana.jpg"},
  { id: 4, nome: "Carlos Mendes", cargo: "Director Técnico", foto: "/images/direccao/carlos.jpg"},
  { id: 5, nome: "Paula Fernandes", cargo: "Directora de Operações", foto: "/images/direccao/paula.jpg"},
  { id: 6, nome: "Miguel Pereira", cargo: "Director Comercial", foto: "/images/direccao/miguel.jpg"},
];

export default function TeamCarousel() {
  // Duplicando membros para scroll infinito suave
  const membersLoop = [...teamMembers, ...teamMembers];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
      <h6 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-blue-700 mb-8 text-center">
        Direcção da Yetu
      </h6>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 items-center animate-scroll">
          {membersLoop.map((member, idx) => (
            <div
              key={`${member.id}-${idx}`}
              className="flex-none w-40 sm:w-48 md:w-52 bg-white shadow-md rounded-xl p-4 text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-3 relative">
                <Image
                  src={member.foto}
                  alt={member.nome}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-[clamp(0.9rem,2vw,1.1rem)] text-center">
                {member.nome}
              </h3>
              <p className="text-gray-600 text-[clamp(0.75rem,1.6vw,0.9rem)] text-center">
                {member.cargo}
              </p>
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
          gap: 1.5rem;
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
  );
}
