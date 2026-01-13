import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OfferCard = ({ title, description, bgColor, textColor, route }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <motion.div 
      className="flex-shrink-0 w-80 sm:w-96 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-green-300 overflow-hidden relative group bg-gradient-to-br from-green-50 to-emerald-50"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleExplore}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2 text-green-700">{title}</h3>
        <p className="text-sm text-gray-700 opacity-90">{description}</p>
        
        <div className="mt-4">
          <motion.button 
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm px-4 py-2 rounded-lg flex items-center space-x-1 hover:gap-2 transition shadow-md"
            whileHover={{ x: 5 }}
          >
            <span>Explore Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferCard;

