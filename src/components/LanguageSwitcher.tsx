import { motion } from 'framer-motion';
import { useTranslation } from './LanguageProvider';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
  { code: 'it', label: 'IT' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div className='absolute top-6 right-6 z-50'>
      <div className='flex gap-2 p-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/20'>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => setLang(language.code)}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
              lang === language.code
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {lang === language.code && (
              <motion.div
                layoutId='language-switcher-active'
                className='absolute inset-0 bg-white/10 rounded-full'
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className='relative z-10'>{language.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
