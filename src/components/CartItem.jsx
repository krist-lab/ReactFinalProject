import React from "react";
import { useCart } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-3">
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decrementQuantity(item.id)}
          className="px-2 py-1 border rounded-lg"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => incrementQuantity(item.id)}
          className="px-2 py-1 border rounded-lg"
        >
          +
        </button>

        <button
          onClick={() => removeItem(item.id)}
          className="ml-3 text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
