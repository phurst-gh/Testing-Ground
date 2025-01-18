import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes as RRDRoutes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Unauthenticated from "./pages/Unauthenticated";
import PrivateRoute1 from "./pages/PrivateRoute1";
import PrivateRoute2 from "./pages/PrivateRoute2";
import PrivateRoute3 from "./pages/PrivateRoute3";
import { useAuth } from "./context/AuthContext";

const PrivateOutlet = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === undefined) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/unauthenticated" />;
};

const Routes = () => (
  <Router>
    <RRDRoutes>
      <Route path="/" element={<Home />} exact />

      {/* Private Routes */}
      <Route element={<PrivateOutlet />}>
        <Route element={<PrivateRoute1 />} path="/pr1" exact />
        <Route element={<PrivateRoute2 />} path="/pr2" exact />
        <Route element={<PrivateRoute3 />} path="/pr3" exact />
      </Route>

      {/* Other Routes */}
      <Route path="/unauthenticated" element={<Unauthenticated />} exact />
      <Route path="/error" element={<p>Page error</p>} exact />

      <Route path="*" element={<Navigate to="/notfound" />} />
      <Route path="/notfound" element={<p>Path not resolved</p>} />
    </RRDRoutes>
  </Router>
);

export default Routes;
