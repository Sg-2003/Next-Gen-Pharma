import React, { useState, useEffect, useRef } from 'react';
import './ProductCategories.css';

const ProductCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      id: 'cat-cardiac',
      name: 'Cardiac',
      count: '45+ Products',
      description: 'Advanced cardiovascular formulations supporting heart health.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Cardiac Pulse & Heart Icon */}
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h2.5l1.5-3 2 6 1.5-4 1.5 1H18" />
        </svg>
      )
    },
    {
      id: 'cat-derma',
      name: 'Derma',
      count: '30+ Products',
      description: 'Dermatological solutions for skin protection and restoration.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Dropper and Shield Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="currentColor" fillOpacity="0.15" />
        </svg>
      )
    },
    {
      id: 'cat-ortho',
      name: 'Ortho',
      count: '25+ Products',
      description: 'Comprehensive bone, joint, and cartilage care formulations.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Bone structure / Joints connect */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 6A3 3 0 0 0 15 3H9a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6ZM6 10h12M6 14h12" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'cat-neuro',
      name: 'Neuro',
      count: '20+ Products',
      description: 'Cognitive, central nervous system, and brain health therapies.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Brain / Synapse Nodes Icon */}
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22 2.5 2.5 0 0 1 7 19.5v-15A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 14.5 2Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 6H4a2 2 0 00-2 2v1c0 1.5 1 2.5 2 3M17 6h3a2 2 0 012 2v1c0 1.5-1 2.5-2 3M7 16H4a2 2 0 01-2-2v-1M17 16h3a2 2 0 002-2v-1" />
        </svg>
      )
    },
    {
      id: 'cat-gynae',
      name: 'Gynae',
      count: '35+ Products',
      description: 'Dedicated maternal care and female wellness pharmaceuticals.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Female symbol + Caring petals */}
          <circle cx="12" cy="9" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v7M9 19h6M12 9a3 3 0 0 1 3 3" />
        </svg>
      )
    },
    {
      id: 'cat-paediatric',
      name: 'Paediatric',
      count: '15+ Products',
      description: 'Gentle, high-safety pediatric formulations for child healthcare.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Baby block / Toy / Care Icon */}
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9zM3 12h18M12 3v18" />
        </svg>
      )
    },
    {
      id: 'cat-gastro',
      name: 'Gastro',
      count: '40+ Products',
      description: 'Gastrointestinal formulations ensuring optimal digestive health.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Gastro / Stomach / Internal Tube Loop */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z" fill="currentColor" fillOpacity="0.1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12c1 0 1.5-.5 2-1s1-.5 2 0 1.5 1 2 1 1-.5 2-1" />
        </svg>
      )
    },
    {
      id: 'cat-diabetology',
      name: 'Diabetology',
      count: '50+ Products',
      description: 'Glycemic regulators and diabetic management solutions.',
      icon: (
        <svg className="cat-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Blood droplet with medical cross inside */}
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6M9.5 15h5" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="categories-section" id="product-categories-section">
      {/* Background ambient lighting */}
      <div className="cat-ambient-glow"></div>
      
      <div className="categories-header-container">
        <div className="section-header-tag">
          <span className="header-tag-pill">Therapeutic Areas</span>
        </div>
        <h2 className="categories-main-title">
          Product Category <span className="title-gradient-gold">Highlights</span>
        </h2>
        <p className="categories-sub-description">
          We manufacture and distribute high-potency drugs across all major medical specialties. Explore our therapeutic portfolios complying with WHO-GMP parameters.
        </p>
      </div>

      <div className={`categories-grid ${isVisible ? 'grid-visible' : ''}`} id="categories-grid">
        {categories.map((cat, index) => (
          <div 
            key={cat.id} 
            className="category-card" 
            id={cat.id}
            style={{ '--index': index }}
          >
            {/* Ambient card highlights */}
            <div className="cat-card-hover-border"></div>
            
            <div className="cat-card-header">
              <div className="cat-card-icon-wrapper">
                {cat.icon}
              </div>
              <div className="cat-card-title-block">
                <h3 className="cat-card-name">{cat.name}</h3>
                <span className="cat-card-count">{cat.count}</span>
              </div>
            </div>
            
            <div className="cat-card-body">
              <p className="cat-card-description">{cat.description}</p>
            </div>
            
            <div className="cat-card-footer">
              <button 
                type="button" 
                className="cat-view-btn" 
                id={`${cat.id}-view-btn`}
                onClick={() => console.log(`Viewing range for ${cat.name}`)}
              >
                <span>View Range</span>
                <svg className="view-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
