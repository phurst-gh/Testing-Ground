import React from "react";
import axios from "axios";

const LogoutForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3001/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.href = "/";
    } catch (error) {
      console.log("Logout fail..");
      console.log("error", error);
    }
  };

  return (
    <>
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
