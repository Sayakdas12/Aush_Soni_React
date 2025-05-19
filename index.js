import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/App"; 
import About from "./src/components/About"; 
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import Error from "./src/components/Error"; // ✅ Import the Error component
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./src/components/Services";
import RestaurantMenu from "./src/components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // ✅ Corrected usage
    children: [ // ✅ Fix typo: should be `children` not `Children`
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
       {
        path: "/Services",
        element: <Services />
      },
      {
         path: "/restaurants/:resId",
         element: <RestaurantMenu />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
