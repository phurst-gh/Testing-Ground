import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "@src/context/AuthContext";
import RegisterForm from "@src/components/access/forms/RegisterForm";
import LogoutButton from "@src/components/access/forms/LogoutButton";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  font-size: 1rem;
  color: #555;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const NavbarComponent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Navbar>
      <Logo href="#">Brand</Logo>
      <NavList>
        <NavItem><NavLink href="#">Home</NavLink></NavItem>
        <NavItem><NavLink href="#">About</NavLink></NavItem>
        <NavItem><NavLink href="#">Services</NavLink></NavItem>
        <NavItem><NavLink href="#">Contact</NavLink></NavItem>
      </NavList>
      {isAuthenticated && <LogoutButton />}
    </Navbar>
  );
};

export default NavbarComponent;