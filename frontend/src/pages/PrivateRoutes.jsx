import React, { useEffect, useState } from 'react';
import { Outlet, redirect } from 'react-router-dom';

const PrivateRoutes = ({ isAuthenticated }) => {  
  const [userAuthenticated, setUserAuthenticated] = useState();
  
  useEffect(() => {
    setUserAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  // console.log({'PrivateRoutes': userAuthenticated})
  return userAuthenticated === 'Authorised' ? <Outlet /> : null;
};

export default PrivateRoutes;

// const PrivateRoutes = ({ isAuthenticated }) => (
//   isAuthenticated === 'Authorised' ? <Outlet /> : redirect('/')
// );