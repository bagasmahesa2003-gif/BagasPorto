import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export function DesignProject() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-5 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-muted hover:text-accent font-medium mb-10 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          {t('projects.back')}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white group">
            <span className="text-accent underline decoration-4 underline-offset-8">{t('design.title1')}</span> {t('design.title2')}
          </h1>
          
          <div 
            className="w-full h-[300px] md:h-[450px] bg-[#333] rounded-xl my-10 bg-cover bg-center"
            style={{ backgroundImage: `url('/pic1.png')` }}
          />

          <div className="space-y-6 text-lg text-muted">
            <p>{t('design.p1')}</p>
            <p>{t('design.p2')}</p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 mt-12 space-y-6">
            {[
              "/ps1.png",
              "/ps2.png",
              "/ps3.png",
              "/ps4.png",
              "/ps5.png",
              "/ps6.png",
              "/ps7.png",
              "/ps8.png"
            ].map((img, i) => (
               <div key={i} className="break-inside-avoid">
                  <div className="bg-card rounded-lg overflow-hidden group shadow-lg">
                    <img src={img} alt={`Design Portfolio ${i+1}`} className="w-full h-auto transition-transform duration-700 hover:scale-105" />
                  </div>
               </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
