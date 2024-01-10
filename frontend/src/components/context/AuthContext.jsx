import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const isAuthenticated = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/is-authenticated", {
          withCredentials: true,
        });
        // console.log({
        //   status: response.status,
        //   isAuthenticated: response.data.message,
        // });
        setUserData(response.data.user);
        setIsAuthenticated(response.data.message);
      } catch (error) {
        // console.log({
        //   status: error.response.status,
        //   isAuthenticated: error.response.data.message,
        //   message: error.message,
        // });
        setUserData(error.response.data.user);
        setIsAuthenticated(error.response.data.message);
      }
    }
    isAuthenticated();
  });

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
