import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Search Icon */}
        <div className="pl-4 pr-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for food or restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 py-4 px-2 text-gray-700 placeholder-gray-400 outline-none"
        />

        {/* Location Dropdown */}
        <div className="hidden sm:flex items-center space-x-2 border-l border-gray-200 px-4">
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <select className="text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer">
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Pune</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 font-medium transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
