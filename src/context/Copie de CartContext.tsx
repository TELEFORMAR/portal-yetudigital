"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Carrega do localStorage no mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("yetu_cart");
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.error("Erro ao ler cart do localStorage", e);
    }
  }, []);

  // Persiste no localStorage sempre que cart muda
  useEffect(() => {
    try {
      localStorage.setItem("yetu_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Erro ao salvar cart no localStorage", e);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p.id !== id));

  const updateQty = (id, qty) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, p) => sum + (p.preco || 0) * (p.qty || 0), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
