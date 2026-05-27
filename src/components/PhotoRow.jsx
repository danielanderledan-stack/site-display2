import React from 'react';

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop&crop=center',
    alt: 'Electrician working on wiring',
  },
  {
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&fit=crop&crop=top',
    alt: 'Electrical panel installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&fit=crop&crop=center',
    alt: 'Electrician holding light bulb',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop&crop=bottom',
    alt: 'Electrical work in progress',
  },
];

export default function PhotoRow() {
  return (
    <div className="flex" style={{ height: 240 }}>
      {PHOTOS.map((p, i) => (
        <div
          key={i}
          className="flex-1 relative overflow-hidden"
          style={{ cursor: 'pointer' }}
        >
          <img
            src={p.src}
            alt={p.alt}
            className="w-full h-full object-cover"
            style={{ transition: 'transform 0.5s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'rgba(0,0,0,0)',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,211,56,0.18)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0)')}
          />
        </div>
      ))}
    </div>
  );
}
