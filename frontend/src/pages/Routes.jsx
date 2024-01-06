import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes as RRDRoutes, Route, Outlet } from "react-router-dom";

import Home from "./Home";

const PrivateOutlet = ({ isAuthenticated }) =>
  isAuthenticated === "Authorised" ? (
    <Outlet />
  ) : (
    <p>You are not authorised to view this page.</p>
  );

const Routes = () => {
  return (
  <Router>
    <RRDRoutes>
      <Route element={<Home />} path="/" />
      {/* <Route element={<PrivateOutlet isAuthenticated={userIsAuthenticated} />}>
        <Route element={<HomeLoggedIn />} path="/HomeLoggedIn" exact />
      </Route> */}
      <Route path="*" element={<p>Path not resolved</p>} />
    </RRDRoutes>
  </Router>
)};

export default Routes;
