import React, { useState, useEffect } from "react";

import Tabs from "../components/tabs/Tabs";
import LogoutForm from "../components/forms/Logout";
import LoginForm from "../components/forms/Login";
import RegisterForm from "../components/forms/Register";
import { useAuth } from "../components/context/AuthContext";

const Home = () => {
  const [ userIsAuthenticated, setUserIsAuthenticated ] = useState();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    setUserIsAuthenticated(isAuthenticated);
  });
  
  const loggedInTabs = [
    { label: 'logout', content: <LogoutForm /> },
  ];

  const loggedOutTabs = [
    { label: "register", content: <RegisterForm /> },
    { label: "login", content: <LoginForm /> },
  ];

  return (
    <>
      <h1>Testing Ground</h1>

      {userIsAuthenticated === 'Authorised' &&
        <Tabs tabs={loggedInTabs} />
      }
      {userIsAuthenticated === 'Unauthorised' &&
        <Tabs tabs={loggedOutTabs} />
      }
    </>
  );
};

export default Home;
