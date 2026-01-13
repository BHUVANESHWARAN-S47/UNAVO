import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email via Formspree
    fetch('https://formspree.io/f/myzypkln', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        _to: 'kumarankarthikeyan14@gmail.com',
        _cc: 'kumarankarthikeyan14@gmil.co',
        _subject: `New Contact Us Message from ${formData.name}`,
      })
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
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

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Available 24/7 for support',
      content: '+91 8248701817',
      link: 'tel:+918248701817'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      description: 'We respond within 24 hours',
      content: 'kumarankarthikeyan14@gmail.com',
      link: 'mailto:kumarankarthikeyan14@gmail.com'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Our headquarters',
      content: 'Karur, India',
      link: '#'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      description: 'Monday to Sunday',
      content: '9:00 AM - 11:00 PM',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'How long does delivery take?',
      answer: 'Average delivery time is 30-45 minutes depending on your location and restaurant busyness.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, digital wallets, and UPI payments.'
    },
    {
      question: 'Can I modify my order after placing it?',
      answer: 'You can modify your order within 2 minutes of placing it. After that, please contact support.'
    },
    {
      question: 'Is there a minimum order value?',
      answer: 'Yes, the minimum order value is ₹1999 for food delivery.'
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
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">Get In Touch</h1>
            <p className="text-xl opacity-90 drop-shadow">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
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

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            How to Reach Us
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 text-center cursor-pointer hover:border-green-500 transition"
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="text-green-600 font-semibold text-sm break-words">{method.content}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Send Us a Message
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
                <p className="font-bold">✓ Message sent successfully!</p>
                <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter your name"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                  placeholder="What is this about?"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-gray-800"
                placeholder="Type your message here..."
                rows="6"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-16 bg-white">
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
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200 hover:border-green-500 transition"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">❓ {faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">Need more help?</p>
            <motion.a
              href="/faq"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
            >
              View Full FAQ
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
