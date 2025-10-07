import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [backendMessage, setBackendMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The backend URL is now read from an environment variable
    const API_URL = process.env.REACT_APP_BACKEND_URL;

    // Use axios to make a GET request
    axios
      .get(API_URL)
      .then((response) => {
        // If the request is successful, update the state with the message
        setBackendMessage(response.data.message);
      })
      .catch((error) => {
        // If there's an error, log it to the console
        console.error("There was an error fetching data!", error);
        setBackendMessage("Could not connect to the backend.");
      })
      .finally(() => {
        // This runs whether it was successful or not
        setIsLoading(false);
      });
  }, []); // The empty array [] means this effect runs only once

  // Render the data (or a loading message)
  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        <strong>Status from Backend:</strong>
        {isLoading ? " Loading..." : ` ${backendMessage}`}
      </p>
    </div>
  );
}

export default Test;
