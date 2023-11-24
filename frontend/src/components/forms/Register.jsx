import React from 'react';
import styled from 'styled-components';

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
  // some logic

  return (
    <FormWrapper>
      <h1>Register Form</h1>

      <form action="/register" method="POST">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" required />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" required />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />
        <label htmlFor="password-confirm">Confirm Password</label>
        <input type="password-confirm" name="password-confirm" required />
        <button type="submit">Register →</button>
      </form>
    </FormWrapper>
  )
}

export default RegisterForm;