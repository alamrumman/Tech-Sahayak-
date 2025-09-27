import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n.js";
import Footer from "./Madecomp/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Footer/>} />
      
    </Routes>
  </BrowserRouter>
  </StrictMode>
);
