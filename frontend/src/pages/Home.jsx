import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/navigation/navbar";
import Tabs from "../components/tabs/Tabs";
import LoginForm from "../components/forms/Login";
import RegisterForm from "../components/forms/Register";
import { useAuth } from "../components/context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const loggedOutTabs = [
    { label: "register", content: <RegisterForm /> },
    { label: "login", content: <LoginForm /> },
  ];

  console.log(isAuthenticated)

  useEffect(() => {
    if (isAuthenticated === "Authorised") {
      navigate('/pr1');
    }
  }, [isAuthenticated]);

  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <Tabs tabs={loggedOutTabs} />
    </>
  );
};

export default Home;
