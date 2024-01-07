import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import FlashError from "../flashes/FlashError";
import { useAuth } from "../context/AuthContext";

const LogoutForm = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/logout", {}, { withCredentials: true })
      .then(() => {
        document.cookie = 'connect.sid' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/';
        console.log("After navigate");
      })
      .then(() => {
        console.log("Logout success!! isAuthenticated should now be Unauthorised", `isAuthenticated: ${isAuthenticated}`);
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

