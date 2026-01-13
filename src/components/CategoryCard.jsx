import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ icon, name }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-32 sm:w-36 cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.15, rotateY: 15 }}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center border border-green-100 hover:border-green-400 group-hover:bg-green-50"
        style={{ perspective: '1000px' }}
        whileHover={{ 
          y: -10,
          boxShadow: '0 25px 50px rgba(16, 185, 129, 0.15)'
        }}
      >
        <motion.div 
          className="text-5xl mb-3"
          whileHover={{ 
            scale: 1.3, 
            rotateZ: 360,
            rotate: 360
          }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-sm font-bold text-gray-700 group-hover:text-green-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;

