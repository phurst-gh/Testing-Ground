import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/api/is-authenticated', {
      withCredentials: true, // Include credentials (cookies) in the request
    })
    .then(response => {
      setIsAuthenticated(response.data);
    })
    .catch(error => {
      setIsAuthenticated(error.response.data.message);
    });
  }, []);

  return(
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };