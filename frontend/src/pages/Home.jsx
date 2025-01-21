import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Tabs from "../components/access/LoginAndRegister";
import Dashboard from "../components/dashboard/Dashboard";
import { GridContainer, GridChild } from "../components/LayoutGrid";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/pr1");
    }
  }, [isAuthenticated]);

  return (
    <GridContainer>
      <GridChild start={3} end={7}>
        {isAuthenticated ? <Dashboard /> : <Tabs />}
      </GridChild>
    </GridContainer>
  );
};
export default Home;
