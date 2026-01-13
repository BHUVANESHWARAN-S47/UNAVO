import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Select Location');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  // All Indian cities in alphabetical order
  const cities = [
    'Ahmedabad, Gujarat',
    'Bangalore, Karnataka',
    'Bhopal, Madhya Pradesh',
    'Chandigarh, Union Territory',
    'Chennai, Tamil Nadu',
    'Cochin, Kerala',
    'Coimbatore, Tamil Nadu',
    'Delhi, NCR',
    'Goa, Goa',
    'Gurgaon, Haryana',
    'Hyderabad, Telangana',
    'Indore, Madhya Pradesh',
    'Jaipur, Rajasthan',
    'Jodhpur, Rajasthan',
    'Kolkata, West Bengal',
    'Kochi, Kerala',
    'Lucknow, Uttar Pradesh',
    'Ludhiana, Punjab',
    'Madurai, Tamil Nadu',
    'Mangalore, Karnataka',
    'Mumbai, Maharashtra',
    'Nagpur, Maharashtra',
    'Nashik, Maharashtra',
    'Noida, Uttar Pradesh',
    'Pimpri-Chinchwad, Maharashtra',
    'Pune, Maharashtra',
    'Surat, Gujarat',
    'Thiruvananthapuram, Kerala',
    'Vadodara, Gujarat',
    'Varanasi, Uttar Pradesh',
    'Visakhapatnam, Andhra Pradesh',
  ];

  // Filter cities based on search text
  const filteredCities = useMemo(() => {
    if (!searchText.trim()) return cities;
    return cities.filter(city =>
      city.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      rotateX: 90,
      transformPerspective: '1000px'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.02,
      },
    },
    exit: { 
      opacity: 0, 
      y: -20,
      rotateX: 90,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
    setSearchText('');
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
    setSearchText('');
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex items-center bg-white rounded-lg shadow-md border border-green-200 hover:border-green-400 transition">
        {/* Search Icon */}
        <div className="pl-4 pr-3">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for food or restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 py-4 px-2 bg-transparent text-gray-700 placeholder-gray-400 outline-none font-medium"
        />

        {/* Location Dropdown Button */}
        <div className="hidden sm:flex items-center space-x-2 border-l border-green-200 px-4 relative">
          <motion.button
            onClick={handleDropdownOpen}
            className="flex items-center space-x-2 hover:text-green-600 transition-all duration-300 py-4"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              {location === 'Select Location' ? 'Location' : location.split(',')[0]}
            </span>
            <motion.svg 
              className="w-4 h-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          {/* Animated Dropdown - Positioned below location button */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="absolute top-full left-0 mt-2 w-96 bg-white border-2 border-green-500 rounded-2xl shadow-2xl overflow-hidden z-50"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Dropdown Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-white font-bold">
                  Select Your City
                </div>

                {/* Search Input */}
                <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                  <div className="relative flex items-center">
                    <svg className="absolute left-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search city..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm font-medium"
                      autoFocus
                    />
                    {searchText && (
                      <motion.button
                        onClick={() => setSearchText('')}
                        className="absolute right-3 text-gray-400 hover:text-gray-600"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Scrollable Cities List */}
                <motion.div
                  className="max-h-96 overflow-y-auto city-list-scroll"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.01,
                      },
                    },
                  }}
                >
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setLocation(city);
                          handleDropdownClose();
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-green-50 border-b border-gray-100 transition-all duration-200 font-medium text-gray-700 hover:text-green-600 hover:pl-6"
                        variants={itemVariants}
                        whileHover={{
                          x: 5,
                          backgroundColor: '#f0fdf4',
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>{city}</span>
                        </div>
                      </motion.button>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-center text-gray-500 font-medium">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      No cities found
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Button */}
        <motion.button 
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 font-bold transition shadow-lg shadow-green-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;

