import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FoodCard3D from '../components/FoodCard3D';
import RestaurantCard from '../components/RestaurantCard';
import OfferCard from '../components/OfferCard';
import TodaysSpecial from '../components/TodaysSpecial';
import Footer from '../components/Footer';
import { categories, restaurants, offers } from '../data/dummyData';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/todays-special');
  };

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
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, 30, -20, 30, 0],
              y: [0, -30, 20, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-8 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, -30, 20, -30, 0],
              y: [0, 30, -20, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4"
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            Order your favourite food
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mt-2 font-black drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              instantly
            </motion.span>
          </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Discover the best restaurants and get your food delivered fast to your doorstep
            </motion.p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-black text-gray-800 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            What's on your mind?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <FoodCard3D 
                key={category.id}
                image={category.image}
                name={category.name}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Today's Special Section */}
      <TodaysSpecial onExploreClick={handleExploreClick} />

      {/* Best Offers Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-black text-gray-800 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Best Offers For You
          </motion.h2>
          
          <motion.div 
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {offers.map((offer) => (
              <OfferCard 
                key={offer.id}
                title={offer.title}
                description={offer.description}
                bgColor={offer.bgColor}
                textColor={offer.textColor}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="py-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-black text-gray-800 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Popular Near You
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {restaurants.map((restaurant) => (
              <RestaurantCard 
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.image}
                name={restaurant.name}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                cuisine={restaurant.cuisine}
                offer={restaurant.offer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
