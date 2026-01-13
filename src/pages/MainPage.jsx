import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainPage = () => {
  const navigate = useNavigate();

  const handleOrderFood = () => {
    navigate('/home');
  };

  const handleDineOut = () => {
    // Dine out functionality (can be implemented later)
    alert('Dine Out feature coming soon!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-green-600">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 -z-10" />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-lg"
            >
              UNAVO
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white mb-12 font-semibold"
            >
              Order food and dine in at your favourite restaurants
            </motion.p>

            {/* Two Main Options */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
            >
              {/* Order Food Card */}
              <motion.button
                onClick={handleOrderFood}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden rounded-xl p-8 bg-white border-2 border-green-200 hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-4 h-32 rounded-lg overflow-hidden">
                    <img 
                      src="/home-food.jpg"
                      alt="Order Food Delivery"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h2 className="text-2xl font-black text-gray-800 mb-2 group-hover:text-green-600 transition">
                    Order Food
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Deliver in 30 minutes | Free delivery
                  </p>
                </div>
              </motion.button>

              {/* Dine Out Card */}
              <motion.button
                onClick={handleDineOut}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                disabled
                className="relative group overflow-hidden rounded-xl p-8 bg-gray-100 border-2 border-gray-300 opacity-60 cursor-not-allowed rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                
                <div className="relative z-10">
                  <div className="mb-4 h-32 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&q=80"
                      alt="Dine Out"
                      className="w-full h-full object-cover grayscale opacity-75"
                    />
                  </div>
                  <h2 className="text-2xl font-black text-gray-600 mb-2">
                    Dine Out
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Coming soon!
                  </p>
                </div>
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16"
            >
              {[
                { icon: '⚡', title: 'Super fast', desc: 'Delivery in 30 mins' },
                { icon: '🎁', title: 'Great offers', desc: 'Save big on meals' },
                { icon: '🏪', title: 'Many restaurants', desc: 'From your favourite' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    className="text-4xl mb-3"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="relative h-24 mt-12">
          <svg
            className="absolute bottom-0 w-full h-full text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
