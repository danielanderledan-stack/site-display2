import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactCTA() {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="circuit-bg section-pad"
      style={{ padding: '70px 30px' }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        style={{ maxWidth: 1200 }}
      >
        {/* Text */}
        <div className="reveal-l">
          <h2
            style={{
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 800,
              fontSize: 'clamp(26px, 4vw, 50px)',
              color: '#fff',
              marginBottom: 8,
              lineHeight: 1.1,
            }}
          >
            Get in Touch Now!
          </h2>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, color: '#999', letterSpacing: 0.3 }}>
            Power Up Your Home with us
          </p>
        </div>

        {/* Button */}
        <div className="reveal-r flex-shrink-0">
          <button className="btn-yellow" style={{ fontSize: 14, padding: '15px 36px' }}>
            Contact Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
