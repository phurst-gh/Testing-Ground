import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import NavBar from "../navigation/navbar";

const FormStyled = styled("div")`
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
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const RegisterForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errData, setErrData] = useState();

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
      .post("http://localhost:3001/register", formData)
      .then(() => {
        console.log("Submit success!!");
        setFormData(initialState);
      })
      .catch((error) => {
        console.log("Submit fail..");
        console.log(error);
        setErrData(error);
      });
  };

  return (
    <>
      {/* <NavBar /> */}

      <FormStyled>
        <h3>Register</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            // required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            // required
          />

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

          <label htmlFor="password-confirm">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            // required
          />
          <button type="submit">Register</button>
        </form>
      </FormStyled>
    </>
  );
};

export default RegisterForm;
