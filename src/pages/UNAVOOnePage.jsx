import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UNAVOOnePage = () => {
  const navigate = useNavigate();
  const pricingRef = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const benefits = [
    {
      icon: '🚚',
      title: 'Free Delivery',
      description: 'Get free delivery on every order with no minimum purchase'
    },
    {
      icon: '💰',
      title: 'Special Discounts',
      description: 'Enjoy exclusive discounts on food items from partner restaurants'
    },
    {
      icon: '⚡',
      title: 'Priority Support',
      description: 'Get 24/7 priority customer support for instant assistance'
    },
    {
      icon: '🎁',
      title: 'Bonus Credits',
      description: 'Earn loyalty points on every order redeemable for discounts'
    },
    {
      icon: '🔥',
      title: 'Exclusive Offers',
      description: 'Early access to special deals and limited-time promotions'
    },
    {
      icon: '⭐',
      title: 'Premium Perks',
      description: 'VIP treatment with special birthday offers and surprises'
    },
  ];

  const plans = [
    {
      name: 'Monthly',
      price: 199,
      period: 'per month',
      features: [
        'Free delivery on all orders',
        'Up to 20% discount on food',
        'Earn 2% cashback',
        'Priority support',
        'Cancel anytime'
      ],
      benefits: [
        'Free delivery on all orders',
        'Up to 20% discount on food',
        'Earn 2% cashback',
        'Priority support',
        'Cancel anytime'
      ],
      popular: false
    },
    {
      name: 'Quarterly',
      price: 499,
      period: 'per 3 months',
      features: [
        'Free delivery on all orders',
        'Up to 25% discount on food',
        'Earn 3% cashback',
        'Priority support',
        'Save ₹98',
        'Cancel anytime'
      ],
      benefits: [
        'Free delivery on all orders',
        'Up to 25% discount on food',
        'Earn 3% cashback',
        'Priority support',
        'Save ₹98',
        'Cancel anytime'
      ],
      popular: true
    },
    {
      name: 'Annual',
      price: 1999,
      period: 'per year',
      features: [
        'Free delivery on all orders',
        'Up to 30% discount on food',
        'Earn 5% cashback',
        'Priority support',
        'Save ₹588',
        'Cancel anytime'
      ],
      benefits: [
        'Free delivery on all orders',
        'Up to 30% discount on food',
        'Earn 5% cashback',
        'Priority support',
        'Save ₹588',
        'Cancel anytime'
      ],
      popular: false
    }
  ];

  const comparisons = [
    {
      feature: 'Free Delivery',
      unavo: '✓',
      unavoOne: '✓ Unlimited'
    },
    {
      feature: 'Discounts',
      unavo: '5-10%',
      unavoOne: 'Up to 30%'
    },
    {
      feature: 'Cashback',
      unavo: '0%',
      unavoOne: 'Up to 5%'
    },
    {
      feature: 'Priority Support',
      unavo: '✗',
      unavoOne: '✓ 24/7'
    },
    {
      feature: 'Exclusive Offers',
      unavo: '✗',
      unavoOne: '✓'
    },
    {
      feature: 'Birthday Bonus',
      unavo: '✗',
      unavoOne: '✓'
    }
  ];

  const testimonials = [
    {
      name: 'Raj Kumar',
      order: 'Software Engineer',
      text: 'UNAVO One has saved me so much money! The unlimited free delivery and discounts are absolutely worth it.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      order: 'Student',
      text: 'The 30% discount on orders is amazing. I use UNAVO One almost every day for my meals.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      order: 'Business Owner',
      text: 'Best subscription I\'ve invested in. The priority support is incredibly helpful for urgent orders.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      order: 'Designer',
      text: 'Worth every penny. Free delivery alone saves me ₹40-50 per order. Highly recommended!',
      rating: 5
    }
  ];

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
            <motion.div
              className="text-6xl md:text-7xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.8 }}
            >
              UNAVO One
            </motion.div>
            <motion.p
              className="text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your premium membership for unlimited food delivery at the best prices
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
          {/* What is UNAVO One */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">👑</span>
              <h2 className="text-3xl font-bold text-gray-800">What is UNAVO One?</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              UNAVO One is a premium membership program designed for food lovers who want to maximize their savings and enjoy exclusive benefits. Pay once and enjoy unlimited free delivery, special discounts, and premium perks.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're ordering daily or occasionally, UNAVO One pays for itself in just a few orders. Join thousands of satisfied members who are saving big on their favorite meals!
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">🎁</span>
              <h2 className="text-3xl font-bold text-gray-800">Key Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{benefit.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Plans */}
          <motion.div ref={pricingRef} variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">💳</span>
              <h2 className="text-3xl font-bold text-gray-800">Simple Pricing Plans</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-lg p-6 transition-all ${
                    plan.popular
                      ? 'ring-2 ring-green-500 bg-gradient-to-br from-green-50 to-emerald-50 transform scale-105'
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-green-600">{plan.price}</span>
                    <p className="text-gray-600">{plan.period}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedPaymentPlan(plan);
                      setShowPaymentModal(true);
                    }}
                    className={`w-full py-3 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                        : 'border-2 border-green-500 text-green-600 hover:bg-green-50'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">📊</span>
              <h2 className="text-3xl font-bold text-gray-800">UNAVO vs UNAVO One</h2>
            </div>
            <div className="w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-bold text-gray-800 text-sm md:text-base">Feature</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-800 text-sm md:text-base">UNAVO</th>
                    <th className="text-left py-4 px-4 font-bold text-green-600 bg-green-50 text-sm md:text-base">UNAVO One</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="py-4 px-4 font-semibold text-gray-800">{item.feature}</td>
                      <td className="py-4 px-4 text-gray-700">{item.unavo}</td>
                      <td className="py-4 px-4 text-green-600 font-semibold bg-green-50">{item.unavoOne}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">⚙️</span>
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: '1', title: 'Choose Plan', desc: 'Select your preferred subscription plan' },
                { num: '2', title: 'Pay Once', desc: 'Make a one-time secure payment' },
                { num: '3', title: 'Enjoy Benefits', desc: 'Instantly unlock all exclusive perks' },
                { num: '4', title: 'Save Money', desc: 'Enjoy unlimited savings on every order' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-green-600 font-bold text-2xl mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.num}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-green-100">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">⭐</span>
              <h2 className="text-3xl font-bold text-gray-800">What Members Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.order}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">❓</span>
              <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I cancel my UNAVO One membership anytime?',
                  a: 'Yes! You can cancel your membership at any time with no questions asked. No hidden charges or long-term commitments.'
                },
                {
                  q: 'When does my membership expire?',
                  a: 'Your membership is valid for the selected period (1 month, 3 months, or 1 year). You can renew anytime before expiration.'
                },
                {
                  q: 'Does free delivery apply to all restaurants?',
                  a: 'Free delivery applies to all UNAVO partner restaurants. No minimum order value required!'
                },
                {
                  q: 'Can I share my UNAVO One membership?',
                  a: 'UNAVO One is for personal use only. Each member needs their own subscription to enjoy the benefits.'
                },
                {
                  q: 'What if I don\'t use my membership?',
                  a: 'No worries! Your membership remains active and you can use it anytime within the subscription period.'
                },
                {
                  q: 'Do I get cashback on all orders?',
                  a: 'Yes! Cashback is earned on every order and can be used as credit for future purchases.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500"
                >
                  <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Save More?</h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Join thousands of happy UNAVO One members and start saving on your favorite food orders today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-bold transition-all"
              >
                Subscribe Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-green-600 transition-all"
              >
                Back to Home
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-2xl text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>

              {/* Selected Plan Details */}
              {selectedPaymentPlan && (
                <div className="bg-green-50 p-4 rounded-lg mb-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-600 mb-2">
                    {selectedPaymentPlan.name}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{typeof selectedPaymentPlan.price === 'string' ? selectedPaymentPlan.price : selectedPaymentPlan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {selectedPaymentPlan.period}
                    </span>
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {selectedPaymentPlan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Payment Methods */}
              <div className="mb-6">
                <label className="block text-gray-800 font-semibold mb-3">
                  Payment Method
                </label>
                <div className="space-y-2">
                  {['Card', 'UPI', 'Wallet', 'COD'].map((method) => (
                    <label
                      key={method}
                      className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-600 hover:bg-green-50 transition-all"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        className="mr-3 w-4 h-4 accent-green-600"
                      />
                      <span className="text-gray-800 font-semibold">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setPaymentSuccess(true);
                    setTimeout(() => {
                      setShowPaymentModal(false);
                      setPaymentSuccess(false);
                    }, 3000);
                  }}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
                >
                  Complete Payment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </motion.button>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {paymentSuccess && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-green-600 rounded-full p-4"
                    >
                      <svg
                        className="w-16 h-16 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default UNAVOOnePage;
