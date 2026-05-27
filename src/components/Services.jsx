import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES = [
  {
    title: 'Circuit Breaker',
    desc: 'They are a crucial safety feature and can save lives by preventing electrical fires.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v14l-4 4v14" />
        <path d="M28 4v14l4 4v14" />
        <path d="M8 18h24" />
        <circle cx="12" cy="32" r="2" fill="#1a1a1a" />
        <circle cx="28" cy="32" r="2" fill="#1a1a1a" />
        <path d="M12 8h16M12 12h16" />
      </svg>
    ),
  },
  {
    title: 'Solar Panel',
    desc: 'Increasingly popular way to generate electricity from the sun.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="32" height="22" rx="1" />
        <path d="M4 11h32M4 18h32M14 4v22M26 4v22" />
        <path d="M16 30l-2 6M24 30l2 6M12 36h16" />
        <circle cx="32" cy="8" r="4" fill="#FFD338" stroke="#FFD338" />
        <path d="M32 2v2M32 10v2M26 8h2M36 8h2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Generators',
    desc: 'Useful devices that convert mechanical energy into electrical energy.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="12" width="32" height="20" rx="2" />
        <path d="M4 20h32" />
        <circle cx="20" cy="28" r="4" />
        <path d="M13 8h14l3 4H10z" />
        <path d="M8 20v-4M32 20v-4" />
        <path d="M17 28h6" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Lighting Installation',
    desc: 'Installed, maintained and repaired lighting fixtures for clients.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4C13.4 4 8 9.4 8 16c0 5 3 9.4 7.4 11.4V30h9.2v-2.6C29 25.4 32 21 32 16c0-6.6-5.4-12-12-12z" />
        <path d="M15 30v4M25 30v4M15 34h10" />
        <path d="M16 16l4-6 4 6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'USB Sockets',
    desc: 'Electrical outlets with built-in USB ports that allow users to charge their devices.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 8v18" />
        <path d="M20 26l-6 4v4h12v-4z" />
        <path d="M14 10h12" />
        <path d="M14 10l2-4M26 10l-2-4" />
        <circle cx="20" cy="14" r="2" fill="#1a1a1a" />
        <path d="M14 14v4h12v-4" />
      </svg>
    ),
  },
  {
    title: 'Surge Protection',
    desc: 'It helps protect electrical devices from damage due to unexpected high voltage.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4L6 10v12c0 8 6.2 14.4 14 16 7.8-1.6 14-8 14-16V10z" />
        <path d="M24 16l-6 8h5l-3 6" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: '#f5f5f5', padding: '90px 30px' }}
    >
      <div className="mx-auto flex flex-col lg:flex-row gap-14" style={{ maxWidth: 1200 }}>
        {/* Left heading */}
        <div className="lg:w-5/12 reveal-l" style={{ paddingRight: 20 }}>
          <h2 className="section-h2" style={{ fontSize: 'clamp(28px, 3.5vw, 50px)', marginBottom: 18 }}>
            Experienced Electricians{' '}
            <span style={{ borderBottom: '4px solid #FFD338' }}>Services</span>
          </h2>
          <span className="section-label" style={{ marginBottom: 20 }}>
            We use the latest tools &amp; technology
          </span>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, color: '#555', lineHeight: 1.8 }}>
            We provide reliable and quality electrical services to customers in the area.
            We specialize in all aspects of residential and commercial electrical work, from
            new installations and upgrades to repairs and maintenance.
          </p>
        </div>

        {/* Right grid */}
        <div className="lg:w-7/12">
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`svc-card reveal`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div style={{ marginBottom: 14 }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: 'Roboto Slab, serif',
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#1a1a1a',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13, color: '#666', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
