import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const POSTS = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop&crop=top',
    date: 'December 15, 2022',
    title: 'Light Poles & Prevention',
    excerpt: 'With recent advances in technology, light poles are also being used to help prevent crime.',
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&fit=crop&crop=center',
    date: 'December 15, 2022',
    title: 'Prevention & Support',
    excerpt: 'Electricians are essential to the safety and wellbeing of homeowners and businesses.',
  },
  {
    img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80&fit=crop&crop=left',
    date: 'December 15, 2022',
    title: 'The Best Equipment',
    excerpt: 'Any electrician worth their salt will always make sure to have the right protective gear.',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop&crop=bottom',
    date: 'December 15, 2022',
    title: 'Safety Regulations',
    excerpt: 'All electricians should be licensed by the state in which they conduct business.',
  },
];

export default function Blog() {
  const ref = useScrollReveal();

  return (
    <section id="blog" ref={ref} style={{ background: '#fff', padding: '90px 30px' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Heading */}
        <div className="text-center reveal" style={{ marginBottom: 50 }}>
          <h2 className="section-h2" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', marginBottom: 12 }}>
            Latest <span className="hl">Useful</span> News
          </h2>
          <span className="section-label" style={{ color: '#999' }}>New Policies and Laws</span>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {POSTS.map((post, i) => (
            <article
              key={i}
              className={`blog-card reveal`}
              style={{
                position: 'relative',
                height: 300,
                overflow: 'hidden',
                cursor: 'pointer',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <img
                src={post.img}
                alt={post.title}
                className="blog-card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                }}
              />
              {/* Text */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 28px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 11,
                    color: '#fff',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '3px 10px',
                    marginBottom: 10,
                    letterSpacing: 0.3,
                  }}
                >
                  {post.date}
                </span>
                <h3
                  style={{
                    fontFamily: 'Roboto Slab, serif',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#fff',
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
