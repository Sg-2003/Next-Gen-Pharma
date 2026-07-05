import React, { useState, useEffect, useRef } from 'react';
import './FranchiseOpportunity.css';

const FranchiseOpportunity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      id: 'benefit-monopoly',
      title: 'Monopoly Rights',
      description: 'Secure exclusive distribution privileges in your designated territory to eliminate local competition.',
      icon: (
        <svg className="benefit-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'benefit-whogmp',
      title: 'WHO-GMP Products',
      description: 'Deliver certified, high-efficacy drug ranges manufactured under strict global healthcare parameters.',
      icon: (
        <svg className="benefit-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 'benefit-marketing',
      title: 'Full Marketing Support',
      description: 'Receive visual aids, product manuals, promotional inputs, and regular advertising assistance.',
      icon: (
        <svg className="benefit-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={containerRef} className="franchise-section" id="franchise-opportunity-section">
      <div className={`franchise-banner ${isVisible ? 'banner-animate' : ''}`}>
        {/* Vector grid background element */}
        <div className="franchise-blueprint-grid"></div>
        <div className="franchise-radial-contrast"></div>
        
        {/* Left Column: Heading & CTA */}
        <div className="franchise-text-column">
          <div className="section-header-tag">
            <span className="header-tag-pill tag-teal-light">PCD Franchise</span>
          </div>
          <h2 className="franchise-title" id="franchise-banner-title">
            Start Your Pharmaceutical Business with <span className="title-gradient-gold">Next Gen Pharma</span>
          </h2>
          <p className="franchise-description">
            Partner with a WHO-GMP certified corporate leader to establish your presence in the thriving healthcare sector. We offer premium monopoly distribution rights, marketing materials, and extensive support networks.
          </p>
          <div className="franchise-cta-container">
            <button 
              type="button" 
              className="cta-btn cta-gold" 
              id="apply-pcd-franchise-btn"
              onClick={() => console.log('PCD Franchise Application Initiated')}
            >
              <span>Apply for PCD Franchise</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Benefits Cards */}
        <div className="franchise-benefits-column">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="benefit-card" 
              id={benefit.id}
              style={{ '--index': index }}
            >
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <div className="benefit-info">
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-desc">{benefit.description}</p>
              </div>
              <div className="benefit-card-border-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseOpportunity;
