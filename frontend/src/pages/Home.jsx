import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Tabs from "../components/access/LoginAndRegister";
import { useAuth } from "../context/AuthContext";

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log('Home - isAuthenticated', isAuthenticated);

  useEffect(() => {
    console.log('OOPS! Home - isAuthenticated', isAuthenticated);
    if (isAuthenticated) {
      navigate('/pr1');
    }
  }, [isAuthenticated]);

  return (
    <HomeWrapper>
      <Tabs/>
    </HomeWrapper>
  );
};
export default Home;
