import React, { createContext, useState, useContext } from "react";

// 1. Create the Context
// This is like creating an empty, named "data pipe".
const AuthContext = createContext(null);

// 2. Create the Provider Component
// This component will wrap your entire app and manage the user state.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Initially, no one is logged in.

  // The function to call when a user successfully logs in or signs up
  const login = (userData) => {
    setUser(userData);
    // For persistence, you could also save the user's token to localStorage here
  };

  // The function to call to log the user out
  const logout = () => {
    setUser(null);
    // Also, clear the token from localStorage if you're using it
  };

  // The 'value' object holds the data and functions that will be available to all components
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Create a Custom Hook for easy access
// This is a simple shortcut so other components don't have to import and use `useContext` directly.
export function useAuth() {
  return useContext(AuthContext);
}
