import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import en from '../locales/en/common.json';
import fr from '../locales/fr/common.json';
import ar from '../locales/ar/common.json';

const resources = {
  en: { common: en },
  fr: { common: fr },
  ar: { common: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  ns: ['common'], // Default namespace
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  react: {
    useSuspense: true, // If you don't want to use Suspense
  },
});

export default i18n;
