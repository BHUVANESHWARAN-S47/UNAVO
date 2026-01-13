import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PartnerWithUsPage = () => {
  const formRef = useRef(null);
  const benefitsRef = useRef(null);
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    city: '',
    cuisineType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email via Formspree (free service)
    fetch('https://formspree.io/f/myzypkln', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        restaurantName: formData.restaurantName,
        ownerName: formData.ownerName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        cuisineType: formData.cuisineType,
        message: formData.message,
        _to: 'kumarankarthikeyan14@gmail.com',
        _subject: 'New Partner With Us Application',
      })
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          restaurantName: '',
          ownerName: '',
          email: '',
          phone: '',
          city: '',
          cuisineType: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    })
    .catch(error => console.error('Error:', error));
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

  const benefits = [
    {
      icon: '📈',
      title: 'Increase Sales',
      description: 'Reach thousands of customers and boost your restaurant revenue'
    },
    {
      icon: '🎯',
      title: 'Easy Management',
      description: 'Manage orders and menus easily through our partner dashboard'
    },
    {
      icon: '💳',
      title: 'Fast Payments',
      description: 'Quick and secure payment processing for your orders'
    },
    {
      icon: '📱',
      title: 'Smart Tools',
      description: 'Access analytics and insights to grow your business'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 support team dedicated to your success'
    },
    {
      icon: '🌟',
      title: 'Brand Visibility',
      description: 'Increase visibility and reach in your local area'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Submit Application',
      description: 'Fill out partnership application with your restaurant details'
    },
    {
      number: '2',
      title: 'Verification',
      description: 'Our team verifies your restaurant information and documents'
    },
    {
      number: '3',
      title: 'Setup & Training',
      description: 'Menu upload, dashboard setup, and partner training'
    },
    {
      number: '4',
      title: 'Go Live',
      description: 'Start receiving orders and growing your business with UNAVO'
    }
  ];

  const requirements = [
    'Valid restaurant business registration',
    'FDA/Health department approval',
    'Restaurant with kitchen facility',
    'Bank account for payment settlement',
    'Ability to prepare and deliver food',
    'Willingness to maintain quality standards'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar showBackButton={true} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-green-600">
        {/* Animated Background */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-lg"
            >
              Partner With Us
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white mb-8 font-semibold"
            >
              Grow your restaurant business with UNAVO's largest delivery network
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4"
            >
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition"
              >
                Apply Now
              </motion.button>
              <motion.button
                onClick={scrollToBenefits}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-600 transition"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="relative h-24">
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

      {/* Benefits Section */}
      <section className="py-16 bg-white" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Why Partner With UNAVO?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-green-200"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  className="text-5xl mb-4"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-green-200 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-8 text-center"
          >
            Requirements to Partner
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700 font-semibold">{req}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-gray-50" ref={formRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Apply as Restaurant Partner
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded"
              >
                <p className="font-bold">✓ Application submitted successfully!</p>
                <p className="text-sm">Our team will review your application and contact you soon.</p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Restaurant Name *</label>
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter restaurant name"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Owner Name *</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter owner name"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Cuisine Type *</label>
                <select
                  name="cuisineType"
                  value={formData.cuisineType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                >
                  <option value="">Select cuisine type</option>
                  <option value="indian">Indian</option>
                  <option value="chinese">Chinese</option>
                  <option value="continental">Continental</option>
                  <option value="italian">Italian</option>
                  <option value="fastfood">Fast Food</option>
                  <option value="cafe">Café</option>
                  <option value="desserts">Desserts</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-800 font-semibold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Tell us more about your restaurant..."
                  rows="4"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
            >
              Submit Application
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PartnerWithUsPage;
