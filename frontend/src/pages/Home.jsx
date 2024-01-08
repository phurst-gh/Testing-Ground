import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Tabs from "../components/tabs/Tabs";
import LogoutForm from "../components/forms/Logout";
import LoginForm from "../components/forms/Login";
import RegisterForm from "../components/forms/Register";
import { useAuth } from "../components/context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();

  const loggedOutTabs = [
    { label: "register", content: <RegisterForm /> },
    { label: "login", content: <LoginForm /> },
  ];

  useEffect(() => {
    if (isAuthenticated === "Authorised") {
      return <Navigate to="/HomeLoggedIn" />;
    }
  }, [isAuthenticated]);

  return (
    <>
      <h1>Home</h1>
      <Tabs tabs={loggedOutTabs} />
    </>
  );
};

export default Home;
