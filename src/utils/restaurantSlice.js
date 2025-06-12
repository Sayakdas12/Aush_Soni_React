// src/redux/appSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. Fetch all restaurants
export const fetchRestaurants = createAsyncThunk(
  "app/fetchRestaurants",
  async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.8773803&lng=75.8558431&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    return data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  }
);

// 2. Fetch single restaurant menu (dynamic API)
export const fetchRestaurantMenu = createAsyncThunk(
  "app/fetchRestaurantMenu",
  async (resId) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
    );
    const data = await response.json();
    return data?.data;
  }
);

const initialState = {
  restaurants: {
    all: [], // Complete restaurant list
    filtered: [], // Filtered list (e.g. by name or rating)
    menu: null, // Single restaurant menu
    listStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    menuStatus: "idle", // Status for fetching individual menu
    error: null,
  },
  cart: {
    items: [], // Cart items
  },
};

// 🍽️ Combined App Slice
const appSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    // Restaurant-related reducers
    filterByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.restaurants.filtered = state.restaurants.all.filter((res) =>
        res.info.name.toLowerCase().includes(searchTerm)
      );
    },
    filterTopRated: (state) => {
      state.restaurants.filtered = state.restaurants.all.filter(
        (res) => res.info.avgRating > 4.3
      );
    },
    clearMenu: (state) => {
      state.restaurants.menu = null;
      state.restaurants.menuStatus = "idle";
      state.restaurants.error = null;
    },
    // Cart-related reducers
    addItem: (state, action) => {
      const itemIndex = state.cart.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart.items[itemIndex].quantity += 1;
      } else {
        state.cart.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.cart.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        if (state.cart.items[itemIndex].quantity > 1) {
          state.cart.items[itemIndex].quantity -= 1;
        } else {
          state.cart.items.splice(itemIndex, 1);
        }
      }
    },

    clearCart: (state) => {
      state.cart.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Restaurant List
      .addCase(fetchRestaurants.pending, (state) => {
        state.restaurants.listStatus = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.restaurants.listStatus = "succeeded";
        state.restaurants.all = action.payload;
        state.restaurants.filtered = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.restaurants.listStatus = "failed";
        state.restaurants.error = action.error.message;
      })
      // Restaurant Menu
      .addCase(fetchRestaurantMenu.pending, (state) => {
        state.restaurants.menuStatus = "loading";
      })
      .addCase(fetchRestaurantMenu.fulfilled, (state, action) => {
        state.restaurants.menuStatus = "succeeded";
        state.restaurants.menu = action.payload;
      })
      .addCase(fetchRestaurantMenu.rejected, (state, action) => {
        state.restaurants.menuStatus = "failed";
        state.restaurants.error = action.error.message;
      });
  },
});

export const {
  filterByName,
  filterTopRated,
  clearMenu,
  addItem,
  removeItem,
  clearCart,
} = appSlice.actions;

export default appSlice.reducer;
