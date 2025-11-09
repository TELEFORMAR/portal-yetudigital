"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageCircle, Mail, MapPin } from "lucide-react";

// ✅ Tipagem para os dados dos formulários
type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });
  const [feedbackData, setFeedbackData] = useState({ name: "", email: "", message: "" });
  const [statusContact, setStatusContact] = useState("");
  const [statusFeedback, setStatusFeedback] = useState("");

  const handleChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleChangeFeedback = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };

  const sendEmail = (data, setStatus, setForm) => {
    setStatus("Enviando...");
    emailjs
      .send(
        "service_ae0i41r",
        "template_tkl6ndg",
        data,
        "uvNGBUYnxyzQ8TOGs"
      )
      .then(
        () => {
          setStatus("✅ Mensagem enviada com sucesso!");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Falha ao enviar. Tente novamente.");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6">
      <h6 className="text-[clamp(2rem,5vw,3rem)] text-blue-700 font-bold text-center mb-12">
        Contatos & Feedback
      </h6>

      {/* Container principal */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail(contactData, setStatusContact, setContactData);
          }}
          className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-transform hover:-translate-y-1"
        >
          <h6 className="text-[clamp(1.5rem,4vw,2rem)] text-center text-blue-600 font-bold mb-4">📬 Contacte-nos</h6>

          <input
            type="text"
            name="name"
            value={contactData.name}
            onChange={handleChangeContact}
            placeholder="Teu nome"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mb-3 text-[clamp(0.9rem,2vw,1rem)]"
          />

          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleChangeContact}
            placeholder="Teu e-mail"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mb-3 text-[clamp(0.9rem,2vw,1rem)]"
          />

          <textarea
            name="message"
            value={contactData.message}
            onChange={handleChangeContact}
            placeholder="Tua mensagem..."
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32 mb-3 text-[clamp(0.9rem,2vw,1rem)]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-[clamp(0.9rem,2vw,1rem)]"
          >
            Submeter
          </button>

          {statusContact && <p className="text-center mt-2 text-sm animate-pulse">{statusContact}</p>}

          {/* Informações de contacto */}
          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-3 text-blue-700 font-medium text-[clamp(0.9rem,2vw,1rem)]">
              <MessageCircle />{" "}
              <a href="https://wa.me/244943175418" target="_blank" className="hover:text-blue-500 transition">
                WhatsApp: +244 943 175 418
              </a>
            </p>
            <p className="flex items-center gap-3 text-blue-700 font-medium text-[clamp(0.9rem,2vw,1rem)]">
              <Mail />{" "}
              <a href="mailto:info@yetudigital.com" className="hover:text-blue-500 transition">
                info@yetudigital.com
              </a>
            </p>
             <p className="flex items-center gap-3 text-blue-700 font-medium">
            <MapPin />
             <a
              href="https://www.google.com/maps/place/Soyo,+Zaire,+Angola/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition underline"
           >
              Soyo - Zaire, Angola 🇦🇴 (ver no mapa)
          </a>
          </p>
          </div>
        </form>

        {/* Feedback Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail(feedbackData, setStatusFeedback, setFeedbackData);
          }}
          className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-transform hover:-translate-y-1"
        >
          <h6 className="text-[clamp(1.5rem,4vw,2rem)] text-center text-blue-600 font-bold mb-4">💬 Deixe seu feedback</h6>

          <input
            type="text"
            name="name"
            value={feedbackData.name}
            onChange={handleChangeFeedback}
            placeholder="Teu nome"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mb-3 text-[clamp(0.9rem,2vw,1rem)]"
          />

          <input
            type="email"
            name="email"
            value={feedbackData.email}
            onChange={handleChangeFeedback}
            placeholder="Teu e-mail"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mb-3 text-[clamp(0.9rem,2vw,1rem)]"
          />

          <textarea
            name="message"
            value={feedbackData.message}
            onChange={handleChangeFeedback}
            placeholder="Tua crítica ou sugestão..."
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32 mb-3 text-[clamp(0.9rem,2vw,1rem)]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-[clamp(0.9rem,2vw,1rem)]"
          >
            Enviar Feedback
          </button>

          {statusFeedback && <p className="text-center mt-2 text-sm animate-pulse">{statusFeedback}</p>}
        </form>

      </div>
    </main>
  );
}





