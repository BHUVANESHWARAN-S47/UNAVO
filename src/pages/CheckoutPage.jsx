import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getTotalItems } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode === 'WELCOME50') {
      setDiscount(Math.floor(getTotalPrice() * 0.5));
    } else if (promoCode === 'SAVE20') {
      setDiscount(Math.floor(getTotalPrice() * 0.2));
    } else {
      setDiscount(0);
    }
  };

  const deliveryFee = 30;
  const taxes = Math.round((getTotalPrice() - discount) * 0.05);
  const totalAmount = getTotalPrice() - discount + deliveryFee + taxes;

  const handlePlaceOrder = () => {
    if (!deliveryAddress.trim() || !phoneNumber.trim()) {
      alert('Please fill in all delivery details');
      return;
    }
    setOrderPlaced(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto px-4 py-12 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold"
          >
            Back to Home
          </motion.button>
        </motion.div>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-8xl mb-6 mx-auto w-fit"
          >
            ✅
          </motion.div>
          <h1 className="text-4xl font-black text-gray-800 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">Your delicious food is on the way</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-4">Redirecting to home...</p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/cart')}
            className="text-gray-600 hover:text-green-600 font-semibold text-lg transition-colors mb-6"
          >
            ← Back to Cart
          </motion.button>
          <h1 className="text-4xl font-black text-gray-800">Checkout</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Delivery Address Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">📍</span> Delivery Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Address
                  </label>
                  <textarea
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter your complete delivery address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none resize-none text-gray-800 font-semibold placeholder-gray-500"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-gray-800 font-semibold placeholder-gray-500"
                    maxLength="10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Payment Method Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">💳</span> Payment Method
              </h2>
              <div className="space-y-3">
                {[
                  { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                  { id: 'upi', label: 'UPI', icon: '📱' },
                  { id: 'wallet', label: 'Digital Wallet', icon: '👝' },
                  { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                ].map((method) => (
                  <motion.label
                    key={method.id}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-all"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-green-500 cursor-pointer"
                    />
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-semibold text-gray-800">{method.label}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Promo Code Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">🎟️</span> Promo Code
              </h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  placeholder="Enter promo code (try WELCOME50)"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-gray-800 font-semibold placeholder-gray-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleApplyPromo}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold"
                >
                  Apply
                </motion.button>
              </div>
              {discount > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-green-600 font-semibold"
                >
                  ✅ Discount Applied: ₹{discount}
                </motion.p>
              )}
            </motion.div>

            {/* Order Items Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">🍽️</span> Order Items
              </h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">x{item.quantity}</span>
                    </div>
                    <span className="font-bold text-gray-800">₹{item.price * item.quantity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Order Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <motion.div className="bg-white rounded-lg shadow-lg p-6 sticky top-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Bill Details</h3>

              <motion.div className="space-y-4 pb-6 border-b-2 border-gray-200">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-between text-gray-600"
                >
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{getTotalPrice()}</span>
                </motion.div>

                {discount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-between text-green-600 font-semibold"
                  >
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-between text-gray-600"
                >
                  <span>Delivery Fee</span>
                  <span className="font-semibold">₹{deliveryFee}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-between text-gray-600"
                >
                  <span>Taxes & Charges</span>
                  <span className="font-semibold">₹{taxes}</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-between text-2xl font-bold text-gray-800 mb-6"
              >
                <span>Total</span>
                <span className="text-green-600">₹{totalAmount}</span>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlaceOrder}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg transition-all"
              >
                Place Order
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
