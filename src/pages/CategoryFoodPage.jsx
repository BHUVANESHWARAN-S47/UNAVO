import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import { categories, restaurants, restaurantMenus } from '../data/dummyData';

const CategoryFoodPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // Find the category
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === (categoryName || '').toLowerCase()
  );

  // Filter restaurants that serve this food category
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const menu = restaurantMenus[restaurant.id];
    if (!menu) return false;
    // Check if restaurant has items matching the category
    const hasCategory = menu.items.some(
      (item) =>
        item.name.toLowerCase().includes(categoryName?.toLowerCase() || '') ||
        item.description.toLowerCase().includes(categoryName?.toLowerCase() || '')
    );
    return hasCategory;
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold"
            >
              Back to Home
            </motion.button>
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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-green-600 font-semibold text-lg transition-colors"
            >
              ← Back
            </motion.button>
          </div>

          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-7xl"
            >
              {category.emoji}
            </motion.div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">
                {category.name}
              </h1>
              <p className="text-gray-600 text-lg">
                {filteredRestaurants.length} restaurants serving {category.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Restaurants Grid */}
        {filteredRestaurants.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredRestaurants.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <RestaurantCard
                    id={restaurant.id}
                    image={restaurant.image}
                    name={restaurant.name}
                    rating={restaurant.rating}
                    deliveryTime={restaurant.deliveryTime}
                    cuisine={restaurant.cuisine}
                    offer={restaurant.offer}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500 mb-6">
              No restaurants found serving {category.name}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold"
            >
              Explore Other Categories
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
};

export default CategoryFoodPage;
