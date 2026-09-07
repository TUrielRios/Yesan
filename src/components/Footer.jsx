import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-brand">YESAN MUSIC LLC</span>
          <span className="footer-copy">&copy; {new Date().getFullYear()} YESAN. TODOS LOS DERECHOS RESERVADOS.</span>
        </div>

        <div className="footer-center">
          <span className="mono-code">EST. BUENOS AIRES // OPERACIÓN GLOBAL</span>
        </div>

        <div className="footer-right">
          <a href="#hero" onClick={scrollToTop} className="back-to-top">
            // VOLVER ARRIBA <ArrowUp size={14} style={{ display: 'inline', marginLeft: '4px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};
