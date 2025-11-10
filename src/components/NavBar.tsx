'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext"; // Importando o hook useCart

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
//  const { cart } = useCart(); // Usando o contexto do carrinho para pegar os itens

const cartContext = useCart();
const cart = cartContext?.cart ?? [];

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Produtos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/parcerias", label: "Parcerias" },
    { href: "/recomendacoes", label: "Recomendações" },
    { href: "/trabalhos", label: "Trabalhos" },
    { href: "/sobre", label: "Sobre Yetu" },
    { href: "/contactos", label: "Contactos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="flex items-center justify-between px-3 sm:px-5 md:px-10 py-2 sm:py-3">
        {/* LOGO + TÍTULO */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/icons/favicon.ico"
            alt="Logo Yetu"
            width={28}
            height={28}
            className="w-[clamp(16px,4vw,32px)] h-auto"
          />
          <h1
            className={`font-bold tracking-wide transition-all duration-300 ${
              scrolled ? "text-blue-700" : "text-white"
            } text-[clamp(0.85rem,2vw,1.4rem)]`}
          >
            Yetu Modelagem Digital
          </h1>
        </div>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden focus:outline-none transition-all duration-200 ${
            scrolled ? "text-blue-700" : "text-white"
          } text-[clamp(1.1rem,3vw,1.6rem)]`}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* LINKS DESKTOP */}
        <div
          className={`hidden md:flex gap-3 lg:gap-5 font-medium transition-all duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          } text-[clamp(0.8rem,1vw,1rem)]`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 transition ${
                pathname === link.href ? "font-semibold underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ÍCONES - BOTÃO CARRINHO */}
        <div className="flex items-center space-x-6">
          {/* Botão do Carrinho */}
          <Link href="/carrinho">
            <button className="relative flex items-center">
              <span className="text-xl text-white">🛒</span>
              <span
                className={`absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center ${
                  cart.length === 0 ? "hidden" : ""
                }`}
              >
                {cart.length}
              </span>
            </button>
          </Link>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div
          className={`md:hidden flex flex-col px-4 sm:px-6 py-3 border-t transition-all duration-300 ${
            scrolled ? "bg-white text-gray-800" : "bg-blue-900 text-white"
          } text-[clamp(0.85rem,3vw,1rem)]`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 border-b border-gray-200 hover:text-blue-700 transition ${
                pathname === link.href ? "font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
