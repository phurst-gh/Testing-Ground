import React from "react";
import axios from "axios";

const LogoutButton = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/api/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.href = "/";
    } catch (error) {
      // console.log("Logout fail..");
      // console.log("error", error);
      window.location.href = "/error";
    }
  };

  return (
    <button onClick={handleSubmit}>Logout</button>
  );
};

export default LogoutButton;
