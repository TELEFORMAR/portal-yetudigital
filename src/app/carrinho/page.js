"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CarrinhoPage() {
  const { cart, removeFromCart, updateQty, clearCart, total } = useCart();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  // Número Yetu (sem +). Substitui quando necessário.
  const yetuNumber = "244943175418";

  const handleSendWhatsApp = () => {
    if (!nome.trim() || !telefone.trim()) {
      alert("Por favor preencha teu nome e teu nº. de telefone antes de enviar.");
      return;
    }
    if (cart.length === 0) {
      alert("O carrinho está vazio.");
      return;
    }

    // Monta a mensagem
    let message = `Olá, Yetu Modelagem Digital 👋%0A`;
    message += `Sou: ${encodeURIComponent(nome)}%0A`;
    message += `Telefone: ${encodeURIComponent(telefone)}%0A%0A`;
    message += `Gostaria de solicitar orçamento para os seguintes produtos:%0A`;

    cart.forEach((p, i) => {
      message += `- ${encodeURIComponent(p.nome)} (x${p.qty}) — ${encodeURIComponent((p.preco).toLocaleString())} AOA%0A`;
    });

    message += `%0ATotal: ${encodeURIComponent(total.toLocaleString())} AOA%0A`;
    message += `%0AAguardo retorno. Obrigado!`;

    const url = `https://wa.me/${yetuNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Carrinho 🛒</h1>

        {cart.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="mb-4">O teu carrinho está vazio.</p>
            <Link href="/produtos" className="bg-blue-700 text-white px-4 py-2 rounded">Ver Produtos</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden relative">
                    {/* Se tiveres Image importado, podes substituir por next/image */}
                    <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{item.nome}</div>
                    <div className="text-sm text-gray-500">{(item.preco).toLocaleString()} AOA</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-3 text-red-600 text-sm"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Resumo</h2>
                <div className="flex justify-between text-gray-600 mb-1">
                  <span>Itens</span>
                  <span>{cart.reduce((s, p) => s + p.qty, 0)}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Total</span>
                  <span className="font-bold text-blue-700">{total.toLocaleString()} AOA</span>
                </div>

                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Teu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-3 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Telefone (ex: 923...)"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full p-3 border rounded"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full bg-green-500 text-white py-3 rounded font-semibold hover:bg-green-600 transition"
                >
                  📱 Solicitar pelo WhatsApp
                </button>

                <button
                  onClick={() => { clearCart(); alert("Carrinho limpo."); }}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition"
                >
                  Limpar Carrinho
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
