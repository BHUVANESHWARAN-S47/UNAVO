import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
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
      title: '1. Introduction',
      content: 'UNAVO ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services.'
    },
    {
      title: '2. Information We Collect',
      content: 'We collect information in several ways: (a) Information You Provide Directly: Name, email address, phone number, delivery address, payment information, dietary preferences, and feedback. (b) Information Collected Automatically: IP address, browser type, operating system, pages visited, time spent on pages, clicks made, and device identifiers. (c) Information From Third Parties: Payment processors, analytics providers, and social media platforms may share information with us.'
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect to: Process and fulfill your orders; Provide customer support; Send promotional emails and notifications; Improve our website and services; Personalize your experience; Detect and prevent fraud; Analyze website usage; Comply with legal obligations; Deliver targeted advertising; and Conduct market research.'
    },
    {
      title: '4. Legal Basis for Processing',
      content: 'We process your personal information based on: Your consent; Performance of a contract; Compliance with legal obligations; Protection of your vital interests; Performance of a task in the public interest; or Legitimate interests pursued by us or a third party. In some jurisdictions, we may rely on your explicit consent to process certain categories of personal information.'
    },
    {
      title: '5. Data Sharing and Disclosure',
      content: 'We may share your information with: Restaurant partners to fulfill your orders; Payment processors to process transactions; Delivery partners to deliver your food; Analytics and advertising partners; Service providers who assist us; Other third parties with your explicit consent; or As required by law or to protect our legal rights. We do not sell your personal information to third parties for their marketing purposes.'
    },
    {
      title: '6. Data Retention',
      content: 'We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time, subject to legal and contractual obligations. After you close your account, we may retain anonymized data for analytics and legal compliance purposes.'
    },
    {
      title: '7. Security of Your Information',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: '8. Your Rights and Choices',
      content: 'You have the right to: Access your personal information; Correct inaccurate data; Request deletion of your data; Restrict or object to processing; Request portability of your data; Withdraw consent at any time; Opt out of marketing communications; and Lodge a complaint with a supervisory authority. To exercise these rights, please contact us using the information provided below.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will promptly delete it. Parents or guardians who believe their child has provided information to us should contact us immediately.'
    },
    {
      title: '10. International Data Transfers',
      content: 'Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our Services, you consent to the transfer of your information to countries outside your country of residence, including India and the United States.'
    },
    {
      title: '11. Third-Party Links',
      content: 'Our website may contain links to third-party websites that are not operated by us. This Privacy Policy applies only to information collected through our Services. We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any third-party services before providing your personal information.'
    },
    {
      title: '12. Cookie Policy',
      content: 'We use cookies and similar tracking technologies to enhance your user experience. For detailed information about how we use cookies, please refer to our Cookie Policy. You can control cookie preferences through your browser settings.'
    },
    {
      title: '13. California Privacy Rights',
      content: 'If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA). These include the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale or sharing of personal information. To exercise these rights, please contact us at kumarankarthikeyan14@gmail.com.'
    },
    {
      title: '14. European Privacy Rights',
      content: 'If you are located in the European Union, you have rights under the General Data Protection Regulation (GDPR). These include the right of access, right to rectification, right to erasure, right to restrict processing, right to data portability, right to object, and rights related to automated decision-making. To exercise these rights, please contact us using the information below.'
    },
    {
      title: '15. Changes to This Privacy Policy',
      content: 'We reserve the right to update this Privacy Policy at any time. Any changes will be effective immediately upon posting to our website with an updated "Last Updated" date. Your continued use of our Services following the posting of revised Privacy Policy means that you accept and agree to the changes. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your privacy.'
    },
    {
      title: '16. Contact Us',
      content: 'If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at: Email: kumarankarthikeyan14@gmail.com | Phone: +91 8248701817 | Address: Karur, India. We will respond to your inquiry within 30 days of receipt.'
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
            <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">Privacy Policy</h1>
            <p className="text-xl opacity-90 drop-shadow">
              Your privacy is important to us. Learn how we collect and protect your information.
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">🔒 Protecting Your Data</h2>
            <p className="text-gray-700">
              At UNAVO, we understand that privacy is a fundamental right. We are committed to being transparent about how we collect, use, and protect your personal information. This Privacy Policy outlines our practices and your rights regarding your data.
            </p>
          </motion.div>

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
            <h3 className="text-xl font-bold text-gray-800 mb-3">📞 Data Protection Officer</h3>
            <p className="text-gray-700 mb-4">
              For any privacy-related concerns or to exercise your data protection rights, you can contact our Data Protection Officer:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Email:</strong> kumarankarthikeyan14@gmail.com</li>
              <li><strong>Phone:</strong> +91 8248701817</li>
              <li><strong>Mailing Address:</strong> Karur, India</li>
              <li><strong>Response Time:</strong> Within 30 days of receipt</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
