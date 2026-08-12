import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, TrendingUp, Code, ShoppingCart, Share2, GraduationCap, Smartphone, Globe, BarChart2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header({ onOpenAudit, theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { title: 'Best SEO Services', desc: 'Rank higher & capture organic traffic', icon: TrendingUp, href: '#capabilities' },
    { title: 'PPC Services', desc: 'Targeted Google & Meta ad campaigns', icon: BarChart2, href: '#capabilities' },
    { title: 'Website Development', desc: 'Custom React & WordPress sites', icon: Code, href: '#capabilities' },
    { title: 'LinkedIn Marketing', desc: 'B2B lead generation', icon: Globe, href: '#capabilities' },
    { title: 'E-commerce Development', desc: 'Shopify & WooCommerce stores', icon: ShoppingCart, href: '#capabilities' },
    { title: 'Social Media Marketing', desc: 'Content & community growth', icon: Share2, href: '#capabilities' },
    { title: 'School ERP System', desc: 'Complete web portal for schools', icon: GraduationCap, href: '#capabilities' },
    { title: 'App Development', desc: 'iOS & Android applications', icon: Smartphone, href: '#capabilities' },
  ];

  const whoWeAre = [
    { title: 'About Us', href: '#about' },
    { title: 'Blog & Insights', href: '#blog' },
    { title: 'Careers', href: '#contact' },
    { title: 'Meet the Team', href: '#why-us' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'var(--bg-header)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--bg-header-border)' : '1px solid transparent',
      padding: isScrolled ? '10px 0' : '18px 0',
      boxShadow: isScrolled ? 'var(--shadow-header)' : 'none',
    }}>
      <div className="site-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #6754e9, #8b5cf6, var(--accent-cyan))', padding: 2, boxShadow: '0 4px 15px var(--primary-glow)' }}>
            <div style={{ width: '100%', height: '100%', background: 'var(--bg-body)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}>
              <span style={{ fontWeight: 800, fontSize: 20, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>A</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>
              Atrangi<span style={{ color: 'var(--primary)' }}>Home</span>
            </span>
            <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Global Web & Digital Agency
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 500, color: 'var(--text-muted)' }}>
          {/* Solutions Dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 0', color: 'inherit', transition: 'color 0.2s' }}>
              Solutions <ChevronDown style={{ width: 16, height: 16, transition: 'transform 0.2s', transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0)', color: activeDropdown === 'solutions' ? 'var(--primary)' : 'inherit' }} />
            </button>
            {activeDropdown === 'solutions' && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8, width: 480, background: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: 16, padding: 12, boxShadow: 'var(--shadow-card)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, animation: 'fadeIn 0.2s ease-out' }}>
                {solutions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a key={idx} href={item.href} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: 10, borderRadius: 12, transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-subtle)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ width: 16, height: 16 }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-heading)' }}>{item.title}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.desc}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Who We Are */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setActiveDropdown('whoweare')} onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 0', color: 'inherit', transition: 'color 0.2s' }}>
              Who We Are <ChevronDown style={{ width: 16, height: 16, transition: 'transform 0.2s', transform: activeDropdown === 'whoweare' ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            {activeDropdown === 'whoweare' && (
              <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 8, width: 200, background: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: 16, padding: 8, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: 2, animation: 'fadeIn 0.2s ease-out' }}>
                {whoWeAre.map((item, idx) => (
                  <a key={idx} href={item.href} style={{ padding: 10, borderRadius: 10, fontSize: 13, fontWeight: 600, color: 'var(--text-body)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--text-heading)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-body)'; }}>
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#work" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}>Work</a>
          <a href="#blog" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}>Insights</a>
          <a href="#contact" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='var(--text-heading)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}>Contact</a>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button onClick={onOpenAudit} className="btn-primary hidden sm:inline-flex" style={{ padding: '10px 20px', fontSize: 13 }}>
            <span>Free Audit</span> <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden" style={{ padding: 8, borderRadius: 8, background: 'var(--bg-subtle)', color: 'var(--text-heading)' }}>
            {mobileMenuOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{ background: 'var(--bg-header)', backdropFilter: 'blur(24px)', borderBottom: '1px solid var(--border-main)', padding: 24, animation: 'fadeIn 0.2s ease-out' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solutions</div>
            {solutions.map((item, idx) => (
              <a key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-body)', padding: '4px 8px' }}>{item.title}</a>
            ))}
          </div>
          <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-main)', marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['About Us', 'Success Stories', 'Blog Insights', 'Contact Us'].map(item => (
              <a key={item} href="#" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-body)' }}>{item}</a>
            ))}
          </div>
          <div style={{ paddingTop: 16 }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenAudit(); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px 0' }}>Get Free Audit</button>
          </div>
        </div>
      )}
    </header>
  );
}
