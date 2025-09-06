import React from "react";

const ProductCard = ({ product, onSelectProduct }) => {
  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="cursor-pointer border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition bg-white"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-xl font-bold text-green-600">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;



