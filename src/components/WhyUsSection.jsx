import React, { useState } from 'react';
import { Eye, ShieldCheck, Trophy, Check, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useAnimations';

export default function WhyUsSection({ onOpenAudit }) {
  const [activeTab, setActiveTab] = useState('transparency');
  const [leftRef, leftVisible] = useScrollReveal({ threshold: 0.15 });
  const [rightRef, rightVisible] = useScrollReveal({ threshold: 0.15 });

  const tabData = {
    transparency: { title: '100% Campaign Transparency', desc: 'We cultivate absolute transparency. You never have to wonder what is happening with your budget — live dashboards and unedited data.', highlights: ['Live 24/7 client dashboard', 'No hidden fees', 'Full ownership of accounts & code', 'Weekly live syncs'], metric: '100', metricSuffix: '%', metricLabel: 'Visibility Guarantee' },
    accountable: { title: 'Certified & Directly Accountable', desc: 'Every client gets direct access to the lead strategist. Call us, email us, or schedule a Huddle — no account manager relays.', highlights: ['Direct Slack/WhatsApp line', 'Under 3 hour response time', 'Dedicated senior strategist', 'Weekly performance breakdowns'], metric: '3', metricPrefix: '< ', metricSuffix: ' hrs', metricLabel: 'Average Response Time' },
    results: { title: 'Decisions Driven By Revenue', desc: 'All decisions are based on your revenue targets. Whether web dev, SEO, or PPC, we align execution to your pain points.', highlights: ['3.8x average ROI', 'US/UK/AU consumer methodology', 'Continuous A/B testing', 'Full attribution tracking'], metric: '3.8', metricSuffix: 'x', metricLabel: 'Average ROAS', decimals: 1 },
  };

  const current = tabData[activeTab];
  const tabs = [{ id: 'transparency', label: 'Transparency', icon: Eye }, { id: 'accountable', label: 'Accountability', icon: ShieldCheck }, { id: 'results', label: 'Results', icon: Trophy }];

  const metricValue = useCountUp(parseFloat(current.metric), rightVisible, {
    duration: 1800,
    prefix: current.metricPrefix || '',
    suffix: current.metricSuffix || '',
    decimals: current.decimals || 0
  });

  return (
    <section id="why-us" style={{ padding: '96px 0', background: 'var(--bg-body)', transition: 'background 0.3s' }}>
      <div className="site-container">
        <div className="grid-split-wide">
          {/* Left — slide from left */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'is-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="section-tag">Global Agency Advantage</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>
              Why international businesses <span className="gradient-accent">work with us</span>
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: 16, lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--text-heading)' }}>India-based expertise, global delivery.</strong> Our teams work overlapping hours with North America, Europe, and Australia. Top-tier execution at 1/3rd of Western retainers.
            </p>

            <div style={{ display: 'flex', gap: 8, padding: 6, background: 'var(--bg-section-alt)', border: '1px solid var(--border-main)', borderRadius: 16, maxWidth: 480 }}>
              {tabs.map(t => {
                const TabIcon = t.icon;
                return (
                  <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                    flex: 1, padding: '12px 12px', borderRadius: 12, fontSize: 12, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'all 0.2s', cursor: 'pointer', border: 'none',
                    background: activeTab === t.id ? 'var(--primary)' : 'transparent',
                    color: activeTab === t.id ? '#fff' : 'var(--text-muted)',
                    boxShadow: activeTab === t.id ? '0 4px 15px var(--primary-glow)' : 'none',
                  }}><TabIcon style={{ width: 16, height: 16 }} /> <span>{t.label}</span></button>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>{current.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.7 }}>{current.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {current.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--text-body)' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,212,180,0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check style={{ width: 12, height: 12 }} />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <button onClick={onOpenAudit} className="btn-primary" style={{ padding: '12px 24px', fontSize: 13, alignSelf: 'flex-start' }}>
                <span>Request Proposal</span> <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
            </div>
          </div>

          {/* Right — scale reveal + counting metric */}
          <div ref={rightRef} className={`reveal-scale reveal-slow ${rightVisible ? 'is-visible' : ''}`} style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: 32, textAlign: 'center', borderRadius: 24, background: 'var(--bg-card)' }}>
              <div style={{ width: 80, height: 80, margin: '0 auto', borderRadius: 24, background: 'var(--bg-subtle)', border: '1px solid var(--tag-border)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, animation: 'pulseSubtle 4s ease-in-out infinite' }}>
                <Clock style={{ width: 40, height: 40 }} />
              </div>
              <div className="gradient-text" style={{ fontSize: 48, fontWeight: 900, fontFamily: 'var(--font-heading)', marginBottom: 8, fontVariantNumeric: 'tabular-nums' }}>
                {metricValue}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-body)', marginBottom: 24 }}>{current.metricLabel}</div>
              <div style={{ padding: 16, borderRadius: 16, background: 'var(--bg-subtle)', border: '1px solid var(--border-main)', textAlign: 'left', fontSize: 13 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 8 }}>
                  <span>Support Availability</span> <span style={{ color: 'var(--accent-cyan)' }}>24/7/365</span>
                </div>
                <div style={{ width: '100%', background: 'var(--border-main)', height: 8, borderRadius: 9999, overflow: 'hidden' }}>
                  <div style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent-cyan))', height: '100%', width: rightVisible ? '95%' : '0%', transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s' }} />
                </div>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>Overlapping hours with EST, PST, GMT & AEST.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
