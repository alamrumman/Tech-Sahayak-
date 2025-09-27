// LanguageToggle.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  // Determine if the current language is Odia
  const isOdia = i18n.resolvedLanguage === "or";

  // The function to call when the toggle is clicked
  const handleLanguageChange = () => {
    const newLang = isOdia ? "en" : "or";
    i18n.changeLanguage(newLang);
  };

  return (
    // Daisy UI's recommended structure for a toggle with labels
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <span className="label-text">English</span>
        <input
          type="checkbox"
          className="toggle"
          checked={isOdia}
          onChange={handleLanguageChange}
        />
        <span className="label-text">ଓଡ଼ିଆ</span>
      </label>
    </div>
  );
};

export default LanguageToggle;
