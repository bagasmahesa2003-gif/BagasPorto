import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <header
      id="hero"
      className="relative h-screen flex items-center justify-center text-center px-5 bg-cover bg-center bg-fixed bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920')]"
    >
      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(3rem,8vw,5rem)] font-extrabold mb-3 tracking-tight leading-tight text-white"
        >
          Bagas Mahesa
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[clamp(1rem,2.5vw,1.8rem)] text-accent font-normal mb-6"
        >
          {t('hero.subtitle')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-muted text-lg mb-10"
        >
          {t('hero.desc')}
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          href="#about"
          className="px-8 py-4 bg-accent text-white font-semibold rounded hover:bg-transparent hover:text-accent border-2 border-accent transition-all duration-300"
        >
          {t('hero.btn')}
        </motion.a>
      </div>
    </header>
  );
}
