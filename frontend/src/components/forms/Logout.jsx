import React from "react";
import axios from "axios";

const LogoutForm = () => {
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
    <form onSubmit={handleSubmit}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutForm;
