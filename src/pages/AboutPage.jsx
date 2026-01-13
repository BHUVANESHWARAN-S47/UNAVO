import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        {/* Back Button */}
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-green-600 font-semibold text-lg transition-colors mb-8"
        >
          ← Back to Home
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.8 }}
            >
              About UNAVO
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your gateway to delicious food, delivered with passion and convenience
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Our Story */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🚀</span>
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              UNAVO was born from a simple yet powerful idea: to revolutionize how people order food online. Founded with the mission to connect food lovers with their favorite restaurants, UNAVO has grown into a trusted platform serving thousands of delighted customers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that great food brings people together. Our platform makes it effortless for customers to discover new restaurants, browse diverse menus, and enjoy their favorite meals delivered right to their doorstep.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🎯</span>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              At UNAVO, our mission is to provide a seamless food ordering experience that brings joy to every customer. We are committed to:
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-lg"><strong>Quality & Freshness:</strong> Partner with the best restaurants to ensure fresh, delicious food every time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-lg"><strong>Speed & Convenience:</strong> Deliver your food quickly and reliably with real-time tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-lg"><strong>Great Pricing:</strong> Offer competitive prices and exclusive deals to maximize your savings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="text-lg"><strong>Customer Support:</strong> Provide 24/7 support to ensure every experience is exceptional</span>
              </li>
            </ul>
          </motion.div>

          {/* Our Values */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">💚</span>
              <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-700">We believe in transparency and honesty in all our dealings with customers and partners.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-700">Constantly improving our platform with cutting-edge technology to enhance user experience.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Customer-Centric</h3>
                <p className="text-gray-700">Your satisfaction is our top priority. Every decision we make revolves around improving your experience.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reliability</h3>
                <p className="text-gray-700">Delivering on our promises consistently, whether it's food quality, delivery time, or customer service.</p>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">⭐</span>
              <h2 className="text-3xl font-bold">Why Choose UNAVO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍽️</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Diverse Restaurant Selection</h3>
                  <p className="text-green-50">Explore hundreds of restaurants with different cuisines and dining experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Lightning-Fast Delivery</h3>
                  <p className="text-green-50">Get your food delivered quickly without compromising on quality.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Exclusive Offers & Deals</h3>
                  <p className="text-green-50">Enjoy special discounts and promotional offers throughout the year.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Secure & Safe</h3>
                  <p className="text-green-50">Your data is protected with the latest security measures and encryption.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">👥</span>
              <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              UNAVO is powered by a passionate team of developers, designers, and food enthusiasts dedicated to revolutionizing the online food delivery experience. Our diverse team brings together expertise in technology, logistics, and customer service to create something truly special.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every member of our team is committed to our vision of making food ordering simple, convenient, and enjoyable for everyone. We celebrate creativity, encourage innovation, and foster a culture of continuous improvement.
            </p>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Have questions about UNAVO? We'd love to hear from you! Whether you're a customer, restaurant partner, or just curious about what we do, feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold transition-all"
              >
                Back to Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-green-500 text-green-600 rounded-lg font-bold hover:bg-green-50 transition-all"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutPage;
