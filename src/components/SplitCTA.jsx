import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function LightningBolt() {
  return (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" stroke="#1a1a1a" strokeWidth="2" opacity="0.2" />
      <circle cx="40" cy="40" r="29" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.12" />
      <path d="M46 10 L28 42 L38 42 L34 70 L52 38 L42 38 Z" fill="#1a1a1a" opacity="0.75" />
    </svg>
  );
}

export default function SplitCTA() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="flex flex-col lg:flex-row" style={{ minHeight: 400 }}>
      {/* Left – yellow */}
      <div
        className="flex-1 flex items-center justify-start"
        style={{ background: '#FFD338', padding: '60px 50px' }}
      >
        <div className="reveal-l" style={{ maxWidth: 440 }}>
          <div style={{ marginBottom: 20 }}>
            <LightningBolt />
          </div>
          <h2
            style={{
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 800,
              fontSize: 'clamp(24px, 3vw, 38px)',
              color: '#111',
              lineHeight: 1.25,
              marginBottom: 14,
            }}
          >
            Don&apos;t wait!<br />
            Contact us today and let us<br />
            help — it&apos;s quick and easy.
          </h2>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3.5,
              color: '#555',
              textTransform: 'uppercase',
            }}
          >
            Job Done Right Away
          </span>
        </div>
      </div>

      {/* Right – static image, no video */}
      <div className="flex-1 relative overflow-hidden reveal-r" style={{ minHeight: 360 }}>
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80&fit=crop&crop=center"
          alt="Electrician at work"
          className="w-full h-full object-cover"
          style={{ minHeight: 360 }}
        />
        {/* Subtle dark vignette so edges don't feel hard-cut */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(255,211,56,0.08) 0%, transparent 30%)' }}
        />
      </div>
    </section>
  );
}
