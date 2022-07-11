import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState({
    isAuth: false,
    token: null
  });
  const handleLogin = (token) => {
    setAuth({
      ...Auth,
      isAuth: true,
      token: token
    });
  };
  const handleLogout = () => {
    setAuth({
      ...Auth,
      isAuth: false,
      token: null
    });
  };
  console.log(Auth);
  return (
    <AuthContext.Provider value={{ Auth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
