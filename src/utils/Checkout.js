// components/Checkout.js
import { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { user } = useAuth();
  const cartItems = useSelector((state) => state.restaurants.cart.items);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [address, setAddress] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would call your payment API here
    console.log('Processing payment with:', {
      paymentMethod,
      cardDetails,
      user,
      cartItems,
      total: totalPrice / 100
    });
    
    setIsProcessing(false);
    setOrderSuccess(true);
    
    // In a real app, you would:
    // 1. Send order to your backend
    // 2. Clear the cart
    // 3. Redirect to order confirmation
  };

  if (orderSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
        <div className="mb-6 text-green-500">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        <p className="mb-6 text-gray-600">Thank you for your order, {user?.name}!</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      
      {user && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-2">Delivering to:</h3>
          <p className="font-medium">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      )}

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-700 mb-3">Order Summary</h3>
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{item.name}</span>
              <span>₹{(item.price / 100).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4 pt-2 border-t border-gray-200 font-bold">
          <span>Total</span>
          <span>₹{(totalPrice / 100).toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Delivery Address</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-3">Payment Method</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <span className="ml-2">Credit/Debit Card</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              <span className="ml-2">UPI</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <span className="ml-2">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Card Number</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Expiry Date</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">CVV</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <label className="block text-gray-700 mb-1">UPI ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="yourname@upi"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            `Pay ₹${(totalPrice / 100).toFixed(2)}`
          )}
        </button>
      </form>
    </div>
  );
};

export default Checkout;