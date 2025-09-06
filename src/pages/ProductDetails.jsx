import React from "react";

const ProductDetails = ({ product, onBack }) => {
  if (!product) {
    return <p className="text-center text-gray-600">პროდუქტი ვერ მოიძებნა</p>;
  }

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <main className="container mx-auto">
        <button
          onClick={onBack}
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← უკან მაღაზიაში
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
            <p className="text-2xl text-green-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">
              კატეგორია:{" "}
              <span className="font-semibold">{product.category}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
