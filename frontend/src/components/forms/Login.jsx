import React, { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialState);

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
      await axios.post(
        "http://localhost:3001/login",
        formData,
        { withCredentials: true }
      );

      setFormData(initialState);
      window.location.href = "/HomeLoggedIn";
    } catch (error) {
      console.log("Login fail..");
      console.log("error", error);
    }
  };

  return (
    <>
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
