import TrabalhosPageClient from "./TrabalhosPageClient";

// ✅ SEO (Server Component)
export const metadata = {
  title: "Trabalhos | Yetu Modelagem Digital",
  description:
    "Veja os procjetos realizados pela Yetu Modelagem Digital — modelagem 3D, design e soluções digitais feitas em Angola.",
  keywords: [
    "portfólio Yetu",
    "trabalhos digitais",
    "modelagem 3D Angola",
    "design criativo Soyo",
  ],
  openGraph: {
    title: "Portfólio de Trabalhos | Yetu Modelagem Digital",
    description:
      "Conheça os nossos melhores projectos de modelagem e design digital realizados com criatividade e propósito.",
    images: ["/images/trabalhos-og.jpg"],
  },
};

// ✅ Renderiza o componente cliente
export default function TrabalhosPage() {
  return <TrabalhosPageClient />;
}
