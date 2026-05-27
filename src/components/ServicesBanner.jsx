import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesBanner() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="circuit-bg"
      style={{ padding: '0' }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-center"
        style={{ maxWidth: 1200 }}
      >
        {/* Electrician image */}
        <div
          className="lg:w-[30%] overflow-hidden reveal-l"
          style={{ height: 200 }}
        >
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80"
            alt="Electrician"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div
          className="flex-1 reveal px-8 py-10"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', borderRight: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h2
            style={{
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 700,
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              color: '#fff',
              marginBottom: 8,
            }}
          >
            Are you in need of an Electrician ?
          </h2>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, color: '#aaa' }}>
            Look no further! Our team is here to help.
          </p>
        </div>

        {/* Button */}
        <div className="reveal px-8 lg:px-12">
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
