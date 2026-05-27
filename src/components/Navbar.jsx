import React, { useState, useEffect } from 'react';

const LINKS = ['Home', 'About Us', 'Services', 'Prices', 'Blog', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[999]"
      style={{
        backgroundColor: '#111111',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.6)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1240, padding: '0 30px', height: 68 }}
      >
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none select-none" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: 'Roboto Slab, serif',
              fontWeight: 700,
              fontSize: 22,
              color: '#fff',
              letterSpacing: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 0,
            }}
          >
            ELECTR
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '2.5px solid #fff',
                fontSize: 14,
                fontWeight: 700,
                marginLeft: 1,
                lineHeight: 1,
              }}
            >
              O
            </span>
          </span>
          <span
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              fontSize: 8,
              letterSpacing: 5,
              color: '#aaa',
              marginTop: 3,
            }}
          >
            ELECTRICIAN
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center" style={{ gap: 32 }}>
          {LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`nav-link ${i === 0 ? 'active' : ''}`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Calculator CTA */}
        <a
          href="#prices"
          className="btn-yellow hidden lg:inline-flex"
          style={{ fontSize: 13 }}
        >
          Calculator
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: '#fff',
                borderRadius: 2,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform:
                  open && i === 0
                    ? 'rotate(45deg) translateY(7px)'
                    : open && i === 2
                    ? 'rotate(-45deg) translateY(-7px)'
                    : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #222' }}
          className="lg:hidden px-8 py-6 flex flex-col gap-4"
        >
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#prices" className="btn-yellow mt-2 w-fit">Calculator →</a>
        </div>
      )}
    </nav>
  );
}
