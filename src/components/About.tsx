import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-5 max-w-6xl mx-auto"
    >
      <SectionHeading title1={t('about.title1')} title2={t('about.title2')} />
      
      <div className="flex flex-col items-center mb-10">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#333] shadow-xl mb-6">
          <img 
            src="/bagas.png" 
            alt="Bagas Mahesa" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center text-lg text-muted space-y-6">
        <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
        <p>{t('about.p2')}</p>
      </div>
    </motion.section>
  );
}
