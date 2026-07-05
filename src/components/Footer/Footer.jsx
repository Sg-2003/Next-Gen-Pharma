import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Newsletter subscription registered for: ${email}`);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <footer className="footer-section" id="footer-section">
      <div className="footer-glow-left"></div>
      <div className="footer-glow-right"></div>
      
      <div className="footer-container">
        
        {/* Top Section: Directories & Details */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-column brand-col">
            <div className="brand-logo-container">
              <div className="brand-logo-icon">N</div>
              <span className="brand-name">Next Gen <span className="brand-highlight">Pharma</span></span>
            </div>
            <p className="brand-summary">
              Pioneering global-standard medical accessibility through advanced molecular manufacturing and intelligent supply chains.
            </p>
            <div className="social-links-row">
              <a href="#linkedin" className="social-link" id="footer-linkedin-link" aria-label="LinkedIn Profile">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#x" className="social-link" id="footer-x-link" aria-label="X Profile">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#youtube" className="social-link" id="footer-youtube-link" aria-label="YouTube Channel">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="#hero-section" id="footer-link-home">Home Page</a></li>
              <li><a href="#product-categories-section" id="footer-link-products">Product Range</a></li>
              <li><a href="#franchise-opportunity-section" id="footer-link-franchise">Franchise Portal</a></li>
              <li><a href="#ai-products-strip-section" id="footer-link-ai">AI Systems</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Info */}
          <div className="footer-column">
            <h3 className="footer-col-title">Corporate</h3>
            <ul className="footer-links-list">
              <li><a href="#company-introduction-section" id="footer-link-story">Company Story</a></li>
              <li><a href="#about-us" id="footer-link-leadership">Our Leadership</a></li>
              <li><a href="#investors" id="footer-link-investors">Investor Relations</a></li>
              <li><a href="#careers" id="footer-link-careers">Careers Portal</a></li>
            </ul>
          </div>

          {/* Column 4: Regulatory */}
          <div className="footer-column">
            <h3 className="footer-col-title">Regulatory</h3>
            <ul className="footer-links-list">
              <li><a href="#certifications-compliance-section" id="footer-link-gmp">WHO-GMP Policy</a></li>
              <li><a href="#certifications-compliance-section" id="footer-link-iso">ISO 9001:2015</a></li>
              <li><a href="#certifications-compliance-section" id="footer-link-cdsco">CDSCO Policies</a></li>
              <li><a href="#certifications-compliance-section" id="footer-link-licences">Drug Licences</a></li>
            </ul>
          </div>

          {/* Column 5: Contacts */}
          <div className="footer-column contacts-col">
            <h3 className="footer-col-title">Corporate Office</h3>
            <p className="contact-item">
              <strong>Address:</strong> Plot No. 42, Biotech Industrial Zone, Phase-II, New Delhi - 110020
            </p>
            <p className="contact-item">
              <strong>Phone:</strong> +91-11-45678901
            </p>
            <p className="contact-item">
              <strong>Email:</strong> info@nextgenpharma.com
            </p>
          </div>

        </div>

        {/* Middle Section: Newsletter Sign-up */}
        <div className="footer-newsletter-row">
          <div className="newsletter-text">
            <h4 className="newsletter-title">Subscribe to our Newsletter</h4>
            <p className="newsletter-sub">Get product launches, clinical updates, and distribution bulletins directly in your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-input-container">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter corporate email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="newsletter-email-input"
              />
              <button type="submit" className="newsletter-submit-btn" id="newsletter-subscribe-btn">
                Subscribe
              </button>
            </div>
            {isSubmitted && (
              <span className="newsletter-success-toast">
                Subscription Registered. Thank you!
              </span>
            )}
          </form>
        </div>

        {/* Bottom Section: Legal bar */}
        <div className="footer-bottom-bar">
          <div className="legal-left">
            <span className="copyright-text">
              &copy; {new Date().getFullYear()} Next Gen Pharma. All rights reserved.
            </span>
            <div className="legal-links">
              <a href="#privacy" id="footer-privacy-link">Privacy Policy</a>
              <span className="legal-bullet">•</span>
              <a href="#terms" id="footer-terms-link">Terms of Service</a>
              <span className="legal-bullet">•</span>
              <a href="#cookies" id="footer-cookies-link">Cookie Settings</a>
            </div>
          </div>
          
          <div className="legal-right">
            <div className="footer-compliance-badge">
              WHO-GMP ACCREDITED | ISO 9001:2015 REGISTERED
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
