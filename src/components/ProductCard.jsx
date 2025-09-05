import React from "react";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <img
      className="w-full h-48 object-cover"
      src={product.image}
      alt={product.name}
    />
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
    </div>
  </div>
);

export default ProductCard;

