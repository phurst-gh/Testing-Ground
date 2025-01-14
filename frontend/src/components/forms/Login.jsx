import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const FormStyled = styled.div`
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      margin-bottom: 10px;
    }

    button {
      margin-top: 10px;
      padding: 8px;
    }
  }
`;

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

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
      await axios.post("http://localhost:3001/login", formData, {
        withCredentials: true,
      });
      setFormData(initialState);
      window.location.href = "/pr1";
    } catch (error) {
      console.log("Login fail..");
      console.log("error", error);
      window.location.href = "/error";
    }
  };

  return (
    <FormStyled>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          // required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          // required
        />

        <button type="submit">Login</button>
      </form>
    </FormStyled>
  );
};

export default LoginForm;
