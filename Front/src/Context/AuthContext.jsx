import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Create Context
const AuthContext = createContext(null);

// 2. Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (
        storedToken &&
        storedUser &&
        storedUser !== "undefined" &&
        storedUser !== "null"
      ) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(storedToken);
        } catch (e) {
          console.error("Error parsing stored user, clearing invalid data:", e);
          localStorage.removeItem("user");
        }
      } else {
        // if no valid stored values
        localStorage.removeItem("user");
      }
    } catch (e) {
      console.error("Auth initialization error:", e);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, []);

  // ✅ Safe login method
  const login = (userData, userToken) => {
    if (userData && typeof userData === "object") {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      console.warn("Invalid user data passed to login:", userData);
      localStorage.removeItem("user");
    }

    if (userToken && typeof userToken === "string") {
      setToken(userToken);
      localStorage.setItem("token", userToken);
    } else {
      console.warn("Invalid token passed to login:", userToken);
      localStorage.removeItem("token");
    }
  };

  // ✅ Safe logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = { user, token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Hook
export function useAuth() {
  return useContext(AuthContext);
}
