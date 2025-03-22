import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/common.json';
import fr from '../locales/fr/common.json';

// Define translations
const resources = {
  en: { common: en },
  fr: { common: fr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback to English if not found
  interpolation: {
    escapeValue: false, // No escaping needed
  },
});

export default i18n;
