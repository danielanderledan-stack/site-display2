import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TESTIMONIALS = [
  {
    text: 'Highly recommend! I have been working with this electrician for years and can honestly say that he is the best. He is always punctual and efficient.',
    name: 'Thomas Moore',
    role: 'Scientist',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 'Excellent service from start to finish. The team was professional, on time, and completed the work to the highest standard. Highly recommended!',
    name: 'Sarah Johnson',
    role: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: 'Great work! They installed a new electrical panel and upgraded our wiring. Everything was done neatly and efficiently. Will definitely use again.',
    name: 'Michael Davis',
    role: 'Homeowner',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
];

const MAIN_IMG = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&fit=crop';

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const ref = useScrollReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{ background: '#fff', padding: '90px 30px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Heading */}
        <div className="text-center reveal" style={{ marginBottom: 60 }}>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', marginBottom: 12 }}
          >
            We Delivers <span className="hl">Quality</span> Results
          </h2>
          <span className="section-label" style={{ color: '#999' }}>Knowledge and Skills</span>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Image */}
          <div
            className="lg:w-5/12 reveal-l"
            style={{ height: 380, overflow: 'hidden' }}
          >
            <img
              src={MAIN_IMG}
              alt="Electrician"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Testimonial */}
          <div className="lg:w-7/12 reveal-r">
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(15px, 1.8vw, 20px)',
                color: '#333',
                lineHeight: 1.75,
                marginBottom: 30,
                fontStyle: 'italic',
              }}
            >
              &ldquo;{TESTIMONIALS[cur].text}&rdquo;
            </p>

            <div className="flex items-center gap-4" style={{ marginBottom: 28 }}>
              <img
                src={TESTIMONIALS[cur].avatar}
                alt={TESTIMONIALS[cur].name}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #FFD338',
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: 'Roboto Slab, serif',
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#1a1a1a',
                    marginBottom: 2,
                  }}
                >
                  {TESTIMONIALS[cur].name}
                </p>
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 12, color: '#888' }}>
                  {TESTIMONIALS[cur].role}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === cur ? 'active' : ''}`}
                  onClick={() => setCur(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
