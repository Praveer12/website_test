import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  const posts = [
    { id: 'geo-seo', title: 'GEO vs Traditional SEO: How to Rank in AI Search', date: 'May 2026', readTime: '5 min', category: 'AI & SEO', image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80', excerpt: 'Generative Engine Optimization (GEO) is replacing blue links. Learn how to optimize for AI synthesis.', content: 'GEO represents the biggest shift in search since PageRank. Searchers now receive AI-synthesized answers. Websites need structured entity data, high citeability, and clear conversational answers.' },
    { id: 'gen-ai', title: 'How Generative AI is Changing SEO for Indian Businesses', date: 'May 2026', readTime: '6 min', category: 'Strategy', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80', excerpt: 'Indian brands can leverage AI workflows to outpace Western competitors at scale.', content: 'Generative AI tools enable boutique agencies to produce deeply researched, localized web assets at 10x speed with human editorial oversight.' },
    { id: 'seo-mistakes', title: 'Top 5 SEO Mistakes to Avoid in 2026', date: 'March 2026', readTime: '4 min', category: 'Best Practices', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80', excerpt: 'Avoid low-quality AI spam, slow Core Web Vitals, and ignored schema markups.', content: 'Many businesses churn out low-value AI articles without original insights. Search engines penalize pages lacking EEAT.' },
  ];

  return (
    <section id="blog" style={{ padding: '96px 0', background: 'var(--bg-body)', transition: 'background 0.3s' }}>
      <div className="site-container">
        {/* Header — rotate reveal */}
        <div
          ref={headerRef}
          className={`reveal-rotate ${headerVisible ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px', display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <div className="section-tag" style={{ alignSelf: 'center' }}>Expert Insights</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Think further with our <span className="gradient-accent">latest articles</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>In-depth guides on AI search optimization, web engineering, and performance marketing.</p>
        </div>

        {/* Blog Cards — staggered blur reveal */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className={`glass-card reveal-blur stagger-${idx + 1} ${gridVisible ? 'is-visible' : ''}`}
              style={{ overflow: 'hidden', borderRadius: 24, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', height: 192, overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '4px 12px', borderRadius: 9999, background: 'var(--primary)', color: '#fff', fontSize: 11, fontWeight: 700 }}>{post.category}</div>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 11, color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar style={{ width: 14, height: 14, color: 'var(--accent-cyan)' }} /> {post.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock style={{ width: 14, height: 14, color: 'var(--primary)' }} /> {post.readTime}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
              </div>
              <div style={{ padding: '0 24px 24px' }}>
                <button onClick={() => setSelectedPost(post)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: 'var(--primary)', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                  Read Full Insight <ArrowRight style={{ width: 14, height: 14 }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'var(--bg-modal-overlay)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }} onClick={() => setSelectedPost(null)}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: 24, maxWidth: 640, width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: 32, position: 'relative', boxShadow: 'var(--shadow-card)', animation: 'fadeIn 0.2s ease-out' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedPost(null)} style={{ position: 'absolute', top: 20, right: 20, padding: 8, borderRadius: 9999, background: 'var(--bg-subtle)', color: 'var(--text-muted)', cursor: 'pointer', border: 'none' }}><X style={{ width: 20, height: 20 }} /></button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: 12 }}><Sparkles style={{ width: 16, height: 16 }} /> {selectedPost.category} • {selectedPost.date}</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', marginBottom: 16, lineHeight: 1.3 }}>{selectedPost.title}</h3>
            <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 24, height: 224 }}><img src={selectedPost.image} alt={selectedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 16 }}>{selectedPost.excerpt}</p>
              <p>{selectedPost.content}</p>
            </div>
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border-main)', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedPost(null)} className="btn-primary" style={{ padding: '10px 24px', fontSize: 12 }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
