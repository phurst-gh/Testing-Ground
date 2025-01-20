import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@src/context/AuthContext";

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutButton = () => {
  const navigate = useNavigate();
  const { checkIsAuthenticated } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/api/logout",
        {},
        {
          withCredentials: true,
        }
      );

      console.log("Logged out");
      await checkIsAuthenticated();
      navigate("/");
    } catch (e) {
      console.log("LogoutButton catch error", e);
      navigate("/error");
    }
  };

  return (
    <Button onClick={handleSubmit}>Logout</Button>
  );
};

export default LogoutButton;
