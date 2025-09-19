import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = logged out
  const [role, setRole] = useState(null); // patient, doctor, gp, pharmacist

  const login = (roleType) => {
    setUser({ id: "123", name: "Demo User" });
    setRole(roleType);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
