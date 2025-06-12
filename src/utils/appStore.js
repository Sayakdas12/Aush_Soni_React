import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";

const appStore = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
});

export default appStore;
