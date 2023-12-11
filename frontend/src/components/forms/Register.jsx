import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import FlashError from "../flashes/FlashError";

const FormWrapper = styled.div`
  width: 100%;

  h1 {
    display: block;
    text-align: center;
  }
  input {
    display: block;
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
      .then((res) => {
        console.log("Submit success!!");
        setFormData(initialState);
      })
      .catch((error) => {
        console.log("Submit fail..");
        console.log(error.response.data);
        setErrData(error.response.data);
      });
  };

  return (
    <>
      {errData?.map((message, index) => (
        <FlashError key={index} message={message} />
      ))}

      <FormWrapper>
        <h1>Register Form</h1>

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
      </FormWrapper>
    </>
  );
};

export default RegisterForm;
