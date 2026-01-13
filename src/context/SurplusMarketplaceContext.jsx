import React, { createContext, useState, useContext, useCallback } from 'react';

const SurplusMarketplaceContext = createContext();

export const SurplusMarketplaceProvider = ({ children }) => {
  const [surplusListings, setSurplusListings] = useState([
    {
      id: 'surplus-1',
      restaurantId: 'rest-1',
      restaurantName: 'The Burger Joint',
      restaurantLocation: { lat: 28.6139, lng: 77.2090 },
      foodItems: [
        {
          id: 'burger-surplus-1',
          name: 'Cheese Burgers',
          originalPrice: 250,
          discountedPrice: 75,
          discount: 70,
          quantity: 5,
          image: 'https://via.placeholder.com/200?text=Cheese+Burger',
          description: 'Fresh beef burgers with cheese',
          expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
          createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 mins ago
        },
        {
          id: 'fries-surplus-1',
          name: 'French Fries',
          originalPrice: 100,
          discountedPrice: 20,
          discount: 80,
          quantity: 10,
          image: 'https://via.placeholder.com/200?text=French+Fries',
          description: 'Crispy golden fries',
          expiresAt: new Date(Date.now() + 45 * 60 * 1000), // 45 mins
          createdAt: new Date(Date.now() - 15 * 60 * 1000), // 15 mins ago
        },
      ],
      status: 'active',
    },
    {
      id: 'surplus-2',
      restaurantId: 'rest-2',
      restaurantName: 'Pasta Paradise',
      restaurantLocation: { lat: 28.5244, lng: 77.1855 },
      foodItems: [
        {
          id: 'pasta-surplus-1',
          name: 'Spaghetti Carbonara',
          originalPrice: 350,
          discountedPrice: 87,
          discount: 75,
          quantity: 3,
          image: 'https://via.placeholder.com/200?text=Spaghetti+Carbonara',
          description: 'Creamy Italian pasta',
          expiresAt: new Date(Date.now() + 90 * 60 * 1000), // 90 mins
          createdAt: new Date(),
        },
      ],
      status: 'active',
    },
  ]);

  const [surplusOrders, setSurplusOrders] = useState([]);

  const addSurplusListing = useCallback((restaurantId, restaurantName, restaurantLocation, foodItems) => {
    const newListing = {
      id: `surplus-${Date.now()}`,
      restaurantId,
      restaurantName,
      restaurantLocation,
      foodItems: foodItems.map(item => ({
        ...item,
        id: `${item.name}-${Date.now()}`,
        createdAt: new Date(),
      })),
      status: 'active',
      createdAt: new Date(),
    };
    setSurplusListings(prev => [...prev, newListing]);
    return newListing;
  }, []);

  const removeSurplusListing = useCallback((listingId) => {
    setSurplusListings(prev => prev.filter(l => l.id !== listingId));
  }, []);

  const updateSurplusItem = useCallback((listingId, itemId, updates) => {
    setSurplusListings(prev =>
      prev.map(listing =>
        listing.id === listingId
          ? {
              ...listing,
              foodItems: listing.foodItems.map(item =>
                item.id === itemId ? { ...item, ...updates } : item
              ),
            }
          : listing
      )
    );
  }, []);

  const purchaseSurplusItem = useCallback((listingId, itemId, quantity, customerId) => {
    const order = {
      id: `order-${Date.now()}`,
      listingId,
      itemId,
      quantity,
      customerId,
      purchasedAt: new Date(),
      status: 'completed',
    };
    setSurplusOrders(prev => [...prev, order]);
    
    // Update inventory
    updateSurplusItem(listingId, itemId, { quantity: (item) => item.quantity - quantity });
    return order;
  }, [updateSurplusItem]);

  const getActiveSurplusListings = useCallback(() => {
    return surplusListings.filter(listing => 
      listing.status === 'active' && 
      listing.foodItems.some(item => item.quantity > 0 && item.expiresAt > new Date())
    );
  }, [surplusListings]);

  const getSurplusListingsByRestaurant = useCallback((restaurantId) => {
    return surplusListings.filter(listing => listing.restaurantId === restaurantId);
  }, [surplusListings]);

  const getNearbyListings = useCallback((latitude, longitude, radiusKm = 5) => {
    const getDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Earth's radius in km
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    return getActiveSurplusListings().filter(listing => {
      const distance = getDistance(
        latitude,
        longitude,
        listing.restaurantLocation.lat,
        listing.restaurantLocation.lng
      );
      return distance <= radiusKm;
    });
  }, [getActiveSurplusListings]);

  return (
    <SurplusMarketplaceContext.Provider
      value={{
        surplusListings,
        surplusOrders,
        addSurplusListing,
        removeSurplusListing,
        updateSurplusItem,
        purchaseSurplusItem,
        getActiveSurplusListings,
        getSurplusListingsByRestaurant,
        getNearbyListings,
      }}
    >
      {children}
    </SurplusMarketplaceContext.Provider>
  );
};

export const useSurplusMarketplace = () => {
  const context = useContext(SurplusMarketplaceContext);
  if (!context) {
    throw new Error('useSurplusMarketplace must be used within SurplusMarketplaceProvider');
  }
  return context;
};
