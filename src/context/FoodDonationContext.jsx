import React, { createContext, useState, useContext, useCallback } from 'react';

const FoodDonationContext = createContext();

export const FoodDonationProvider = ({ children }) => {
  const [charities, setCharities] = useState([
    {
      id: 'charity-1',
      name: 'Food for All Foundation',
      type: 'Food Bank',
      location: { lat: 28.6139, lng: 77.2090 },
      address: '123 Relief Street, Delhi',
      phone: '+91-9876543210',
      email: 'contact@foodforall.org',
      acceptedFoodTypes: ['cooked', 'packaged', 'vegetables', 'fruits'],
      taxId: 'TAX123456',
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 'charity-2',
      name: 'Hunger Relief NGO',
      type: 'NGO',
      location: { lat: 28.5244, lng: 77.1855 },
      address: '456 Welfare Lane, Delhi',
      phone: '+91-9876543211',
      email: 'info@hungerrelief.org',
      acceptedFoodTypes: ['cooked', 'vegetables', 'bread', 'dairy'],
      taxId: 'TAX123457',
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 'charity-3',
      name: 'Community Kitchen',
      type: 'Community Center',
      location: { lat: 28.6353, lng: 77.2245 },
      address: '789 Community Road, Delhi',
      phone: '+91-9876543212',
      email: 'help@communitykitchen.org',
      acceptedFoodTypes: ['cooked', 'packaged', 'vegetables', 'fruits', 'bread'],
      taxId: 'TAX123458',
      rating: 4.9,
      reviews: 234,
    },
  ]);

  const [donations, setDonations] = useState([
    {
      id: 'donation-1',
      restaurantId: 'rest-1',
      restaurantName: 'The Burger Joint',
      charityId: 'charity-1',
      charityName: 'Food for All Foundation',
      foodItems: [
        {
          name: 'Chicken Biryani',
          quantity: 10,
          unit: 'portions',
          type: 'cooked',
          expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
        },
      ],
      status: 'scheduled',
      scheduledPickup: new Date(Date.now() + 1.5 * 60 * 60 * 1000),
      qrCode: 'DONATION-1-QR-' + Math.random().toString(36).substr(2, 9),
      pickupVerificationCode: Math.random().toString(36).substr(2, 6).toUpperCase(),
      photoUrl: null,
      createdAt: new Date(),
      totalCaloricValue: 2500,
      estimatedBudgetValue: 500,
    },
  ]);

  const [alerts, setAlerts] = useState([]);

  const addCharity = useCallback((charityData) => {
    const newCharity = {
      id: `charity-${Date.now()}`,
      ...charityData,
      rating: 5,
      reviews: 0,
    };
    setCharities(prev => [...prev, newCharity]);
    return newCharity;
  }, []);

  const findNearbyCharities = useCallback((latitude, longitude, radiusKm = 10) => {
    const getDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    return charities
      .map(charity => ({
        ...charity,
        distance: getDistance(latitude, longitude, charity.location.lat, charity.location.lng),
      }))
      .filter(charity => charity.distance <= radiusKm)
      .sort((a, b) => a.distance - b.distance);
  }, [charities]);

  const matchCharitiesForFood = useCallback((foodTypes, restaurantLocation) => {
    return findNearbyCharities(
      restaurantLocation.lat,
      restaurantLocation.lng,
      15 // 15 km radius for matching
    )
      .filter(charity =>
        foodTypes.some(type => charity.acceptedFoodTypes.includes(type))
      )
      .sort((a, b) => b.rating - a.rating);
  }, [findNearbyCharities]);

  const createDonation = useCallback((restaurantId, restaurantName, restaurantLocation, charityId, foodItems) => {
    const newDonation = {
      id: `donation-${Date.now()}`,
      restaurantId,
      restaurantName,
      charityId,
      charityName: charities.find(c => c.id === charityId)?.name || 'Unknown Charity',
      foodItems,
      status: 'pending',
      scheduledPickup: new Date(Date.now() + 2 * 60 * 60 * 1000),
      qrCode: 'DONATION-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
      pickupVerificationCode: Math.random().toString(36).substr(2, 6).toUpperCase(),
      photoUrl: null,
      createdAt: new Date(),
      totalCaloricValue: 0,
      estimatedBudgetValue: foodItems.reduce((sum, item) => sum + (item.estimatedValue || 100), 0),
    };
    setDonations(prev => [...prev, newDonation]);
    
    // Create real-time alert
    const alert = {
      id: `alert-${Date.now()}`,
      type: 'new_donation',
      donationId: newDonation.id,
      charityId,
      message: `New food donation available: ${foodItems.map(f => f.name).join(', ')}`,
      createdAt: new Date(),
      read: false,
    };
    setAlerts(prev => [...prev, alert]);

    return newDonation;
  }, [charities]);

  const updateDonationStatus = useCallback((donationId, status, updates = {}) => {
    setDonations(prev =>
      prev.map(donation =>
        donation.id === donationId
          ? { ...donation, status, ...updates, updatedAt: new Date() }
          : donation
      )
    );
  }, []);

  const uploadDonationPhoto = useCallback((donationId, photoUrl) => {
    updateDonationStatus(donationId, 'verified', { photoUrl });
  }, [updateDonationStatus]);

  const generateTaxDocument = useCallback((donationId) => {
    const donation = donations.find(d => d.id === donationId);
    if (!donation) return null;

    const taxDoc = {
      documentId: `TAX-DOC-${Date.now()}`,
      donationId,
      restaurantId: donation.restaurantId,
      restaurantName: donation.restaurantName,
      charityId: donation.charityId,
      charityName: donation.charityName,
      charityTaxId: charities.find(c => c.id === donation.charityId)?.taxId,
      foodItems: donation.foodItems,
      donationDate: donation.createdAt,
      estimatedValue: donation.estimatedBudgetValue,
      pickupDate: donation.scheduledPickup,
      qrCode: donation.qrCode,
      generatedAt: new Date(),
    };

    return taxDoc;
  }, [donations, charities]);

  const getDonationsByRestaurant = useCallback((restaurantId) => {
    return donations.filter(d => d.restaurantId === restaurantId);
  }, [donations]);

  const getDonationsByCharity = useCallback((charityId) => {
    return donations.filter(d => d.charityId === charityId);
  }, [donations]);

  const getAlerts = useCallback(() => {
    return alerts;
  }, [alerts]);

  const markAlertAsRead = useCallback((alertId) => {
    setAlerts(prev =>
      prev.map(alert =>
        alert.id === alertId ? { ...alert, read: true } : alert
      )
    );
  }, []);

  return (
    <FoodDonationContext.Provider
      value={{
        charities,
        donations,
        alerts,
        addCharity,
        findNearbyCharities,
        matchCharitiesForFood,
        createDonation,
        updateDonationStatus,
        uploadDonationPhoto,
        generateTaxDocument,
        getDonationsByRestaurant,
        getDonationsByCharity,
        getAlerts,
        markAlertAsRead,
      }}
    >
      {children}
    </FoodDonationContext.Provider>
  );
};

export const useFoodDonation = () => {
  const context = useContext(FoodDonationContext);
  if (!context) {
    throw new Error('useFoodDonation must be used within FoodDonationProvider');
  }
  return context;
};
