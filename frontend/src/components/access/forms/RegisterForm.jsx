import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@src/context/AuthContext";

const FormStyled = styled.div`
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;

  form {
    display: flex;
    flex-direction: column;

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
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const { checkIsAuthenticated } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", formData)
      .then(async () => {
        setFormData(initialState);
        await checkIsAuthenticated();
      })
      .catch((error) => {
        // console.log("Submit fail..");
        // console.log(error);
        // window.location.href = "/error";
        console.error("Login failed:", error);
        navigate("/error");
      });
  };

  return (
    <>
      {/* <NavBar /> */}

      <FormStyled>
        <div>
          <h3>Register</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password-confirm">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </FormStyled>
    </>
  );
};

export default RegisterForm;
