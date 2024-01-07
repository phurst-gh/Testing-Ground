import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import FlashError from "../flashes/FlashError";
import { useAuth } from "../context/AuthContext";

const initialState = {
  email: "",
  password: ""
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const { setUserData, setIsAuthenticated } = useAuth();

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
      .post("http://localhost:3001/login", formData, { withCredentials: true })
      .then(res => {
        console.log('res.data', res);
        setUserData(res.data.user);
        setIsAuthenticated(res.data.message);
        setFormData(initialState);
        // console.log('isAuthenticated', isAuthenticated);
      })
      .catch((error) => {
        console.log("Login fail..");
        console.log('error', error);
      });
  };

  return (
    <>
      {/* {loginResponse?.map((message, index) => (
        <FlashError key={index} message={message} />
      ))} */}

      <div>
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
      </div>
    </>
  );
};

export default LoginForm;
