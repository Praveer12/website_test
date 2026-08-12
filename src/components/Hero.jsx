import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import ParticleNetwork from './ParticleNetwork';

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

  return (
    <section className="pt-28 pb-8 md:pt-36 md:pb-16" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh' }}>
      <div className="bg-gradient-glow" />
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <ParticleNetwork />

      <div className="site-container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          ref={heroRef}
          className={`grid-hero reveal-up ${heroVisible ? 'is-visible' : ''}`}
        >

          {/* ════════ LEFT — Text Content ════════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', fontWeight: 900,
              color: 'var(--text-heading)', letterSpacing: '-0.03em', lineHeight: 1.08,
              fontFamily: 'var(--font-heading)', textWrap: 'balance',
            }}>
              Get More Traffic and Increase Your{' '}
              <span className="gradient-accent">Online Visibility</span>
            </h1>

            <p style={{
              fontSize: 16, color: 'var(--text-body)', maxWidth: 520,
              lineHeight: 1.75, textWrap: 'pretty',
            }}>
              Full-service digital agency specializing in{' '}
              <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>SEO, custom web development, and paid ads</span>
              {' '}— delivering real results that drive business growth.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              <button
                onClick={onOpenAudit}
                className="btn-primary"
                style={{ fontSize: 15, padding: '16px 32px' }}
              >
                <span>Get In Touch</span>
                <ArrowRight style={{ width: 18, height: 18 }} />
              </button>
              <a
                href="#work"
                className="btn-secondary"
                style={{ fontSize: 15, padding: '16px 32px' }}
              >
                <span>View Our Work</span>
                <ArrowRight style={{ width: 18, height: 18 }} />
              </a>
            </div>

            <AvatarStack />
          </div>

          {/* ════════ RIGHT — Vertical Stacked Cards ════════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>

            {/* Card 1 — Main hero image (organic blob shape) */}
            <div style={{
              width: '100%', maxWidth: 460,
              borderRadius: '32px 80px 32px 80px', overflow: 'hidden',
              background: 'var(--bg-card)', border: '1px solid var(--border-main)',
              boxShadow: '0 16px 48px rgba(103, 84, 233, 0.1)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-radius 0.5s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 64px rgba(103, 84, 233, 0.16)'; e.currentTarget.style.borderRadius = '80px 32px 80px 32px'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 16px 48px rgba(103, 84, 233, 0.1)'; e.currentTarget.style.borderRadius = '32px 80px 32px 80px'; }}
            >
              <img src="/images/img.png" alt="SEO & Digital Marketing" loading="eager" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            {/* Bottom row — 3 uniquely shaped cards */}
            <div style={{ display: 'flex', gap: 16, width: '100%', maxWidth: 460, alignItems: 'stretch' }}>

              {/* Megaphone — circle */}
              <div style={{
                flex: 1, aspectRatio: '1', borderRadius: '50%', overflow: 'hidden',
                background: 'var(--bg-card)', border: '1px solid var(--border-main)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.06)',
                padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) rotate(-5deg)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(103,84,233,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.06)'; }}
              >
                <img src="/images/megaphone.png" alt="Digital Marketing" style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
              </div>

              {/* Trophy — diamond/rotated square */}
              <div style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '85%', aspectRatio: '1',
                  borderRadius: '24px', overflow: 'hidden',
                  background: 'var(--bg-card)', border: '1px solid var(--border-main)',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.06)',
                  padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transform: 'rotate(8deg)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(103,84,233,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(8deg)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.06)'; }}
                >
                  <img src="/images/trophy.png" alt="Award Winning" style={{ width: '80%', height: 'auto', objectFit: 'contain', transform: 'rotate(-8deg)' }} />
                </div>
              </div>

              {/* Rating — tall pill */}
              <div style={{
                flex: 1, borderRadius: '9999px',
                background: 'var(--bg-card)', border: '1px solid var(--border-main)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.06)',
                padding: '20px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                gap: 6,
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(103,84,233,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.06)'; }}
              >
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} style={{ width: 12, height: 12, fill: '#fbbf24', color: '#fbbf24' }} />
                  ))}
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
                  4.9/5
                </div>
                <div style={{ fontSize: 9, color: 'var(--text-muted)', textAlign: 'center' }}>
                  20+ Clients
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
