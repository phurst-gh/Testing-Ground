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

const FlashError = styled.div`
  @keyframes slideIn {
    0% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  background: linear-gradient(20deg, rgba(255,0,0,1) 0%, rgba(200,0,0,1) 100%);
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
  margin-bottom: 1rem;
  padding: .3rem;
  position: relative;
  z-index: 1;
  border-radius: 3px;
  display: flex;
  animation: slideIn forwards .1s ease-in-out 2;
  animation-timing-function: cubic-bezier(0.01, 1.68, 0.58, 1);
  & + .flash {
    animation-delay: 0.55s;
    & + .flash {
      animation-delay: 0.6s;
    }
  }

  div {
    display: flex;
    justify-content: center;
    padding: .5rem;
    background: white;
    border-radius: 2px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
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
        <FlashError key={index}>
          <div>
            {message}
          </div>
        </FlashError>
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
