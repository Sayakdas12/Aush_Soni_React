import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./src/App";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import Services from "./src/components/Services";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Cart from "./src/components/Cart";
import ProtectedRoute from "./src/utils/ProtectedRoute";
import Checkout from "./src/utils/Checkout";
import Login from "./src/components/Login";
import { BrowserRouter } from "react-router-dom";

const Grocery = lazy(() => import("./src/components/Grocery"));

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      { path: "/services", element: <Services /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
