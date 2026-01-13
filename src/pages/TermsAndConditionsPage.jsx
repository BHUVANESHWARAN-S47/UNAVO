import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditionsPage = () => {
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

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using UNAVO\'s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on UNAVO\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on UNAVO\'s website; remove any copyright or other proprietary notations from the materials; transfer the materials to another person or "mirror" the materials on any other server.'
    },
    {
      title: '3. Disclaimer',
      content: 'The materials on UNAVO\'s website are provided on an "as is" basis. UNAVO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, UNAVO does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.'
    },
    {
      title: '4. Limitations',
      content: 'In no event shall UNAVO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UNAVO\'s website, even if UNAVO or an authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on UNAVO\'s website could include technical, typographical, or photographic errors. UNAVO does not warrant that any of the materials on its website are accurate, complete, or current. UNAVO may make changes to the materials contained on its website at any time without notice.'
    },
    {
      title: '6. Materials and Links',
      content: 'UNAVO has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by UNAVO of the site. Use of any such linked website is at the user\'s own risk.'
    },
    {
      title: '7. Modifications',
      content: 'UNAVO may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
    },
    {
      title: '9. User Conduct',
      content: 'You agree not to use the website for any unlawful purposes or in any way that could damage, disable, overburden, or impair the website. You must not use the website to engage in any form of harassment, abuse, or bullying of any person, or to transmit obscene or offensive content.'
    },
    {
      title: '10. Order and Payment Terms',
      content: 'All orders placed through UNAVO are subject to acceptance and confirmation by UNAVO. UNAVO reserves the right to refuse or cancel any order at any time. Payment must be received in full before delivery. Prices are subject to change without notice.'
    },
    {
      title: '11. Delivery and Risk of Loss',
      content: 'Delivery dates are estimates only. UNAVO is not liable for any delays in delivery. Risk of loss passes to you upon delivery. UNAVO makes no guarantee regarding the condition of delivered items except as specifically outlined in this agreement.'
    },
    {
      title: '12. User Accounts',
      content: 'If you create an account on UNAVO\'s website, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You must immediately notify UNAVO of any unauthorized use of your account.'
    },
    {
      title: '13. Intellectual Property Rights',
      content: 'All content on UNAVO\'s website, including text, graphics, logos, images, and software, is the property of UNAVO or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without prior written permission from UNAVO.'
    },
    {
      title: '14. Limitation of Liability',
      content: 'To the fullest extent permitted by applicable law, in no event shall UNAVO, its directors, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of the website or the materials contained therein.'
    },
    {
      title: '15. Contact Information',
      content: 'If you have any questions about these Terms and Conditions, please contact us at kumarankarthikeyan14@gmail.com or call us at +91 8248701817.'
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
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">Terms & Conditions</h1>
            <p className="text-xl opacity-90 drop-shadow">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-sm opacity-80 mt-4">Last updated: December 2025</p>
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

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-4 border-green-500 pl-6 py-4 hover:bg-green-50 transition rounded-r-lg pr-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">📋 Important Notice</h3>
            <p className="text-gray-700 mb-3">
              These Terms and Conditions constitute the entire agreement between you and UNAVO regarding your use of the website. If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
            <p className="text-gray-700">
              UNAVO reserves the right to modify these terms at any time. Your continued use of the website following the posting of revised Terms and Conditions means that you accept and agree to the changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
