import React from "react";
import { useCart } from "../contexts/CartContext";

const CartPage = ({ onBackToShop }) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((t, i) => t + i.quantity, 0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Your Cart ({totalItems} items)</h2>
        <button
          onClick={onBackToShop}
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          &larr; Back to Shop
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <button
            onClick={onBackToShop}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <ul className="space-y-4">
          {cart.map(item => (
            <li key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-4xl">🎧</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm mt-1">Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
