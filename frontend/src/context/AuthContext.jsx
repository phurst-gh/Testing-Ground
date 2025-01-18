import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userData, setUserData] = useState();

  const checkIsAuthenticated = async () => {
    try {
      const response = await axios.get("/api/is-authenticated", {
        withCredentials: true,
      });
      // console.log({
      //   status: response.status,
      //   isAuthenticated: response.data.authenticated,
      // });
      setUserData(response.data.user);
      setIsAuthenticated(response.data.authenticated);
    } catch (error) {
      // console.log({
      //   status: error.response.status,
      //   isAuthenticated: error.response.data.authenticated,
      //   message: error.message,
      // });
      setUserData(error.response.data.user);
      setIsAuthenticated(error.response.data.authenticated);
    }
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, checkIsAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
