import React, { useState, useEffect } from "react";

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

  console.log("HOME", isAuthenticated);

  return (
    <>
      {isAuthenticated === "Authorised" 
      ? <p>You are already logged in</p>
      : (
        <>
          <h1>Home</h1>
          <Tabs tabs={loggedOutTabs} />
        </>
      )}
    </>
  );
};

export default Home;
