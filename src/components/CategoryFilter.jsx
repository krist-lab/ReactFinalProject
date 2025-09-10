import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-md ${
            selectedCategory === category
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-900 hover:bg-red-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default CategoryFilter;

