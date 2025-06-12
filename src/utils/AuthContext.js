// utils/AuthContext.js
import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const mockUsers = [
    { email: "sayakdas@gmail.com", password: "Sayak123", name: "Sayak Das" },
  ];

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("mockUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = useCallback((email, password) => {
    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userData = { email: foundUser.email, name: foundUser.name };
      setUser(userData);
      localStorage.setItem("mockUser", JSON.stringify(userData));
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("mockUser");
  }, []);

  const isAuthenticated = useCallback(() => {
    return user !== null;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
