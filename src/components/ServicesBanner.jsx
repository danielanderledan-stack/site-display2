import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesBanner() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="circuit-bg">
      <div className="mx-auto flex flex-col lg:flex-row items-center" style={{ maxWidth: 1200 }}>

        {/* Electrician image — hidden on small screens, shows on lg */}
        <div
          className="hidden lg:block overflow-hidden reveal-l flex-shrink-0"
          style={{ width: 280, height: 180 }}
        >
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80"
            alt="Electrician"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Text */}
        <div
          className="reveal flex-1 px-8 py-10 lg:py-12 text-center lg:text-left"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2
            style={{
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.4vw, 28px)',
              color: '#fff',
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            Are you in need of an Electrician?
          </h2>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13, color: '#999', letterSpacing: 0.2 }}>
            Look no further — our team is here to help.
          </p>
        </div>

        {/* Button */}
        <div className="reveal pb-10 lg:pb-0 px-8 lg:px-12 flex-shrink-0">
          <button className="btn-yellow" style={{ whiteSpace: 'nowrap', fontSize: 13 }}>
            Check All Services
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
