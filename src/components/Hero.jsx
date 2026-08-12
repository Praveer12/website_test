import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

// Animated text scramble effect
function AnimatedHeadline({ text, visible }) {
  const [displayText, setDisplayText] = useState('');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!visible || hasAnimated.current) return;
    hasAnimated.current = true;
    
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [visible, text]);

  return <>{visible ? displayText : ''}<span style={{ opacity: 0.3, animation: 'pulseSubtle 1s infinite' }}>|</span></>;
}

// Stacked avatar row
function AvatarStack() {
  const avatars = [
    { initials: 'RM', color: '#6754e9' },
    { initials: 'PK', color: '#f43f5e' },
    { initials: 'DW', color: '#10b981' },
    { initials: 'AS', color: '#f59e0b' },
    { initials: 'VT', color: '#3b82f6' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
      <div style={{ display: 'flex' }}>
        {avatars.map((a, i) => (
          <div key={i} style={{
            width: 32, height: 32, borderRadius: '50%',
            background: `linear-gradient(135deg, ${a.color}, ${a.color}aa)`,
            border: '2px solid var(--bg-body)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, fontWeight: 800, color: '#fff',
            marginLeft: i > 0 ? -8 : 0, position: 'relative', zIndex: avatars.length - i,
            fontFamily: 'var(--font-heading)',
          }}>
            {a.initials}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.3 }}>
        <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>20+ businesses</span> trust us globally
      </div>
    </div>
  );
}

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
          }}>
            <Sparkles style={{ width: 14, height: 14, color: 'var(--accent-cyan)' }} />
            <span>India-Based · Serving US, UK, CA & AU</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800,
            color: 'var(--text-heading)', letterSpacing: '-0.03em', lineHeight: 1.1,
            fontFamily: 'var(--font-heading)', textWrap: 'balance',
          }}>
            We build websites that{' '}
            <span className="gradient-accent">rank, convert</span>
            {' '}&amp; scale your business
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 17, color: 'var(--text-body)', maxWidth: 620, lineHeight: 1.7, textWrap: 'pretty' }}>
            Full-service digital agency specializing in{' '}
            <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>SEO, custom web development, and paid ads</span>
            {' '}— delivering Western-quality results at a fraction of the cost.
          </p>

          {/* Avatar Stack + Trust Signal */}
          <AvatarStack />

          {/* CTA Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8, justifyContent: 'center' }}>
            <button
              onClick={onOpenAudit}
              className="btn-primary"
              style={{ fontSize: 14, padding: '14px 28px' }}
            >
              <span>Get Free Audit</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
            <a
              href="#work"
              className="btn-secondary"
              style={{ fontSize: 14, padding: '14px 28px' }}
            >
              <span>View Our Work</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
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
