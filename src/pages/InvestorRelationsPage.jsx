import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InvestorRelationsPage = () => {
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

  const metrics = [
    {
      icon: '📈',
      title: 'Revenue Growth',
      value: '150%',
      description: 'Year-over-year growth'
    },
    {
      icon: '🍽️',
      title: 'Restaurant Partners',
      value: '500+',
      description: 'Across major cities'
    },
    {
      icon: '👥',
      title: 'Active Users',
      value: '100K+',
      description: 'And growing daily'
    },
    {
      icon: '📍',
      title: 'Cities',
      value: '25+',
      description: 'Pan-India coverage'
    }
  ];

  const businessHighlights = [
    {
      title: 'Market Opportunity',
      description: 'The online food delivery market in India is projected to reach $20B by 2028, with CAGR of 20%. UNAVO is positioned to capture significant market share through innovation and customer-centric approach.'
    },
    {
      title: 'Competitive Advantages',
      description: 'Our proprietary technology, strong restaurant partnerships, excellent customer retention (75%), and efficient delivery network provide sustainable competitive advantages in a growing market.'
    },
    {
      title: 'Growth Strategy',
      description: 'Expand to 50+ cities, launch UNAVO One premium membership, develop merchant dashboard tools, introduce new service categories (cloud kitchens, meal planning), and strategic partnerships.'
    },
    {
      title: 'Financial Health',
      description: 'Path to profitability achieved. Strong unit economics with 35% gross margins, focused expense management, and operational efficiency. Positive cash flow expected in next fiscal year.'
    }
  ];

  const documents = [
    {
      title: 'Annual Report 2024',
      type: 'PDF',
      size: '8.5 MB',
      icon: '📄'
    },
    {
      title: 'Financial Statements Q3 2024',
      type: 'PDF',
      size: '3.2 MB',
      icon: '📊'
    },
    {
      title: 'Investor Presentation',
      type: 'PDF',
      size: '12.3 MB',
      icon: '🎯'
    },
    {
      title: 'ESG Report 2024',
      type: 'PDF',
      size: '5.8 MB',
      icon: '🌱'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Founded',
      description: 'UNAVO launched with vision to revolutionize food delivery'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Expanded to 10 cities with 200+ restaurant partners'
    },
    {
      year: '2023',
      title: 'Series A Funding',
      description: 'Raised $5M in Series A funding for technology and expansion'
    },
    {
      year: '2024',
      title: 'Major Growth',
      description: 'Reached 100K+ users, launched UNAVO One premium service'
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
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">Investor Relations</h1>
            <p className="text-xl opacity-90 drop-shadow">
              Join us in revolutionizing the food delivery landscape in India
            </p>
            <p className="text-sm opacity-80 mt-4">Building the future of on-demand food delivery</p>
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

      {/* Key Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Key Performance Metrics
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 text-center"
              >
                <div className="text-5xl mb-4">{metric.icon}</div>
                <h3 className="text-3xl font-black text-green-600 mb-2">{metric.value}</h3>
                <p className="text-xl font-bold text-gray-800 mb-2">{metric.title}</p>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Business Highlights
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {businessHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Milestones Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Company Milestones
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-12 bg-green-300 mt-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Documents & Reports
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-500 transition cursor-pointer"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{doc.type} • {doc.size}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                >
                  Download
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-12 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-black mb-6">Interested in Investing?</h2>
            <p className="text-lg mb-8 opacity-90">
              UNAVO is actively seeking strategic investors and venture capital partners to fuel our expansion. We offer attractive growth potential in a rapidly expanding market with strong fundamentals and clear path to profitability.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-semibold">
                📧 <strong>Email:</strong> investors@unavo.com
              </p>
              <p className="text-lg font-semibold">
                📞 <strong>Phone:</strong> +91 8248701817
              </p>
              <p className="text-lg font-semibold">
                📍 <strong>Location:</strong> Karur, India
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-12 text-center"
          >
            Get in Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl border-2 border-green-200 text-center"
          >
            <p className="text-gray-700 mb-6 text-lg">
              Have questions about UNAVO's investment opportunities? Our investor relations team is here to help.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Investor Relations Officer:</strong><br />
                kumarankarthikeyan14@gmail.com
              </p>
              <motion.a
                href="mailto:investors@unavo.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Send Inquiry
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InvestorRelationsPage;
