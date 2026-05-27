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
    heading: 'Privacy and Policies',
    links: ['User Choice', 'Transparency', 'Policy Updates', 'Data Retention', 'Full Precautions', 'Informations'],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: '#f5f5f5', padding: '70px 30px 50px' }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: 1200,
            display: 'grid',
            gridTemplateColumns: 'auto repeat(3, 1fr) 220px',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Logo */}
          <div>
            <div style={{ marginBottom: 6 }}>
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
                  }}
                >
                  O
                </span>
              </span>
              <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 8, letterSpacing: 4, color: '#888', display: 'block', marginTop: 3 }}>
                ELECTRICIAN
              </span>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontFamily: 'Roboto Slab, serif',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#1a1a1a',
                  marginBottom: 16,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                {col.heading}
              </h4>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: 'Roboto Slab, serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#1a1a1a',
                marginBottom: 16,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              Newsletter
            </h4>
            {submitted ? (
              <p style={{ fontFamily: 'Roboto', fontSize: 13, color: '#1bd760', fontWeight: 700 }}>
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    padding: '8px 0',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 13,
                    color: '#333',
                    background: 'transparent',
                    outline: 'none',
                    marginBottom: 14,
                  }}
                />
                <button
                  type="submit"
                  className="btn-yellow"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}
                >
                  Submit
                </button>
                <p style={{ fontFamily: 'Roboto', fontSize: 11, color: '#999' }}>
                  * Periodic Newsletters
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          background: '#fff',
          borderTop: '1px solid #e8e8e8',
          padding: '18px 30px',
        }}
      >
        <div
          className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ maxWidth: 1200 }}
        >
          <div className="flex gap-6">
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
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 12, color: '#999' }}>
            Electrician Services WordPress Theme
          </p>
        </div>
      </div>
    </footer>
  );
}
