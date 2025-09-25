// Import necessary packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Tesseract = require("tesseract.js");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) to allow requests from the React frontend
app.use(cors());

// Enable the express.json middleware to parse incoming JSON payloads
app.use(express.json());

// --- Basic Routes ---
// A simple test route to check if the server is alive
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the Crop Yield API! 🚀" });
});

// We will add our main API routes here later
// const authRoutes = require('./routes/auth');
// const dataRoutes = require('./routes/data');
// app.use('/api/auth', authRoutes);
// app.use('/api/data', dataRoutes);

// --- Server Initialization ---
// Get the port from environment variables, with a default of 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`✅ Server listening at ${PORT}`);
});
