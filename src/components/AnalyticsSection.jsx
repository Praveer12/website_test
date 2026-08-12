import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, ArrowUpRight, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

export default function AnalyticsSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Delay chart animation slightly after section reveals
      const timer = setTimeout(() => setAnimateChart(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} style={{ padding: '120px 0', background: 'var(--bg-body)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', right: '-10%', transform: 'translateY(-50%)',
        width: 600, height: 600, background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168,85,247,0) 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0
      }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          
          {/* Left Text Content */}
          <div className={`reveal-up ${isVisible ? 'is-visible' : ''}`}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100,
              background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', color: 'var(--tag-text)',
              fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 24
            }}>
              <BarChart3 style={{ width: 16, height: 16, color: 'var(--accent-cyan)' }} />
              Proven Metrics
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: 24 }}>
              Data-driven <span className="gradient-accent">growth</span> you can actually measure
            </h2>
            
            <p style={{ fontSize: 18, color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 40, maxWidth: 480 }}>
              We don't just run campaigns; we build growth engines. Track your ROI, engagement, and conversions in real-time with our transparent analytics approach.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div style={{ padding: '24px', background: 'var(--bg-card)', borderRadius: 24, border: '1px solid var(--border-main)' }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>2.5x</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>Average ROI Increase</div>
              </div>
              <div style={{ padding: '24px', background: 'var(--bg-card)', borderRadius: 24, border: '1px solid var(--border-main)' }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>140%</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>Traffic Growth</div>
              </div>
            </div>
          </div>

          {/* Right Graph Dashboard UI */}
          <div className={`reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div style={{
              background: 'linear-gradient(145deg, var(--bg-card), var(--bg-subtle))',
              borderRadius: 32, padding: 32, border: '1px solid var(--border-main)',
              boxShadow: 'var(--shadow-card-hover)', position: 'relative'
            }}>
              
              {/* Dashboard Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                <div>
                  <div style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 4 }}>Total Revenue</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>$124,500</div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981', padding: '6px 12px', borderRadius: 100, fontSize: 14, fontWeight: 600
                }}>
                  <TrendingUp style={{ width: 16, height: 16 }} />
                  +24.8%
                </div>
              </div>

              {/* SVG Line Chart */}
              <div style={{ position: 'relative', height: 200, width: '100%' }}>
                {/* Grid Lines */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ width: '100%', height: 1, background: 'var(--border-main)' }} />
                  ))}
                </div>

                <svg viewBox="0 0 500 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible', position: 'relative', zIndex: 2 }}>
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--accent-cyan)" />
                      <stop offset="100%" stopColor="var(--primary)" />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <path
                    d="M0,200 L0,140 C50,140 100,180 150,150 C200,120 250,50 300,70 C350,90 400,30 450,40 L500,20 L500,200 Z"
                    fill="url(#chartGradient)"
                    style={{
                      opacity: animateChart ? 1 : 0,
                      transition: 'opacity 1s ease 0.5s'
                    }}
                  />

                  {/* Line */}
                  <path
                    d="M0,140 C50,140 100,180 150,150 C200,120 250,50 300,70 C350,90 400,30 450,40 L500,20"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: animateChart ? 0 : 1000,
                      transition: 'stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  />

                  {/* Data Points */}
                  {[
                    { cx: 150, cy: 150, delay: '0.4s' },
                    { cx: 300, cy: 70, delay: '0.8s' },
                    { cx: 450, cy: 40, delay: '1.2s' }
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.cx}
                      cy={point.cy}
                      r="6"
                      fill="var(--bg-card)"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      style={{
                        opacity: animateChart ? 1 : 0,
                        transform: animateChart ? 'scale(1)' : 'scale(0)',
                        transformOrigin: `${point.cx}px ${point.cy}px`,
                        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${point.delay}`
                      }}
                    />
                  ))}
                </svg>
              </div>

              {/* Floating Widget */}
              <div style={{
                position: 'absolute', bottom: -24, left: -24, background: 'var(--bg-card)',
                padding: '16px 24px', borderRadius: 20, border: '1px solid var(--border-main)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 16,
                transform: animateChart ? 'translateY(0)' : 'translateY(20px)',
                opacity: animateChart ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1.5s'
              }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users style={{ width: 20, height: 20, color: 'var(--primary)' }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Active Users</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>12,450</div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
