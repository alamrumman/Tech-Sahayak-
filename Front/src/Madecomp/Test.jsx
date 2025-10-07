import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [backendMessage, setBackendMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Correctly read the Vite environment variable
    const API_URL = import.meta.env.VITE_BACKEND_URL;

    axios
      .get(API_URL)
      .then((response) => {
        // Log the data to see its structure
        console.log("Response from server:", response.data);

        // Set the state based on the actual data structure
        setBackendMessage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error fetching data!", error);
        setBackendMessage("Could not connect to the backend.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
