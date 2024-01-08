import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes as RRDRoutes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import HomeLoggedIn from "./HomeLoggedIn";
import { useAuth } from "../components/context/AuthContext";

const PrivateOutlet = ({ userIsAuthenticated }) => {
  console.log("PrivateOutlet", userIsAuthenticated);

  if (userIsAuthenticated === undefined) {
    return <p>Loading...</p>;
  }

  return userIsAuthenticated === "Authorised" ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorised" />
  );
};

const Routes = () => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setUserIsAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <RRDRoutes>
        <Route
          path="/"
          element={<Home />}
          userIsAuthenticated={userIsAuthenticated}
          exact
        />
        {/* Private Routes */}
        <Route
          element={<PrivateOutlet userIsAuthenticated={userIsAuthenticated} />}
        >
          <Route element={<HomeLoggedIn />} path="/HomeLoggedIn" exact />
        </Route>

        {/* Other Routes */}
        <Route
          path="/unauthorised"
          element={<p>User is unauthorised</p>}
          exact
        />
        <Route path="/error" element={<p>Page error</p>} exact />
        <Route path="*" element={<p>Path not resolved</p>} />

      </RRDRoutes>
    </Router>
  );
};

export default Routes;
