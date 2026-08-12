import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

const testimonials = [
  {
    quote: "AtrangiHome completely transformed our online presence. Within 3 months, our organic traffic grew by 420% and we started ranking on the first page for our most competitive keywords. Their SEO and web dev team is genuinely world-class.",
    name: "Rajesh Mehta",
    title: "Founder & CEO",
    company: "Aspire of India",
    rating: 5,
    metric: "+420% traffic",
    initials: "RM",
    color: "#6754e9",
  },
  {
    quote: "We needed a partner who understood both Indian operations and Western consumer expectations. AtrangiHome delivered a Shopify store that increased our online sales by 185% in the first quarter. The ROI has been exceptional.",
    name: "Priya Kumari",
    title: "Creative Director",
    company: "Duchess Kumari",
    rating: 5,
    metric: "+185% sales",
    initials: "PK",
    color: "#f43f5e",
  },
  {
    quote: "Their PPC campaigns brought our cost-per-lead down from $45 to $12 while increasing total conversions. The transparent dashboard they set up lets us track every rupee spent. No other agency gave us this level of visibility.",
    name: "Daniel Wright",
    title: "VP of Marketing",
    company: "Forex Invest Hub",
    rating: 5,
    metric: "$12 CPL",
    initials: "DW",
    color: "#10b981",
  },
  {
    quote: "The school ERP system they built handles 50+ schools seamlessly. Parents love the WhatsApp fee reminders, and our admin overhead dropped by 60%. AtrangiHome understood our needs like no other vendor.",
    name: "Anita Sharma",
    title: "Operations Head",
    company: "EduSmart Schools",
    rating: 5,
    metric: "50+ schools",
    initials: "AS",
    color: "#f59e0b",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right, 0 initial
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const goTo = useCallback((idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isVisible, next]);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '0', background: 'var(--bg-section-alt)',
        transition: 'background 0.3s', overflow: 'hidden',
      }}
    >
      <div className="site-container py-16 md:py-24">
        <div className={`reveal-up ${isVisible ? 'is-visible' : ''}`}>
          {/* Header */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
            justifyContent: 'space-between', gap: 24, marginBottom: 48,
          }}>
            <div>
              <div className="section-tag">Client Voices</div>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800,
                color: 'var(--text-heading)', fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
              }}>
                What our partners <span className="gradient-accent">say about us</span>
              </h2>
            </div>
            {/* Navigation arrows */}
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                style={{
                  width: 48, height: 48, borderRadius: 9999,
                  background: 'var(--bg-card)', border: '1px solid var(--border-main)',
                  color: 'var(--text-heading)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.color = 'var(--text-heading)'; e.currentTarget.style.borderColor = 'var(--border-main)'; }}
              >
                <ChevronLeft style={{ width: 20, height: 20 }} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                style={{
                  width: 48, height: 48, borderRadius: 9999,
                  background: 'var(--primary)', border: '1px solid var(--primary)',
                  color: '#fff', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', cursor: 'pointer',
                  boxShadow: '0 4px 15px var(--primary-glow)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; }}
              >
                <ChevronRight style={{ width: 20, height: 20 }} />
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div
            key={current}
            style={{
              display: 'grid', gridTemplateColumns: '1fr',
              gap: 40, alignItems: 'center',
              animation: 'fadeIn 0.4s ease-out',
            }}
          >
            <div className="glass-card" style={{
              padding: 'clamp(24px, 4vw, 48px)', borderRadius: 32,
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Decorative quote mark */}
              <Quote style={{
                position: 'absolute', top: 20, right: 24,
                width: 80, height: 80, color: 'var(--primary)',
                opacity: 0.06,
              }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} style={{ width: 18, height: 18, fill: '#fbbf24', color: '#fbbf24' }} />
                ))}
              </div>

              {/* Quote text */}
              <blockquote style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 500,
                color: 'var(--text-heading)', lineHeight: 1.7,
                fontStyle: 'normal', margin: 0, marginBottom: 32,
                maxWidth: 720, textWrap: 'pretty',
              }}>
                "{t.quote}"
              </blockquote>

              {/* Author row */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                justifyContent: 'space-between', gap: 16,
                paddingTop: 24, borderTop: '1px solid var(--border-main)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  {/* Avatar */}
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 16, fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{
                      fontSize: 15, fontWeight: 700, color: 'var(--text-heading)',
                      fontFamily: 'var(--font-heading)',
                    }}>{t.name}</div>
                    <div style={{
                      fontSize: 12, color: 'var(--text-muted)',
                    }}>{t.title} · {t.company}</div>
                  </div>
                </div>
                {/* Metric badge */}
                <div style={{
                  padding: '8px 16px', borderRadius: 9999,
                  background: 'var(--tag-bg)', border: '1px solid var(--tag-border)',
                  fontSize: 13, fontWeight: 700, color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-heading)',
                }}>
                  {t.metric}
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32,
          }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: current === i ? 32 : 8, height: 8,
                  borderRadius: 9999, border: 'none', cursor: 'pointer',
                  background: current === i ? 'var(--primary)' : 'var(--border-main)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
