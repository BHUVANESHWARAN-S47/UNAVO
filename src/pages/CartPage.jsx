import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();

  // Group items by restaurant
  const itemsByRestaurant = cartItems.reduce((acc, item) => {
    if (!acc[item.restaurantId]) {
      acc[item.restaurantId] = {
        restaurantName: item.restaurantName,
        items: [],
      };
    }
    acc[item.restaurantId].items.push(item);
    return acc;
  }, {});

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

  if (getTotalItems() === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto px-4 py-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-green-600 font-semibold text-lg transition-colors mb-6"
            >
              ← Back
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg p-12 text-center"
          >
            <motion.div
              className="text-7xl mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              🛒
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 text-lg mb-8">Add delicious items to get started!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const element = document.querySelector('h2');
                  const inspirationSection = Array.from(document.querySelectorAll('h2')).find(el => el.textContent === 'Inspiration for your first order');
                  if (inspirationSection) {
                    inspirationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold"
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-green-600 font-semibold text-lg transition-colors mb-6"
          >
            ← Back
          </motion.button>
          <h1 className="text-4xl font-black text-gray-800">Your Cart</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            {Object.entries(itemsByRestaurant).map(([restaurantId, data]) => (
              <motion.div
                key={restaurantId}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6 mb-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-green-200">
                  {data.restaurantName}
                </h2>

                <div className="space-y-4">
                  {data.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
                    >
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <img
                            src={item.isVeg ? '/veg logo.png' : '/non veg logo.png'}
                            alt={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <p className="text-lg font-bold text-green-600">₹{item.price}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg flex items-center justify-center hover:shadow-lg transition-all"
                        >
                          −
                        </motion.button>

                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-12 text-center font-semibold text-gray-800"
                        >
                          {item.quantity}
                        </motion.div>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg flex items-center justify-center hover:shadow-lg transition-all"
                        >
                          +
                        </motion.button>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: '#fee2e2' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 mb-6"
              >
                <motion.div variants={itemVariants} className="flex justify-between text-gray-600">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span className="font-semibold">₹{getTotalPrice()}</span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-semibold">₹30</span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-between text-gray-600">
                  <span>Taxes & Charges</span>
                  <span className="font-semibold">₹{Math.round(getTotalPrice() * 0.05)}</span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold text-gray-800"
                >
                  <span>Total</span>
                  <span className="text-green-600">
                    ₹{getTotalPrice() + 30 + Math.round(getTotalPrice() * 0.05)}
                  </span>
                </motion.div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg transition-all"
              >
                Proceed to Checkout
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const inspirationSection = Array.from(document.querySelectorAll('h2')).find(el => el.textContent === 'Inspiration for your first order');
                    if (inspirationSection) {
                      inspirationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="w-full mt-4 py-3 border-2 border-green-500 text-green-600 rounded-lg font-semibold transition-all"
              >
                Continue Shopping
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => clearCart()}
                className="w-full mt-3 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
              >
                Empty Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CartPage;
