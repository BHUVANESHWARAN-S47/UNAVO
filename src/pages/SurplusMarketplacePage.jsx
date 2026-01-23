import React, { useState, useEffect } from 'react';
import { useSurplusMarketplace } from '../context/SurplusMarketplaceContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SurplusMarketplacePage = () => {
  const { getActiveSurplusListings, getNearbyListings, purchaseSurplusItem } = useSurplusMarketplace();
  const [listings, setListings] = useState([]);
  const [userLocation, setUserLocation] = useState({ lat: 28.6139, lng: 77.2090 }); // Default Delhi
  const [selectedRadius, setSelectedRadius] = useState(5);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Try to get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // Use default location if geolocation fails
          console.log('Using default location');
        }
      );
    }
  }, []);

  useEffect(() => {
    const nearbyListings = getNearbyListings(userLocation.lat, userLocation.lng, selectedRadius);
    setListings(nearbyListings);
  }, [selectedRadius, userLocation, getNearbyListings]);

  const handleAddToCart = (listing, item) => {
    const cartItem = {
      id: `surplus-${listing.id}-${item.id}`,
      listingId: listing.id,
      itemId: item.id,
      name: item.name,
      originalPrice: item.originalPrice,
      discountedPrice: item.discountedPrice,
      discount: item.discount,
      quantity: 1,
      restaurantName: listing.restaurantName,
      restaurantId: listing.restaurantId,
      expiresAt: item.expiresAt,
    };
    setCartItems([...cartItems, cartItem]);
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCartItems(cartItems.filter(item => item.id !== cartItemId));
  };

  const filteredListings = listings.filter(listing =>
    listing.foodItems.some(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalSavings = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.discountedPrice) * item.quantity,
    0
  );

  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              🎉 Surplus Marketplace
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Save up to 80% on delicious food from nearby restaurants in their final hours before closing!
            </p>
            <div className="bg-gradient-to-r from-orange-400 to-amber-400 text-white p-6 rounded-xl inline-block shadow-lg">
              <p className="text-lg font-bold">💰 Total Savings: ₹{totalSavings.toFixed(2)}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-24 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>

                {/* Search */}
                <div className="mb-6">
                  <label className="text-gray-700 font-semibold mb-2 block">Search Food</label>
                  <input
                    type="text"
                    placeholder="Search for food..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>

                {/* Radius Filter */}
                <div className="mb-6">
                  <label className="text-gray-700 font-semibold mb-3 block">
                    Distance Radius: {selectedRadius} km
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={selectedRadius}
                    onChange={(e) => setSelectedRadius(parseInt(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 rounded-xl p-4">
                  <p className="text-gray-800 text-sm font-semibold mb-2">
                    📍 Active Listings: {filteredListings.length}
                  </p>
                  <p className="text-gray-800 text-sm">
                    🛒 Cart Items: {cartItems.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Listings */}
              <div className="space-y-6">
                {filteredListings.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-200">
                    <p className="text-gray-800 text-lg font-semibold">No surplus food available in your area.</p>
                    <p className="text-gray-600 mt-2">Try increasing the search radius.</p>
                  </div>
                ) : (
                  filteredListings.map((listing) => (
                    <div key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          🍽️ {listing.restaurantName}
                        </h3>

                        {/* Food Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {listing.foodItems.map((item) => (
                            <div key={item.id} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition border border-orange-200 shadow">
                              <div className="h-48 bg-gradient-to-br from-orange-300 to-amber-300 relative overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/300?text=${item.name}`;
                                  }}
                                />
                                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                  -{item.discount}%
                                </div>
                                <div className="absolute bottom-2 left-2 bg-emerald-500 text-white px-2 py-1 rounded text-xs font-semibold shadow">
                                  ⏰ Expires in {Math.round((item.expiresAt - new Date()) / 60000)} mins
                                </div>
                              </div>

                              <div className="p-4">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h4>
                                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                <p className="text-gray-500 text-sm mb-3">Available: {item.quantity} units</p>

                                {/* Price Section */}
                                <div className="flex items-center justify-between mb-4">
                                  <div>
                                    <p className="text-gray-400 line-through text-sm">₹{item.originalPrice}</p>
                                    <p className="text-2xl font-bold text-emerald-600">₹{item.discountedPrice}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-emerald-600 font-bold text-lg">
                                      Save ₹{(item.originalPrice - item.discountedPrice)}
                                    </p>
                                  </div>
                                </div>

                                {item.quantity > 0 ? (
                                  <button
                                    onClick={() => handleAddToCart(listing, item)}
                                    className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white font-bold py-2 rounded-lg hover:shadow-lg hover:from-orange-500 hover:to-amber-500 transition"
                                  >
                                    Add to Cart
                                  </button>
                                ) : (
                                  <button disabled className="w-full bg-gray-300 text-gray-500 font-bold py-2 rounded-lg cursor-not-allowed">
                                    Out of Stock
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Cart Section */}
          {cartItems.length > 0 && (
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cartItems.map((cartItem) => (
                  <div key={cartItem.id} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 flex justify-between items-center shadow">
                    <div>
                      <p className="text-gray-800 font-bold">{cartItem.name}</p>
                      <p className="text-gray-600 text-sm">{cartItem.restaurantName}</p>
                      <p className="text-emerald-600 font-bold">₹{cartItem.discountedPrice}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl shadow-lg">
                <p className="text-white text-lg font-bold">
                  Total Savings: ₹{totalSavings.toFixed(2)} 💰
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SurplusMarketplacePage;
