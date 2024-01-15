import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../components/navigation/navbar";
import Tabs from "../components/tabs/Tabs";
import LoginForm from "../components/forms/Login";
import RegisterForm from "../components/forms/Register";
import { useAuth } from "../components/context/AuthContext";

const HomeWrapper = styled('div')`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const tabs = [
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
    <HomeWrapper>
      <Tabs tabs={tabs} />
    </HomeWrapper>
  );
};ListComponent
export default Home;
