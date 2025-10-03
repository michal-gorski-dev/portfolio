import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ThreeBackground from './components/ThreeBackground';
import FallbackBackground from './components/FallbackBackground';
import {
  LanguageProvider,
  useTranslation,
} from './components/LanguageProvider';

function PortfolioContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const { t } = useTranslation();

  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    const isWebGLAvailable = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        return false;
      }
    };
    if (typeof window !== 'undefined' && isWebGLAvailable()) {
      setWebglSupported(true);
    }
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={containerRef} className='relative min-h-screen overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        {webglSupported ? <ThreeBackground /> : <FallbackBackground />}
      </div>

      <div className='fixed inset-0 z-10 bg-gradient-to-br from-purple-900/90 via-slate-900/95 to-black/90' />

      <div className='relative z-20'>
        <motion.section
          style={{ opacity, scale }}
          className='min-h-screen flex items-center justify-center px-4'
        >
          <Hero />
        </motion.section>

        <section className='min-h-screen py-20'>
          <Projects />
        </section>

        <section className='py-20 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='glassmorphism p-12 rounded-3xl'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                {t.contactTitle}
                <span className='bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent'>
                  {t.contactTitleSpan}
                </span>
              </h2>
              <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
                {t.contactDescription}
              </p>
              <motion.button>
                <motion.a
                  href='mailto: mag.michal.gorski@gmail.com'
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg'
                >
                  {t.contactButton}
                </motion.a>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
