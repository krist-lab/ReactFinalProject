import React from "react";
import { useCart } from "../contexts/CartContext";

const CartStatus = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 z-50">
      <h3 className="font-bold text-gray-800">Cart</h3>
      <p className="text-gray-600">Items: {totalItems}</p>
      {cart.length > 0 && (
        <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartStatus;
