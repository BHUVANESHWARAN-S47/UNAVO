import React, { useState } from 'react';

const Navbar = () => {
  const [location, setLocation] = useState('Select Location');

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary-600">UNAVO</h1>
            
            {/* Location Selector */}
            <div className="hidden md:flex items-center space-x-2 border-b-2 border-gray-800 pb-1">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="text-sm font-medium text-gray-700 bg-transparent border-none outline-none cursor-pointer"
              >
                <option>Select Location</option>
                <option>Mumbai, Maharashtra</option>
                <option>Delhi, NCR</option>
                <option>Bangalore, Karnataka</option>
                <option>Hyderabad, Telangana</option>
                <option>Pune, Maharashtra</option>
              </select>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm font-medium">Search</span>
            </button>

            {/* Login Button */}
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md font-medium transition shadow-sm">
              Login
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
