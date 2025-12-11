import React from 'react';

const CategoryCard = ({ icon, name }) => {
  return (
    <div className="flex-shrink-0 w-32 sm:w-36 cursor-pointer group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 text-center border border-gray-100 group-hover:border-primary-300">
        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
