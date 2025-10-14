// Import necessary packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const Tesseract = require("tesseract.js");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
dotenv.config();

// Connect to MongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

// Allow frontend to connect
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
  })
);

// CHANGE 1: Parse JSON from requests (MUST BE BEFORE ROUTES!)
app.use(express.json());

// CHANGE 2: Import and use auth routes IMMEDIATELY after express.json()
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// CHANGE 3: Removed this line (it was unused)
// const user = require("./models/User");

// Setup file upload storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Make sure "uploads" folder exists!
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

// --- Routes ---
// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the Crop Yield API! 🚀" });
});

// Upload test route
app.post("/upload-single", upload.single("shcImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully: " + req.file.filename);
});

// OCR route (reads text from images)
app.post("/api/ocr", upload.single("shcImage"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file was uploaded." });
  }

  const imagePath = req.file.path;
  console.log(`Processing file: ${imagePath}`);

  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath, "eng", {
      logger: (m) => console.log(m),
    });

    console.log("OCR successful.");
    res.json({ text: text });
  } catch (error) {
    console.error("Error during OCR processing:", error);
    res.status(500).json({ error: "Failed to process image." });
  } finally {
    fs.unlinkSync(imagePath);
    console.log(`Deleted temporary file: ${imagePath}`);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
