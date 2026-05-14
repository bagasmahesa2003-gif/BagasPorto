import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export function SoapProject() {
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
            <span className="text-accent underline decoration-4 underline-offset-8">{t('soap.title1')}</span> {t('soap.title2')}
          </h1>
          
          <div 
            className="w-full h-[300px] md:h-[450px] bg-[#333] rounded-xl my-10 bg-cover bg-center"
            style={{ backgroundImage: `url('/MAC.png')` }}
          />

          <div className="space-y-6 text-lg text-muted">
            <p>{t('soap.p1')}</p>
            <p>{t('soap.p2')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: t('soap.prd1'), img: "/detergen_ungu.png" },
              { title: t('soap.prd2'), img: "/cupirkecil.png" },
              { title: t('soap.prd3'), img: "/pewangi.png" },
              { title: t('soap.prd4'), img: "/karbol.png" },
              { title: t('soap.prd5'), img: "/cupirgede.png" },
              { title: t('soap.prd6'), img: "/handsoap.jpeg" },
              { title: t('soap.prd7'), img: "/detergen450.png" }
            ].map((product, i) => (
               <div key={i} className="bg-card rounded-lg overflow-hidden relative group p-4 border border-[#333]">
                  <div 
                    className="w-full aspect-square bg-cover bg-center rounded mb-4 transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.img}')` }}
                  />
                  <h3 className="text-lg font-bold text-center">{product.title}</h3>
               </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
