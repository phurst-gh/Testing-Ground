import React, { useState } from "react";
import axios from "axios";

const FormStyled = styled('div')`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

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
  password: ""
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialState);
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
        setUserData(res.data.user);
        setIsAuthenticated(res.data.message);
        setFormData(initialState);
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
