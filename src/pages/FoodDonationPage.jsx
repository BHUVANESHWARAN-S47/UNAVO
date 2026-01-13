import React, { useState, useEffect } from 'react';
import { useFoodDonation } from '../context/FoodDonationContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FoodDonationPage = () => {
  const {
    charities,
    donations,
    alerts,
    findNearbyCharities,
    createDonation,
    updateDonationStatus,
    uploadDonationPhoto,
    generateTaxDocument,
    markAlertAsRead,
  } = useFoodDonation();

  const [userLocation, setUserLocation] = useState({ lat: 28.6139, lng: 77.2090 });
  const [activeTab, setActiveTab] = useState('browse'); // browse, donations, alerts
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [nearbyCharities, setNearbyCharities] = useState([]);
  const [newDonationForm, setNewDonationForm] = useState({
    restaurantId: 'rest-1',
    restaurantName: 'Sample Restaurant',
    foodItems: [{ name: '', quantity: '', unit: 'portions', type: 'cooked' }],
  });
  const [showQRCode, setShowQRCode] = useState(null);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.log('Using default location');
        }
      );
    }
  }, []);

  useEffect(() => {
    const nearby = findNearbyCharities(userLocation.lat, userLocation.lng, 15);
    setNearbyCharities(nearby);
  }, [userLocation, findNearbyCharities]);

  const handleAddFoodItem = () => {
    setNewDonationForm({
      ...newDonationForm,
      foodItems: [
        ...newDonationForm.foodItems,
        { name: '', quantity: '', unit: 'portions', type: 'cooked' },
      ],
    });
  };

  const handleFoodItemChange = (index, field, value) => {
    const newItems = [...newDonationForm.foodItems];
    newItems[index][field] = value;
    setNewDonationForm({ ...newDonationForm, foodItems: newItems });
  };

  const handleCreateDonation = (charityId) => {
    if (newDonationForm.foodItems.every(item => item.name && item.quantity)) {
      const donation = createDonation(
        newDonationForm.restaurantId,
        newDonationForm.restaurantName,
        userLocation,
        charityId,
        newDonationForm.foodItems
      );
      setShowQRCode(donation.id);
      setNewDonationForm({
        restaurantId: 'rest-1',
        restaurantName: 'Sample Restaurant',
        foodItems: [{ name: '', quantity: '', unit: 'portions', type: 'cooked' }],
      });
      alert('Donation created successfully! Share the QR code with the charity.');
    } else {
      alert('Please fill all food item details');
    }
  };

  const handlePhotoUpload = (e, donationId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        uploadDonationPhoto(donationId, reader.result);
        setUploadedPhoto(donationId);
        alert('Photo uploaded and donation verified!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateTaxDoc = (donationId) => {
    const taxDoc = generateTaxDocument(donationId);
    // In a real app, this would generate a PDF
    console.log('Tax Document:', taxDoc);
    alert(`Tax document generated! Document ID: ${taxDoc.documentId}`);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 min-h-screen">
      <Navbar />

      <div className="pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              🤝 Food Donation Network
            </h1>
            <p className="text-xl text-green-200 mb-8">
              Connect surplus food with charities and food banks. Make a difference while reducing waste!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">{charities.length}</p>
                <p className="text-sm">Charities & NGOs</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">{donations.filter(d => d.status === 'completed').length}</p>
                <p className="text-sm">Completed Donations</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">{alerts.filter(a => !a.read).length}</p>
                <p className="text-sm">New Alerts</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 justify-center flex-wrap">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'browse'
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              🏥 Browse Charities
            </button>
            <button
              onClick={() => setActiveTab('donations')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'donations'
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              📦 My Donations ({donations.length})
            </button>
            <button
              onClick={() => setActiveTab('alerts')}
              className={`px-6 py-3 rounded-lg font-bold transition relative ${
                activeTab === 'alerts'
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              🔔 Real-time Alerts
              {alerts.filter(a => !a.read).length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {alerts.filter(a => !a.read).length}
                </span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'browse' && (
            <div className="space-y-6">
              {nearbyCharities.length === 0 ? (
                <div className="bg-slate-800 rounded-xl p-12 text-center">
                  <p className="text-white text-lg">No charities found nearby.</p>
                </div>
              ) : (
                nearbyCharities.map((charity) => (
                  <div key={charity.id} className="bg-slate-800 rounded-xl p-6 hover:shadow-2xl hover:shadow-green-500/30 transition">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Charity Info */}
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-2">{charity.name}</h3>
                        <div className="space-y-2 mb-4">
                          <p className="text-gray-300">
                            <span className="font-semibold">Type:</span> {charity.type}
                          </p>
                          <p className="text-gray-300">
                            <span className="font-semibold">Address:</span> {charity.address}
                          </p>
                          <p className="text-gray-300">
                            <span className="font-semibold">Distance:</span> {charity.distance?.toFixed(2)} km
                          </p>
                          <p className="text-gray-300">
                            <span className="font-semibold">Phone:</span> {charity.phone}
                          </p>
                          <p className="text-gray-300">
                            <span className="font-semibold">Accepted Food Types:</span>{' '}
                            {charity.acceptedFoodTypes.join(', ')}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-yellow-400 text-lg">⭐ {charity.rating}/5</span>
                          <span className="text-gray-400">({charity.reviews} reviews)</span>
                        </div>

                        {/* Tax ID Badge */}
                        <div className="bg-green-600/20 border border-green-500 rounded-lg p-3 inline-block">
                          <p className="text-green-300 text-sm">
                            ✓ Tax ID: {charity.taxId}
                          </p>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex flex-col justify-center">
                        <button
                          onClick={() => setSelectedCharity(charity)}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition mb-3"
                        >
                          Donate Food
                        </button>
                        <button className="bg-slate-700 text-white font-bold py-3 rounded-lg hover:bg-slate-600 transition">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Donation Form Modal */}
              {selectedCharity && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                  <div className="bg-slate-800 rounded-xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Donate to {selectedCharity.name}
                    </h2>

                    {/* Food Items */}
                    <div className="space-y-4 mb-6">
                      {newDonationForm.foodItems.map((item, index) => (
                        <div key={index} className="bg-slate-700 p-4 rounded-lg">
                          <input
                            type="text"
                            placeholder="Food Item Name"
                            value={item.name}
                            onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)}
                            className="w-full px-3 py-2 bg-slate-600 text-white rounded mb-2 placeholder-gray-400"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="number"
                              placeholder="Quantity"
                              value={item.quantity}
                              onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
                              className="px-3 py-2 bg-slate-600 text-white rounded placeholder-gray-400"
                            />
                            <select
                              value={item.unit}
                              onChange={(e) => handleFoodItemChange(index, 'unit', e.target.value)}
                              className="px-3 py-2 bg-slate-600 text-white rounded"
                            >
                              <option>portions</option>
                              <option>kg</option>
                              <option>liters</option>
                              <option>boxes</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleAddFoodItem}
                      className="w-full bg-slate-700 text-white py-2 rounded mb-6 hover:bg-slate-600"
                    >
                      + Add Food Item
                    </button>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleCreateDonation(selectedCharity.id)}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
                      >
                        Create Donation
                      </button>
                      <button
                        onClick={() => setSelectedCharity(null)}
                        className="flex-1 bg-slate-700 text-white font-bold py-3 rounded-lg hover:bg-slate-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="space-y-6">
              {donations.length === 0 ? (
                <div className="bg-slate-800 rounded-xl p-12 text-center">
                  <p className="text-white text-lg">No donations yet. Start donating today!</p>
                </div>
              ) : (
                donations.map((donation) => (
                  <div key={donation.id} className="bg-slate-800 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{donation.restaurantName}</h3>
                        <p className="text-gray-300">
                          <span className="font-semibold">To:</span> {donation.charityName}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold">Status:</span>{' '}
                          <span className={`font-bold ${
                            donation.status === 'completed' ? 'text-green-400' :
                            donation.status === 'verified' ? 'text-blue-400' :
                            'text-yellow-400'
                          }`}>
                            {donation.status.toUpperCase()}
                          </span>
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold">Value:</span> ₹{donation.estimatedBudgetValue}
                        </p>
                      </div>

                      <div>
                        <div className="bg-slate-700 p-4 rounded-lg mb-3">
                          <p className="text-gray-300 text-sm mb-2">Pickup Code:</p>
                          <p className="text-green-400 font-bold text-lg">{donation.pickupVerificationCode}</p>
                        </div>
                        <button
                          onClick={() => {
                            const qrText = `https://donation.unavo.com/${donation.qrCode}`;
                            console.log('QR Code:', qrText);
                            alert(`QR Code: ${donation.qrCode}`);
                          }}
                          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                          📱 View QR Code
                        </button>
                      </div>
                    </div>

                    {/* Food Items */}
                    <div className="mb-4 bg-slate-700 p-4 rounded-lg">
                      <p className="text-white font-bold mb-2">Food Items:</p>
                      <ul className="text-gray-300 space-y-1">
                        {donation.foodItems.map((item, idx) => (
                          <li key={idx}>
                            • {item.quantity} {item.unit} of {item.name} ({item.type})
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 flex-wrap">
                      {donation.status !== 'verified' && (
                        <label className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer font-bold">
                          📷 Upload Photo
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handlePhotoUpload(e, donation.id)}
                            className="hidden"
                          />
                        </label>
                      )}
                      {uploadedPhoto === donation.id && (
                        <span className="text-green-400 font-bold">✓ Photo Verified</span>
                      )}
                      <button
                        onClick={() => handleGenerateTaxDoc(donation.id)}
                        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 font-bold"
                      >
                        📄 Tax Document
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-4">
              {alerts.length === 0 ? (
                <div className="bg-slate-800 rounded-xl p-12 text-center">
                  <p className="text-white text-lg">No alerts yet.</p>
                </div>
              ) : (
                alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg ${
                      alert.read ? 'bg-slate-700 opacity-50' : 'bg-gradient-to-r from-yellow-600 to-orange-600'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-bold">{alert.message}</p>
                        <p className="text-gray-300 text-sm mt-2">
                          {new Date(alert.createdAt).toLocaleString()}
                        </p>
                      </div>
                      {!alert.read && (
                        <button
                          onClick={() => markAlertAsRead(alert.id)}
                          className="bg-white text-orange-600 px-3 py-1 rounded font-bold hover:bg-gray-100"
                        >
                          Mark Read
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FoodDonationPage;
