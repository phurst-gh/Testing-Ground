import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes as RRDRoutes, Route } from "react-router-dom";

import Home from "./Home";
import HomeLoggedIn from "./HomeLoggedIn";
import { useAuth } from "../components/context/AuthContext";

const PrivateOutlet = ({ isAuthenticated }) =>
  isAuthenticated === "Authorised" ? (
    <Outlet />
  ) : (
    <p>You don't have unauthentication to view this page.</p>
  );

const Routes = () => {
  const [ userIsAuthenticated, setUserIsAuthenticated ] = useState();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setUserIsAuthenticated(isAuthenticated?.message);
  });
  return (
  <Router>
    <RRDRoutes>
      <Route element={<Home isAuthenticated={isAuthenticated} />} path="/" />
      <Route element={<PrivateOutlet isAuthenticated={userIsAuthenticated} />}>
        <Route element={<HomeLoggedIn />} path="/HomeLoggedIn" exact />
      </Route>
      <Route path="*" element={<p>Path not resolved</p>} />
    </RRDRoutes>
  </Router>
)};

export default Routes;
