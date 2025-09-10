import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ყველა");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const categories = ["ყველა", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "ყველა" || product.category === selectedCategory;
      const matchSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectProduct = (product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <main className="container mx-auto">
        <Header showTitle={true} showCartIcon={true} />

        <div className="mb-6 flex flex-wrap justify-center items-center gap-2">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="mb-8">
          <SearchInput onSearch={setSearchQuery} />
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={handleSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl font-medium text-gray-600 mt-10">
            ამ კატეგორიაში ან საძიებო სიტყვით პროდუქცია არ არის.
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;

