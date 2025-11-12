import "./globals.css";
import Providers from "../components/Providers";
import NavBar from "../components/NavBar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import RegisterSW from "../components/RegisterSW"; // Service Worker
import { CartProvider } from "@/context/CartContext"; // Importar o CartProvider

// ✅ SEO Global + PWA Metadata
export const metadata = {
  title: {
    default: "Yetu Modelagem Digital",
    template: "%s | Yetu Modelagem Digital",
  },
  description:
    "Yetu Modelagem Digital — Modelagem, design e tecnologia que transformam ideias em presença digital. De Soyo para o mundo. 🌍",
  keywords: [
    "Yetu Modelagem Digital",
    "modelagem 3D",
    "design digital",
    "sites modernos",
    "tecnologia em Angola",
    "Soyo",
    "Zaire",
    "branding",
    "inovação",
  ],
  authors: [{ name: "Yetu Digital Team", url: "https://yetumodelagem.ao" }],
  creator: "Yetu Modelagem Digital",
  publisher: "Yetu Modelagem Digital",
  openGraph: {
    title: "Yetu Modelagem Digital",
    description:
      "Modelagem, design e inovação digital feitos com alma angolana. Descubra os nossos serviços e produtos.",
    url: "https://yetumodelagem.ao",
    siteName: "Yetu Modelagem Digital",
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Yetu Modelagem Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yetu Modelagem Digital",
    description:
      "Criação e modelagem digital que une arte e tecnologia. 🌍",
    images: ["/images/og-cover.jpg"],
    creator: "@YetuDigital",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  metadataBase: new URL("https://yetumodelagem.ao"),

  // 🔑 PWA
  manifest: "/manifest.json",
};
// ✅ Agora o themeColor vai separado
export const viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-PT">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen transition-colors duration-500">
        <CartProvider>
          <Providers>
            <NavBar />
            <main className="flex-grow pt-24 px-6 md:px-10 lg:px-20">
              {children}
            </main>
            <Footer />
            <WhatsAppFloat />
            <RegisterSW /> {/* Service Worker */}
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
