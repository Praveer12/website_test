import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe, Camera, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function Footer({ onOpenAudit }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });
  const [colsRef, colsVisible] = useScrollReveal({ threshold: 0.1 });

  const handleSubscribe = (e) => { e.preventDefault(); if (email) setSubscribed(true); };

  const socialLinks = [
    { icon: Globe, label: 'LinkedIn', href: '#' },
    { icon: Camera, label: 'Instagram', href: '#' },
    { icon: MessageCircle, label: 'Twitter / X', href: '#' },
  ];

  return (
    <footer id="contact" style={{ background: 'var(--bg-section-alt)', color: 'var(--text-muted)', paddingTop: 0, paddingBottom: 48, borderTop: '1px solid var(--border-main)', transition: 'background 0.3s' }}>
      
      {/* Large Typographic CTA */}
      <div
        ref={ctaRef}
        className={`reveal-scale ${ctaVisible ? 'is-visible' : ''}`}
        style={{ padding: 'clamp(48px, 8vw, 96px) 0', textAlign: 'center', borderBottom: '1px solid var(--border-main)' }}
      >
        <div className="site-container">
          <div style={{
            fontSize: 11, fontWeight: 700, color: 'var(--accent-cyan)',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16,
          }}>Ready to Scale?</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 900,
            color: 'var(--text-heading)', fontFamily: 'var(--font-heading)',
            lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24,
            textWrap: 'balance',
          }}>
            Let's build something{' '}
            <span className="gradient-accent">extraordinary</span>
            {' '}together.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-body)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Get your free SEO & technical audit within 24 hours. No commitments, no hidden fees.
          </p>
          <button onClick={onOpenAudit} className="btn-primary" style={{ padding: '16px 36px', fontSize: 15 }}>
            Get Free Proposal <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>

      <div className="site-container" style={{ paddingTop: 64 }}>
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
            
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a key={i} href={s.href} aria-label={s.label} style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'var(--bg-subtle)', border: '1px solid var(--border-main)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-main)'; }}>
                    <Icon style={{ width: 18, height: 18 }} />
                  </a>
                );
              })}
            </div>

            <div style={{ marginTop: 8 }}>
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
              <a href="tel:+918447135270" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Phone style={{ width: 16, height: 16, color: 'var(--accent-cyan)' }} /> +91 8447135270
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
