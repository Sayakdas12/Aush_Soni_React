import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/restaurantSlice";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.restaurants.cart.items);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  // Fix: Update removeItem action to accept index
  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
    toast.success("Item removed from cart", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (!isAuthenticated()) {
      setShowLogin(true);
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setOrderSuccess(true);
      dispatch(clearCart());
      toast.success("Order placed successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    }, 1500);
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="text-green-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
          <p className="mb-6 text-gray-600">
            Thank you for your order. Your food will be delivered soon.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700"
          >
            Back to Home
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white text-center">
            <h2 className="text-2xl font-bold">Complete Your Payment</h2>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Order Summary</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span>{item.name}</span>
                    <span>₹{(item.price / 100).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-2 mt-2 font-bold">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>₹{(totalPrice / 100).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Credit/Debit Card</option>
                <option>UPI</option>
                <option>Net Banking</option>
                <option>Cash on Delivery</option>
              </select>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700"
            >
              Confirm Payment
            </button>

            <button
              onClick={() => setShowPayment(false)}
              className="w-full mt-4 py-2 px-4 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <Login onSuccess={() => setShowLogin(false)} />
            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with decorative element */}
          <div className="bg-gradient-to-r from-yellow-600 to-blue-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Your Food Cart
              </h2>
              {cartItems.length > 0 && (
                <span className="bg-white text-purple-600 text-sm font-bold px-3 py-1 rounded-full">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                </span>
              )}
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-40 w-40 text-gray-300 mb-4">
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Your cart feels lonely
              </h3>
              <p className="mt-2 text-gray-500">
                Add some delicious items from our menu
              </p>
            </div>
          ) : (
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-center">
                      {/* Food Image */}
                      <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src={
                            item.image ||
                            "https://via.placeholder.com/150?text=Food"
                          }
                          alt={item.name}
                        />
                      </div>

                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-800">
                            {item.name}
                          </h3>
                          <p className="ml-4 font-bold text-gray-900">
                            ₹{(item.price / 100).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description || "Delicious food item"}
                        </p>
                        <div className="mt-2 flex items-center">
                          <button
                            onClick={() => handleRemoveItem(index)} // Updated to use handleRemoveItem
                            className="text-red-500 hover:text-red-700 flex items-center text-sm"
                          >
                            <svg
                              className="h-4 w-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Summary Section */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                  <span>Total Amount</span>
                  <span>₹{(totalPrice / 100).toFixed(2)}</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <button
                    onClick={() => {
                      dispatch(clearCart());
                      toast.success("Cart cleared successfully");
                    }}
                    className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                  >
                    Clear All Items
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition-all"
                  >
                    {isAuthenticated()
                      ? "Proceed to Checkout"
                      : "Login to Checkout"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
