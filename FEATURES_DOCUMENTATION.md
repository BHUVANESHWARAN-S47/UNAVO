# UNAVO - Surplus Marketplace & Food Donation System

## 🎉 Features Implemented

### 1. **End-of-Day Surplus Marketplace**
A feature that allows restaurants to list unsold food at steep discounts (50-80% off) during the last 1-2 hours before closing.

#### Key Features:
- **Real-time Listings**: Restaurants can create surplus food listings with custom prices and discounts
- **Location-based Discovery**: Users can find surplus food from nearby restaurants within a customizable radius (1-20 km)
- **Countdown Timers**: Each item shows time remaining before expiration
- **Steep Discounts**: 50-80% off original prices to incentivize quick purchases
- **Cart System**: Users can add multiple items to cart and see total savings
- **Smart Matching**: GPS-based matching finds the closest restaurants with available surplus food

#### Routes:
- **User**: `/surplus-marketplace` - Browse and purchase surplus food
- **Restaurant**: `/restaurant-dashboard` (Surplus tab) - Create and manage listings

#### Technical Components:
- `SurplusMarketplaceContext.jsx` - State management
- `SurplusMarketplacePage.jsx` - User interface
- `RestaurantDashboardPage.jsx` - Restaurant management interface

---

### 2. **Food Donation Coordination System**
A comprehensive donation tracking module connecting restaurants with surplus food to NGOs, food banks, and charities.

#### Key Features:

**A. Real-time Alerts**
- Automatic notifications when restaurants have excess food
- Alert system for charities when new donations are available
- Real-time donor/recipient matching

**B. Automated Charity Matching**
- Intelligent matching based on food type accepted by each charity
- Distance-based recommendations (within 15 km radius)
- Priority sorting by charity rating and capacity

**C. GPS Tracking & QR Code Verification**
- Unique QR codes for each donation (format: `DONATION-{timestamp}-{random}`)
- Pickup verification codes for authentication
- GPS coordinates stored for each donation point
- QR code scanner integration for contactless verification

**D. Photo Documentation**
- Photo upload system for food condition verification
- Before/after documentation capability
- Quality assurance through visual verification
- Stored photo metadata for audit trails

**E. Tax Deduction Documentation**
- Automatic tax document generation
- Includes:
  - Donation ID and date
  - Food items and estimated value
  - Charity tax ID and details
  - QR code for verification
  - Digital certificate of donation
- Export as PDF/document for tax filing

#### Routes:
- **User/Donor**: `/food-donation` - Browse charities and create donations
- **Admin**: `/food-donation` (Alerts tab) - Receive and manage alerts
- **Restaurant**: `/restaurant-dashboard` (Donations tab) - Track donations and generate tax docs

#### Technical Components:
- `FoodDonationContext.jsx` - State management and business logic
- `FoodDonationPage.jsx` - User interface for donors and charities
- `QRCodeComponent.jsx` - QR code generation and display
- `RestaurantDashboardPage.jsx` - Donation tracking and tax document generation

---

## 📊 Data Structures

### Surplus Marketplace Models

```javascript
// Surplus Listing
{
  id: string,
  restaurantId: string,
  restaurantName: string,
  restaurantLocation: { lat: number, lng: number },
  foodItems: [
    {
      id: string,
      name: string,
      originalPrice: number,
      discountedPrice: number,
      discount: number (percentage),
      quantity: number,
      image: string,
      description: string,
      expiresAt: Date,
      createdAt: Date
    }
  ],
  status: 'active' | 'inactive',
  createdAt: Date
}

// Surplus Order
{
  id: string,
  listingId: string,
  itemId: string,
  quantity: number,
  customerId: string,
  purchasedAt: Date,
  status: 'completed' | 'cancelled'
}
```

### Food Donation Models

```javascript
// Charity
{
  id: string,
  name: string,
  type: 'Food Bank' | 'NGO' | 'Community Center',
  location: { lat: number, lng: number },
  address: string,
  phone: string,
  email: string,
  acceptedFoodTypes: string[],
  taxId: string,
  rating: number,
  reviews: number
}

// Donation
{
  id: string,
  restaurantId: string,
  restaurantName: string,
  charityId: string,
  charityName: string,
  foodItems: [
    {
      name: string,
      quantity: number,
      unit: 'portions' | 'kg' | 'liters' | 'boxes',
      type: 'cooked' | 'packaged' | 'vegetables' | 'fruits' | 'bread' | 'dairy',
      expiresAt: Date
    }
  ],
  status: 'pending' | 'scheduled' | 'verified' | 'completed',
  scheduledPickup: Date,
  qrCode: string,
  pickupVerificationCode: string,
  photoUrl: string | null,
  createdAt: Date,
  totalCaloricValue: number,
  estimatedBudgetValue: number,
  updatedAt: Date
}

// Alert
{
  id: string,
  type: 'new_donation' | 'pickup_ready' | 'donation_received',
  donationId: string,
  charityId: string,
  message: string,
  createdAt: Date,
  read: boolean
}

// Tax Document
{
  documentId: string,
  donationId: string,
  restaurantId: string,
  restaurantName: string,
  charityId: string,
  charityName: string,
  charityTaxId: string,
  foodItems: Array,
  donationDate: Date,
  estimatedValue: number,
  pickupDate: Date,
  qrCode: string,
  generatedAt: Date
}
```

---

## 🗺️ Routes & Navigation

### Main Routes Added to App.jsx:
```
/surplus-marketplace - Surplus Marketplace page
/food-donation - Food Donation coordination page
/restaurant-dashboard - Restaurant management dashboard
```

### Updated Navbar:
The navbar now includes three new quick-access buttons:
- 🍔 Surplus Deals - Direct link to surplus marketplace
- 🤝 Donate Food - Direct link to food donation system
- 🏪 Dashboard - Direct link to restaurant dashboard

---

## 🎨 User Interfaces

### Surplus Marketplace Features:
1. **Search & Filter**
   - Search by food name
   - Adjustable distance radius (1-20 km)
   - Real-time listing count

2. **Food Cards**
   - Large preview images
   - Original vs discounted prices
   - Countdown timer for expiration
   - Discount percentage badge
   - Quick add to cart button

3. **Shopping Experience**
   - Live cart management
   - Total savings calculation
   - Easy checkout flow

### Food Donation Features:
1. **Browse Charities Tab**
   - Charity information (type, address, phone, email)
   - Ratings and reviews
   - Accepted food types
   - Distance indicator
   - One-click donation flow

2. **My Donations Tab**
   - Donation status tracking
   - QR code access
   - Pickup verification codes
   - Photo upload for verification
   - Tax document generation

3. **Real-time Alerts Tab**
   - Unread notification count
   - Alert message and timestamp
   - Mark as read functionality
   - Color-coded notification status

### Restaurant Dashboard Features:
1. **Surplus Management Tab**
   - Create new listings with multiple items
   - Set discount percentages (50-80%)
   - Configure expiration times
   - Monitor active listings
   - Delete expired listings

2. **Donations Tab**
   - Smart charity matching display
   - Create donations with food items
   - Track donation status
   - Upload food condition photos
   - Download tax documents

3. **Analytics Tab**
   - Surplus marketplace metrics
   - Revenue generated
   - Food donation statistics
   - Tax deduction calculations
   - Social impact metrics

---

## 🔄 Context Providers

### SurplusMarketplaceProvider
Manages:
- Surplus listings and inventory
- Orders and transactions
- Location-based queries
- Restaurant listing management

Methods:
- `addSurplusListing()`
- `removeSurplusListing()`
- `updateSurplusItem()`
- `purchaseSurplusItem()`
- `getActiveSurplusListings()`
- `getSurplusListingsByRestaurant()`
- `getNearbyListings()`

### FoodDonationProvider
Manages:
- Charity database
- Donation tracking
- Real-time alerts
- Tax documentation

Methods:
- `addCharity()`
- `findNearbyCharities()`
- `matchCharitiesForFood()`
- `createDonation()`
- `updateDonationStatus()`
- `uploadDonationPhoto()`
- `generateTaxDocument()`
- `getDonationsByRestaurant()`
- `getDonationsByCharity()`
- `getAlerts()`
- `markAlertAsRead()`

---

## 🛠️ Installation & Setup

1. **Import Providers in App.jsx** (Already done)
   ```jsx
   import { SurplusMarketplaceProvider } from './context/SurplusMarketplaceContext';
   import { FoodDonationProvider } from './context/FoodDonationContext';
   ```

2. **Wrap App with Providers** (Already done)
   ```jsx
   <CartProvider>
     <SurplusMarketplaceProvider>
       <FoodDonationProvider>
         {/* Routes */}
       </FoodDonationProvider>
     </SurplusMarketplaceProvider>
   </CartProvider>
   ```

3. **No additional dependencies needed** - Uses existing React, React Router, and Tailwind CSS

---

## 📱 Features Highlights

### For Consumers:
- ✅ Save 50-80% on food purchases
- ✅ Help reduce food waste
- ✅ Support local charities
- ✅ Easy location-based discovery
- ✅ Transparent pricing

### For Restaurants:
- ✅ Generate additional revenue from surplus food
- ✅ Reduce food waste
- ✅ Earn tax deductions through donations
- ✅ Build community goodwill
- ✅ Track donation impact
- ✅ Digital documentation for tax purposes

### For Charities/NGOs:
- ✅ Real-time notifications of available food
- ✅ Smart matching with nearby donors
- ✅ Photo documentation for quality assurance
- ✅ GPS tracking for logistics
- ✅ QR code verification for transparency
- ✅ Automated reporting

---

## 🔐 Security & Privacy

- GPS data used only for distance calculations
- QR codes unique and time-sensitive
- Photo uploads stored securely
- Tax documents generated with encryption
- Charity contact information verified
- User location data optional (defaults to Delhi coordinates)

---

## 📈 Future Enhancements

1. **Payment Integration**
   - Stripe/Razorpay integration for surplus marketplace
   - Digital wallet support

2. **Advanced Analytics**
   - Detailed impact reports
   - Carbon footprint calculator
   - Donation tax impact estimator

3. **Mobile App**
   - Native iOS/Android apps
   - Push notifications for surplus deals
   - Geofencing for nearby offers

4. **AI/ML Features**
   - Predictive demand forecasting
   - Smart pricing recommendations
   - Charity matching algorithms

5. **Social Features**
   - User ratings and reviews
   - Charity impact stories
   - Leaderboards and achievements

6. **Integration**
   - API for third-party platforms
   - Restaurant POS system integration
   - Accounting software integration

---

## 🚀 Testing

To test these features:

1. Navigate to `/surplus-marketplace` to see active surplus listings
2. Navigate to `/food-donation` to browse charities and create donations
3. Navigate to `/restaurant-dashboard` to manage listings and donations
4. Use the navbar buttons for quick access to these features

Sample data is pre-populated in the contexts for testing purposes.

---

## 📞 Support

For issues or questions about these features, please contact the development team.

**Last Updated:** January 11, 2026
