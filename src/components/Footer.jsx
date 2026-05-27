import React, { useState } from 'react';

const COLS = [
  {
    heading: 'Main Services',
    links: ['Home Security', 'Full Rewiring', 'Troubleshooting', 'Lighting Instal', 'Panel Upgrades', 'Surge Protection'],
  },
  {
    heading: 'Useful Links',
    links: ['Sitemaps', 'Legal Note', 'Privacy & Policy', 'Cookies Info'],
  },
  {
    heading: 'Privacy & Policies',
    links: ['User Choice', 'Transparency', 'Policy Updates', 'Data Retention', 'Full Precautions', 'Informations'],
  },
];

function ColHeading({ children }) {
  return (
    <h4
      style={{
        fontFamily: 'Roboto Slab, serif',
        fontWeight: 700,
        fontSize: 13,
        color: '#1a1a1a',
        marginBottom: 18,
        textTransform: 'uppercase',
        letterSpacing: 1,
      }}
    >
      {children}
    </h4>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: '#f5f5f5', padding: '60px 30px 50px' }}>
        <div className="mx-auto footer-grid" style={{ maxWidth: 1200 }}>

          {/* Logo */}
          <div className="footer-logo-col">
            <span
              style={{
                fontFamily: 'Roboto Slab, serif',
                fontWeight: 700,
                fontSize: 20,
                color: '#1a1a1a',
                letterSpacing: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              ELECTR
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  border: '2.5px solid #1a1a1a',
                  fontSize: 12,
                  fontWeight: 700,
                  marginLeft: 1,
                  lineHeight: 1,
                }}
              >
                O
              </span>
            </span>
            <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 8, letterSpacing: 4, color: '#999', display: 'block', marginTop: 4 }}>
              ELECTRICIAN
            </span>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <ColHeading>{col.heading}</ColHeading>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <ColHeading>Newsletter</ColHeading>
            {submitted ? (
              <p style={{ fontFamily: 'Roboto', fontSize: 13, color: '#1bd760', fontWeight: 700 }}>
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1.5px solid #ccc',
                    padding: '8px 0',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 13,
                    color: '#333',
                    background: 'transparent',
                    outline: 'none',
                    marginBottom: 16,
                  }}
                />
                <button
                  type="submit"
                  className="btn-yellow"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}
                >
                  Submit
                </button>
                <p style={{ fontFamily: 'Roboto', fontSize: 11, color: '#aaa' }}>
                  * Periodic Newsletters
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#fff', borderTop: '1px solid #e8e8e8', padding: '16px 30px' }}>
        <div
          className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ maxWidth: 1200 }}
        >
          <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
            {['Home', 'About Us', 'Services'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 13,
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFD338')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                {link}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 12, color: '#aaa', textAlign: 'center' }}>
            Electrician Services WordPress Theme
          </p>
        </div>
      </div>
    </footer>
  );
}
