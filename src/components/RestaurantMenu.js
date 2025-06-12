import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantMenu } from "../utils/restaurantSlice";
import { addItem, removeItem } from "../utils/restaurantSlice";
import ShimmerManu from "./ShimmerManu";
import { CDN_url } from "../utils/constants";
import { FiClock, FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const fallbackImageURL =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const { menu, menuStatus, error } = useSelector(
    (state) => state.restaurants.restaurants
  );

  // ✅ Correct nested path
  const cart = useSelector((state) => state.restaurants.cart.items);

  useEffect(() => {
    if (resId) dispatch(fetchRestaurantMenu(resId));
  }, [resId, dispatch]);

  const handleAddToCart = (item) => {
    dispatch(
      addItem({
        id: item.card.info.id,
        name: item.card.info.name,
        price: item.card.info.price ?? item.card.info.defaultPrice,
        image: item.card.info.imageId
          ? CDN_url + item.card.info.imageId
          : fallbackImageURL,
      })
    );
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  if (menuStatus === "loading" || !menu) return <ShimmerManu />;
  if (menuStatus === "failed") return <div>Error: {error}</div>;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    sla: { deliveryTime } = {},
  } = menu?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (card) => card.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-xl hover:bg-orange-600 transition-all flex items-center z-50"
        >
          <AiOutlineShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        </motion.button>
      )}

      {/* Cart Drawer */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Order</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                              ₹{item.price / 100} × {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="p-1 text-gray-500 hover:text-orange-500"
                          >
                            <FiMinus size={16} />
                          </button>
                          <span className="w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={
                              () => dispatch(addItem(item)) // re-add item
                            }
                            className="p-1 text-gray-500 hover:text-orange-500"
                          >
                            <FiPlus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal:</span>
                      <span>₹{(totalPrice / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span>Delivery Fee:</span>
                      <span>₹49.00</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>₹{(totalPrice / 100 + 49).toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigate("/cart");
                    }}
                    className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
                  >
                    Proceed to Checkout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Restaurant Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-black py-12 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center text-white hover:text-orange-200 transition"
          >
            ← Back to restaurants
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={
                cloudinaryImageId
                  ? CDN_url + cloudinaryImageId
                  : fallbackImageURL
              }
              alt={name}
              onError={(e) => (e.target.src = fallbackImageURL)}
              className="w-full md:w-64 h-48 object-cover rounded-lg shadow-xl border-4 border-white"
            />

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
              <p className="text-orange-100 mb-4">{cuisines?.join(", ")}</p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <AiOutlineStar className="mr-2" />
                  <span>{avgRating} Rating</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <FiClock className="mr-2" />
                  <span>{deliveryTime} mins</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span>{costForTwoMessage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-8"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Menu</h2>
          <p className="text-gray-500">{itemCards.length} items available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itemCards.map((item) => (
            <motion.div
              key={item.card.info.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg mb-1">
                  {item.card.info.name}
                </h3>
                <p className="text-orange-600 font-medium mb-2">
                  ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {item.card.info.description}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition flex items-center"
                >
                  <FiPlus className="mr-2" />
                  Add to Cart
                </button>
              </div>

              {item.card.info.imageId && (
                <div className="w-full md:w-40 h-40 relative">
                  <img
                    src={CDN_url + item.card.info.imageId}
                    alt={item.card.info.name}
                    onError={(e) => (e.target.src = fallbackImageURL)}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RestaurantMenu;
