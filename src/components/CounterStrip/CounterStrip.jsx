import React, { useState, useEffect, useRef } from 'react';
import './CounterStrip.css';

// Reusable CountUp component with requestAnimationFrame and ease-out interpolation
const CountUp = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTime = null;
    const end = parseInt(target, 10);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing out quad formula: f(t) = t*(2-t)
      const easeProgress = progressPercentage * (2 - progressPercentage);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isIntersecting]);

  return (
    <span ref={countRef} className="counter-number">
      {count}
      {suffix}
    </span>
  );
};

const CounterStrip = () => {
  const stats = [
    {
      id: 'stat-products',
      target: '50',
      suffix: '+',
      label: 'Products Formulation',
      description: 'Diverse therapeutic categories',
      icon: (
        <svg className="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 'stat-states',
      target: '20',
      suffix: '+',
      label: 'States Covered',
      description: 'Strong distribution network',
      icon: (
        <svg className="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'stat-partners',
      target: '100',
      suffix: '+',
      label: 'Franchise Partners',
      description: 'Growing trust nationwide',
      icon: (
        <svg className="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'stat-certification',
      target: 'WHO-GMP',
      isText: true,
      label: 'Certified Facility',
      description: 'World Health Organization',
      icon: (
        <svg className="stat-icon gold-seal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <div className="counter-strip-wrapper" id="counter-strip">
      <div className="counter-strip-container">
        {stats.map((stat) => (
          <div key={stat.id} className="counter-card" id={stat.id}>
            <div className="counter-card-glow"></div>
            <div className="counter-icon-wrapper">
              {stat.icon}
            </div>
            <div className="counter-info">
              {stat.isText ? (
                <span className="counter-number text-highlight-gold">{stat.target}</span>
              ) : (
                <CountUp target={stat.target} suffix={stat.suffix} />
              )}
              <span className="counter-label">{stat.label}</span>
              <span className="counter-description">{stat.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterStrip;
