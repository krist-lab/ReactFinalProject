// pages/ProductDetails.jsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const ProductDetails = ({ product, goBack }) => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    addToCart(product);
    setMessage("Added to cart!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <button
        onClick={goBack}
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-2xl text-green-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">
            Category: <span className="font-semibold">{product.category}</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
          <button
            onClick={handleAdd}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg
                       shadow-md hover:bg-blue-700 transition duration-300 transform
                       hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:ring-opacity-50"
          >
            Add to Cart
          </button>
          {message && (
            <div className="mt-4 text-center bg-green-100 text-green-700 py-2 px-4 rounded-lg">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
