import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FoodCard3D = ({ name, image }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = (y - centerY) / 10;
    const rotY = (centerX - x) / 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    navigate(`/category/${name}`);
  };

  return (
    <motion.div
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative bg-white rounded-xl shadow-lg border border-green-200 overflow-hidden cursor-pointer group h-full"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        animate={{
          boxShadow: `0 ${Math.abs(rotateX) + Math.abs(rotateY)}px 30px rgba(16, 185, 129, 0.3)`,
        }}
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.3 },
        }}
        onClick={handleClick}
        transition={{
          rotateX: { type: 'spring', stiffness: 300, damping: 20 },
          rotateY: { type: 'spring', stiffness: 300, damping: 20 },
        }}
      >
        {/* Image Container with 3D effect */}
        <motion.div
          className="relative w-full aspect-square bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-emerald-400/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Image */}
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{
              scale: 1.15,
              rotate: 5,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
          />

          {/* 3D Floating Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/0 to-black/10"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Name Section */}
        <motion.div
          className="p-4 text-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)',
          }}
          animate={{
            y: Math.abs(rotateX) > 0 ? -5 : 0,
          }}
        >
          <motion.h3
            className="font-bold text-gray-800 text-lg group-hover:text-green-600 transition-colors"
            whileHover={{
              scale: 1.1,
            }}
          >
            {name}
          </motion.h3>

          {/* Bottom Accent Line */}
          <motion.div
            className="mt-2 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(10px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FoodCard3D;
