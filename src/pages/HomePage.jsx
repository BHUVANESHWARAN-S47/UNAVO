import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';
import { categories, restaurants } from '../data/dummyData';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Delivery', 'Dining Out', 'Pure Veg', 'Offers'];
  const collections = [
    { id: 1, name: 'Top Rated', image: '/mutton biryani.jpg', count: '24 Places' },
    { id: 2, name: 'Trending This Week', image: '/chicken bbq pizza.jpg', count: '18 Places' },
    { id: 3, name: 'Best Breakfast', image: '/idli.jpg', count: '15 Places' },
    { id: 4, name: 'Late Night', image: '/grill.jpg', count: '12 Places' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Zomato Style */}
      <section className="relative bg-white">
        <div className="relative h-[450px] bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              UNAVO
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white mb-8"
            >
              Discover the best food & drinks near you
            </motion.p>

            {/* Search Bar - Zomato Style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-3xl"
            >
              <div className="flex flex-col md:flex-row gap-2 bg-white rounded-lg shadow-2xl p-2">
                <div className="flex items-center flex-1 px-4 py-3 border-r border-gray-200">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <select className="flex-1 outline-none text-gray-700 bg-transparent">
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Tamil Nadu</option>
                  </select>
                </div>
                
                <div className="flex items-center flex-[2] px-4 py-3">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links - Zomato Style */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'pizza.jpg', title: 'Order Online', subtitle: 'Stay home and order', color: 'bg-orange-50', textColor: 'text-orange-600' },
              { icon: 'dine in.jpg', title: 'Dining', subtitle: 'View restaurants', color: 'bg-blue-50', textColor: 'text-blue-600' },
              { icon: 'home-food.jpg', title: 'Live Events', subtitle: 'Explore happenings', color: 'bg-pink-50', textColor: 'text-pink-600' },
              { icon: 'grill.jpg', title: 'Pro', subtitle: 'Member benefits', color: 'bg-purple-50', textColor: 'text-purple-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 cursor-pointer border-2 border-gray-100 hover:border-emerald-200 transition"
              >
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center overflow-hidden mb-4`}>
                  <img src={`/${item.icon}`} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className={`font-bold text-lg ${item.textColor} mb-1`}>{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections - Zomato Style */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Collections</h2>
          <p className="text-gray-600 mb-6">
            Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                whileHover={{ scale: 1.03 }}
                className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                  <p className="text-sm opacity-90">{collection.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Zomato Style */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Categories</h2>
          
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/category/${category.name}`)}
                className="flex-shrink-0 cursor-pointer text-center"
              >
                <div className="w-36 h-36 rounded-full bg-white shadow-md hover:shadow-lg transition overflow-hidden mb-3">
                  <img src={category.image || `/${category.name.toLowerCase()}.jpg`} alt={category.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = '/pizza.jpg'; }} />
                </div>
                <p className="font-semibold text-gray-700">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters - Zomato Style */}
      <section className="bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
                  activeFilter === filter
                    ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
            <button className="px-6 py-2 rounded-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 whitespace-nowrap flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
        </div>
      </section>

      {/* Restaurants Grid - Zomato Style */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Inspiration for your first order</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
