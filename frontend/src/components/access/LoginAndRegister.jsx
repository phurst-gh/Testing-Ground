import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const TabButtonStyled = styled.button`
  border: 1px solid #ccc;
  flex-grow: 1;
  width: 40vw;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  display: flex;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
`;

const Half = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginandRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin =
    new URLSearchParams(location.search).get("type") !== "register";

  const handleToggle = () => {
    navigate(`?type=${isLogin ? "register" : "login"}`);
  };

  return (
    <FormContainer>
      <Half>{isLogin ? <LoginForm /> : <RegisterForm />}</Half>
      <Half>
        <TabButtonStyled onClick={handleToggle}>
          {isLogin ? 'Go to register' : 'Go to login'}
        </TabButtonStyled>
      </Half>
    </FormContainer>
  );
};

export default LoginandRegister;
