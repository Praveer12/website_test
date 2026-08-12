import React from 'react';
import { Star, Award, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useAnimations';

export default function StatsBar() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  const stats = [
    { value: 100, suffix: '%', label: 'Project Satisfaction', icon: Award, color: 'var(--accent-cyan)' },
    { value: 4.9, suffix: ' ★', label: '20+ Client Reviews', icon: Star, color: 'var(--accent-amber)', decimals: 1 },
    { value: 37, prefix: '+', suffix: '%', label: 'Avg. Traffic Lift', icon: TrendingUp, color: 'var(--primary)' },
    { value: 85, suffix: '%+', label: 'Client Retention', icon: Users, color: 'var(--accent-pink)' },
  ];

  return (
    <section ref={ref} style={{ padding: '40px 0', background: 'var(--bg-section-alt)', borderTop: '1px solid var(--border-main)', borderBottom: '1px solid var(--border-main)', position: 'relative', zIndex: 20, transition: 'background 0.3s' }}>
      <div className="site-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, alignItems: 'center' }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const countedValue = useCountUp(stat.value, isVisible, { 
              duration: 2000, suffix: stat.suffix || '', prefix: stat.prefix || '', 
              decimals: stat.decimals || 0 
            });
            return (
              <div
                key={idx}
                className={`reveal-up stagger-${idx + 1} ${isVisible ? 'is-visible' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, borderRadius: 16, border: '1px solid var(--border-main)', transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)', background: 'var(--bg-card)' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color, flexShrink: 0 }}>
                  <Icon style={{ width: 24, height: 24 }} />
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', fontVariantNumeric: 'tabular-nums' }}>{countedValue}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
                </div>
              </div>
            );
          })}
          <div className={`reveal-scale stagger-5 ${isVisible ? 'is-visible' : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#capabilities" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 9999, background: 'var(--bg-subtle)', color: 'var(--primary)', border: '1px solid var(--tag-border)', fontSize: 12, fontWeight: 700, transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--primary)'; }}>
              <span>Solutions You Need</span> <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
