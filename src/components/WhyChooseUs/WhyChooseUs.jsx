import React, { useState, useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
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

  const cards = [
    {
      id: 'choose-skus',
      title: '500+ SKUs Range',
      descLine1: 'Access a massive portfolio of diverse formulations',
      descLine2: 'covering all major therapeutic healthcare categories.',
      icon: (
        <svg className="choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'choose-certified',
      title: 'WHO-GMP Certified',
      descLine1: 'Ensure complete compliance and drug efficacy with',
      descLine2: 'formulations audited under strict global standards.',
      icon: (
        <svg className="choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'choose-monopoly',
      title: 'Monopoly Rights',
      descLine1: 'Secure territorial exclusivity to scale your business',
      descLine2: 'and dominate your local regional marketplace.',
      icon: (
        <svg className="choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'choose-ai',
      title: 'AI-Driven Systems',
      descLine1: 'Optimize procurement, ordering, and inventory flow',
      descLine2: 'using our smart predictive distribution algorithms.',
      icon: (
        <svg className="choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'choose-pricing',
      title: 'Competitive Pricing',
      descLine1: 'Maximize your ROI with optimized manufacturing costs',
      descLine2: 'passed down as highly profitable distributor margins.',
      icon: (
        <svg className="choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'choose-support',
      title: 'Dedicated Support',
      descLine1: 'Access 24/7 technical, marketing, and regulatory',
      descLine2: 'assistance from our in-house pharmaceutical experts.',
      icon: (
        <svg className="choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="why-choose-section" id="why-choose-us-section">
      {/* Visual glowing backgrounds */}
      <div className="why-glow-top"></div>
      <div className="why-glow-bottom"></div>

      <div className="why-header-container">
        <div className="section-header-tag">
          <span className="header-tag-pill">Our Core Pillars</span>
        </div>
        <h2 className="why-main-title">
          Why Choose <span className="title-gradient-teal">Next Gen Pharma</span>
        </h2>
        <p className="why-sub-description">
          We integrate advanced manufacturing standards with top-tier logistical networks to deliver unmatched value to our healthcare partners.
        </p>
      </div>

      <div className={`why-grid ${isVisible ? 'why-grid-visible' : ''}`} id="why-choose-grid">
        {cards.map((card, index) => (
          <div 
            key={card.id} 
            className="why-card" 
            id={card.id}
            style={{ '--index': index }}
          >
            {/* Card inner elements */}
            <div className="why-icon-wrapper">
              {card.icon}
            </div>
            <div className="why-card-content">
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-description">
                <span className="desc-line">{card.descLine1}</span>
                <span className="desc-line">{card.descLine2}</span>
              </p>
            </div>
            <div className="why-card-hover-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
