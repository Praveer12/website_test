import React, { useState } from 'react';
import { TrendingUp, BarChart2, Code, ShoppingCart, Share2, Smartphone, GraduationCap, Globe, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function CapabilitiesSection({ onOpenAudit }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  const services = [
    { id: 'seo', category: 'seo', title: 'Search Engine Optimization', shortDesc: 'Maintain your best spot on search results to gain high-intent organic leads.', fullDesc: 'Our technical and content SEO ensures your brand ranks for terms that convert. We handle audits, keyword mapping, backlink outreach, and local/global SEO.', deliverables: ['Technical SEO Audits', 'On-Page & Schema Markup', 'Authority Link Building', 'GEO Optimization'], icon: TrendingUp, accent: '#6754e9' },
    { id: 'ppc', category: 'ppc', title: 'Paid Search Marketing', shortDesc: 'Accelerate revenue with high-ROAS Google Ads and Meta Ads campaigns.', fullDesc: 'Laser-targeted paid ad campaigns optimized for immediate ROI. We minimize cost-per-lead while maximizing pipeline.', deliverables: ['Google Search & Shopping Ads', 'Meta & Instagram Creatives', 'Conversion Tracking', 'A/B Landing Pages'], icon: BarChart2, accent: '#a855f7' },
    { id: 'webdev', category: 'webdev', title: 'Website Development', shortDesc: 'Lightning-fast, mobile-responsive custom websites with React & WordPress.', fullDesc: 'Your website is your 24/7 sales rep. We engineer bespoke, fast web experiences that engage users and drive conversions.', deliverables: ['React & Next.js Build', 'Responsive UI/UX', 'Core Web Vitals', 'CMS Integration'], icon: Code, accent: '#10b981' },
    { id: 'ecommerce', category: 'ecommerce', title: 'E-commerce Development', shortDesc: 'High-converting online stores on Shopify & WooCommerce.', fullDesc: 'Custom storefronts with seamless checkout, inventory sync, and multi-currency support.', deliverables: ['Shopify & WooCommerce', 'Custom Themes', 'Payment Gateways', 'Cart Recovery'], icon: ShoppingCart, accent: '#f59e0b' },
    { id: 'smm', category: 'ppc', title: 'Social Media Marketing', shortDesc: 'Build strong brand presence and cultivate engaged communities.', fullDesc: 'End-to-end social strategy, content creation, and influencer outreach across all platforms.', deliverables: ['Content Calendar', 'Video & Visuals', 'Community Engagement', 'Social Listening'], icon: Share2, accent: '#3b82f6' },
    { id: 'appdev', category: 'webdev', title: 'Mobile App Development', shortDesc: 'Cross-platform iOS and Android applications for performance.', fullDesc: 'Seamless mobile experiences with React Native and Flutter for speed and security.', deliverables: ['iOS & Android Build', 'UI/UX Wireframing', 'API Integration', 'App Store Publishing'], icon: Smartphone, accent: '#06b6d4' },
    { id: 'erp', category: 'webdev', title: 'School Management ERP', shortDesc: 'All-in-one digital portal for educational institutes.', fullDesc: 'Automated fee collection, attendance, grade books, and parent-teacher portals.', deliverables: ['Student Portals', 'Fee Management', 'Exams & Grading', 'SMS Alerts'], icon: GraduationCap, accent: '#f43f5e' },
    { id: 'linkedin', category: 'seo', title: 'LinkedIn B2B Marketing', shortDesc: 'Executive thought leadership and qualified B2B sales pipelines.', fullDesc: 'Position executives as authorities and connect with C-suite decision makers.', deliverables: ['Profile Optimization', 'Ghostwriting', 'InMail Outreach', 'Lead Nurturing'], icon: Globe, accent: '#0ea5e9' },
  ];

  const categories = [
    { id: 'all', label: 'All Solutions' }, { id: 'webdev', label: 'Web & App Dev' },
    { id: 'seo', label: 'SEO & Content' }, { id: 'ppc', label: 'PPC & Social' }, { id: 'ecommerce', label: 'E-Commerce' }
  ];

  const filtered = activeCategory === 'all' ? services : services.filter(s => s.category === activeCategory);

  return (
    <section id="capabilities" className="py-16 md:py-24" style={{ background: 'var(--bg-section-alt)', transition: 'background 0.3s' }}>
      <div className="site-container">
        {/* Header — blur reveal */}
        <div
          ref={headerRef}
          className={`reveal-blur ${headerVisible ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px', display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <div className="section-tag" style={{ alignSelf: 'center' }}>Our Capabilities</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
            Data-driven, customer-centric <span className="gradient-accent">digital services</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>End-to-end capabilities tailored to scale your brand globally.</p>
          <div style={{ paddingTop: 16, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {categories.map(c => (
              <button key={c.id} onClick={() => setActiveCategory(c.id)} style={{
                padding: '10px 20px', borderRadius: 9999, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                background: activeCategory === c.id ? 'var(--primary)' : 'var(--bg-card)',
                color: activeCategory === c.id ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${activeCategory === c.id ? 'var(--primary)' : 'var(--border-main)'}`,
                boxShadow: activeCategory === c.id ? '0 4px 15px var(--primary-glow)' : 'none',
              }}>{c.label}</button>
            ))}
          </div>
        </div>

        {/* Services Grid — staggered scale reveal */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))', gap: 24 }}>
          {filtered.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`glass-card reveal-scale stagger-${Math.min(idx + 1, 8)} ${gridVisible ? 'is-visible' : ''}`}
                style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `linear-gradient(135deg, ${s.accent}, ${s.accent}88)`, padding: 2, marginBottom: 24 }}>
                    <div style={{ width: '100%', height: '100%', background: 'var(--bg-card)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.accent }}>
                      <Icon style={{ width: 22, height: 22 }} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 8, fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>{s.shortDesc}</p>
                </div>
                <button onClick={() => setSelectedService(s)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: 'var(--primary)', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                  <span>Learn more</span> <ArrowRight style={{ width: 14, height: 14 }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'var(--bg-modal-overlay)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }} onClick={() => setSelectedService(null)}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: 24, maxWidth: 540, width: '100%', padding: 32, position: 'relative', boxShadow: 'var(--shadow-card)', animation: 'fadeIn 0.2s ease-out' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedService(null)} style={{ position: 'absolute', top: 20, right: 20, padding: 8, borderRadius: 9999, background: 'var(--bg-subtle)', color: 'var(--text-muted)', cursor: 'pointer', border: 'none' }}><X style={{ width: 20, height: 20 }} /></button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><selectedService.icon style={{ width: 24, height: 24 }} /></div>
              <div><h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>{selectedService.title}</h3><span style={{ fontSize: 12, color: 'var(--accent-cyan)', fontWeight: 600 }}>Service Blueprint</span></div>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 24 }}>{selectedService.fullDesc}</p>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Key Deliverables:</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {selectedService.deliverables.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-body)', background: 'var(--bg-subtle)', padding: 10, borderRadius: 12, border: '1px solid var(--border-main)' }}><CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-cyan)', flexShrink: 0 }} /> <span>{d}</span></div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button onClick={() => setSelectedService(null)} className="btn-secondary" style={{ fontSize: 12, padding: '10px 20px' }}>Close</button>
              <button onClick={() => { setSelectedService(null); onOpenAudit(); }} className="btn-primary" style={{ fontSize: 12, padding: '10px 20px' }}>Get Quote</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
