import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

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

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/register', formData)
      .then(response => {
        console.log("Submit success!!");
        console.log(response);
      })
      .catch((error) => {
        console.log("Submit fail..");
        console.error(error);
      });
  };

  return (
    <FormWrapper>
      <h1>Register Form</h1>

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
    </FormWrapper>
  );
};

export default RegisterForm;
