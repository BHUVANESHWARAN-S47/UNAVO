import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4">UNAVO</h2>
            <p className="text-sm text-gray-600">
              Order your favourite food instantly from the best restaurants near you.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-gray-800 font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><motion.div whileHover={{ x: 5 }}><Link to="/about" className="text-gray-600 hover:text-green-600 transition">About Us</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/careers" className="text-gray-600 hover:text-green-600 transition">Careers</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/unavo-one" className="text-gray-600 hover:text-green-600 transition">UNAVO One</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/team" className="text-gray-600 hover:text-green-600 transition">Team</Link></motion.div></li>
            </ul>
          </motion.div>

          {/* Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-gray-800 font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><motion.div whileHover={{ x: 5 }}><Link to="/contact-us" className="text-gray-600 hover:text-green-600 transition">Contact Us</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/partner-with-us" className="text-gray-600 hover:text-green-600 transition">Partner with us</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/ride-with-us" className="text-gray-600 hover:text-green-600 transition">Ride with us</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/faq" className="text-gray-600 hover:text-green-600 transition">FAQs</Link></motion.div></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-gray-800 font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><motion.div whileHover={{ x: 5 }}><Link to="/terms-and-conditions" className="hover:text-green-600 transition text-gray-600">Terms & Conditions</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/cookie-policy" className="hover:text-green-600 transition text-gray-600">Cookie Policy</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/privacy-policy" className="hover:text-green-600 transition text-gray-600">Privacy Policy</Link></motion.div></li>
              <li><motion.div whileHover={{ x: 5 }}><Link to="/investor-relations" className="hover:text-green-600 transition text-gray-600">Investor Relations</Link></motion.div></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2025 UNAVO. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {/* Instagram */}
              <motion.a 
                href="https://www.instagram.com/k_kumaran24/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition" 
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2C5.3 4 4 5.3 4 7.5v9c0 2.2 1.3 3.5 3.5 3.5h9c2.2 0 3.5-1.3 3.5-3.5v-9c0-2.2-1.3-3.5-3.5-3.5h-9m11.6 1.6c.6 0 1.2-.6 1.2-1.2s-.6-1.2-1.2-1.2-1.2.6-1.2 1.2.6 1.2 1.2 1.2M12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
                </svg>
              </motion.a>
              
              {/* Facebook */}
              <motion.a 
                href="https://www.facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition" 
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              
              {/* X (Twitter) */}
              <motion.a 
                href="https://www.x.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition" 
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.432-8.49H1.927V21.75h6.211l4.975-5.951 5.617 5.951h6.657L9.896 9.969l.066-.093 6.282-8.626zm-1.161 17.52h1.833L7.084 4.126H5.117l12.246 15.644z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
