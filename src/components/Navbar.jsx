import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = ({ showBackButton = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-white text-gray-800 py-4 shadow-md border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-4 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">UNAVO</h1>
          </motion.div>

          {/* Center Navigation Links */}
          <motion.div className="hidden md:flex items-center space-x-2">
            <motion.button
              onClick={() => navigate('/surplus-marketplace')}
              className="text-gray-700 hover:text-orange-600 transition px-3 py-2 rounded-lg hover:bg-orange-50 font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
            >
              🍔 Surplus Deals
            </motion.button>
            <motion.button
              onClick={() => navigate('/food-donation')}
              className="text-gray-700 hover:text-green-600 transition px-3 py-2 rounded-lg hover:bg-green-50 font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
            >
              🤝 Donate Food
            </motion.button>
            <motion.button
              onClick={() => navigate('/restaurant-dashboard')}
              className="text-gray-700 hover:text-blue-600 transition px-3 py-2 rounded-lg hover:bg-blue-50 font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
            >
              🏪 Dashboard
            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div className="flex items-center space-x-4">
            {/* Cart Button */}
            <motion.button
              onClick={() => navigate('/cart')}
              className="relative flex items-center space-x-2 text-gray-700 hover:text-green-600 transition px-4 py-2 rounded-lg hover:bg-green-50 font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-sm font-semibold">Cart</span>
              {getTotalItems() > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {getTotalItems()}
                </motion.div>
              )}
            </motion.button>

            {/* Back Button (for Signup Page) or Sign In Button */}
            {showBackButton ? (
              <motion.button 
                onClick={() => {
                  if (location.pathname === '/free-delivery') {
                    navigate('/home');
                  } else if (location.state?.from === '/free-delivery') {
                    navigate('/free-delivery');
                  } else {
                    navigate(-1);
                  }
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition px-4 py-2 rounded-lg hover:bg-green-50 font-bold"
                whileHover={{ x: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-semibold">Back</span>
              </motion.button>
            ) : (
              <motion.button 
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-bold transition shadow-lg shadow-green-500/30"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Sign In
              </motion.button>
            )}

            {/* Mobile Menu */}
            <motion.button 
              className="md:hidden text-gray-700 hover:text-green-600"
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

