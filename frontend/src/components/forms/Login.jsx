import React, { useState } from "react";
import axios from "axios";

import FlashError from "../flashes/FlashError";

const initialState = {
  email: "",
  password: ""
};

const LoginForm = () => {
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
      .post("http://localhost:3001/login", formData)
      .then(() => {
        console.log("Login success!!");
        setFormData(initialState);
      })
      .catch((error) => {
        console.log("Login fail..");
        const errorResponseData = error.response.data;
        console.log('errorResponseData', errorResponseData);
        setErrData(errorResponseData);
      });
  };

  return (
    <>
      {/* {errData?.map((message, index) => (
        <FlashError key={index} message={message} />
      ))} */}
      {errData && errData}

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
