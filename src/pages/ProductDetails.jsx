import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState('');

  const handleAdd = () => {
    addToCart(product);
    setMessage("Added to cart!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto my-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <p className="text-gray-500 mb-6">{product.description}</p>
      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
      >
        Add to Cart
      </button>
      {message && <div className="mt-4 text-center bg-green-100 text-green-700 py-2 px-4 rounded-lg">{message}</div>}
    </div>
  );
};

export default ProductDetails;

