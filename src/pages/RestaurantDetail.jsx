import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { restaurants, restaurantMenus } from '../data/dummyData';
import { useCart } from '../context/CartContext';

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const restaurantId = parseInt(id);
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});
  
  const restaurant = restaurants.find(r => r.id === restaurantId);
  const menu = restaurantMenus[restaurantId];

  const handleAddToCart = (item) => {
    addToCart(item, restaurantId, restaurant.name);
    setAddedItems(prev => ({
      ...prev,
      [item.id]: 1
    }));
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity <= 0) {
      setAddedItems(prev => {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      });
    } else {
      setAddedItems(prev => ({
        ...prev,
        [itemId]: quantity
      }));
    }
  };

  if (!restaurant || !menu) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Restaurant Not Found</h2>
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
      <Navbar showBackButton={true} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        {/* Restaurant Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 pb-8 border-b-2 border-gray-200"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (location.state?.from === '/free-delivery') {
                  navigate('/free-delivery');
                } else {
                  navigate(-1);
                }
              }}
              className="text-gray-600 hover:text-green-600 font-semibold text-lg transition-colors"
            >
              ← Back
            </motion.button>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <span className="text-xl font-semibold text-gray-700">{restaurant.rating}</span>
            </div>
            <p className="text-gray-600 text-lg">{restaurant.deliveryTime}</p>
            <p className="text-gray-500">{restaurant.cuisine}</p>
          </div>
        </motion.div>

        {/* Menu Items Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Menu</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {menu.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-lg border-2 border-gray-200 hover:border-green-400 overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Item Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-full h-full flex items-center justify-center text-6xl"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Veg/Non-Veg Indicator */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center shadow-lg transform transition-all"
                    >
                      <img 
                        src={item.isVeg ? '/veg logo.png' : '/non veg logo.png'}
                        alt={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        className="w-10 h-10 object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Item Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-lg">⭐</span>
                        <span className="font-semibold text-gray-700">{item.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">₹{item.price}</div>
                    </div>

                    {/* Add to Cart Button */}
                    {addedItems[item.id] ? (
                      <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg overflow-hidden">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const newQty = addedItems[item.id] - 1;
                            handleQuantityChange(item.id, newQty);
                          }}
                          className="flex-1 py-3 text-white font-bold text-lg"
                        >
                          −
                        </motion.button>
                        <div className="flex-1 py-3 text-white font-bold text-center">
                          {addedItems[item.id]}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const newQty = addedItems[item.id] + 1;
                            handleQuantityChange(item.id, newQty);
                          }}
                          className="flex-1 py-3 text-white font-bold text-lg"
                        >
                          +
                        </motion.button>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#059669' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(item)}
                        className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold transition-all duration-300"
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default RestaurantDetail;
