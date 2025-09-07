import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decrementQuantity = (id) => {
    setCart(prev => prev.map(p => p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

