# UNAVO API Reference - New Features

## Context APIs

### 1. SurplusMarketplaceContext

#### Hook: `useSurplusMarketplace()`

```javascript
const {
  surplusListings,           // Array of all listings
  surplusOrders,             // Array of all orders
  addSurplusListing,         // Function
  removeSurplusListing,      // Function
  updateSurplusItem,         // Function
  purchaseSurplusItem,       // Function
  getActiveSurplusListings,  // Function
  getSurplusListingsByRestaurant, // Function
  getNearbyListings          // Function
} = useSurplusMarketplace();
```

#### Methods:

##### `addSurplusListing(restaurantId, restaurantName, restaurantLocation, foodItems)`
Creates a new surplus listing.

**Parameters:**
- `restaurantId: string` - Restaurant identifier
- `restaurantName: string` - Restaurant display name
- `restaurantLocation: { lat: number, lng: number }` - Restaurant coordinates
- `foodItems: Array` - Array of food items with:
  - `name: string` - Food name
  - `originalPrice: number` - Original menu price
  - `discountedPrice: number` - Discounted price
  - `discount: number` - Discount percentage
  - `quantity: number` - Items available
  - `expiresAt: Date` - When listing expires

**Returns:** `Listing object`

**Example:**
```javascript
const listing = addSurplusListing(
  'rest-1',
  'My Restaurant',
  { lat: 28.6139, lng: 77.2090 },
  [
    {
      name: 'Biryani',
      originalPrice: 350,
      discountedPrice: 87,
      discount: 75,
      quantity: 10,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000)
    }
  ]
);
```

---

##### `removeSurplusListing(listingId)`
Removes a listing.

**Parameters:**
- `listingId: string` - ID of listing to remove

**Returns:** `void`

---

##### `updateSurplusItem(listingId, itemId, updates)`
Updates an item in a listing.

**Parameters:**
- `listingId: string` - Listing ID
- `itemId: string` - Item ID within listing
- `updates: object` - Fields to update (quantity, price, etc.)

**Returns:** `void`

**Example:**
```javascript
updateSurplusItem('listing-1', 'item-1', { quantity: 5 });
```

---

##### `purchaseSurplusItem(listingId, itemId, quantity, customerId)`
Records a purchase.

**Parameters:**
- `listingId: string` - Listing ID
- `itemId: string` - Item ID
- `quantity: number` - Quantity purchased
- `customerId: string` - Customer making purchase

**Returns:** `Order object`

---

##### `getActiveSurplusListings()`
Gets all currently active listings.

**Returns:** `Array<Listing>`

---

##### `getSurplusListingsByRestaurant(restaurantId)`
Gets listings for specific restaurant.

**Parameters:**
- `restaurantId: string` - Restaurant ID

**Returns:** `Array<Listing>`

---

##### `getNearbyListings(latitude, longitude, radiusKm = 5)`
Gets listings within radius of location.

**Parameters:**
- `latitude: number` - User latitude
- `longitude: number` - User longitude
- `radiusKm: number` - Search radius in kilometers (default: 5, max: 20)

**Returns:** `Array<Listing>`

**Example:**
```javascript
const nearby = getNearbyListings(28.6139, 77.2090, 10);
```

---

### 2. FoodDonationContext

#### Hook: `useFoodDonation()`

```javascript
const {
  charities,                  // Array of registered charities
  donations,                  // Array of all donations
  alerts,                     // Array of real-time alerts
  addCharity,                 // Function
  findNearbyCharities,        // Function
  matchCharitiesForFood,      // Function
  createDonation,             // Function
  updateDonationStatus,       // Function
  uploadDonationPhoto,        // Function
  generateTaxDocument,        // Function
  getDonationsByRestaurant,   // Function
  getDonationsByCharity,      // Function
  getAlerts,                  // Function
  markAlertAsRead             // Function
} = useFoodDonation();
```

#### Methods:

##### `addCharity(charityData)`
Registers a new charity/NGO.

**Parameters:**
- `charityData: object` - Charity information:
  - `name: string` - Charity name
  - `type: string` - Type (Food Bank, NGO, Community Center)
  - `location: { lat, lng }` - Coordinates
  - `address: string` - Physical address
  - `phone: string` - Contact phone
  - `email: string` - Contact email
  - `acceptedFoodTypes: Array<string>` - Types of food accepted
  - `taxId: string` - Tax ID for deductions

**Returns:** `Charity object`

---

##### `findNearbyCharities(latitude, longitude, radiusKm = 10)`
Finds charities near a location.

**Parameters:**
- `latitude: number` - Latitude
- `longitude: number` - Longitude
- `radiusKm: number` - Search radius (default: 10)

**Returns:** `Array<Charity>` - Sorted by distance

---

##### `matchCharitiesForFood(foodTypes, restaurantLocation)`
Intelligently matches charities for specific food types.

**Parameters:**
- `foodTypes: Array<string>` - Types of food to donate
- `restaurantLocation: { lat, lng }` - Restaurant coordinates

**Returns:** `Array<Charity>` - Sorted by compatibility and distance

**Example:**
```javascript
const matches = matchCharitiesForFood(
  ['cooked', 'vegetables'],
  { lat: 28.6139, lng: 77.2090 }
);
```

---

##### `createDonation(restaurantId, restaurantName, restaurantLocation, charityId, foodItems)`
Creates a new donation record.

**Parameters:**
- `restaurantId: string` - Restaurant ID
- `restaurantName: string` - Restaurant name
- `restaurantLocation: { lat, lng }` - Restaurant coordinates
- `charityId: string` - Target charity ID
- `foodItems: Array` - Items being donated:
  - `name: string` - Food name
  - `quantity: number` - Quantity
  - `unit: string` - Unit (portions, kg, liters, boxes)
  - `type: string` - Type (cooked, packaged, vegetables, etc.)
  - `expiresAt: Date` - Expiration time

**Returns:** `Donation object` with:
- `id: string` - Unique donation ID
- `qrCode: string` - Unique QR code for tracking
- `pickupVerificationCode: string` - Pickup verification code
- Status automatically set to 'pending'
- Real-time alert created automatically

**Example:**
```javascript
const donation = createDonation(
  'rest-1',
  'My Restaurant',
  { lat: 28.6139, lng: 77.2090 },
  'charity-1',
  [
    {
      name: 'Biryani',
      quantity: 10,
      unit: 'portions',
      type: 'cooked',
      expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000)
    }
  ]
);
```

---

##### `updateDonationStatus(donationId, status, updates = {})`
Updates donation status.

**Parameters:**
- `donationId: string` - Donation ID
- `status: string` - New status ('pending', 'scheduled', 'verified', 'completed')
- `updates: object` - Optional additional updates

**Returns:** `void`

**Example:**
```javascript
updateDonationStatus('donation-1', 'verified', { photoUrl: '...' });
```

---

##### `uploadDonationPhoto(donationId, photoUrl)`
Uploads food condition photo.

**Parameters:**
- `donationId: string` - Donation ID
- `photoUrl: string` - Photo URL or base64 data

**Returns:** `void`

**Note:** Automatically updates status to 'verified'

---

##### `generateTaxDocument(donationId)`
Generates tax deduction document.

**Parameters:**
- `donationId: string` - Donation ID

**Returns:** `TaxDocument object` with:
- `documentId: string` - Unique document ID
- `restaurantId: string`
- `restaurantName: string`
- `charityName: string`
- `charityTaxId: string`
- `foodItems: Array` - Items donated
- `donationDate: Date`
- `estimatedValue: number` - Tax deductible amount
- `pickupDate: Date`
- `qrCode: string` - QR code for verification
- `generatedAt: Date`

**Example:**
```javascript
const taxDoc = generateTaxDocument('donation-1');
console.log(`Tax deduction value: ₹${taxDoc.estimatedValue}`);
```

---

##### `getDonationsByRestaurant(restaurantId)`
Gets all donations from a restaurant.

**Parameters:**
- `restaurantId: string` - Restaurant ID

**Returns:** `Array<Donation>`

---

##### `getDonationsByCharity(charityId)`
Gets all donations received by a charity.

**Parameters:**
- `charityId: string` - Charity ID

**Returns:** `Array<Donation>`

---

##### `getAlerts()`
Gets all real-time alerts.

**Returns:** `Array<Alert>` with:
- `id: string`
- `type: string` - Alert type
- `message: string` - Alert message
- `createdAt: Date`
- `read: boolean`

---

##### `markAlertAsRead(alertId)`
Marks alert as read.

**Parameters:**
- `alertId: string` - Alert ID

**Returns:** `void`

---

## Usage Examples

### Example 1: Create and Manage Surplus Listing

```javascript
import { useSurplusMarketplace } from '../context/SurplusMarketplaceContext';

function CreateListing() {
  const { addSurplusListing } = useSurplusMarketplace();

  const handleCreate = () => {
    const listing = addSurplusListing(
      'restaurant-123',
      'My Restaurant',
      { lat: 28.6139, lng: 77.2090 },
      [
        {
          name: 'Samosas',
          originalPrice: 150,
          discountedPrice: 50,
          discount: 66,
          quantity: 20,
          expiresAt: new Date(Date.now() + 60 * 60 * 1000),
          image: 'url',
          description: 'Delicious samosas'
        }
      ]
    );
    console.log('Listing created:', listing.id);
  };

  return <button onClick={handleCreate}>Create Listing</button>;
}
```

### Example 2: Find Nearby Charities and Create Donation

```javascript
import { useFoodDonation } from '../context/FoodDonationContext';

function DonateTrust() {
  const { findNearbyCharities, createDonation, generateTaxDocument } = useFoodDonation();
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const nearby = findNearbyCharities(28.6139, 77.2090, 15);
    setCharities(nearby);
  }, []);

  const handleDonate = (charityId) => {
    const donation = createDonation(
      'restaurant-123',
      'My Restaurant',
      { lat: 28.6139, lng: 77.2090 },
      charityId,
      [
        {
          name: 'Biryani',
          quantity: 5,
          unit: 'portions',
          type: 'cooked',
          expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000)
        }
      ]
    );

    // Generate tax document
    const taxDoc = generateTaxDocument(donation.id);
    console.log('Tax document:', taxDoc.documentId);
    console.log('QR Code:', donation.qrCode);
    console.log('Pickup Code:', donation.pickupVerificationCode);
  };

  return (
    <div>
      {charities.map(charity => (
        <button key={charity.id} onClick={() => handleDonate(charity.id)}>
          Donate to {charity.name}
        </button>
      ))}
    </div>
  );
}
```

### Example 3: Track User Location and Get Nearby Options

```javascript
import { useSurplusMarketplace } from '../context/SurplusMarketplaceContext';

function NearbyMarketplace() {
  const { getNearbyListings } = useSurplusMarketplace();
  const [listings, setListings] = useState([]);
  const [radius, setRadius] = useState(5);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const nearby = getNearbyListings(
          position.coords.latitude,
          position.coords.longitude,
          radius
        );
        setListings(nearby);
      });
    }
  }, [radius]);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="20"
        value={radius}
        onChange={(e) => setRadius(parseInt(e.target.value))}
      />
      <p>Listings within {radius}km: {listings.length}</p>
    </div>
  );
}
```

### Example 4: Real-time Alerts

```javascript
import { useFoodDonation } from '../context/FoodDonationContext';

function AlertPanel() {
  const { alerts, markAlertAsRead } = useFoodDonation();
  const unreadCount = alerts.filter(a => !a.read).length;

  return (
    <div>
      <h2>Notifications ({unreadCount})</h2>
      {alerts.map(alert => (
        <div key={alert.id}>
          <p>{alert.message}</p>
          {!alert.read && (
            <button onClick={() => markAlertAsRead(alert.id)}>
              Mark as Read
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## Error Handling

All functions handle edge cases:

```javascript
// getNearbyListings returns empty array if no results
const listings = getNearbyListings(0, 0, 1); // []

// createDonation requires all food items filled
const donation = createDonation(..., [], charityId); // Creates with empty array

// updateDonationStatus handles any status value
updateDonationStatus(id, 'invalid', {}); // Still updates
```

---

## Performance Considerations

1. **Geolocation Calculation**
   - Uses Haversine formula for accurate distances
   - O(n) complexity for each `getNearbyListings` call
   - Caching recommended for large datasets

2. **State Updates**
   - All state updates trigger component re-renders
   - Consider memoization for frequently updated values
   - Use useCallback for event handlers

3. **Real-time Alerts**
   - Alerts are stored in memory
   - No persistence between sessions
   - Add backend integration for production

---

## Testing Tips

1. **Test Distance Calculation**
   ```javascript
   const listings = getNearbyListings(28.6139, 77.2090, 5); // ~5km radius
   ```

2. **Test Status Flows**
   ```javascript
   // Donation lifecycle: pending → verified → completed
   updateDonationStatus(id, 'scheduled');
   uploadDonationPhoto(id, photoUrl);
   updateDonationStatus(id, 'verified');
   updateDonationStatus(id, 'completed');
   ```

3. **Test Cart Workflow**
   ```javascript
   const order = purchaseSurplusItem(listingId, itemId, qty, customerId);
   // Inventory should decrease
   ```

---

**Last Updated:** January 11, 2026
