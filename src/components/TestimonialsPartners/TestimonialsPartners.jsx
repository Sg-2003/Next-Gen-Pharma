import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsPartners.css';
import amitImg from '../../assets/partner_amit.jpg';
import priyaImg from '../../assets/partner_priya.jpg';
import rajeshImg from '../../assets/partner_rajesh.jpg';

const TestimonialsPartners = () => {
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

  const partners = [
    {
      id: 'partner-medvantage',
      name: 'MedVantage',
      sub: 'Pharmacies',
      icon: (
        <svg className="partner-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5M3 10.5h18M12 3v7.5M8 6h8" />
        </svg>
      )
    },
    {
      id: 'partner-apex',
      name: 'Apex Health',
      sub: 'Distributors',
      icon: (
        <svg className="partner-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 'partner-corelabs',
      name: 'CoreLabs',
      sub: 'Clinical Research',
      icon: (
        <svg className="partner-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 'partner-pharmaquick',
      name: 'PharmaQuick',
      sub: 'Logistics',
      icon: (
        <svg className="partner-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1zm0 0h5l4-4v-3h-9v7zm-9 3a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'partner-biocare',
      name: 'BioCare',
      sub: 'Medical Clinics',
      icon: (
        <svg className="partner-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      id: 'test-medvantage',
      quote: 'Next Gen Pharma has completely redefined our supply logistics. Their AI-driven distribution routing and consistent WHO-GMP quality standards ensure that critical cardiac and ortho medicines reach our 500+ clinics with zero deviation.',
      author: 'Dr. Amit Sharma',
      role: 'Chief Procurement Officer',
      company: 'MedVantage Pharmacies',
      rating: 5,
      avatar: amitImg
    },
    {
      id: 'test-apex',
      quote: 'Partnering with Next Gen Pharma for our Gynae and Paediatric pipelines has been highly beneficial. The exclusive monopoly rights and marketing transparency systems give our teams massive confidence. Their QA checks are top-tier.',
      author: 'Priya Patel',
      role: 'Director of Clinical Logistics',
      company: 'Apex Health System',
      rating: 5,
      avatar: priyaImg
    },
    {
      id: 'test-corelabs',
      quote: 'The RxPredict compound modeling from Next Gen Pharma has accelerated our pre-clinical stability trials by months. Combining their blockchain batch records with clinical purity makes them our most reliable formulation partner.',
      author: 'Dr. Rajesh Mehta',
      role: 'Head of Formulation R&D',
      company: 'CoreLabs Research',
      rating: 5,
      avatar: rajeshImg
    }
  ];

  // Duplicate the list twice for smooth infinite marquee wraps.
  const marqueePartners = [...partners, ...partners, ...partners];

  return (
    <section ref={containerRef} className="testimonials-section" id="testimonials-partners-section">
      <div className="testimonials-ambient-glow"></div>
      
      {/* Logos Strip - Infinite Scroll Marquee */}
      <div className="partners-logos-container">
        <div className="logos-header">
          <span className="logos-header-title">Our Distribution & Research Network</span>
        </div>
        <div className="partners-marquee-viewport">
          <div className={`partners-logos-row ${isVisible ? 'logos-row-animate' : ''}`} id="partners-logos-row">
            {marqueePartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="partner-logo-card" id={partner.id}>
                <div className="partner-logo-icon">
                  {partner.icon}
                </div>
                <div className="partner-logo-info">
                  <span className="partner-logo-name">{partner.name}</span>
                  <span className="partner-logo-sub">{partner.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Header */}
      <div className="testimonials-header-container">
        <div className="section-header-tag">
          <span className="header-tag-pill tag-teal-light">Client Trust</span>
        </div>
        <h2 className="testimonials-main-title">
          What Our <span className="title-gradient-gold">Partners Say</span>
        </h2>
      </div>

      {/* Testimonials Real Grid */}
      <div className={`testimonials-grid ${isVisible ? 'grid-animate' : ''}`} id="testimonials-grid">
        {testimonials.map((test, index) => (
          <div 
            key={test.id} 
            className="testimonial-card" 
            id={test.id}
            style={{ '--index': index }}
          >
            {/* Quote icon & stars */}
            <div className="testimonial-card-top">
              <div className="quote-icon-wrapper">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="test-stars">
                {[...Array(test.rating)].map((_, i) => (
                  <svg key={i} className="test-star-icon active-star" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Real Quote Text */}
            <div className="testimonial-card-body">
              <p className="testimonial-quote">
                "{test.quote}"
              </p>
            </div>

            {/* Author Profile Information */}
            <div className="testimonial-card-footer">
              <div className="author-avatar">
                <img src={test.avatar} alt={test.author} className="author-img" />
              </div>
              <div className="author-info">
                <span className="author-name">{test.author}</span>
                <span className="author-role">{test.role}</span>
                <span className="author-company">{test.company}</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPartners;
