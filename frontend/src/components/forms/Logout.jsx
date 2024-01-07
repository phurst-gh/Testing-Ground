import React from "react";
import axios from "axios";

import { useAuth } from "../context/AuthContext";
import FlashError from "../flashes/FlashError";

const LogoutForm = () => {
  const { setUserData, setIsAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/logout", {}, {
        withCredentials: true
      })
      .then(res => {
        setUserData(res.data.user);
        setIsAuthenticated(res.data.message);
      })
      .catch((error) => {
        console.log("Logout fail..");
        console.log('error', error);
      });
  };

  return (
    <>
      {/* {errData?.map((message, index) => (
        <FlashError key={index} message={message} />
      ))} */}
      {/* {errData && errData} */}

      <div>
        <h3>Logout</h3>

        <form onSubmit={handleSubmit}>
          <button type="submit">Logout</button>
        </form>
      </div>
    </>
  );
};

export default LogoutForm;

