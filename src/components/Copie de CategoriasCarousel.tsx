'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CategoriasCarousel({ onSelect }: { onSelect: (nome: string) => void }) {
  const [categorias, setCategorias] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch('/data/categorias.json')
      .then(res => res.json())
      .then(setCategorias);
  }, []);

  const moveLeft = () => setOffset(offset + 300);
  const moveRight = () => setOffset(offset - 300);

  return (
    <div className="relative overflow-hidden py-4">
      <button onClick={moveLeft} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-2">◀</button>

      <motion.div
        className="flex gap-4 px-8"
        animate={{ x: offset }}
        transition={{ type: 'spring', stiffness: 70 }}
      >
        {categorias.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelect(cat.nome)}
            className="cursor-pointer hover:scale-105 transition"
          >
            <Image src={cat.imagem} alt={cat.nome} width={100} height={100} className="rounded-xl" />
            <p className="text-center mt-2">{cat.nome}</p>
          </div>
        ))}
      </motion.div>

      <button onClick={moveRight} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-2">▶</button>
    </div>
  );
}
