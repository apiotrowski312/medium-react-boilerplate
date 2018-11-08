import { en, pl } from './translations';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';

i18n.use(LanguageDetector).init({
  resources: { en, pl },
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: { wait: true },
});

export default i18n;
