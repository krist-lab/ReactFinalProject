import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (onSearch) onSearch(newQuery);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="დაიწყეთ პროდუქტის ძებნა..."
        value={query}
        onChange={handleInputChange}
        className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
      />
      <svg
        className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 top-1/2 right-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

export default SearchInput;
