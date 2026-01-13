import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';
import { todaysSpecials, restaurants } from '../data/dummyData';

const TodaysSpecialDetail = () => {
  const navigate = useNavigate();
  const [todaySpecial, setTodaySpecial] = useState(null);
  const [availableRestaurants, setAvailableRestaurants] = useState([]);

  useEffect(() => {
    // Get current day
    const currentDay = new Date().getDay();
    const special = todaysSpecials.find(s => s.day === currentDay);
    
    if (special) {
      setTodaySpecial(special);
      
      // Get restaurants that serve this special
      const filtered = restaurants.filter(restaurant =>
        special.restaurantIds.includes(restaurant.id)
      );
      setAvailableRestaurants(filtered);
    }
  }, []);

  if (!todaySpecial) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white"
          >
            <p className="text-2xl font-bold mb-4">Loading today's special...</p>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left side - Text */}
            <div className="text-center md:text-left">
              <motion.div
                className="text-6xl md:text-7xl mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {todaySpecial.emoji}
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                {todaySpecial.dayName.toUpperCase()}'S SPECIAL
              </h1>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                {todaySpecial.special}
              </h2>

              <motion.div
                className="inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="bg-white rounded-full px-12 py-4 inline-block shadow-2xl">
                  <span className="text-5xl font-black text-orange-600">
                    {todaySpecial.offer} OFF
                  </span>
                </div>
              </motion.div>

              <p className="text-white text-xl md:text-2xl mt-8 font-bold">
                {todaySpecial.description}
              </p>
            </div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <motion.img
                src={todaySpecial.image}
                alt={todaySpecial.special}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Available Restaurants Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-black text-gray-800 mb-4 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Restaurants Offering This Special
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Order from these restaurants and get {todaySpecial.offer} discount on your order
          </motion.p>

          {availableRestaurants.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {availableRestaurants.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RestaurantCard 
                    image={restaurant.image}
                    name={restaurant.name}
                    rating={restaurant.rating}
                    deliveryTime={restaurant.deliveryTime}
                    cuisine={restaurant.cuisine}
                    offer={`${todaySpecial.offer} OFF - ${restaurant.offer}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12 bg-gray-50 rounded-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg font-semibold">
                No restaurants available for this special today
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-black text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Don't Miss Out!
          </motion.h2>

          <motion.p
            className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            This special offer is valid only for today! Order now and get {todaySpecial.offer} discount
          </motion.p>

          <motion.button
            onClick={() => navigate('/')}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BACK TO HOME
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TodaysSpecialDetail;
