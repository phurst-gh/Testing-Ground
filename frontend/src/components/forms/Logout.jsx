import React, { useState } from "react";
import axios from "axios";

import FlashError from "../flashes/FlashError";

const LogoutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/logout", formData)
      .then(() => {
        console.log("Logout success!!");
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

        <form>
          <button type="submit">Logout</button>
        </form>
      </div>
    </>
  );
};

export default LogoutForm;
