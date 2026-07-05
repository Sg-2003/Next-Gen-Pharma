import React from 'react';
import './HeroBanner.css';
import heroBgImg from '../../assets/hero_bg.png';

const HeroBanner = () => {
  return (
    <section className="hero-container" style={{ backgroundImage: `url(${heroBgImg})` }} id="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-radial-glow"></div>
      

      {/* Main Hero Content */}
      <div className="hero-content" id="hero-content">
        <div className="hero-badge-container">
          <span className="hero-badge">Pioneering Health & Logistics</span>
        </div>
        <h1 className="hero-title" id="company-title">
          Next Gen Pharma
        </h1>
        <p className="hero-tagline" id="company-tagline">
          Quality Pharmaceuticals. <span className="tagline-highlight">Intelligent Distribution.</span>
        </p>
        <p className="hero-description">
          We combine state-of-the-art manufacturing standards with robust, intelligent supply chain solutions. Delivering reliability and excellence to healthcare partners, distributors, and pharmacies nationwide.
        </p>
        
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="cta-btn cta-teal" 
            id="explore-products-btn"
            onClick={() => document.getElementById('product-categories-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Products
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button 
            type="button" 
            className="cta-btn cta-gold" 
            id="apply-franchise-btn"
            onClick={() => document.getElementById('franchise-opportunity-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply for Franchise
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default HeroBanner;
