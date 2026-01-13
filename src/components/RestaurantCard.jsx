import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ id, image, name, rating, deliveryTime, cuisine, offer }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -15, scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden cursor-pointer group border border-green-100 hover:border-green-300 transition"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <motion.img 
          src={image} 
          alt={name}
          whileHover={{ scale: 1.15, rotateZ: -5 }}
          className="w-full h-full object-cover"
        />
        {offer && (
          <motion.div 
            className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {offer}
          </motion.div>
        )}
      </div>

      {/* Content */}
      <motion.div 
        className="p-4 bg-white"
        animate={{ rotateX: isHovered ? 5 : 0 }}
      >
        <motion.h3 
          className="text-lg font-bold text-gray-800 mb-2 truncate"
          animate={{ color: isHovered ? '#059669' : '#1f2937' }}
        >
          {name}
        </motion.h3>
        
        <div className="flex items-center justify-between mb-3">
          <motion.div 
            className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-4 h-4 text-green-600 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <motion.span 
              className="text-sm font-bold text-green-700"
              animate={{ scale: isHovered ? 1.2 : 1 }}
            >
              {rating}
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-1 text-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium text-gray-600">{deliveryTime}</span>
          </motion.div>
        </div>

        <motion.p 
          className="text-xs text-gray-600 truncate font-medium"
          animate={{ opacity: isHovered ? 0.7 : 1 }}
        >
          {cuisine}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default RestaurantCard;

