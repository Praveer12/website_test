import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Hero({ onOpenAudit }) {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-16" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-gradient-glow" />
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 10 }}>

        {/* ════════ Centered Text ════════ */}
        <div
          ref={heroRef}
          className={`reveal-up ${heroVisible ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
        >
          {/* Tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 9999,
            background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--tag-text)',
            fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em',
            animation: 'pulseSubtle 4s ease-in-out infinite',
          }}>
            <Sparkles style={{ width: 14, height: 14, color: 'var(--accent-cyan)' }} />
            <span>Creative Digital Partner for Global Brands</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800,
            color: 'var(--text-heading)', letterSpacing: '-0.03em', lineHeight: 1.1,
            fontFamily: 'var(--font-heading)',
          }}>
            Affordable{' '}
            <span className="gradient-accent">digital marketing</span>
            {' '}for global businesses
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 17, color: 'var(--text-body)', maxWidth: 650, lineHeight: 1.7 }}>
            We help startups and small businesses in the{' '}
            <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>US, UK, Canada, and Australia</span>
            {' '}grow their online presence — with SEO, web development, and paid ads at a fraction of Western agency costs.
          </p>
        </div>

        {/* ════════ Bento Grid with Static 3D Images ════════ */}
        <div
          ref={gridRef}
          className={`reveal-up ${gridVisible ? 'is-visible' : ''}`}
          style={{ marginTop: 56 }}
        >
          <div className="hero-bento">

            {/* Card 1 — Megaphone (large left) */}
            <div className="hero-bento__item hero-bento__item--large" style={{ gridArea: 'mega' }}>
              <img
                src="/images/megaphone.png"
                alt="3D Megaphone - Digital Marketing"
                loading="eager"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05) rotate(-2deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
              />
            </div>

            {/* Card 2 — Abstract Shapes (wide center) */}
            <div className="hero-bento__item" style={{ gridArea: 'abstract' }}>
              <img
                src="/images/img.png"
                alt="3D Marketing SEO Rocket"
                loading="eager"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
              />
            </div>

            {/* Card 3 — Trophy + Badge (top right) */}
            <div className="hero-bento__item hero-bento__item--badge" style={{ gridArea: 'trophy' }}>
              <img
                src="/images/trophy.png"
                alt="3D Trophy - Award Winning"
                loading="eager"
                style={{
                  width: '80%', maxWidth: 120, height: 'auto', objectFit: 'contain',
                  margin: '0 auto', display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
              />
              <div style={{
                marginTop: 12, fontSize: 14, fontWeight: 700, color: 'var(--text-heading)',
                textAlign: 'center', lineHeight: 1.4,
              }}>
                Creative<br />Digital<br />Partner
              </div>
            </div>

            {/* Card 4 — CTA Card (bottom center-left) */}
            <div className="hero-bento__item hero-bento__item--cta" style={{ gridArea: 'cta' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
                    Get Your Free<br />Audit Today
                  </div>
                </div>
                <button
                  onClick={onOpenAudit}
                  className="btn-primary"
                  style={{ fontSize: 14, padding: '12px 24px', marginLeft: 'auto' }}
                >
                  <span>LET'S TALK</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </div>
            </div>

            {/* Card 5 — Stats mini card (bottom right) */}
            <div className="hero-bento__item hero-bento__item--stats" style={{ gridArea: 'stats' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} style={{ width: 14, height: 14, fill: '#fbbf24', color: '#fbbf24' }} />
                ))}
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
                4.9/5 Rating
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                From 20+ Global Clients
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
