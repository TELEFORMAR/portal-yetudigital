'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { saveCart, loadCart, clearCartDB } from '@/utils/dbCart';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Carrega do IndexedDB
  useEffect(() => {
    loadCart().then(setCart).catch(console.error);
  }, []);

  // Salva no IndexedDB
  useEffect(() => {
    saveCart(cart).catch(console.error);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );

  const clearCart = () => {
    setCart([]);
    clearCartDB();
  };

  const total = cart.reduce((sum, item) => sum + item.preco * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
