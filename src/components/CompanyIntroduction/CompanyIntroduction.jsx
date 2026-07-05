import React, { useState, useEffect, useRef } from 'react';
import './CompanyIntroduction.css';
import founderImg from '../../assets/founder.png';

// Sub-component for scroll-animated circular progress gauge
const CircularProgress = ({ percentage, label, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const elementRef = useRef(null);

  // Circumference for radius r=40 is 2 * Math.PI * 40 ≈ 251.2
  const circumference = 251.2;
  const strokeDashoffset = circumference - (count / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAnimated) return;

    let startTime = null;
    const end = parseInt(percentage, 10);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing out quad formula
      const easeProgress = progressPercentage * (2 - progressPercentage);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [percentage, duration, isAnimated]);

  return (
    <div ref={elementRef} className="circular-progress-card">
      <div className="progress-circle-container">
        <svg className="progress-svg" viewBox="0 0 100 100">
          <circle className="progress-bg-circle" cx="50" cy="50" r="40" />
          <circle 
            className="progress-bar-circle" 
            cx="50" 
            cy="50" 
            r="40" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <span className="progress-percentage-label">{count}%</span>
      </div>
      <span className="progress-card-title">{label}</span>
    </div>
  );
};

const CompanyIntroduction = () => {
  const stats = [
    { id: 'QA', percentage: '100', label: 'Quality Assurance' },
    { id: 'RD', percentage: '95', label: 'R&D Investment' },
    { id: 'DE', percentage: '98', label: 'Logistics Accuracy' }
  ];

  return (
    <section className="intro-section" id="company-introduction-section">
      <div className="intro-container">
        
        {/* Left Column: Company Story & Animated Stats */}
        <div className="intro-story-column" id="intro-story-column">
          <div className="section-header-tag">
            <span className="header-tag-pill">Who We Are</span>
          </div>
          
          <h2 className="intro-section-title">
            Bridging Excellence in <br/>
            <span className="title-gradient-teal">Science & Logistics</span>
          </h2>
          
          <div className="intro-paragraphs">
            <p className="intro-p-main">
              Next Gen Pharma was founded with a singular vision: to bridge the gap between advanced pharmaceutical manufacturing and intelligent, seamless distribution networks. Over the past decade, we have dedicated ourselves to maintaining the highest WHO-GMP compliance standards, ensuring every formulation meets global healthcare benchmarks.
            </p>
            <p className="intro-p-sub">
              Through persistent research, state-of-the-art laboratory testing, and strategic supply chain engineering, we empower medical institutions and distributors with reliable, life-saving therapeutics. We don't just deliver medicine; we deliver trust, quality, and a healthier tomorrow.
            </p>
          </div>

          {/* Circle Gauge Statistics */}
          <div className="intro-stats-grid">
            {stats.map((stat) => (
              <CircularProgress 
                key={stat.id} 
                percentage={stat.percentage} 
                label={stat.label} 
              />
            ))}
          </div>

          {/* About Us Link */}
          <div className="intro-link-container">
            <a href="#about-us" className="about-us-link" id="about-us-redirect-link">
              <span>Learn More About Our Journey</span>
              <svg className="link-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Founder Cards & Credentials */}
        <div className="intro-founder-column" id="intro-founder-column">
          <div className="founder-card-wrapper">
            <div className="founder-card-glow-bg"></div>
            
            <div className="founder-image-frame">
              <img 
                src={founderImg} 
                alt="Dr. Ananya Iyer, Founder & CSO of Next Gen Pharma" 
                className="founder-profile-img"
                id="founder-profile-photo"
              />
              <div className="founder-overlay-glow"></div>
            </div>

            <div className="founder-info-block">
              <h3 className="founder-name">Dr. Ananya Iyer</h3>
              <p className="founder-credentials">M.Pharm, Ph.D. in Biopharmaceutics</p>
              <p className="founder-designation">Founder & Chief Scientific Officer</p>
              
              <div className="founder-quote-box">
                <span className="quote-mark">“</span>
                <p className="founder-quote-text">
                  Our commitment goes beyond formulas and logistics. We are driven by the profound responsibility of making global-standard healthcare accessible, safe, and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyIntroduction;
