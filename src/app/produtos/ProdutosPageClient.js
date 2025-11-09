'use client';

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CategoriasCarousel from '@/components/CategoriasCarousel'; // Carrossel de Categorias
import { useCart } from '@/context/CartContext'; // CartContext
import Link from 'next/link';

export default function ProdutosPageClient() {
  const { cart, addToCart, total } = useCart();
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
    fetch('/data/produtos.json')
      .then((res) => res.json())
      .then(setProdutos);
  }, []);

  // Filtra os produtos conforme a categoria selecionada
  const produtosFiltrados = filtro
    ? produtos.filter((p) => p.categoria === filtro)
    : produtos;

  return (
    <div className="px-6 py-8">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-6">Catálogo de Produtos</h1>

      {/* Carrossel de Categorias */}
      <CategoriasCarousel onSelect={setFiltro} />

      {/* Exibição do filtro ativo */}
      {filtro && (
        <p className="text-center text-sm text-gray-500 my-2">
          A filtrar por <strong>{filtro}</strong>
        </p>
      )}

      {/* Grid de Produtos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {produtosFiltrados.map((prod) => (
          <div
            key={prod.id}
            className="border rounded-xl p-3 hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-full flex justify-center">
              <Image
                src={prod.imagem}
                alt={prod.nome}
                width={200}
                height={200}
                className="object-contain w-full h-auto rounded-xl"
              />
            </div>
            <h6
              className="font-semibold mt-2 text-center"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
            >
              {prod.nome}
            </h6>
            <p
              className="text-blue-600 font-bold mt-1"
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)' }}
            >
              {prod.preco.toLocaleString()} Kz
            </p>

            {/* Botão de Adicionar ao Carrinho */}
            <button
             // className="mt-3 bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition"
              onClick={() => addToCart(prod)}
className="mt-3 bg-gradient-to-r from-black to-[#006F6A] text-white rounded-full px-6 py-3 hover:bg-gradient-to-r hover:from-[#005C59] hover:to-black transition w-full sm:w-auto"
onClick={() => addToCart(prod)}

            >
              Colocar no Carrinho
            </button>
          </div>
        ))}
      </div>

      {/* Total do Carrinho */}
      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold">Total: {total.toLocaleString()} Kz</h2>
        <Link href="/carrinho">
          <button className="mt-3 bg-green-600 text-white rounded-full px-4 py-2 hover:bg-green-700 transition">
            🛒 Ver Carrinho
          </button>
        </Link>
      </div>
    </div>
  );
}
