import React, { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80',
    title: 'High Quality',
    sub: 'Experience the Power of Professionalism',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    title: 'Expert Service',
    sub: 'Your Trusted Electrical Contractor',
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80',
    title: '24/7 Support',
    sub: 'Always Available for Emergency Calls',
  },
];

function ArrowIcon({ dir }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === 'left' ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [key, setKey] = useState(0);

  const goTo = useCallback(
    (i) => {
      setCur((i + SLIDES.length) % SLIDES.length);
      setKey((k) => k + 1);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => goTo(cur + 1), 5500);
    return () => clearInterval(t);
  }, [cur, goTo]);

  return (
    <section id="home" className="relative overflow-hidden" style={{ height: '100vh', minHeight: 600 }}>
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === cur ? 1 : 0,
            transition: 'opacity 0.9s ease',
            zIndex: i === cur ? 1 : 0,
          }}
        >
          <img
            src={s.img}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.52)' }} />
        </div>
      ))}

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-5"
        style={{ zIndex: 10, paddingBottom: 80 }}
      >
        <h1
          key={`h-${key}`}
          style={{
            fontFamily: 'Roboto Slab, serif',
            fontWeight: 800,
            fontSize: 'clamp(52px, 9vw, 100px)',
            lineHeight: 1.1,
            marginBottom: 18,
            animation: 'fadeUp 0.65s ease-out forwards',
          }}
        >
          {SLIDES[cur].title}
        </h1>
        <p
          key={`p-${key}`}
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 16,
            color: '#ddd',
            marginBottom: 36,
            animation: 'fadeUp 0.65s ease-out 0.1s both forwards',
          }}
        >
          {SLIDES[cur].sub}
        </p>
        <button className="hero-btn" style={{ animation: 'fadeUp 0.65s ease-out 0.2s both forwards' }}>
          Read More
        </button>
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => goTo(cur - 1)}
        className="absolute top-1/2 -translate-y-1/2 z-20 text-white opacity-60 hover:opacity-100 transition-opacity"
        style={{
          left: 20,
          width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid rgba(255,255,255,0.35)',
          background: 'rgba(0,0,0,0.3)',
        }}
        aria-label="Previous slide"
      >
        <ArrowIcon dir="left" />
      </button>

      {/* Next arrow */}
      <button
        onClick={() => goTo(cur + 1)}
        className="absolute top-1/2 -translate-y-1/2 z-20 text-white opacity-60 hover:opacity-100 transition-opacity"
        style={{
          right: 20,
          width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid rgba(255,255,255,0.35)',
          background: 'rgba(0,0,0,0.3)',
        }}
        aria-label="Next slide"
      >
        <ArrowIcon dir="right" />
      </button>

      {/* Bottom info bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{ background: 'rgba(0,0,0,0.82)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="mx-auto flex flex-wrap items-stretch" style={{ maxWidth: 1240, padding: '0 30px' }}>
          <InfoItem icon="email" text="quote@electrician.com" />
          <div style={{ width: 1, background: 'rgba(255,255,255,0.12)', margin: '12px 0' }} />
          <InfoItem icon="phone" text="+1 342 498 573" />
          <div style={{ width: 1, background: 'rgba(255,255,255,0.12)', margin: '12px 0' }} />
          <InfoItem icon="pin" text="901 Ave Mary, Los Angeles" />
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, text }) {
  const icons = {
    email: (
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
    ),
    pin: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  };

  const extras = icon === 'email' ? (
    <polyline points="22,6 12,13 2,6" style={{ stroke: '#FFD338' }} />
  ) : null;

  return (
    <div className="flex items-center gap-3 py-4 px-6">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFD338"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[icon]}
        {extras}
      </svg>
      <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13, color: '#ddd' }}>{text}</span>
    </div>
  );
}
