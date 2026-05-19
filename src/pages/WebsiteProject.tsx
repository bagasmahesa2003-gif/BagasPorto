import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export function WebsiteProject() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-5 max-w-4xl mx-auto">
        <Link to="/#projects" className="inline-flex items-center text-muted hover:text-accent font-medium mb-10 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          {t('projects.back')}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white group">
            <span className="text-accent underline decoration-4 underline-offset-8">{t('website.title1')}</span> {t('website.title2')}
          </h1>
          
          <div className="space-y-6 text-lg text-muted">
            <p>{t('website.p1')}</p>
            <p>{t('website.p2')}</p>
          </div>

          <div className="space-y-12 mt-16">
            {[
              {
                title: t('website.pj1.t'),
                url: "https://cafe163coffe.vercel.app/",
                description: t('website.pj1.d'),
                image: "/cafeweb.png"
              },
              {
                title: t('website.pj2.t'),
                url: "https://sowon-home-made-cake.vercel.app/",
                description: t('website.pj2.d'),
                image: "/sowonwebnew.png"
              },
              {
                title: t('website.pj3.t'),
                url: "https://bentaalaaa.vercel.app/",
                description: t('website.pj3.d'),
                image: "/bentalaweb.png"
              },
              {
                title: t('website.pj4.t'),
                url: "https://frizaly-portofolio.vercel.app/",
                description: t('website.pj4.d'),
                image: "/portoaly.png"
              }
            ].map((project, i) => (
               <div key={i} className="flex flex-col md:flex-row gap-0 bg-card rounded-2xl overflow-hidden border border-[#333] hover:border-accent/50 transition-colors duration-300">
                  <div className="md:w-1/2 min-h-[250px] relative group overflow-hidden">
                    <div 
                      className="w-full h-full absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-muted leading-relaxed mb-8">{project.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 mt-auto">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-transparent hover:text-accent border-2 border-accent transition-all duration-300 shadow-lg shadow-accent/20"
                      >
                        {t('projects.visit')} <ExternalLink size={18} className="ml-2" />
                      </a>
                      
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                        </div>
                        <span className="text-sm font-bold text-green-500 uppercase tracking-widest">{t('projects.ready')}</span>
                      </div>
                    </div>
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
