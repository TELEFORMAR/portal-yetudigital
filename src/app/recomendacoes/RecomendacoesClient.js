"use client";

import Image from "next/image";

const recomendacoes = [
  {
    id: 1,
    empresa: "Empresa da Boa Conta",
    comentario:
      "A Yetu Modelagem Digital é exemplo de profissionalismo e criatividade. Ajudou-nos a melhorar nossa imagem corporativa.",
    imagem: "/images/recomendacoes/boaconta.jpg",
  },
  {
    id: 2,
    empresa: "Ateliê Luzia Modas",
    comentario:
      "Parceria com impacto! Entregam no prazo e com qualidade acima da média.",
    imagem: "/images/recomendacoes/luzia.jpg",
  },
  {
    id: 3,
    empresa: "Boutique Clássica",
    comentario:
      "Admiro o detalhe e a perfeição dos trabalhos da Yetu. Voltaremos a trabalhar juntos!",
    imagem: "/images/recomendacoes/classica.jpg",
  },
];

export default function RecomendacoesPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center">
          Recomendações
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recomendacoes.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Círculo da imagem */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-blue-600 mb-4 flex items-center justify-center">
                <Image
                  src={r.imagem}
                  alt={r.empresa}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>

              {/* Empresa */}
              <h2 className="font-semibold text-lg sm:text-xl md:text-lg mb-2 text-gray-800">
                {r.empresa}
              </h2>

              {/* Comentário */}
              <p className="text-gray-600 text-sm sm:text-base md:text-sm leading-relaxed">
                “{r.comentario}”
              </p>
            </div>
          ))}
        </div>

        {/* Footer simples 
        <div className="text-center mt-12">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Yetu Modelagem Digital — Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Criada com ❤️ por{" "}
            <span className="text-blue-600 font-semibold">TELEFORMAR</span>
          </p>
        </div>*/}
      </div>
    </main>
  );
}
