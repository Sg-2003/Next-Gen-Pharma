import React, { useState, useEffect, useRef } from 'react';
import './CertificationsCompliance.css';

const CertificationsCompliance = () => {
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

  const credentials = [
    {
      id: 'cert-whogmp',
      name: 'WHO-GMP',
      sub: 'Accredited Facility',
      desc: 'Good Manufacturing Practices under World Health Organization standards.',
      icon: (
        <svg className="cert-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Medical cross + Globe Seal */}
          <circle cx="50" cy="50" r="42" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="36" />
          <path d="M50 24v52M24 50h52" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="50" r="16" fill="var(--bg-dark)" />
          <path d="M42 50h16M50 42v16" stroke="var(--primary-teal-light)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'cert-iso',
      name: 'ISO 9001:2015',
      sub: 'Certified QMS',
      desc: 'Accredited Quality Management Systems for manufacturing consistency.',
      icon: (
        <svg className="cert-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Quality shield */}
          <path d="M50 14l30 10v24c0 22-18 36-30 40-12-4-30-18-30-40V24l30-10z" fill="currentColor" fillOpacity="0.05" />
          <path d="M50 14l30 10v24c0 22-18 36-30 40-12-4-30-18-30-40V24l30-10z" strokeWidth="3.5" />
          <circle cx="50" cy="46" r="14" />
          <path d="M42 46l6 6 10-10" stroke="var(--accent-gold-light)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'cert-fssai',
      name: 'FSSAI',
      sub: 'Licensed Range',
      desc: 'Compliance clearance for food safety and dietary nutraceutical formulations.',
      icon: (
        <svg className="cert-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Leaf + Food ring */}
          <circle cx="50" cy="50" r="42" />
          <path d="M30 50c5-15 25-15 30-5 5 10 15 15 10 25-15 5-25-5-40-20z" fill="currentColor" fillOpacity="0.08" />
          <path d="M35 55c5-10 15-10 20-2 2 8 8 10 5 18-10 2-15-5-25-16z" stroke="var(--primary-teal-light)" strokeWidth="2.5" />
          <path d="M32 60s18-20 28-2" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      id: 'cert-cdsco',
      name: 'CDSCO',
      sub: 'Govt. Compliant',
      desc: 'Central Drugs Standard Control Organisation approved pipelines.',
      icon: (
        <svg className="cert-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Double ring authority crest */}
          <circle cx="50" cy="50" r="42" />
          <circle cx="50" cy="50" r="32" strokeWidth="1.5" />
          <path d="M50 26l12 12H38l12-12zM50 74l12-12H38l12 12z" fill="currentColor" fillOpacity="0.1" />
          <path d="M32 50h36" stroke="var(--accent-gold-light)" strokeWidth="3" />
        </svg>
      )
    },
    {
      id: 'cert-licence',
      name: 'Drug Licence',
      sub: 'Form 20B & 21B',
      desc: 'Accredited federal drug manufacturing and wholesale distribution licenses.',
      icon: (
        <svg className="cert-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Scroll / Certificate ribbon */}
          <rect x="24" y="20" width="52" height="60" rx="3" strokeWidth="3" />
          <path d="M32 32h36M32 44h36M32 56h24" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 64l6 12 4-4 4 4-2-12" fill="var(--primary-teal-light)" stroke="var(--primary-teal-light)" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <section ref={containerRef} className="compliance-section" id="certifications-compliance-section">
      <div className="compliance-container">
        
        {/* Trust Building Copy */}
        <div className="compliance-text-block">
          <div className="section-header-tag">
            <span className="header-tag-pill tag-teal-light">Accreditation</span>
          </div>
          <h2 className="compliance-title">
            Uncompromising Standards of <span className="title-gradient-teal">Quality & Safety</span>
          </h2>
          <p className="compliance-statement" id="quality-compliance-statement">
            At Next Gen Pharma, quality assurance is not just an operational department—it is our core institutional mandate. Our state-of-the-art manufacturing facilities and distribution networks comply fully with stringent national and international regulatory frameworks. From active pharmaceutical ingredient (API) sourcing to multi-state distribution audits, we guarantee clinical purity, chemical stability, and complete transparency at every stage of the pipeline.
          </p>
        </div>

        {/* Badges Layout Grid */}
        <div className={`compliance-badges-grid ${isVisible ? 'grid-animate' : ''}`} id="accreditation-badges-grid">
          {credentials.map((cert, index) => (
            <div 
              key={cert.id} 
              className="compliance-card" 
              id={cert.id}
              style={{ '--index': index }}
            >
              <div className="compliance-icon-wrapper">
                {cert.icon}
              </div>
              <div className="compliance-card-info">
                <h3 className="compliance-card-name">{cert.name}</h3>
                <span className="compliance-card-sub">{cert.sub}</span>
                <p className="compliance-card-desc">{cert.desc}</p>
              </div>
              <div className="compliance-card-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsCompliance;
