// Import necessary packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const Tesseract = require("tesseract.js");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
// Load environment variables from .env file
dotenv.config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));


app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// Enable the express.json middleware to parse incoming JSON payloads
app.use(express.json());
const user = require("./models/User");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where files will be stored
    cb(null, "uploads"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    // Define how files should be named (e.g., unique timestamp + original extension)
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

// --- Basic Routes ---
// A simple test route to check if the server is alive
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the Crop Yield API! 🚀" });
});
app.post("/upload-single", upload.single("shcImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully: " + req.file.filename);
});
app.post("/api/ocr", upload.single("shcImage"), async (req, res) => {
  // 1. Check if a file was uploaded by Multer
  if (!req.file) {
    return res.status(400).json({ error: "No file was uploaded." });
  }

  const imagePath = req.file.path;
  console.log(`Processing file: ${imagePath}`);

  try {
    // 2. Use Tesseract to recognize text from the image path
    const {
      data: { text },
    } = await Tesseract.recognize(
      imagePath,
      "eng", // Language (e.g., 'eng' for English)
      { logger: (m) => console.log(m) } // Optional: logs progress
    );

    // 3. Send the extracted text back to the frontend
    console.log("OCR successful.");
    res.json({ text: text });
  } catch (error) {
    console.error("Error during OCR processing:", error);
    res.status(500).json({ error: "Failed to process image." });
  } finally {
    // 4. IMPORTANT: Delete the temporary file from the server
    fs.unlinkSync(imagePath);
    console.log(`Deleted temporary file: ${imagePath}`);
  }
});

// --- Server Initialization ---
// Get the port from environment variables, with a default of 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`✅ Server listening at ${PORT}`);
});
