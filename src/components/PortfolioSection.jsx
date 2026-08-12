import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, CheckCircle2, TrendingUp, Globe2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function PortfolioSection({ onOpenAudit }) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.08 });

  const projects = [
    { id: 'aspire', title: 'Aspire of India', domain: 'aspireofindia.org', tags: ['Web Dev', 'SEO'], category: 'webdev', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80', stats: '+420% Organic Traffic', description: 'Complete brand revamp and ultra-fast web portal for a youth empowerment startup.', results: ['Sub-second page load', 'Top 3 for 25+ keywords', '100% mobile audit pass'] },
    { id: 'joinagri', title: 'Join Agriculture', domain: 'joinagriculture.com', tags: ['Web Dev', 'SEO'], category: 'seo', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80', stats: '15,000+ Monthly Visitors', description: 'Clean portal connecting agricultural manufacturers with distributors.', results: ['3.4x inbound inquiries', 'Custom SEO taxonomy', 'Multilingual interface'] },
    { id: 'forex', title: 'Forex Invest Hub', domain: 'forexinvesthub.com', tags: ['Web Dev', 'Fintech'], category: 'webdev', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80', stats: '4.8x ROAS', description: 'Fintech platform with real-time data visualization and high-converting pages.', results: ['SOC2 Compliance', 'Custom calculators', '$12 CPL via PPC'] },
    { id: 'duchess', title: 'Duchess Kumari', domain: 'duchesskumari.com', tags: ['E-Commerce', 'Fashion'], category: 'ecommerce', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80', stats: '+185% Online Sales', description: 'Luxury ethnic wear Shopify store with global currency conversion.', results: ['42% less cart abandonment', 'International shipping', 'Instagram Shop sync'] },
    { id: 'edusmart', title: 'EduSmart School ERP', domain: 'edusmart.edu.in', tags: ['School ERP', 'App Dev'], category: 'webdev', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80', stats: '50+ Schools Active', description: 'Cloud software for attendance, fees, report cards, and notifications.', results: ['Zero downtime on results', 'WhatsApp fee reminders', 'PWA mobile access'] },
    { id: 'apex', title: 'Apex Global Logistics', domain: 'apexlogistics.com', tags: ['Web Dev', 'B2B'], category: 'seo', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80', stats: '1,200+ Inquiries', description: 'B2B website with freight calculator and multi-city SEO targeting.', results: ['Cargo tracking API', '5.2x ROAS ads', 'CRM lead routing'] },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const filters = [{ id: 'all', label: 'All' }, { id: 'webdev', label: 'Web Dev' }, { id: 'seo', label: 'SEO' }, { id: 'ecommerce', label: 'E-Commerce' }];

  return (
    <section id="work" style={{ padding: '96px 0', background: 'var(--bg-section-alt)', transition: 'background 0.3s' }}>
      <div className="site-container">
        {/* Header — shrink reveal */}
        <div ref={headerRef} className={`reveal-shrink ${headerVisible ? 'is-visible' : ''}`} style={{ marginBottom: 48 }}>
          <div className="section-tag">Success Stories</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', marginBottom: 12 }}>
            Delivering <span className="gradient-accent">proven results</span> for global clients
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 24 }}>Explore how we help brands scale their digital revenue.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{
                padding: '8px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                background: filter === f.id ? 'var(--primary)' : 'var(--bg-card)', color: filter === f.id ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${filter === f.id ? 'var(--primary)' : 'var(--border-main)'}`,
              }}>{f.label}</button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid — staggered rotate reveal */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }}>
          {filtered.map((p, idx) => (
            <div
              key={p.id}
              className={`glass-card reveal-up stagger-${Math.min(idx + 1, 6)} ${gridVisible ? 'is-visible' : ''}`}
              style={{ overflow: 'hidden', borderRadius: 24, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />

                <div style={{ position: 'absolute', top: 16, left: 16, padding: '4px 14px', borderRadius: 9999, background: 'var(--primary)', color: '#fff', fontSize: 12, fontWeight: 700 }}>{p.stats}</div>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map((t, i) => <span key={i} style={{ fontSize: 10, fontWeight: 600, color: 'var(--tag-text)', background: 'var(--tag-bg)', padding: '2px 10px', borderRadius: 6, border: '1px solid var(--tag-border)' }}>{t}</span>)}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>{p.title}</h3>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Globe2 style={{ width: 14, height: 14, color: 'var(--accent-cyan)' }} /> {p.domain}
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-body)', lineHeight: 1.6 }}>{p.description}</p>
              </div>
              <div style={{ padding: '8px 24px 24px' }}>
                <button onClick={() => setSelectedProject(p)} style={{ width: '100%', padding: '10px 0', borderRadius: 12, background: 'var(--bg-subtle)', fontSize: 12, fontWeight: 700, color: 'var(--text-heading)', transition: 'all 0.3s', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, border: '1px solid var(--border-main)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--text-heading)'; e.currentTarget.style.borderColor = 'var(--border-main)'; }}>
                  View Case Study <ArrowRight style={{ width: 14, height: 14 }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <button onClick={onOpenAudit} className="btn-secondary" style={{ padding: '14px 32px', fontSize: 14 }}>
            Have a project? Let's discuss <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>

      {selectedProject && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'var(--bg-modal-overlay)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }} onClick={() => setSelectedProject(null)}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: 24, maxWidth: 640, width: '100%', overflow: 'hidden', boxShadow: 'var(--shadow-card)', animation: 'fadeIn 0.2s ease-out' }} onClick={e => e.stopPropagation()}>
            <div style={{ position: 'relative', height: 240 }}>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-card), transparent 60%)' }} />
              <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: 16, right: 16, padding: 8, borderRadius: 9999, background: 'rgba(0,0,0,0.5)', color: '#fff', cursor: 'pointer', border: 'none' }}><X style={{ width: 20, height: 20 }} /></button>
              <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: 4 }}><TrendingUp style={{ width: 16, height: 16 }} /> {selectedProject.stats}</div>
                <h3 style={{ fontSize: 28, fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>{selectedProject.title}</h3>
              </div>
            </div>
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.7 }}>{selectedProject.description}</p>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 12 }}>Project Outcomes</div>
                {selectedProject.results.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-body)', background: 'var(--bg-subtle)', padding: 12, borderRadius: 12, border: '1px solid var(--border-main)', marginBottom: 8 }}><CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-cyan)', flexShrink: 0 }} /> {r}</div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border-main)' }}>
                <a href={`https://${selectedProject.domain}`} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'var(--primary)' }}>Visit Site <ExternalLink style={{ width: 14, height: 14 }} /></a>
                <button onClick={() => { setSelectedProject(null); onOpenAudit(); }} className="btn-primary" style={{ padding: '10px 24px', fontSize: 12 }}>Build Similar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
