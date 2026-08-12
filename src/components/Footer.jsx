import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Footer({ onOpenAudit }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });
  const [colsRef, colsVisible] = useScrollReveal({ threshold: 0.1 });

  const handleSubscribe = (e) => { e.preventDefault(); if (email) setSubscribed(true); };

  return (
    <footer id="contact" style={{ background: 'var(--bg-section-alt)', color: 'var(--text-muted)', paddingTop: 80, paddingBottom: 48, borderTop: '1px solid var(--border-main)', transition: 'background 0.3s' }}>
      <div className="site-container">
        {/* CTA Banner — scale reveal */}
        <div
          ref={ctaRef}
          className={`glass-card reveal-scale ${ctaVisible ? 'is-visible' : ''}`}
          style={{ padding: '32px 48px', borderRadius: 24, marginBottom: 64, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32, background: 'var(--bg-card)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ready to Scale?</span>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>Let's build your next digital masterpiece.</h3>
            <p style={{ fontSize: 13, color: 'var(--text-body)' }}>Get your free SEO & technical audit within 24 hours.</p>
          </div>
          <button onClick={onOpenAudit} className="btn-primary" style={{ padding: '14px 32px', fontSize: 14, flexShrink: 0 }}>
            Get Free Proposal <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </div>

        {/* Columns — staggered fade up */}
        <div ref={colsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, paddingBottom: 64, borderBottom: '1px solid var(--border-main)' }}>
          {/* Brand */}
          <div className={`reveal-up stagger-1 ${colsVisible ? 'is-visible' : ''}`} style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #6754e9, var(--accent-cyan))', padding: 2 }}>
                <div style={{ width: '100%', height: '100%', background: 'var(--bg-body)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', transition: 'background 0.3s' }}>A</div>
              </div>
              <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>Atrangi<span style={{ color: 'var(--primary)' }}>Home</span></span>
            </a>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 360 }}>India's trusted website development & digital marketing agency serving global brands across the US, UK, Canada, and Australia.</p>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 8 }}>Subscribe to Growth Insights</div>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 8, maxWidth: 360 }}>
                  <input type="email" required placeholder="Enter work email..." value={email} onChange={e => setEmail(e.target.value)} style={{ flex: 1, background: 'var(--bg-input)', border: '1px solid var(--bg-input-border)', borderRadius: 12, padding: '8px 12px', fontSize: 13, color: 'var(--text-heading)', outline: 'none' }} />
                  <button type="submit" style={{ background: 'var(--primary)', color: '#fff', padding: '8px 16px', borderRadius: 12, fontSize: 12, fontWeight: 700, border: 'none', cursor: 'pointer' }}>Join</button>
                </form>
              ) : (
                <div style={{ fontSize: 13, color: 'var(--accent-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck style={{ width: 16, height: 16 }} /> Subscribed! Welcome aboard.
                </div>
              )}
            </div>
          </div>

          {/* Solutions */}
          <div className={`reveal-up stagger-2 ${colsVisible ? 'is-visible' : ''}`}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>Solutions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['SEO Services', 'PPC & Google Ads', 'Website Development', 'E-Commerce', 'Social Media', 'School ERP', 'LinkedIn Marketing'].map(item => (
                <a key={item} href="#capabilities" style={{ fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>{item}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className={`reveal-up stagger-3 ${colsVisible ? 'is-visible' : ''}`}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[{ l: 'About', h: '#about' }, { l: 'Success Stories', h: '#work' }, { l: 'Why Us', h: '#why-us' }, { l: 'Blog', h: '#blog' }, { l: 'Contact', h: '#contact' }].map(item => (
                <a key={item.l} href={item.h} style={{ fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>{item.l}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className={`reveal-up stagger-4 ${colsVisible ? 'is-visible' : ''}`}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:atrangihome@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Mail style={{ width: 16, height: 16, color: 'var(--primary)' }} /> atrangihome@gmail.com
              </a>
              <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Phone style={{ width: 16, height: 16, color: 'var(--accent-cyan)' }} /> +91 (WhatsApp)
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                <MapPin style={{ width: 16, height: 16, color: 'var(--accent-amber)', flexShrink: 0, marginTop: 2 }} /> India | Serving US, UK, CA & AU
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 32, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-subtle)', gap: 16 }}>
          <div>© {new Date().getFullYear()} AtrangiHome. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms', 'Sitemap'].map(item => (
              <a key={item} href="#" style={{ color: 'var(--text-subtle)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-body)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-subtle)'}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
