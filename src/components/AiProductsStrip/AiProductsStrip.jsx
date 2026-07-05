import React, { useState, useEffect, useRef } from 'react';
import './AiProductsStrip.css';

const AiProductsStrip = () => {
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

  const aiProducts = [
    {
      id: 'ai-pharmchain',
      name: 'PharmChain AI',
      description: 'Blockchain ledger integration for secure batch tracking across the pharmaceutical supply chain.',
      linkText: 'Explore System Capabilities',
      linkUrl: '#ai-section',
      icon: (
        <svg className="ai-strip-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          {/* Box / Link nodes */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 'ai-rxpredict',
      name: 'RxPredict R&D',
      description: 'Machine learning analytics predicting drug compound stability, solubility, and bio-equivalence.',
      linkText: 'View R&D Whitepaper',
      linkUrl: '#investors',
      icon: (
        <svg className="ai-strip-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          {/* Brain / Molecular nodes */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 'ai-logismart',
      name: 'LogiSmart Distribution',
      description: 'AI routing and demand forecasting model driving logistics across 20+ partner states.',
      linkText: 'Read Logistics Case Study',
      linkUrl: '#investors',
      icon: (
        <svg className="ai-strip-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          {/* Network Graph nodes */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ];

  return (
    <section ref={containerRef} className="ai-strip-section" id="ai-products-strip-section">
      <div className="ai-strip-ambient-glow"></div>
      
      <div className="ai-strip-header-container">
        <div className="section-header-tag">
          <span className="header-tag-pill tag-teal-light">Digital Infrastructure</span>
        </div>
        <h2 className="ai-strip-main-title">
          Intelligence <span className="title-gradient-teal">Integration</span>
        </h2>
        <p className="ai-strip-sub-description">
          We integrate modern machine learning and blockchain tracking systems into our pipeline to guarantee drug traceability and accelerate R&D cycles.
        </p>
      </div>

      <div className={`ai-cards-stack ${isVisible ? 'stack-animate' : ''}`} id="ai-cards-stack">
        {aiProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="ai-horizontal-card" 
            id={product.id}
            style={{ '--index': index }}
          >
            <div className="ai-card-left-section">
              <div className="ai-card-icon-frame">
                {product.icon}
              </div>
              <div className="ai-card-text-block">
                <h3 className="ai-card-title">{product.name}</h3>
                <p className="ai-card-description">{product.description}</p>
              </div>
            </div>
            
            <div className="ai-card-right-section">
              <a href={product.linkUrl} className="ai-card-redirect-link" id={`${product.id}-link`}>
                <span>{product.linkText}</span>
                <svg className="ai-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Subtle glow border overlay */}
            <div className="ai-card-hover-border-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiProductsStrip;
