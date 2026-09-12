import React, { useState } from 'react';
import { Menu, X, Disc, User, Cpu, Mail } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '// DISCOGRAPHY', href: '#discography', icon: Disc },
    { label: '// BIOGRAPHY', href: '#bio', icon: User },
    { label: '// STUDIO RIG', href: '#rig', icon: Cpu },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#hero" className="brand-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-bold">YESAN</span>
          <span className="logo-tag">[ARTIST & PRODUCER]</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-link btn-nav"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            CONTACT
          </a>
        </nav>

        {/* Status indicator */}
        <div className="header-status">
          <span className="status-dot"></span>
          <span className="status-text">BUENOS AIRES // BAV-01</span>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              className="mobile-nav-link btn-mobile-nav"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <Mail size={18} />
              <span>CONTACT YESAN</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
