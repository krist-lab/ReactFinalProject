import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartStatus = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-800">Your Cart</h3>
      <p className="text-gray-600 mb-2">Total Items: {total}</p>
      <button
        onClick={() => navigate("/cart")}
        className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
      >
        View Cart
      </button>
    </div>
  );
};

export default CartStatus;


