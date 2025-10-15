import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Shchero from "./Madecomp/Shchero.jsx";
import Recommender from "./Madecomp/Recommender.jsx";
import i18n from "./i18n.js";
import Hero from "./Madecomp/Hero.jsx";
import Yieldp from "./Madecomp/Yieldp.jsx";
import Signup from "./Madecomp/Signup.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import Cardin from "./Madecomp/Cardin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<Cardin />} />
          <Route path="/yeildpredict" element={<Yieldp />} />
          <Route path="/Shcrecommendation" element={<Recommender />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
