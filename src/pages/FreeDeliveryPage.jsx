import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FreeDeliveryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const restaurantsRef = useRef(null);
  const navigate = useNavigate();

  const scrollToRestaurants = () => {
    restaurantsRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const eligibleRestaurants = [
    {
      id: 1,
      restaurantId: 9,
      name: 'Spice Route',
      cuisine: 'Indian',
      rating: 4.5,
      minOrder: '₹500',
      deliveryTime: '30-40 mins',
      image: '/spicy.jpg',
      offer: 'Free delivery on 1st 3 orders'
    },
    {
      id: 2,
      restaurantId: 10,
      name: 'Pasta Italiana',
      cuisine: 'Italian',
      rating: 4.7,
      minOrder: '₹500',
      deliveryTime: '25-35 mins',
      image: '/pasta.jpg',
      offer: 'Free delivery on 1st 3 orders'
    },
    {
      id: 3,
      restaurantId: 11,
      name: 'Thai Orchid',
      cuisine: 'Thai',
      rating: 4.6,
      minOrder: '₹500',
      deliveryTime: '35-45 mins',
      image: '/thai orchid.jpg',
      offer: 'Free delivery on 1st 3 orders'
    },
    {
      id: 4,
      restaurantId: 12,
      name: 'Seoul Bites',
      cuisine: 'Korean',
      rating: 4.4,
      minOrder: '₹500',
      deliveryTime: '20-30 mins',
      image: '/seoul.jpg',
      offer: 'Free delivery on 1st 3 orders'
    },
    {
      id: 5,
      restaurantId: 13,
      name: 'Taco Fiesta',
      cuisine: 'Mexican',
      rating: 4.8,
      minOrder: '₹500',
      deliveryTime: '25-35 mins',
      image: '/taco.jpg',
      offer: 'Free delivery on 1st 3 orders'
    },
    {
      id: 6,
      restaurantId: 14,
      name: 'Grill House',
      cuisine: 'BBQ & Grill',
      rating: 4.5,
      minOrder: '₹500',
      deliveryTime: '30-40 mins',
      image: '/grill.jpg',
      offer: 'Free delivery on 1st 3 orders'
    },
    {
      id: 7,
      restaurantId: 15,
      name: 'Momo Junction',
      cuisine: 'Asian',
      rating: 4.6,
      minOrder: '₹500',
      deliveryTime: '20-30 mins',
      image: '/momos.jpg',
      offer: 'Free delivery on 1st 3 orders'
    },
    {
      id: 8,
      restaurantId: 16,
      name: 'Veggie Paradise',
      cuisine: 'Vegetarian',
      rating: 4.5,
      minOrder: '₹500',
      deliveryTime: '25-35 mins',
      image: '/veg foods.jpg',
      offer: 'Free delivery on 1st 3 orders'
    }
  ];

  const terms = [
    {
      title: 'Eligibility',
      icon: '✓',
      description: 'Available for new users and existing users on their 1st, 2nd, and 3rd orders'
    },
    {
      title: 'Minimum Order',
      icon: '💳',
      description: 'Minimum order value of ₹500 to avail free delivery'
    },
    {
      title: 'Applicable Restaurants',
      icon: '🍽️',
      description: 'Valid on all partner restaurants across all cities'
    },
    {
      title: 'Validity',
      icon: '⏰',
      description: 'Valid for 3 consecutive orders or until December 31, 2025, whichever comes first'
    },
    {
      title: 'Combination',
      icon: '🔄',
      description: 'Cannot be combined with other discount offers or vouchers'
    },
    {
      title: 'Cancellation',
      icon: '❌',
      description: 'If order is cancelled, the free delivery benefit is forfeited'
    }
  ];

  const faqs = [
    {
      question: 'How do I avail free delivery?',
      answer: 'Simply place your order on UNAVO from any eligible restaurant with a minimum order value of ₹500. Free delivery will be automatically applied to your first 3 orders.'
    },
    {
      question: 'Can I use this offer with other discount codes?',
      answer: 'No, this offer cannot be combined with other promotional codes or discounts. However, you can still use promotional codes that offer lower value discounts if preferred.'
    },
    {
      question: 'What is the maximum delivery distance?',
      answer: 'Free delivery is applicable to all delivery distances. However, delivery time may vary based on your location.'
    },
    {
      question: 'Can I transfer my free delivery benefit?',
      answer: 'No, the free delivery benefit is linked to your account and cannot be transferred or shared with other users.'
    },
    {
      question: 'What happens if my order is below ₹500?',
      answer: 'Free delivery is only applicable on orders with minimum value of ₹500. Orders below this amount will be charged delivery fees.'
    },
    {
      question: 'How long is this offer valid?',
      answer: 'This offer is valid for your first 3 orders or until December 31, 2025, whichever comes first.'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar showBackButton={true} />

      {/* Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white overflow-hidden">
        {/* Animated background circles */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🚚</div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">FREE DELIVERY</h1>
            <p className="text-xl opacity-90 drop-shadow">
              Get free delivery on your first 3 orders!
            </p>
            <p className="text-sm opacity-80 mt-4">Minimum order ₹500 | Valid till 31st December 2025</p>
          </motion.div>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </section>

      {/* Offer Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            What's Included
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {terms.map((term, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 text-center"
              >
                <div className="text-4xl mb-3">{term.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{term.title}</h3>
                <p className="text-gray-700 text-sm">{term.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligible Restaurants Section */}
      <section className="py-16 bg-gray-50" ref={restaurantsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Order From These Restaurants
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {eligibleRestaurants.map((restaurant, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
                className="bg-white rounded-xl overflow-hidden border-2 border-green-200 hover:border-green-500 transition"
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center text-5xl overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-green-600 font-semibold mb-2">{restaurant.cuisine}</p>
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                    <span>⭐ {restaurant.rating}</span>
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <p className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded mb-3 text-center">
                    {restaurant.offer}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/restaurant/${restaurant.restaurantId}`, { state: { from: '/free-delivery' } })}
                    className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            How It Works
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { step: 1, title: 'Browse Restaurants', description: 'Explore all eligible restaurants on UNAVO offering free delivery' },
              { step: 2, title: 'Add Items to Cart', description: 'Add your favorite food items with a minimum order value of ₹500' },
              { step: 3, title: 'Proceed to Checkout', description: 'Free delivery will be automatically applied at checkout' },
              { step: 4, title: 'Track Your Order', description: 'Real-time tracking to know when your food arrives' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center font-black text-2xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg border-2 border-green-200 hover:border-green-500 transition"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">❓ {faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white p-12 rounded-xl text-center shadow-lg"
          >
            <h2 className="text-3xl font-black mb-4">Ready to Order?</h2>
            <p className="text-lg opacity-90 mb-8">
              Don't miss out on free delivery on your first 3 orders! Place your order now and enjoy free delivery.
            </p>
            <motion.button
              onClick={scrollToRestaurants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:shadow-lg transition"
            >
              Start Ordering
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FreeDeliveryPage;
