import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const IMGS = [
  {
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&fit=crop',
    alt: 'Electrician installation work',
    large: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop&crop=center',
    alt: 'Electrical outlet work',
  },
  {
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80&fit=crop&crop=top',
    alt: 'Circuit breaker panel',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop&crop=bottom',
    alt: 'Wiring close-up',
  },
  {
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80&fit=crop&crop=right',
    alt: 'Light installation',
  },
];

export default function Gallery() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} style={{ padding: '0 30px 90px', background: '#fff' }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '200px 200px',
          gap: 8,
        }}
      >
        {/* Large left image */}
        <div
          className="blog-card reveal-l"
          style={{ gridRow: '1 / 3', overflow: 'hidden' }}
        >
          <img
            src={IMGS[0].src}
            alt={IMGS[0].alt}
            className="blog-card-img w-full h-full object-cover"
          />
        </div>

        {/* 4 small images */}
        {IMGS.slice(1).map((img, i) => (
          <div
            key={i}
            className={`blog-card reveal`}
            style={{ transitionDelay: `${i * 80}ms`, overflow: 'hidden' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="blog-card-img w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
