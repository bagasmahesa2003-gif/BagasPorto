import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Phone, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-5 max-w-6xl mx-auto"
    >
      <SectionHeading title1={t('contact.title1')} title2={t('contact.title2')} />
      
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-muted mb-8">{t('contact.desc')}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="https://wa.me/6285819410509?text=Hai%20Bagas%2C%20Saya%20mengenal%20anda%20dari%20website%20Portopolio!!"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25d366] text-white font-semibold rounded hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone size={20} />
            {t('contact.wa')}
          </a>
          <a
            href="mailto:bagasmahesa2003@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            {t('contact.email')}
          </a>
          <a
            href="https://www.instagram.com/_bagasmahes/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold rounded hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
          >
            <Instagram size={20} />
            {t('contact.ig')}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
