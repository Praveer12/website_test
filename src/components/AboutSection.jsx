import React from 'react';
import { Target, BarChart3, Coins, ArrowRight, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function AboutSection() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.15 });

  const pillars = [
    { icon: Target, title: 'Better Audiences', description: 'We use smart data tools and careful market analysis to help you find and reach the customers who truly matter for your business.', color: '#3b82f6', badge: 'Audience Precision' },
    { icon: BarChart3, title: 'Better Analytics', description: 'We leverage advanced tracking and custom reporting dashboards to give you crystal-clear insights into campaign performance.', color: '#a855f7', badge: 'Data Intelligence' },
    { icon: Coins, title: 'Better Outcomes', description: 'Our custom web engineering and CRO strategies turn casual visitors into loyal paying clients with measurable improvements.', color: '#10b981', badge: 'Measurable Growth' },
  ];

  return (
    <section id="about" className="py-16 md:py-24" style={{ background: 'var(--bg-body)', transition: 'background 0.3s' }}>
      <div className="site-container">
        {/* Header — slide from left + right */}
        <div ref={headerRef} className="grid-split" style={{ marginBottom: 64 }}>
          <div className={`reveal-left ${headerVisible ? 'is-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="section-tag">What We Do</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>
              We simplify digital growth through <span className="gradient-accent">website development</span> & search optimization.
            </h2>
          </div>
          <div className={`reveal-right ${headerVisible ? 'is-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ color: 'var(--text-body)', fontSize: 16, lineHeight: 1.7 }}>
              Together, we empower startups and scaling brands to achieve predictable business results. With deep expertise in custom React web builds, Technical SEO, and paid performance channels.
            </p>
            <a href="#why-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--primary)', transition: 'opacity 0.2s' }}>
              <span>More about our philosophy</span> <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>

        {/* 3 Pillar Cards — staggered flip reveal */}
        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 32 }}>
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`glass-card reveal-flip stagger-${idx + 1} ${cardsVisible ? 'is-visible' : ''}`}
                style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--bg-subtle)', border: '1px solid var(--border-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color }}>
                      <Icon style={{ width: 28, height: 28 }} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--bg-subtle)', padding: '4px 10px', borderRadius: 9999, border: '1px solid var(--border-main)' }}>{p.badge}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>{p.description}</p>
                </div>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-main)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--text-body)' }}>
                  <Check style={{ width: 16, height: 16, color: 'var(--accent-cyan)' }} /> <span>Tailored strategies for your niche</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
