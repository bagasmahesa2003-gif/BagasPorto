import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle scrolling when location or hash changes
    if (location.hash) {
      const id = location.hash.substring(1); // remove the '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // small delay to ensure page renders before scrolling
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { key: 'nav.about', href: '/#about' },
    { key: 'nav.experience', href: '/#experience' },
    { key: 'nav.skills', href: '/#skills' },
    { key: 'nav.projects', href: '/#projects' },
    { key: 'nav.contact', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    
    const [path, hash] = href.split('#');
    
    if (location.pathname === path && hash) {
      e.preventDefault();
      navigate(href, { replace: true });
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#333] ${
        isScrolled ? 'py-3 bg-primary/98 backdrop-blur-md' : 'py-5 bg-primary/95'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <a href="#hero" className="font-extrabold text-2xl text-accent tracking-tight flex-shrink-0">
          BM.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white text-sm font-medium hover:text-accent transition-colors"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="hidden md:flex items-center relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
          >
            <Globe size={18} />
            {language === 'en' ? 'EN' : language === 'id' ? 'ID' : 'JA'}
          </button>
          
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 bg-card border border-[#333] rounded-md shadow-lg overflow-hidden w-32"
              >
                <div className="flex flex-col">
                  {(['en', 'id', 'ja'] as Language[]).map(lang => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setDropdownOpen(false); }}
                      className={`px-4 py-2 text-left text-sm hover:bg-[#333] transition-colors ${language === lang ? 'text-accent font-bold' : 'text-white'}`}
                    >
                      {lang === 'en' ? 'English' : lang === 'id' ? 'Indonesian' : 'Japan'}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => {
              const langs: Language[] = ['en', 'id', 'ja'];
              const nextIdx = (langs.indexOf(language) + 1) % langs.length;
              setLanguage(langs[nextIdx]);
            }}
            className="flex items-center gap-1 text-sm font-medium text-white hover:text-accent transition-colors"
          >
            <Globe size={18} />
            {language.toUpperCase()}
          </button>
          <button
            className="text-white hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute left-0 right-0 top-full bg-card border-b border-[#333] shadow-2xl overflow-hidden origin-top"
          >
            <ul className="flex flex-col py-4 px-5 space-y-4">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-2 text-white font-medium hover:text-accent transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

