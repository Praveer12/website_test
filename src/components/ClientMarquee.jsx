import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const clients = [
  { name: 'Aspire of India', tagline: 'Youth Empowerment' },
  { name: 'Join Agriculture', tagline: 'Agri-Tech Platform' },
  { name: 'Forex Invest Hub', tagline: 'Fintech Solutions' },
  { name: 'Duchess Kumari', tagline: 'Luxury Fashion' },
  { name: 'EduSmart ERP', tagline: 'School Management' },
  { name: 'Apex Logistics', tagline: 'Global Freight' },
  { name: 'TechVenture Inc.', tagline: 'SaaS Products' },
  { name: 'GreenLeaf Organics', tagline: 'D2C Brand' },
];

function ClientLogo({ name, tagline }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 32px', whiteSpace: 'nowrap', userSelect: 'none',
    }}>
      {/* Monogram circle */}
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: 'var(--bg-subtle)', border: '1px solid var(--border-main)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, fontWeight: 800, color: 'var(--primary)',
        fontFamily: 'var(--font-heading)', flexShrink: 0,
      }}>
        {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
      </div>
      <div>
        <div style={{
          fontSize: 14, fontWeight: 700, color: 'var(--text-heading)',
          fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em',
        }}>{name}</div>
        <div style={{
          fontSize: 10, color: 'var(--text-muted)', fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>{tagline}</div>
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  // Duplicate for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section
      ref={ref}
      className={`reveal-up ${isVisible ? 'is-visible' : ''}`}
      style={{
        padding: '32px 0',
        borderTop: '1px solid var(--border-main)',
        borderBottom: '1px solid var(--border-main)',
        background: 'var(--bg-body)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 0.3s',
      }}
    >
      {/* Label */}
      <div style={{
        textAlign: 'center', marginBottom: 20,
        fontSize: 11, fontWeight: 700, color: 'var(--text-subtle)',
        textTransform: 'uppercase', letterSpacing: '0.12em',
      }}>
        Trusted by innovative brands worldwide
      </div>

      {/* Marquee track */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: 80, height: '100%',
          background: 'linear-gradient(to right, var(--bg-body), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 80, height: '100%',
          background: 'linear-gradient(to left, var(--bg-body), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div className="marquee-track">
          <div className="marquee-inner">
            {allClients.map((c, i) => (
              <ClientLogo key={`a-${i}`} name={c.name} tagline={c.tagline} />
            ))}
          </div>
          <div className="marquee-inner" aria-hidden="true">
            {allClients.map((c, i) => (
              <ClientLogo key={`b-${i}`} name={c.name} tagline={c.tagline} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
