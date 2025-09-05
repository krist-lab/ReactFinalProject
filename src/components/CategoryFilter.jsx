// src/components/CategoryFilter.jsx
const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center items-center gap-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`
            px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-md 
            ${selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-blue-500 hover:text-white'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
