import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes as RRDRoutes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import PrivateRoute1 from "./pages/PrivateRoute1";
import PrivateRoute2 from "./pages/PrivateRoute2";
import PrivateRoute3 from "./pages/PrivateRoute3";
import { useAuth } from "./components/context/AuthContext";

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
        <Route path="/" element={<Home />} exact />

        {/* Private Routes */}
        <Route
          element={<PrivateOutlet userIsAuthenticated={userIsAuthenticated} />}
        >
          <Route element={<PrivateRoute1 />} path="/pr1" exact />
          <Route element={<PrivateRoute2 />} path="/pr2" exact />
          <Route element={<PrivateRoute3 />} path="/pr3" exact />
        </Route>

        {/* Other Routes */}
        <Route
          path="/unauthorised"
          element={<p>User is unauthorised</p>}
          exact
        />
        <Route path="/error" element={<p>Page error</p>} exact />

        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path="/notfound" element={<p>Path not resolved</p>} />
      </RRDRoutes>
    </Router>
  );
};

export default Routes;
