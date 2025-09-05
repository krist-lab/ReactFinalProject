// src/pages/ProductsPage.jsx
import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ყველა');

  const categories = useMemo(
    () => ['ყველა', ...new Set(products.map(p => p.category))],
    []
  );

  const filteredProducts =
    selectedCategory === 'ყველა'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <main className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
          ჩვენი პროდუქტები
        </h1>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl font-medium text-gray-600 mt-10">
            ამ კატეგორიაში პროდუქცია არ არის.
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;
