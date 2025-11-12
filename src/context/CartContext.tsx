"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { saveCart, loadCart, clearCartDB } from "@/utils/dbCart";

// Tipagem dos itens do carrinho
export type CartItem = {
  id: string;
  preco: number;
  qty: number;
  [key: string]: any; // permite campos adicionais
};

// Tipagem do contexto
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
};

// Criação do contexto com tipagem
const CartContext = createContext<CartContextType | null>(null);

// Provedor do contexto
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Carrega do IndexedDB ao montar
  useEffect(() => {
    loadCart()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setCart(data);
        }
      })
      .catch((err) => console.error("Erro ao carregar carrinho:", err));
  }, []);

  // Salva no IndexedDB ao atualizar
  useEffect(() => {
    saveCart(cart).catch((err) =>
      console.error("Erro ao salvar carrinho:", err)
    );
  }, [cart]);

  // Adiciona produto ao carrinho
  const addToCart = (product: CartItem) => {
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

  // Remove produto do carrinho
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Atualiza quantidade
  const updateQty = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // Limpa carrinho
  const clearCart = () => {
    setCart([]);
    clearCartDB().catch((err) =>
      console.error("Erro ao limpar carrinho:", err)
    );
  };

  // Total do carrinho
  const total = cart.reduce((sum, item) => sum + item.preco * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return context;
};
