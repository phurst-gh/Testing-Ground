import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const TabButtonStyled = styled.button`
  flex-grow: 1;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  width: 100%;
  padding: 16px;
`;

const FormContainer = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
`;

const Half = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormHalf = styled(Half)`
  padding: 16px;
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
      <FormHalf>{isLogin ? <LoginForm /> : <RegisterForm />}</FormHalf>
      <Half>
        <TabButtonStyled onClick={handleToggle}>
          {isLogin ? 'Go to register' : 'Go to login'}
        </TabButtonStyled>
      </Half>
    </FormContainer>
  );
};

export default LoginandRegister;
