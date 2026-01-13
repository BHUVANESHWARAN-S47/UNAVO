import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');

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
      transition: { duration: 0.6 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }
    
    setPasswordError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex flex-col">
      <Navbar showBackButton={true} />
      
      <motion.div
        className="flex-1 flex items-center justify-center px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-md">
          {/* Main Form Container with 3D effect */}
          <motion.div
            className="relative"
            variants={formVariants}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glowing Background Elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-100 transition duration-1000"></div>
            
            {/* Main Card */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl p-8 border border-green-200 overflow-hidden"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  className="text-center mb-8"
                  variants={itemVariants}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg shadow-green-500/30"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ perspective: '1000px' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </motion.div>
                  <h1 className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    Create Account
                  </h1>
                  <p className="text-gray-500 font-medium">Join UNAVO and order delicious food</p>
                </motion.div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <motion.div
                    variants={inputVariants}
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    className="group"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 font-medium placeholder-gray-400"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  {/* Username Input */}
                  <motion.div
                    variants={inputVariants}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    className="group"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 font-medium placeholder-gray-400"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  {/* Password Input */}
                  <motion.div
                    variants={inputVariants}
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    className="group"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Create Password</label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 font-medium placeholder-gray-400"
                        required
                      />
                      <motion.button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-green-600 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.596 3.596" />
                          </svg>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* Confirm Password Input */}
                  <motion.div
                    variants={inputVariants}
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    className="group"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          setPasswordError('');
                        }}
                        className="w-full pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 font-medium placeholder-gray-400"
                        required
                      />
                      <motion.button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-green-600 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {showConfirmPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.596 3.596" />
                          </svg>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* Password Error Message */}
                  {passwordError && (
                    <motion.div
                      className="p-3 bg-red-50 border-2 border-red-300 rounded-lg text-red-600 font-medium text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {passwordError}
                    </motion.div>
                  )}

                  {/* Forgot Password Link */}
                  <motion.div
                    variants={itemVariants}
                    className="text-right"
                  >
                    <motion.button
                      type="button"
                      className="text-sm font-semibold text-green-600 hover:text-green-700 transition"
                      whileHover={{ x: 5 }}
                    >
                      Forgot Password?
                    </motion.button>
                  </motion.div>

                  {/* Sign Up Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/30 disabled:opacity-70"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <motion.div
                        className="flex items-center justify-center space-x-2"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </motion.div>
                    ) : (
                      'Sign Up'
                    )}
                  </motion.button>

                  {/* Divider */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-sm text-gray-500 font-medium">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </motion.div>

                  {/* Social Sign Up Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 gap-4"
                  >
                    {/* Google Sign In */}
                    <motion.button
                      type="button"
                      className="flex items-center justify-center space-x-2 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 py-3 rounded-xl font-semibold text-gray-700 transition shadow-md"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <image href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" x="0" y="0" width="24" height="24" />
                      </svg>
                      <span className="text-xs sm:text-sm">Google</span>
                    </motion.button>

                    {/* Facebook Sign In */}
                    <motion.button
                      type="button"
                      className="flex items-center justify-center space-x-2 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 py-3 rounded-xl font-semibold text-gray-700 transition shadow-md"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-xs sm:text-sm">Facebook</span>
                    </motion.button>
                  </motion.div>

                  {/* Login Link */}
                  <motion.div
                    variants={itemVariants}
                    className="text-center"
                  >
                    <p className="text-gray-600 font-medium">
                      Already have an account?{' '}
                      <motion.button
                        type="button"
                        onClick={() => navigate('/')}
                        className="text-green-600 font-bold hover:text-green-700 transition"
                        whileHover={{ x: 3 }}
                      >
                        Login
                      </motion.button>
                    </p>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Decorative Element */}
          <motion.div
            className="mt-8 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="flex space-x-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ delay: i * 0.2, duration: 1.5, repeat: Infinity }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default SignupPage;
