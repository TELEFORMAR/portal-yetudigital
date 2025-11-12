"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function CategoriasCarousel({
  onSelect,
}: {
  onSelect: (nome: string) => void;
}) {
  const [categorias, setCategorias] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/data/categorias.json")
      .then((res) => res.json())
      .then(setCategorias)
      .catch((err) => console.error("Erro ao carregar categorias:", err));
  }, []);

  // Calcula largura total do carrossel
  const containerWidth = containerRef.current?.offsetWidth || 0;
  const itemWidth = 120; // largura aproximada de cada item + gap
  const totalWidth = categorias.length * itemWidth;

  const moveLeft = () => {
    setOffset((prev) => Math.min(prev + itemWidth, 0));
  };

  const moveRight = () => {
    setOffset((prev) =>
      Math.max(prev - itemWidth, -(totalWidth - containerWidth))
    );
  };

  // Loop automático suave
  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
      if (offset <= -(totalWidth - containerWidth)) {
        setOffset(0); // reset loop
      }
    }, 3000); // desliza a cada 3s
    return () => clearInterval(interval);
  }, [offset, totalWidth, containerWidth]);

  return (
    <div className="relative overflow-hidden py-4" ref={containerRef}>
      {/* Botões laterais */}
      <button
        onClick={moveLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-3 py-1 z-10 hover:bg-gray-300 transition"
      >
        ◀
      </button>

      <AnimatePresence>
        <motion.div
          className="flex gap-4 px-8"
          animate={{ x: offset }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {categorias.map((cat) => (
            <motion.div
              key={cat.id}
              onClick={() => onSelect(cat.nome)}
              className="cursor-pointer flex flex-col items-center justify-center hover:scale-105 transition w-[100px] flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full flex justify-center">
                <Image
                  src={cat.imagem}
                  alt={cat.nome}
                  width={100}
                  height={100}
                  className="object-contain w-full h-auto rounded-xl"
                />
              </div>
              <p
                className="text-center mt-2 font-medium"
                style={{ fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}
              >
                {cat.nome}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={moveRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-3 py-1 z-10 hover:bg-gray-300 transition"
      >
        ▶
      </button>
    </div>
  );
}
