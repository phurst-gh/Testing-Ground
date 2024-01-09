import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RegisterForm from "../forms/Register";
import LoginForm from "../forms/Login";
import LogoutForm from "../forms/Logout";
import { useAuth } from "../context/AuthContext";

const NavBarStyled = styled("nav")`
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    li {
      padding: 10px;
    }
  }
`;

const NavBar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavBarStyled>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {isAuthenticated === "Authorised" && (
          <li>
            <LogoutForm />
          </li>
        )}
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
