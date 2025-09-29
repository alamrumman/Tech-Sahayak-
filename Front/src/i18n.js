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
    debug: true,
    fallbackLng: "en", // fallback if translation missing
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // Timeline translations
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

          // Hero component translations
          hero: {
            yield_prediction_using: "Yield prediction using",
            agricultural_data: "Agricultural data",
            soil_metrics: "Soil metrics",
            weather_patterns: "Weather patterns",
          },

          // Navbar translations
          navbar: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact Us",
            get_started: "Get Started",
            crop_analysis: "Crop Analysis",
            weather_insights: "Weather Insights",
          },

          // Cardcomp translations
          card: {
            yield_predictor: "Yield predictor",
            yield_description:
              "Get to know your yield today and take steps to enhance it",
            check_now: "Check now!",
          },

          // SHCupload translations
          shc: {
            title: "Personalized Crop Recommendation",
            description:
              "Upload your SHC for soil health and yield recommendations.",
            choose_file: "Choose File",
            upload: "Upload",
            uploading: "Uploading...",
            cancel: "Cancel",
            select_file_alert: "Please select a file first!",
            upload_failed: "Upload failed",
            connection_error: "Upload failed! Please check your connection.",
          },
        },
      },
      or: {
        translation: {
          // Timeline translations in Odia
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

          // Hero component translations in Odia
          hero: {
            yield_prediction_using: "ଅମଳ ପୂର୍ବାନୁମାନ ବ୍ୟବହାର କରି",
            agricultural_data: "କୃଷି ତଥ୍ୟ",
            soil_metrics: "ମାଟି ମେଟ୍ରିକ୍ସ",
            weather_patterns: "ପାଣିପାଗ ନମୁନା",
          },

          // Navbar translations in Odia
          navbar: {
            home: "ଘର",
            services: "ସେବାଗୁଡିକ",
            about: "ବିଷୟରେ",
            contact: "ଆମକୁ ଯୋଗାଯୋଗ କରନ୍ତୁ",
            get_started: "ଆରମ୍ଭ କରନ୍ତୁ",
            crop_analysis: "ଫସଲ ବିଶ୍ଳେଷଣ",
            weather_insights: "ପାଣିପାଗ ଜ୍ଞାନ",
          },

          // Cardcomp translations in Odia
          card: {
            yield_predictor: "ଅମଳ ପୂର୍ବାନୁମାନକାରୀ",
            yield_description:
              "ଆଜି ଆପଣଙ୍କର ଅମଳ ଜାଣନ୍ତୁ ଏବଂ ଏହାକୁ ବୃଦ୍ଧି କରିବା ପାଇଁ ପଦକ୍ଷେପ ନିଅନ୍ତୁ",
            check_now: "ବର୍ତ୍ତମାନ ଯାଞ୍ଚ କରନ୍ତୁ!",
          },

          // SHCupload translations in Odia
          shc: {
            title: "ବ୍ୟକ୍ତିଗତ ଫସଲ ସୁପାରିଶ",
            description:
              "ମାଟିର ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ଅମଳ ସୁପାରିଶ ପାଇଁ ଆପଣଙ୍କ SHC ଅପଲୋଡ୍ କରନ୍ତୁ।",
            choose_file: "ଫାଇଲ ବାଛନ୍ତୁ",
            upload: "ଅପଲୋଡ୍ କରନ୍ତୁ",
            uploading: "ଅପଲୋଡ୍ ହେଉଛି...",
            cancel: "ବାତିଲ୍ କରନ୍ତୁ",
            select_file_alert: "ଦୟାକରି ପ୍ରଥମେ ଏକ ଫାଇଲ ବାଛନ୍ତୁ!",
            upload_failed: "ଅପଲୋଡ୍ ବିଫଳ",
            connection_error: "ଅପଲୋଡ୍ ବିଫଳ! ଦୟାକରି ଆପଣଙ୍କ ସଂଯୋଗ ଯାଞ୍ଚ କରନ୍ତୁ।",
          },
        },
      },
    },
  });

export default i18n;
