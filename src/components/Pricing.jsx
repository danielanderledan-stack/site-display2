import React, { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES = [
  { label: 'Electrical Inspection', base: 50 },
  { label: 'Panel Upgrade', base: 120 },
  { label: 'Full Rewiring', base: 200 },
  { label: 'Lighting Installation', base: 80 },
  { label: 'Emergency Service', base: 160 },
];

const PRICE_LIST = [
  { name: 'Installing new light', price: '37 $ /h' },
  { name: 'New Electrical Panel:', price: '54 $ /h' },
  { name: 'Rewiring a House', price: '67 $ /h' },
  { name: 'Full Security System', price: '82 $ /h' },
];

export default function Pricing() {
  const ref = useScrollReveal();
  const [service, setService] = useState('');
  const [distance, setDistance] = useState(10);
  const [urgent, setUrgent] = useState(false);
  const [type, setType] = useState('Threads');

  const finalPrice = useMemo(() => {
    const svc = SERVICES.find((s) => s.label === service);
    if (!svc) return 250;
    let price = svc.base;
    price += distance * 0.8;
    if (urgent) price *= 1.3;
    return Math.round(price);
  }, [service, distance, urgent]);

  return (
    <section
      id="prices"
      ref={ref}
      style={{ position: 'relative', padding: '90px 30px' }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.82)' }} />
      </div>

      <div
        className="mx-auto relative flex flex-col lg:flex-row gap-12 items-start"
        style={{ maxWidth: 1200, zIndex: 1 }}
      >
        {/* Calculator card */}
        <div
          className="reveal-l lg:w-5/12"
          style={{
            background: '#fff',
            padding: '36px 32px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <h3
            style={{
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 700,
              fontSize: 20,
              color: '#1a1a1a',
              marginBottom: 28,
            }}
          >
            Price Calculator
          </h3>

          {/* Service dropdown */}
          <div style={{ marginBottom: 22 }}>
            <label style={{ display: 'block', fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 700, color: '#555', marginBottom: 8, letterSpacing: 0.5 }}>
              Service you need
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{
                width: '100%',
                border: '1px solid #e0e0e0',
                padding: '10px 36px 10px 12px',
                fontFamily: 'Roboto, sans-serif',
                fontSize: 13,
                color: service ? '#1a1a1a' : '#999',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="">Select Option</option>
              {SERVICES.map((s) => (
                <option key={s.label} value={s.label}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Distance slider */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 700, color: '#555', letterSpacing: 0.5 }}>
                Distance from our office
              </label>
              <span
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  background: '#FFD338',
                  color: '#111',
                  padding: '2px 8px',
                  borderRadius: 2,
                }}
              >
                {distance} km
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              value={distance}
              onChange={(e) => setDistance(+e.target.value)}
            />
          </div>

          {/* Urgent toggle */}
          <div style={{ marginBottom: 22 }}>
            <label style={{ display: 'block', fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 700, color: '#555', marginBottom: 8, letterSpacing: 0.5 }}>
              Urgent Performance
            </label>
            <div className="flex gap-0">
              {['Yes', 'Not'].map((v) => {
                const active = (v === 'Yes') === urgent;
                return (
                  <button
                    key={v}
                    onClick={() => setUrgent(v === 'Yes')}
                    style={{
                      flex: 1,
                      padding: '9px 0',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 13,
                      fontWeight: 700,
                      border: '1px solid #e0e0e0',
                      background: active ? '#FFD338' : '#fff',
                      color: active ? '#111' : '#666',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Type tabs */}
          <div style={{ marginBottom: 30 }}>
            <label style={{ display: 'block', fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 700, color: '#555', marginBottom: 8, letterSpacing: 0.5 }}>
              Type of intervention
            </label>
            <div className="flex gap-0">
              {['Threads', 'St. Outlets'].map((v) => {
                const active = type === v;
                return (
                  <button
                    key={v}
                    onClick={() => setType(v)}
                    style={{
                      flex: 1,
                      padding: '9px 0',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 13,
                      fontWeight: 700,
                      border: '1px solid #e0e0e0',
                      borderRight: v === 'Threads' ? 'none' : '1px solid #e0e0e0',
                      background: active ? '#1a1a1a' : '#fff',
                      color: active ? '#FFD338' : '#666',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Final price */}
          <div
            style={{
              borderTop: '1px solid #eee',
              paddingTop: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#999" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="18" cy="12" r="6" />
              <path d="M6 30c0-6.6 5.4-12 12-12s12 5.4 12 12" />
            </svg>
            <div>
              <span
                style={{
                  fontFamily: 'Roboto Slab, serif',
                  fontWeight: 800,
                  fontSize: 32,
                  color: '#FFD338',
                }}
              >
                $ {finalPrice}
              </span>
              <span
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: '#999',
                  display: 'block',
                  textTransform: 'uppercase',
                  marginTop: 2,
                }}
              >
                Final Price
              </span>
            </div>
          </div>
        </div>

        {/* Price list */}
        <div className="flex-1 reveal-r">
          <h2
            className="section-h2-white"
            style={{ fontSize: 'clamp(24px, 3vw, 42px)', marginBottom: 8 }}
          >
            Competitive Pricing &amp;<br />Promotions
          </h2>
          <span className="section-label" style={{ marginBottom: 36 }}>
            From a Licensed Electrician
          </span>

          <div>
            {PRICE_LIST.map((item, i) => (
              <div key={i} className="price-row">
                <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 15, color: '#fff', fontWeight: 400 }}>
                  {item.name}
                </span>
                <span className="price-dots" />
                <span
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 15,
                    color: '#fff',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, marginBottom: 28 }}>
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 11,
                letterSpacing: 2,
                color: '#FFD338',
                textTransform: 'uppercase',
                marginBottom: 4,
              }}
            >
              Within 24 Hours
            </p>
            <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 16, color: '#fff', fontWeight: 700 }}>
              Professional Services
            </p>
          </div>

          <button className="btn-yellow">
            Request a Quote
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
