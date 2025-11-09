export const metadata = {
  title: "Serviços | Yetu Modelagem Digital",
  description:
    "Oferecemos modelagem 3D, criação de sites modernos, branding e soluções visuais completas para o teu negócio.",
  keywords: [
    "serviços digitais",
    "modelagem 3D",
    "branding Angola",
    "web design profissional",
    "Yetu serviços",
  ],
  openGraph: {
    title: "Serviços Digitais | Yetu Modelagem Digital",
    description:
      "Descobre os serviços da Yetu Modelagem Digital — tecnologia, design e arte para marcas que querem se destacar.",
    images: ["/images/servicos-og.jpg"],
  },
};

// 🔹 importa o componente client-side
import ServicosClient from "./ServicosClient";

export default function ServicosPage() {
  return <ServicosClient />;
}
