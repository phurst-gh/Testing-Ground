import React, { useState, useEffect } from "react";
import axios from "axios";

import FlashError from "./FlashError";

const FlashMessages = () => {
  const [flashMessages, setFlashMessages] = useState([]);

  useEffect(() => {
    const fetchFlashMessages = async () => {
      try {
        const response = await axios.get('/api/flash-messages');
        console.log({ response });
        setFlashMessages(response.data.flashMessages);
      } catch (error) {
        console.error('Error fetching FlashMessages', error);
      }
    }

    fetchFlashMessages();
  }, [])

  return (
    <div>
      {flashMessages?.success && (
          <div>{flashMessages.success}</div>
        )}
        {flashMessages?.error && (
          <FlashError message={flashMessages.error} />
        )}
    </div>
  )
}

export default FlashMessages;