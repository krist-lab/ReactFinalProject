import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const incrementQuantity = (id) => updateQuantity(id, 1);
  const decrementQuantity = (id) => updateQuantity(id, -1);
  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
