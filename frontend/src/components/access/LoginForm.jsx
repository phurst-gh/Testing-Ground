import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@src/context/AuthContext";

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: block;
  padding: 12px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.5);
  }
`;

const FormStyled = styled.div`
  width: 100%;
  
  h3 {
    margin: 0 0 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 12px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const { updateAuthContext } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/login", formData, {
        withCredentials: true,
      });
      setFormData(initialState);
      await updateAuthContext();
    } catch (e) {
      console.error("Login catch error", e);
      navigate("/error");
    }
  };

  return (
    <FormStyled>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <Button type="submit">Login</Button>
      </form>
    </FormStyled>
  );
};

export default LoginForm;
