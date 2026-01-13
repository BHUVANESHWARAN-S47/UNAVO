# UNAVO - Quick Start Guide for New Features

## 🚀 Accessing the New Features

The website is currently running at: **http://localhost:5173**

### Feature Pages:

1. **🍔 Surplus Marketplace**
   - URL: http://localhost:5173/surplus-marketplace
   - What it does: Browse and purchase unsold food from nearby restaurants at 50-80% discounts
   - Who uses it: Budget-conscious consumers
   - Features:
     - Location-based discovery
     - Real-time countdown timers
     - Shopping cart system
     - Savings tracker

2. **🤝 Food Donation System**
   - URL: http://localhost:5173/food-donation
   - What it does: Donate surplus food to charities, NGOs, and food banks
   - Who uses it: Restaurants, donors, charities
   - Features:
     - Browse nearby charities
     - Real-time alerts
     - QR code tracking
     - Photo documentation
     - Tax document generation

3. **🏪 Restaurant Dashboard**
   - URL: http://localhost:5173/restaurant-dashboard
   - What it does: Manage surplus listings and track donations
   - Who uses it: Restaurant owners and managers
   - Features:
     - Create surplus listings
     - Smart charity matching
     - Track donations
     - View analytics
     - Generate tax documents

---

## 📱 Navigation

### Updated Navbar
Click on the navigation buttons in the top bar:
- **🍔 Surplus Deals** - Go to marketplace
- **🤝 Donate Food** - Go to donation system
- **🏪 Dashboard** - Go to restaurant dashboard

---

## 🎯 Feature Highlights

### Surplus Marketplace
- **Save Money**: Get food at 50-80% off before restaurants close
- **Real-time**: Listings update as inventory changes
- **Location-aware**: Find food within 1-20 km radius
- **Easy to use**: Add to cart, check savings, proceed to checkout

### Food Donation System
- **Help Charities**: Connect food donors with NGOs and food banks
- **Reduce Waste**: Turn surplus into social impact
- **Smart Matching**: AI-powered charity recommendations
- **Transparency**: QR codes and photo verification
- **Tax Benefits**: Automatic tax document generation

### Restaurant Dashboard
- **Manage Surplus**: Create and monitor listings
- **Track Impact**: See how many people you've helped
- **Tax Benefits**: Generate deduction documents
- **Analytics**: View revenue and donation metrics

---

## 💡 Use Cases

### Scenario 1: Consumer Saving Money
1. Open surplus marketplace
2. Search for favorite foods or adjust distance radius
3. Find great deals from nearby restaurants
4. Add items to cart
5. See total savings
6. Checkout

### Scenario 2: Restaurant Generating Revenue
1. Log in to restaurant dashboard
2. Go to Surplus tab
3. Create new listing with excess food
4. Set discount (50-80% off)
5. Set expiration time (1-2 hours)
6. Monitor orders in real-time

### Scenario 3: Restaurant Helping Charity
1. Log in to restaurant dashboard
2. Go to Donations tab
3. Browse nearby charities
4. Select charity based on accepted food types
5. Enter food items and quantities
6. Create donation
7. Get QR code and pickup verification code
8. Charity picks up the food
9. Generate tax document

---

## 📊 Sample Data Included

The system comes pre-populated with:
- **5 Restaurants** with surplus listings
- **3 Charities** ready to receive donations
- **Sample Donations** showing different statuses

This allows you to:
- Test the marketplace immediately
- See different charity types (Food Bank, NGO, Community Center)
- Understand the donation workflow

---

## 🔒 Privacy & Security

- GPS location is used only for distance calculations
- Sensitive data is not stored in browser
- QR codes are unique and time-sensitive
- Photo uploads have validation
- All calculations are done client-side for transparency

---

## 📈 Key Metrics to Track

### For Consumers:
- Total savings achieved
- Items purchased
- Charities supported

### For Restaurants:
- Active listings count
- Total orders received
- Revenue from surplus sales
- Donations made
- Estimated tax deductions

### For System:
- Food waste prevented
- People helped
- Carbon footprint reduced

---

## ❓ Frequently Asked Questions

**Q: How do I create a surplus listing?**
A: Go to Restaurant Dashboard → Surplus tab → Create Listing → Add food items → Set prices/discounts → Click Create

**Q: Can I edit a listing after creating it?**
A: Currently you can delete and recreate. Future updates will add edit functionality.

**Q: What happens if items don't sell?**
A: Items automatically expire at the set time. You can delete manually or wait for auto-expiration.

**Q: How do charities get notified?**
A: Real-time alerts appear in the Food Donation page under "Real-time Alerts" tab

**Q: Can I get a tax deduction for donations?**
A: Yes! Go to your donations list and click "📄 Tax Document" to generate official documentation

**Q: What food types can be donated?**
A: Cooked, packaged, vegetables, fruits, bread, and dairy products

**Q: How are charities matched?**
A: Automatically matched based on:
1. Distance (within 15 km)
2. Accepted food types
3. Charity rating (highest rated first)

---

## 🛠️ Technical Details

### Context Providers:
All features are powered by React Context API:
- `SurplusMarketplaceContext` - Marketplace state
- `FoodDonationContext` - Donation state
- `CartContext` - Shopping cart (existing)

### State Management:
- No external state library needed
- All data stored in React state
- Persists during session (refresh will reset)

### GPS & Location:
- Uses browser's Geolocation API
- Requires user permission
- Falls back to Delhi coordinates if denied
- Calculates distances using Haversine formula

### QR Codes:
- Generated using QR Server API (https://qrserver.com)
- Unique for each donation
- Can be scanned by any QR code reader
- Format: `DONATION-{timestamp}-{random}`

---

## 📝 Testing Checklist

- [ ] Navigate to surplus marketplace
- [ ] Search and filter listings
- [ ] Add items to cart
- [ ] Check savings calculation
- [ ] Navigate to food donation
- [ ] Browse charities
- [ ] Create a donation
- [ ] View QR code
- [ ] Check alerts
- [ ] Go to restaurant dashboard
- [ ] Create surplus listing
- [ ] View analytics
- [ ] Generate tax document

---

## 🎓 Learning Resources

### Inside the Code:
- Context files explain all state management
- Page components show UI patterns
- Comments explain complex logic
- Sample data is easy to customize

### To Customize:
1. Edit sample data in context files
2. Add more charities in FoodDonationContext
3. Adjust discount ranges in forms
4. Modify styling with Tailwind CSS classes

---

## 📞 Support

For issues or questions:
1. Check the FEATURES_DOCUMENTATION.md for detailed info
2. Review the code comments
3. Check sample data in context files

---

**Enjoy using UNAVO's new features!** 🎉

Last updated: January 11, 2026
