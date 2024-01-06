import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/is-authenticated", {
        withCredentials: true, // Include credentials (cookies) in the request
      })
      .then((response) => {
        console.log(response);
        setIsAuthenticated(response.data.message);
      })
      .catch((error) => {
        setIsAuthenticated(error.response.data.message);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
