import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import TodaysSpecialDetail from './pages/TodaysSpecialDetail';
import SignupPage from './pages/SignupPage';
import RestaurantDetail from './pages/RestaurantDetail';
import CategoryFoodPage from './pages/CategoryFoodPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import UNAVOOnePage from './pages/UNAVOOnePage';
import TeamPage from './pages/TeamPage';
import FAQPage from './pages/FAQPage';
import RideWithUsPage from './pages/RideWithUsPage';
import PartnerWithUsPage from './pages/PartnerWithUsPage';
import ContactUsPage from './pages/ContactUsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import FreeDeliveryPage from './pages/FreeDeliveryPage';
import SurplusMarketplacePage from './pages/SurplusMarketplacePage';
import FoodDonationPage from './pages/FoodDonationPage';
import RestaurantDashboardPage from './pages/RestaurantDashboardPage';
import { CartProvider } from './context/CartContext';
import { SurplusMarketplaceProvider } from './context/SurplusMarketplaceContext';
import { FoodDonationProvider } from './context/FoodDonationContext';

function App() {
  return (
    <CartProvider>
      <SurplusMarketplaceProvider>
        <FoodDonationProvider>
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/todays-special" element={<TodaysSpecialDetail />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/category/:categoryName" element={<CategoryFoodPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/unavo-one" element={<UNAVOOnePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/ride-with-us" element={<RideWithUsPage />} />
              <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/investor-relations" element={<InvestorRelationsPage />} />
              <Route path="/free-delivery" element={<FreeDeliveryPage />} />
              <Route path="/surplus-marketplace" element={<SurplusMarketplacePage />} />
              <Route path="/food-donation" element={<FoodDonationPage />} />
              <Route path="/restaurant-dashboard" element={<RestaurantDashboardPage />} />
            </Routes>
          </Router>
        </FoodDonationProvider>
      </SurplusMarketplaceProvider>
    </CartProvider>
  );
}

export default App;
