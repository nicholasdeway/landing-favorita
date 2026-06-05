import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esTranslations from "./es.json";
import enTranslations from "./en.json";

const resources = {
  es: {
    translation: esTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;