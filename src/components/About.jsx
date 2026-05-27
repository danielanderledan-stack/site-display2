import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();
  const barRef = useRef(null);
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setBarVisible(true); },
      { threshold: 0.5 }
    );
    if (barRef.current) obs.observe(barRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about-us"
      ref={ref}
      style={{ background: '#fff', padding: '90px 30px' }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-center gap-16"
        style={{ maxWidth: 1200 }}
      >
        {/* Left text */}
        <div className="flex-1 reveal-l" style={{ maxWidth: 520 }}>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(30px, 4vw, 52px)', marginBottom: 18 }}
          >
            Do you need an{' '}
            <span className="hl">Electrician ?</span>{' '}
            Look no further!
          </h2>
          <span className="section-label" style={{ marginBottom: 20 }}>
            Wide Range of Electrical Services
          </span>
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              color: '#555',
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Our team of experienced electricians is highly trained, certified, and insured,
            providing you with the highest quality of service. Whether you need a new outlet
            installed or a complete rewire, Electricians has you covered.
          </p>

          {/* Progress bar */}
          <div ref={barRef} style={{ marginBottom: 32 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 8,
                fontFamily: 'Roboto, sans-serif',
                fontSize: 12,
                color: '#555',
              }}
            >
              <span style={{ fontWeight: 700 }}>Recurring Customers</span>
              <span>78%</span>
            </div>
            <div
              style={{
                height: 5,
                background: '#e8e8e8',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: barVisible ? '78%' : '0%',
                  background: '#1a1a1a',
                  borderRadius: 3,
                  transition: 'width 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            </div>
          </div>

          <button className="btn-yellow">
            Read More
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right image collage */}
        <div className="flex-1 reveal-r w-full" style={{ maxWidth: 580 }}>
          <div className="about-collage">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80"
              alt="Electrician smiling"
              style={{
                gridRow: '1 / 3',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
              alt="Electrical installation"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop&crop=center"
              alt="Wiring work"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
