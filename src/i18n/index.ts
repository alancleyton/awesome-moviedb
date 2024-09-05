import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt/pt.json';
import en from './locales/en/en.json';

i18n.use(initReactI18next).init({
  debug: true,
  lng: localStorage.getItem('amdb:lng') || 'pt',
  fallbackLng: localStorage.getItem('amdb:lng') || 'pt',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    pt: {
      translation: pt,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
