"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-10 mt-20 text-[clamp(0.7rem,1.2vw,0.95rem)] leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* MISSÃO */}
        <div>
          <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold mb-3">Nossa Missão</h2>
          <p>
            Inspirar a confiança e elevar o padrão da moda feita à mão.
            A Yetu Modelagem Digital une tradição, criatividade e elegância para
            criar peças que contam histórias — costuradas com alma e propósito.
          </p>
        </div>

        {/* CONTACTOS */}
        <div>
          <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold mb-3">📞 Contactos</h2>
          <ul className="space-y-1">
            <li>📍 Soyo, Angola</li>
            <li>📱 +244 943 175 418</li>
            <li>✉️ teleformar2025@gmail.com</li>
          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold mb-3">🌐 Redes Sociais</h2>
          <div className="flex gap-4 text-[clamp(1.2rem,2vw,1.8rem)]">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-300 transition-colors"><FaFacebook /></Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition-colors"><FaInstagram /></Link>
            <Link href="https://wa.me/244943175418" target="_blank" className="hover:text-green-400 transition-colors"><FaWhatsapp /></Link>
            <Link href="mailto:teleformar2025@gmail.com" className="hover:text-yellow-300 transition-colors"><FaEnvelope /></Link>
            <Link href="https://youtube.com/teleformar" className="hover:text-yellow-300 transition-colors"><FaYoutube/></Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center">
        <p>
          © {new Date().getFullYear()} <strong>Yetu Modelagem Digital — Todos os direitos reservados.</strong>
        </p>
        <p className="mt-1 text-blue-200">
          Plataforma Digital criada com por <strong>TELEFORMAR</strong> — Democratizar o saber, libertar talentos.
        </p>
      </div>
    </footer>
  );
}
