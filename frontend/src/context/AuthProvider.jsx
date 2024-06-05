import React, { createContext, useContext, useState } from "react";

// Authentication context create karte hain
export const AuthContext = createContext();

// AuthContext ke liye ek provider component create karte hain
export default function AuthProvider({ children }) {
  // Initial auth user ko localStorage se get karte hain
  const initialAuthUser = localStorage.getItem("Users");
  
  // authUser state set karte hain, agar localStorage me user data hai to usse parse kar ke initialize karte hain
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // authUser aur setAuthUser ko context consumers ko provide karte hain
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// AuthContext use karne ke liye custom hook
export const useAuth = () => useContext(AuthContext);
