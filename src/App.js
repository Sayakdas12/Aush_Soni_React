import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/userContext";
import { AuthProvider } from "./utils/AuthContext";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate user login
    setUser({ name: "Sayak Das", email: "sayak@example.com" });
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="app">
          <AuthProvider>
            <Header />
            <Outlet />
            <ToastContainer />
            <Footer />
          </AuthProvider>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
