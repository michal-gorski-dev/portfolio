import { createContext, useState, useMemo, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const getInitialLang = () => {
  if (typeof navigator === 'undefined') {
    return 'en';
  }
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'pl', 'it'].includes(browserLang)) {
    return browserLang;
  }
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
