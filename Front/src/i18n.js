// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    debug: true, // This will show messages in the console to help with debugging
    fallbackLng: "en", // Use English if a translation is missing
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    resources: {
      en: {
        translation: {
          // English translations
          timelineTitle: "Timeline",
          phase1Title: "Phase I",
          phase1Desc:
            "Initial data collection and model architecture design for the AI system.",
          phase2Title: "Phase II",
          phase2Desc:
            "Model training and validation with core dataset implementation.",
          phase3Title: "Phase III",
          phase3Desc:
            "Integration of advanced features and performance optimization.",
          phase4Title: "Phase IV",
          phase4Desc:
            "Final testing, deployment, and continuous improvement system launch.",
        },
      },
      or: {
        translation: {
          // Odia (ଓଡ଼ିଆ) translations
          timelineTitle: "ସମୟସୀମା",
          phase1Title: "ପର୍ଯ୍ୟାୟ I",
          phase1Desc:
            "AI ସିଷ୍ଟମ ପାଇଁ ପ୍ରାରମ୍ଭିକ ତଥ୍ୟ ସଂଗ୍ରହ ଏବଂ ମଡେଲ ସ୍ଥାପତ୍ୟ ଡିଜାଇନ୍।",
          phase2Title: "ପର୍ଯ୍ୟାୟ II",
          phase2Desc:
            "ମୂଳ ଡାଟାସେଟ୍ କାର୍ଯ୍ୟକାରିତା ସହିତ ମଡେଲ୍ ପ୍ରଶିକ୍ଷଣ ଏବଂ ବୈଧତା।",
          phase3Title: "ପର୍ଯ୍ୟାୟ III",
          phase3Desc:
            "ଉନ୍ନତ ବୈଶିଷ୍ଟ୍ୟଗୁଡିକର ଏକୀକରଣ ଏବଂ କାର୍ଯ୍ୟଦକ୍ଷତା ଅପ୍ଟିମାଇଜେସନ୍।",
          phase4Title: "ପର୍ଯ୍ୟାୟ IV",
          phase4Desc:
            "ଅନ୍ତିମ ପରୀକ୍ଷଣ, ନିୟୋଜନ, ଏବଂ ନିରନ୍ତର ଉନ୍ନତି ସିଷ୍ଟମ୍ ଆରମ୍ଭ।",
        },
      },
    },
  });

export default i18n;
