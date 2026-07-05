import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero-section', id: 'nav-link-home' },
    { label: 'About Us', href: '#company-introduction-section', id: 'nav-link-about' },
    { label: 'Products', href: '#product-categories-section', id: 'nav-link-products' },
    { label: 'AI Systems', href: '#ai-products-strip-section', id: 'nav-link-ai' },
    { label: 'Certifications', href: '#certifications-compliance-section', id: 'nav-link-cert' },
    { label: 'Partners', href: '#testimonials-partners-section', id: 'nav-link-testimonials' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar-container ${isScrolled ? 'nav-scrolled' : ''}`} id="main-global-navbar">
      <div className="navbar-content">
        
        {/* Brand Logo & Name */}
        <div className="brand-logo-container">
          <div className="brand-logo-icon">N</div>
          <span className="brand-name">Next Gen <span className="brand-highlight">Pharma</span></span>
        </div>

        {/* Center Links - Desktop */}
        <ul className="nav-links-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="nav-link-item" 
                id={link.id}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA - Desktop */}
        <div className="nav-cta-container">
          <a 
            href="#franchise-opportunity-section" 
            className="nav-cta-btn" 
            id="nav-apply-franchise-btn"
          >
            Apply for Franchise
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          type="button" 
          className={`nav-hamburger ${isMenuOpen ? 'menu-open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
          id="nav-hamburger-toggle"
        >
          <span className="bar bar-top"></span>
          <span className="bar bar-mid"></span>
          <span className="bar bar-bot"></span>
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-mobile-drawer ${isMenuOpen ? 'drawer-open' : ''}`} id="nav-mobile-drawer">
        <ul className="mobile-links-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="mobile-link-item" 
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-cta-li">
            <a 
              href="#franchise-opportunity-section" 
              className="mobile-cta-btn" 
              onClick={handleLinkClick}
            >
              Apply for Franchise
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
