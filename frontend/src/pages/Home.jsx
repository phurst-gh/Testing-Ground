import React, { useState, useEffect } from "react";
import Tabs from "../components/tabs/Tabs";
import LoginForm from "../components/forms/Login";
import RegisterForm from "../components/forms/Register";

const Home = ({ isAuthenticated }) => {
  const loggedOutTabs = [
    { label: "register", content: <RegisterForm /> },
    { label: "login", content: <LoginForm /> },
  ];

  const userUnauthorised = isAuthenticated === 'Unauthorised' || isAuthenticated === undefined;

  console.log({ userUnauthorised });
  return (
    <>
      <h1>Testing Ground</h1>
      {userUnauthorised
        ? <Tabs tabs={loggedOutTabs} />
        : <p>You are already logged in.</p>
      }
    </>
  );
};

export default Home;
