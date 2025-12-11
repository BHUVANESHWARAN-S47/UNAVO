import React from 'react';

const OfferCard = ({ title, description, bgColor, textColor }) => {
  return (
    <div 
      className={`flex-shrink-0 w-80 sm:w-96 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer ${bgColor}`}
    >
      <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>{title}</h3>
      <p className={`text-sm ${textColor} opacity-90`}>{description}</p>
      
      <div className="mt-4">
        <button className={`${textColor} font-semibold text-sm flex items-center space-x-1 hover:underline`}>
          <span>Explore Now</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
