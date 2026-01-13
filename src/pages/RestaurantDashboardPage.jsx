import React, { useState, useEffect } from 'react';
import { useSurplusMarketplace } from '../context/SurplusMarketplaceContext';
import { useFoodDonation } from '../context/FoodDonationContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RestaurantDashboardPage = () => {
  const {
    surplusListings,
    surplusOrders,
    addSurplusListing,
    getSurplusListingsByRestaurant,
    removeSurplusListing,
  } = useSurplusMarketplace();

  const {
    donations,
    charities,
    getDonationsByRestaurant,
    createDonation,
    matchCharitiesForFood,
  } = useFoodDonation();

  const [activeTab, setActiveTab] = useState('surplus');
  const [restaurantId] = useState('rest-1');
  const [restaurantName] = useState('My Restaurant');
  const [restaurantLocation] = useState({ lat: 28.6139, lng: 77.2090 });

  // Surplus Management
  const [newSurplus, setNewSurplus] = useState({
    foodItems: [
      {
        name: '',
        originalPrice: 0,
        discountPercentage: 50,
        quantity: 0,
        expiresInMinutes: 60,
      },
    ],
  });

  const [myListings, setMyListings] = useState([]);
  const [myDonations, setMyDonations] = useState([]);
  const [stats, setStats] = useState({
    totalSurplusSaved: 0,
    totalDonations: 0,
    totalDonationValue: 0,
  });

  useEffect(() => {
    const listings = getSurplusListingsByRestaurant(restaurantId);
    const donations = getDonationsByRestaurant(restaurantId);
    setMyListings(listings);
    setMyDonations(donations);

    // Calculate stats
    const totalSurplus = surplusOrders
      .filter(order => listings.some(l => l.id === order.listingId))
      .reduce((sum, order) => {
        const listing = listings.find(l => l.id === order.listingId);
        const item = listing?.foodItems.find(i => i.id === order.itemId);
        return sum + (item ? (item.originalPrice - item.discountedPrice) * order.quantity : 0);
      }, 0);

    const totalDonValue = donations.reduce((sum, d) => sum + d.estimatedBudgetValue, 0);

    setStats({
      totalSurplusSaved: totalSurplus,
      totalDonations: donations.length,
      totalDonationValue: totalDonValue,
    });
  }, [restaurantId, surplusOrders, getSurplusListingsByRestaurant, getDonationsByRestaurant, surplusListings]);

  const handleAddFoodItem = () => {
    setNewSurplus({
      ...newSurplus,
      foodItems: [
        ...newSurplus.foodItems,
        {
          name: '',
          originalPrice: 0,
          discountPercentage: 50,
          quantity: 0,
          expiresInMinutes: 60,
        },
      ],
    });
  };

  const handleFoodItemChange = (index, field, value) => {
    const newItems = [...newSurplus.foodItems];
    newItems[index][field] = value;
    setNewSurplus({ ...newSurplus, foodItems: newItems });
  };

  const handleCreateSurplusListing = () => {
    if (newSurplus.foodItems.every(item => item.name && item.originalPrice > 0 && item.quantity > 0)) {
      const foodItems = newSurplus.foodItems.map(item => ({
        name: item.name,
        originalPrice: parseFloat(item.originalPrice),
        discountedPrice: parseFloat(item.originalPrice) * (1 - item.discountPercentage / 100),
        discount: item.discountPercentage,
        quantity: parseInt(item.quantity),
        expiresAt: new Date(Date.now() + item.expiresInMinutes * 60 * 1000),
        image: `https://via.placeholder.com/200?text=${item.name}`,
        description: `${item.name} - Available for limited time!`,
      }));

      addSurplusListing(restaurantId, restaurantName, restaurantLocation, foodItems);
      setNewSurplus({
        foodItems: [
          {
            name: '',
            originalPrice: 0,
            discountPercentage: 50,
            quantity: 0,
            expiresInMinutes: 60,
          },
        ],
      });
      alert('Surplus listing created successfully!');
    } else {
      alert('Please fill all required fields');
    }
  };

  const handleDeleteListing = (listingId) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      removeSurplusListing(listingId);
    }
  };

  const handleCreateDonation = (charityId, foodItems) => {
    createDonation(restaurantId, restaurantName, restaurantLocation, charityId, foodItems);
    alert('Donation created successfully! The charity will be notified.');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
      <Navbar />

      <div className="pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              🏪 Restaurant Dashboard
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Manage surplus food listings and donations
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
                <p className="text-3xl font-bold">₹{stats.totalSurplusSaved.toFixed(0)}</p>
                <p className="text-sm">Revenue from Surplus Sales</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg">
                <p className="text-3xl font-bold">{stats.totalDonations}</p>
                <p className="text-sm">Total Donations Made</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
                <p className="text-3xl font-bold">₹{stats.totalDonationValue}</p>
                <p className="text-sm">Est. Tax Deduction Value</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 justify-center flex-wrap">
            <button
              onClick={() => setActiveTab('surplus')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'surplus'
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              🍔 Surplus Listings
            </button>
            <button
              onClick={() => setActiveTab('donations')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'donations'
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              🤝 Donations
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'analytics'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              📊 Analytics
            </button>
          </div>

          {/* Surplus Tab */}
          {activeTab === 'surplus' && (
            <div className="space-y-8">
              {/* Create New Listing */}
              <div className="bg-slate-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Create Surplus Listing</h2>

                {/* Food Items */}
                <div className="space-y-4 mb-6">
                  {newSurplus.foodItems.map((item, index) => (
                    <div key={index} className="bg-slate-700 p-6 rounded-lg">
                      <h3 className="text-white font-bold mb-4">Food Item {index + 1}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <label className="text-gray-300 block text-sm font-semibold mb-2">
                            Food Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., Chicken Biryani"
                            value={item.name}
                            onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)}
                            className="w-full px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 block text-sm font-semibold mb-2">
                            Original Price (₹)
                          </label>
                          <input
                            type="number"
                            placeholder="e.g., 250"
                            value={item.originalPrice}
                            onChange={(e) => handleFoodItemChange(index, 'originalPrice', e.target.value)}
                            className="w-full px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 block text-sm font-semibold mb-2">
                            Discount (%)
                          </label>
                          <input
                            type="number"
                            min="50"
                            max="80"
                            placeholder="e.g., 50"
                            value={item.discountPercentage}
                            onChange={(e) => handleFoodItemChange(index, 'discountPercentage', e.target.value)}
                            className="w-full px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 block text-sm font-semibold mb-2">
                            Quantity
                          </label>
                          <input
                            type="number"
                            placeholder="e.g., 10"
                            value={item.quantity}
                            onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
                            className="w-full px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 block text-sm font-semibold mb-2">
                            Expires In (Minutes)
                          </label>
                          <input
                            type="number"
                            placeholder="e.g., 60"
                            value={item.expiresInMinutes}
                            onChange={(e) => handleFoodItemChange(index, 'expiresInMinutes', e.target.value)}
                            className="w-full px-4 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div className="flex items-end">
                          <div className="bg-orange-600/20 border border-orange-500 rounded px-3 py-2 w-full text-center">
                            <p className="text-orange-300 text-sm font-semibold">
                              Final Price: ₹{(item.originalPrice * (1 - item.discountPercentage / 100)).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddFoodItem}
                    className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 font-bold"
                  >
                    + Add Food Item
                  </button>
                  <button
                    onClick={handleCreateSurplusListing}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg font-bold"
                  >
                    Create Listing
                  </button>
                </div>
              </div>

              {/* Active Listings */}
              <div className="bg-slate-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Active Listings ({myListings.length})</h2>

                {myListings.length === 0 ? (
                  <p className="text-gray-400">No active listings. Create one above!</p>
                ) : (
                  <div className="space-y-4">
                    {myListings.map((listing) => (
                      <div key={listing.id} className="bg-slate-700 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-white font-bold text-lg">
                              {listing.foodItems.map(f => f.name).join(', ')}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              Listed {Math.round((new Date() - listing.createdAt) / 60000)} minutes ago
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeleteListing(listing.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold"
                          >
                            Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <p className="text-gray-300">
                            <span className="font-semibold">Items:</span> {listing.foodItems.length}
                          </p>
                          <p className="text-gray-300">
                            <span className="font-semibold">Orders:</span> {surplusOrders.filter(o => o.listingId === listing.id).length}
                          </p>
                          <p className="text-green-400 font-semibold">
                            ₹{listing.foodItems.reduce((sum, f) => sum + (f.originalPrice - f.discountedPrice) * f.quantity, 0)}
                          </p>
                          <p className="text-orange-400 font-semibold">
                            Avg -${listing.foodItems[0]?.discount}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Donations Tab */}
          {activeTab === 'donations' && (
            <div className="space-y-8">
              {/* Smart Charity Matching */}
              <div className="bg-slate-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Smart Charity Matching</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {matchCharitiesForFood(['cooked', 'packaged'], restaurantLocation).slice(0, 3).map((charity) => (
                    <div key={charity.id} className="bg-slate-700 p-4 rounded-lg border-2 border-green-500/50">
                      <h3 className="text-white font-bold mb-2">{charity.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">📍 {charity.distance.toFixed(1)} km away</p>
                      <p className="text-yellow-400 mb-3">⭐ {charity.rating}/5</p>
                      <button
                        onClick={() => {
                          const foodItems = [
                            { name: 'Example Food', quantity: 5, type: 'cooked', expiresAt: new Date() }
                          ];
                          handleCreateDonation(charity.id, foodItems);
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-bold"
                      >
                        Donate to {charity.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Donations */}
              <div className="bg-slate-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">My Donations ({myDonations.length})</h2>

                {myDonations.length === 0 ? (
                  <p className="text-gray-400">No donations yet. Start making a difference!</p>
                ) : (
                  <div className="space-y-4">
                    {myDonations.map((donation) => (
                      <div key={donation.id} className="bg-slate-700 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-white font-bold text-lg">{donation.charityName}</h3>
                            <p className="text-gray-400 text-sm">
                              {donation.foodItems.map(f => f.name).join(', ')}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            donation.status === 'completed' ? 'bg-green-600 text-white' :
                            donation.status === 'verified' ? 'bg-blue-600 text-white' :
                            'bg-yellow-600 text-white'
                          }`}>
                            {donation.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          <span className="font-semibold">Est. Value:</span> ₹{donation.estimatedBudgetValue}
                        </p>
                        <p className="text-gray-300 text-sm">
                          <span className="font-semibold">Pickup Code:</span> {donation.pickupVerificationCode}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="bg-slate-800 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Performance Analytics</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Surplus Marketplace Stats */}
                <div className="bg-slate-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-6">📊 Surplus Marketplace</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-600">
                      <p className="text-gray-300">Active Listings</p>
                      <p className="text-orange-400 font-bold text-lg">{myListings.length}</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-600">
                      <p className="text-gray-300">Total Orders</p>
                      <p className="text-blue-400 font-bold text-lg">
                        {surplusOrders.filter(o => myListings.some(l => l.id === o.listingId)).length}
                      </p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-600">
                      <p className="text-gray-300">Revenue Generated</p>
                      <p className="text-green-400 font-bold text-lg">₹{stats.totalSurplusSaved}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-300">Avg Discount</p>
                      <p className="text-yellow-400 font-bold text-lg">
                        {myListings.length > 0 
                          ? `${Math.round(myListings[0]?.foodItems[0]?.discount || 0)}%`
                          : 'N/A'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Food Donation Stats */}
                <div className="bg-slate-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-6">🤝 Food Donation</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-600">
                      <p className="text-gray-300">Total Donations</p>
                      <p className="text-green-400 font-bold text-lg">{stats.totalDonations}</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-600">
                      <p className="text-gray-300">Estimated Value</p>
                      <p className="text-green-400 font-bold text-lg">₹{stats.totalDonationValue}</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-600">
                      <p className="text-gray-300">Tax Deduction Value</p>
                      <p className="text-purple-400 font-bold text-lg">₹{(stats.totalDonationValue * 1.5).toFixed(0)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-300">Charities Partnered</p>
                      <p className="text-yellow-400 font-bold text-lg">{charities.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Summary */}
              <div className="mt-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-white font-bold mb-3">🌍 Your Impact</h3>
                <p className="text-gray-300 mb-4">
                  By using UNAVO's surplus marketplace and donation network, you are:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>✅ Reducing food waste by {stats.totalDonations > 0 ? '40-60%' : 'up to 60%'}</li>
                  <li>✅ Helping {Math.round(stats.totalDonationValue / 20)} people in need</li>
                  <li>✅ Earning tax deductions of ₹{(stats.totalDonationValue * 1.5).toFixed(0)}</li>
                  <li>✅ Generating additional revenue of ₹{stats.totalSurplusSaved}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RestaurantDashboardPage;
