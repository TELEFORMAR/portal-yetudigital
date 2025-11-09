// src/app/produtos/page.js

export const metadata = {
  title: "Produtos | Yetu Modelagem Digital",
  description:
    "Catálogo de produtos digitais e modelos 3D criados pela Yetu Modelagem Digital. Design original e tecnologia de ponta.",
  keywords: [
    "produtos digitais",
    "modelos 3D",
    "design criativo",
    "catálogo Yetu",
  ],
  openGraph: {
    title: "Produtos Digitais | Yetu Modelagem Digital",
    description:
      "Explore nossos produtos e modelos digitais únicos — feitos com tecnologia moderna e criatividade angolana.",
    images: ["/images/produtos-og.jpg"],
  },
};

import ProdutosPageClient from "./ProdutosPageClient";

export default function ProdutosPage() {
  return <ProdutosPageClient />;
}
