import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";
import en from './locales/en/translation.json';
import bn from './locales/bn/translation.json';
import hi from './locales/hi/translation.json';
import te from './locales/te/translation.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    resources: {
      en: {translation:en},
      bn: {translation:bn},
      hi: {translation:hi},
      te: {translation:te},
      // Add more languages as needed
    },
    fallbackLng: "en", // Fallback language if detection fails
    detection: {
      // Detection options
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"], // Cache the selected language
    },
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });
