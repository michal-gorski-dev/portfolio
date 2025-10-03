import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useTranslation } from './LanguageProvider';
import LanguageSwitcher from './LanguageSwitcher';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12'
    >
      <LanguageSwitcher />
      <div className='flex-1 text-center lg:text-left'>
        <motion.div variants={itemVariants} className='mb-6'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 rounded-full text-cyan-300 mb-6 mt-24 sm:mt-0'
          >
            <Sparkles className='w-4 h-4' />
            <span className='text-sm font-medium'>
              {t.availableForProjects}
            </span>
          </motion.div>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='text-white'>{t.heroTitleCreative}</span>
            <br />
            <span className='bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent text-glow'>
              {t.heroTitleDeveloper}
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl'
        >
          {t.heroDescription}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 mb-12'
        >
          <motion.a
            href='#projects'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg flex items-center justify-center'
          >
            {t.heroButtonViewWork}
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='flex gap-6 justify-center lg:justify-start'
        >
          {[
            {
              Icon: Github,
              href: 'https://github.com/michal-gorski-dev',
              label: 'GitHub',
            },
            {
              Icon: Linkedin,
              href: 'https://www.linkedin.com/in/micha%C5%82-g%C3%B3rski-b141a5204/',
              label: 'LinkedIn',
            },
            {
              Icon: Mail,
              href: 'mailto:mag.michal.gorski@gmail.com',
              label: 'Email',
            },
          ].map(({ Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300'
            >
              <Icon className='w-5 h-5' />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className='flex-shrink-0'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='relative'
        >
          <div className='absolute -inset-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full opacity-75 blur-lg animate-pulse' />

          <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm floating'>
            <img
              src='/michal.png'
              alt='Michal'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
          </div>

          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity },
            }}
            className='absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80 blur-sm'
          />

          <motion.div
            animate={{
              rotate: -360,
              y: [-10, 10, -10],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
              y: { duration: 3, repeat: Infinity },
            }}
            className='absolute -bottom-4 -left-12 w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full opacity-70 blur-sm'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
