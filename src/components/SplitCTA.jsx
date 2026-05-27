import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function LightningBolt() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="40" cy="40" r="38" stroke="#1a1a1a" strokeWidth="2.5" opacity="0.25" />
      <circle cx="40" cy="40" r="30" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.15" />
      {/* Lightning bolt */}
      <path
        d="M46 10 L28 42 L38 42 L34 70 L52 38 L42 38 Z"
        fill="#1a1a1a"
        opacity="0.8"
      />
    </svg>
  );
}

export default function SplitCTA() {
  const [playing, setPlaying] = useState(false);
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="flex flex-col lg:flex-row" style={{ minHeight: 420 }}>
      {/* Left – yellow */}
      <div
        className="flex-1 flex items-center justify-center"
        style={{ background: '#FFD338', padding: '60px 50px' }}
      >
        <div className="reveal-l flex flex-col" style={{ maxWidth: 420 }}>
          <div className="mb-6">
            <LightningBolt />
          </div>
          <h2
            style={{
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              color: '#111',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Don&apos;t wait !<br />
            contact us today and let us<br />
            help ! it&apos;s quick and easy.
          </h2>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 3,
              color: '#555',
              textTransform: 'uppercase',
            }}
          >
            JOB DONE RIGHT AWAY
          </span>
        </div>
      </div>

      {/* Right – image + play */}
      <div
        className="flex-1 relative overflow-hidden reveal-r"
        style={{ minHeight: 360 }}
      >
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&fit=crop&crop=center"
          alt="Electrician at work"
          className="w-full h-full object-cover"
          style={{ minHeight: 360 }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.30)' }}
        >
          {!playing && (
            <button
              className="play-btn"
              onClick={() => setPlaying(true)}
              aria-label="Play video"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#111" style={{ marginLeft: 3 }}>
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>
          )}
          {playing && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: '#000' }}
            >
              <p style={{ color: '#fff', fontFamily: 'Roboto', fontSize: 15 }}>
                Video Player — coming soon
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
