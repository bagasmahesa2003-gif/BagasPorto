import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12 text-center border-t border-[#333] text-sm text-muted">
      <p>&copy; {new Date().getFullYear()} Bagas Mahesa. {t('footer.text')}</p>
    </footer>
  );
}
