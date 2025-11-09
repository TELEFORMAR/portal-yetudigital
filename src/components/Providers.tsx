'use client';

import { useState, useEffect } from 'react';
import { CartProvider } from '../context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';

export default function Providers({ children }) {
  const [theme, setTheme] = useState('light');

  // Detecta preferência do usuário ou usa light mode como default
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') || 'light';
    setTheme(initialTheme);
    root.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    root.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme} // força animação quando troca de tema
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
        >
          {/* Botão para alternar tema (opcional, pode ser colocado em NavBar) */}
          <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 p-2 bg-primary text-white rounded-full shadow-lg z-50"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {children}
        </motion.div>
      </AnimatePresence>
    </CartProvider>
  );
}
