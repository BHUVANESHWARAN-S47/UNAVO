import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQPage = () => {
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [feedbackGiven, setFeedbackGiven] = useState({});
  const [showChatModal, setShowChatModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! 👋 Welcome to UNAVO support. How can I help you today?' }
  ]);

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
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const categories = [
    { id: 'general', label: 'General', icon: '❓' },
    { id: 'orders', label: 'Orders & Delivery', icon: '📦' },
    { id: 'account', label: 'Account & Profile', icon: '👤' },
    { id: 'payment', label: 'Payment', icon: '💳' },
    { id: 'unavo-one', label: 'UNAVO One', icon: '⭐' },
    { id: 'support', label: 'Support', icon: '🆘' }
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: 'What is UNAVO?',
        answer: 'UNAVO is a modern food delivery platform that connects food lovers with their favorite restaurants. We ensure fast, reliable delivery with a seamless user experience, competitive pricing, and excellent customer service.'
      },
      {
        id: 2,
        question: 'How do I place an order?',
        answer: 'Download the UNAVO app or visit our website, browse restaurants and food items, add items to your cart, provide delivery address, select payment method, and confirm your order. You\'ll receive real-time updates on your delivery.'
      },
      {
        id: 3,
        question: 'What areas does UNAVO deliver to?',
        answer: 'UNAVO currently operates in major cities across India including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and Pune. We\'re constantly expanding to new areas. Check the app to see if we deliver to your location.'
      },
      {
        id: 4,
        question: 'Are there any minimum order requirements?',
        answer: 'Minimum order value varies by restaurant, typically ranging from ₹100-₹300. You can see the minimum order value for each restaurant on the menu page before placing your order.'
      },
      {
        id: 5,
        question: 'Can I schedule orders in advance?',
        answer: 'Yes! You can schedule orders up to 7 days in advance. Select "Schedule for later" while placing your order and choose your preferred delivery time.'
      }
    ],
    orders: [
      {
        id: 1,
        question: 'How long does delivery usually take?',
        answer: 'Average delivery time is 30-45 minutes depending on your location, restaurant, and order complexity. You\'ll see the estimated delivery time before confirming your order. Track your order in real-time with our app.'
      },
      {
        id: 2,
        question: 'What if my order is delayed?',
        answer: 'If your order is delayed beyond the estimated time, our customer support team will investigate and provide you with updates. You may be eligible for a refund or discount on your next order.'
      },
      {
        id: 3,
        question: 'Can I modify my order after placing it?',
        answer: 'Yes, you can modify your order within 2 minutes of placing it. After that, the order goes to the restaurant and cannot be modified. In such cases, you can contact our support team for assistance.'
      },
      {
        id: 4,
        question: 'What if I receive incorrect or damaged food?',
        answer: 'We take food quality seriously. If you receive incorrect or damaged items, contact our support team immediately with photos/evidence. We\'ll arrange a replacement or full refund within 24 hours.'
      },
      {
        id: 5,
        question: 'Can I cancel my order?',
        answer: 'Yes, you can cancel orders before the restaurant starts preparing them. Cancellations made within the allowed window will be refunded to your original payment method within 3-5 business days.'
      }
    ],
    account: [
      {
        id: 1,
        question: 'How do I create a UNAVO account?',
        answer: 'Download the app or visit our website, click "Sign Up", enter your email/phone number, set a password, and verify your account. You can also sign up using Google or Facebook for quick registration.'
      },
      {
        id: 2,
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page, enter your registered email/phone, and we\'ll send you a reset link. Follow the link to create a new password.'
      },
      {
        id: 3,
        question: 'Can I have multiple delivery addresses?',
        answer: 'Yes! You can save multiple addresses like Home, Work, Friends, etc. Select the address you want for each order. You can manage addresses in your Profile settings.'
      },
      {
        id: 4,
        question: 'How do I edit my profile information?',
        answer: 'Go to Profile > Edit Profile, update your name, email, phone number, and delivery addresses. Changes take effect immediately after saving.'
      },
      {
        id: 5,
        question: 'How can I delete my account?',
        answer: 'Go to Settings > Account Settings > Delete Account. Note that this action is permanent and you\'ll lose access to all order history and saved preferences.'
      }
    ],
    payment: [
      {
        id: 1,
        question: 'What payment methods does UNAVO accept?',
        answer: 'We accept Credit Cards, Debit Cards, UPI, Mobile Wallets (PayTM, Google Pay, PhonePe), Net Banking, and Cash on Delivery (COD). Choose your preferred method during checkout.'
      },
      {
        id: 2,
        question: 'Is it safe to save my card details?',
        answer: 'Yes, we use industry-leading encryption and PCI DSS compliance to protect your card details. Your payment information is never shared with restaurants or third parties.'
      },
      {
        id: 3,
        question: 'Do you have a wallet or credit system?',
        answer: 'Yes! UNAVO Wallet lets you store money for faster checkout. You earn cashback on orders which is automatically credited to your wallet. Use it for future orders or request a refund anytime.'
      },
      {
        id: 4,
        question: 'Can I use promo codes or coupons?',
        answer: 'Absolutely! We offer regular promo codes for discounts. Check the "Offers" section in the app to view available coupons. Apply them at checkout to get discounts on your order.'
      },
      {
        id: 5,
        question: 'What if I was charged twice for an order?',
        answer: 'We apologize if this happened. Contact our support team immediately with your order details. We\'ll investigate and refund the duplicate charge within 3-5 business days.'
      }
    ],
    'unavo-one': [
      {
        id: 1,
        question: 'What is UNAVO One?',
        answer: 'UNAVO One is our premium membership program offering exclusive benefits including free delivery, special discounts (20-30%), cashback rewards, priority support, and early access to new features.'
      },
      {
        id: 2,
        question: 'How much does UNAVO One cost?',
        answer: 'UNAVO One has three plans: Monthly (₹199), Quarterly (₹499, save ₹98), and Annual (₹1,999, save ₹588). Choose the plan that works best for you.'
      },
      {
        id: 3,
        question: 'Can I cancel my UNAVO One subscription?',
        answer: 'Yes, you can cancel your subscription anytime from the app. If you cancel within the billing period, you won\'t be charged for the next cycle. No hidden charges or cancellation fees.'
      },
      {
        id: 4,
        question: 'Do I get cashback on UNAVO One orders?',
        answer: 'Yes! UNAVO One members earn 2-5% cashback on every order (depending on the plan). Cashback is credited to your wallet and can be used for future orders.'
      },
      {
        id: 5,
        question: 'Does UNAVO One apply to all restaurants?',
        answer: 'Yes, UNAVO One benefits apply to all partner restaurants on the platform. Free delivery and discounts are available for all eligible orders placed through UNAVO One subscription.'
      }
    ],
    support: [
      {
        id: 1,
        question: 'How do I contact UNAVO customer support?',
        answer: 'You can reach our support team through: In-app chat, Email (support@unavo.in), Phone (1800-UNAVO-1), or Social media. We typically respond within 2-4 hours during business hours.'
      },
      {
        id: 2,
        question: 'What are UNAVO\'s business hours?',
        answer: 'UNAVO operates 24/7 for orders. Customer support team operates from 9 AM to 11 PM IST, Monday to Sunday. For emergencies outside these hours, you can submit a support ticket.'
      },
      {
        id: 3,
        question: 'How do I report a safety concern?',
        answer: 'Your safety is our priority. If you have any concerns, immediately contact our safety team at safety@unavo.in or call our emergency support line. We take all reports seriously.'
      },
      {
        id: 4,
        question: 'What is your refund policy?',
        answer: 'We offer refunds for cancelled orders, missing items, or unsatisfactory service. Refunds are processed within 3-5 business days to your original payment method.'
      },
      {
        id: 5,
        question: 'How can I provide feedback or suggestions?',
        answer: 'We love hearing from you! Share feedback through the in-app feedback form, email, or social media. Your suggestions help us improve the UNAVO experience for everyone.'
      }
    ]
  };

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([...chatMessages, { type: 'user', text: chatMessage }]);
      setChatMessage('');
      // Simulate bot response
      setTimeout(() => {
        const responses = [
          "Thanks for reaching out! 😊",
          "Our team will assist you shortly!",
          "Is there anything else I can help you with?",
          "We appreciate your patience!",
          "Your message has been received. 📝"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setChatMessages((prev) => [...prev, { type: 'bot', text: randomResponse }]);
      }, 1000);
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+918248701817';
  };

  const handleFeedback = (faqId, helpful) => {
    setFeedbackGiven({ ...feedbackGiven, [faqId]: helpful });
    // Reset feedback after 3 seconds
    setTimeout(() => {
      setFeedbackGiven((prev) => {
        const newFeedback = { ...prev };
        delete newFeedback[faqId];
        return newFeedback;
      });
    }, 3000);
  };

  const currentFAQs = faqs[selectedCategory] || [];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about UNAVO, orders, payments, and more
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setExpandedFAQ(null);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white border-2 border-green-200 text-gray-800 hover:border-green-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQs List */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="space-y-4">
            {currentFAQs.map((faq, index) => {
              const uniqueId = `${selectedCategory}-${faq.id}`;
              return (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg border-2 border-green-200 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(uniqueId)}
                  className="w-full px-6 py-5 text-left hover:bg-green-50 transition-colors flex justify-between items-center group"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ === uniqueId ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-2xl text-green-600"
                  >
                    ▼
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {expandedFAQ === uniqueId && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 bg-gradient-to-br from-green-50 to-emerald-50 border-t-2 border-green-200"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-700 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>

                      {/* Helpful feedback buttons */}
                      <AnimatePresence mode="wait">
                        {feedbackGiven[uniqueId] !== undefined ? (
                          <motion.div
                            key="thank-you"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-green-200 text-center"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 0.5 }}
                              className="inline-block mb-2"
                            >
                              <span className="text-3xl">✨</span>
                            </motion.div>
                            <p className="text-lg font-semibold text-green-600 mb-2">
                              Thank you for your feedback!
                            </p>
                            <motion.div
                              initial={{ width: '100%' }}
                              animate={{ width: '0%' }}
                              transition={{ duration: 3 }}
                              className="h-1 bg-green-600 rounded-full"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="buttons"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 flex gap-4 pt-4 border-t border-green-200"
                          >
                            <p className="text-sm text-gray-600 mr-auto">Was this helpful?</p>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleFeedback(uniqueId, true)}
                              className="px-4 py-2 bg-white border border-green-300 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all"
                            >
                              👍 Yes
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleFeedback(uniqueId, false)}
                              className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                            >
                              👎 No
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
            })}
          </div>
        </motion.div>

        {/* Still have questions section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-12 text-center text-white shadow-2xl">
            <motion.h2
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="text-3xl font-black mb-4"
            >
              Still Have Questions?
            </motion.h2>
            <p className="text-lg mb-8 opacity-95">
              Can't find what you're looking for? Our support team is here to help!
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowEmailModal(true)}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: '1000px' }}
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:shadow-lg transition-all inline-block transform hover:shadow-2xl hover:text-emerald-600"
              >
                📧 Email Support
              </motion.button>
              <motion.button
                onClick={() => setShowChatModal(true)}
                whileHover={{ scale: 1.05, rotateY: -10 }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: '1000px' }}
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:shadow-lg transition-all transform hover:shadow-2xl hover:text-emerald-600"
              >
                💬 Live Chat
              </motion.button>
              <motion.button
                onClick={() => setShowCallModal(true)}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: '1000px' }}
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:shadow-lg transition-all transform hover:shadow-2xl hover:text-emerald-600"
              >
                📱 Call Us
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition-all"
          >
            ← Back to Home
          </motion.button>
        </motion.div>
      </div>

      {/* Live Chat Modal */}
      <AnimatePresence>
        {showChatModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end z-50 p-4"
            onClick={() => setShowChatModal(false)}
          >
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl w-full max-w-sm max-h-96 flex flex-col"
              style={{ perspective: '1000px' }}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">💬 Live Chat Support</h3>
                  <p className="text-sm opacity-90">We're here to help!</p>
                </div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={() => setShowChatModal(false)}
                  className="text-2xl hover:opacity-75"
                >
                  ✕
                </motion.button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {chatMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.type === 'user'
                          ? 'bg-green-600 text-white rounded-br-none'
                          : 'bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="bg-green-600 text-white rounded-lg px-4 py-2 font-bold hover:bg-green-700"
                >
                  Send
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Us Modal */}
      <AnimatePresence>
        {showCallModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowCallModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: '1000px' }}
              className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm text-center"
            >
              {/* Phone Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-6xl mb-6"
              >
                📱
              </motion.div>

              <h3 className="text-2xl font-black text-gray-800 mb-2">Call Us Now</h3>
              <p className="text-gray-600 mb-6">Our support team is ready to help</p>

              {/* Phone Number */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Support Number</p>
                <motion.p
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-black text-green-600"
                >
                  +91 8248701817
                </motion.p>
              </div>

              {/* Call Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCallClick}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg mb-3 hover:shadow-lg transition-all"
              >
                📞 Start Call
              </motion.button>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCallModal(false)}
                className="w-full border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:border-gray-400 transition-all"
              >
                Cancel
              </motion.button>

              {/* Hours Info */}
              <p className="text-xs text-gray-500 mt-4">
                Available: Mon-Fri, 9 AM - 11 PM IST
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Support Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: '1000px' }}
              className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm text-center"
            >
              {/* Email Icon */}
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 2 }}
                className="text-6xl mb-6"
                style={{ perspective: '1000px' }}
              >
                📧
              </motion.div>

              <h3 className="text-2xl font-black text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-6">Contact us for assistance</p>

              {/* Email Address */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Support Email</p>
                <motion.p
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-lg font-black text-green-600 break-all"
                >
                  kumarankarthikeyan14@gmail.com
                </motion.p>
              </div>

              {/* Copy Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigator.clipboard.writeText('kumarankarthikeyan14@gmail.com');
                  alert('Email copied to clipboard!');
                }}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg mb-3 hover:shadow-lg transition-all"
              >
                📋 Copy Email
              </motion.button>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowEmailModal(false)}
                className="w-full border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:border-gray-400 transition-all"
              >
                Close
              </motion.button>

              {/* Info */}
              <p className="text-xs text-gray-500 mt-4">
                We'll respond to your email within 24 hours
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default FAQPage;
