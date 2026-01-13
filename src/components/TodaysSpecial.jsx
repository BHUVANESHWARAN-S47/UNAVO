import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { todaysSpecials } from '../data/dummyData';

const TodaysSpecial = ({ onExploreClick }) => {
  const [hoveredCard, setHoveredCard] = useState(false);

  // Get current day (0 = Sunday, 1 = Monday, etc.)
  const currentDay = new Date().getDay();
  const todaySpecial = todaysSpecials.find(special => special.day === currentDay);

  if (!todaySpecial) {
    return null;
  }

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative"
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
        >
          <motion.div
            className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 shadow-2xl"
            animate={{
              y: hoveredCard ? -5 : 0,
              boxShadow: hoveredCard 
                ? '0 30px 60px rgba(16, 185, 129, 0.4)' 
                : '0 20px 40px rgba(16, 185, 129, 0.2)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-6xl md:text-7xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {todaySpecial.emoji}
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                  TODAY'S SPECIAL
                </h2>
                
                <p className="text-xl md:text-2xl font-bold text-white mb-4">
                  {todaySpecial.dayName.toUpperCase()}
                </p>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                  {todaySpecial.special}
                </h3>
                
                <motion.div
                  className="inline-block"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="bg-white rounded-full px-8 py-3 mb-6 inline-block">
                    <span className="text-3xl md:text-4xl font-black text-orange-600">
                      {todaySpecial.offer} OFF
                    </span>
                  </div>
                </motion.div>
                
                <p className="text-white text-lg md:text-xl mb-8 font-semibold">
                  {todaySpecial.description}
                </p>
                
                <motion.button
                  onClick={onExploreClick}
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EXPLORE NOW
                </motion.button>
              </motion.div>

          {/* Right side - Visual element */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block relative"
              >
                <motion.img
                  src={todaySpecial.image}
                  alt={todaySpecial.special}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TodaysSpecial;
