import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RideWithUsPage = () => {
  const formRef = useRef(null);
  const benefitsRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    vehicleType: '',
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
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        vehicleType: formData.vehicleType,
        message: formData.message,
        _to: 'kumarankarthikeyan14@gmail.com',
        _subject: 'New Ride With Us Application',
      })
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          vehicleType: '',
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
      icon: '💰',
      title: 'Earn Extra Income',
      description: 'Flexible earnings based on deliveries completed'
    },
    {
      icon: '⏰',
      title: 'Your Own Schedule',
      description: 'Work whenever you want, as much as you want'
    },
    {
      icon: '🏍️',
      title: 'Use Your Vehicle',
      description: 'Use your bike or scooter and earn daily'
    },
    {
      icon: '📱',
      title: 'Easy App',
      description: 'Simple app interface to manage your deliveries'
    },
    {
      icon: '🤝',
      title: 'Support 24/7',
      description: 'Dedicated support team to help you anytime'
    },
    {
      icon: '🎖️',
      title: 'Performance Rewards',
      description: 'Earn bonuses for consistent performance'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Apply Online',
      description: 'Fill out a simple online form with your details'
    },
    {
      number: '2',
      title: 'Get Verified',
      description: 'We verify your documents and background'
    },
    {
      number: '3',
      title: 'Onboarding',
      description: 'Complete training and app orientation'
    },
    {
      number: '4',
      title: 'Start Earning',
      description: 'Accept deliveries and start earning money'
    }
  ];

  const requirements = [
    'Minimum 18 years old',
    'Valid driving license',
    'Own bike/scooter/car',
    'Smartphone with Android/iOS',
    'Valid address proof',
    'Bank account for payments'
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
              Ride With Us
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white mb-8 font-semibold"
            >
              Become a delivery partner and earn on your own terms
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
            Why Join UNAVO?
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
            Requirements
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
            Apply as Delivery Partner
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
                <p className="text-sm">We'll review your application and contact you soon.</p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter your full name"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your phone number"
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
                  placeholder="Enter your city"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-800 font-semibold mb-2">Vehicle Type *</label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                >
                  <option value="">Select vehicle type</option>
                  <option value="bike">Bike</option>
                  <option value="scooter">Scooter</option>
                  <option value="car">Car</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-800 font-semibold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Tell us anything else you'd like us to know..."
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

export default RideWithUsPage;
