import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import AnalyticsSection from './components/AnalyticsSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyUsSection from './components/WhyUsSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import AuditModal from './components/AuditModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('atrangi-theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('atrangi-theme', theme);
  }, [theme]);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-body)', color: 'var(--text-body)', transition: 'background 0.3s, color 0.3s' }}>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Noise texture overlay for premium feel */}
      <div className="noise-overlay" />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      <Header onOpenAudit={() => setIsAuditModalOpen(true)} theme={theme} setTheme={setTheme} />
      <main>
        <Hero onOpenAudit={() => setIsAuditModalOpen(true)} />
        <ClientMarquee />
        <AboutSection />
        <CapabilitiesSection onOpenAudit={() => setIsAuditModalOpen(true)} />
        <AnalyticsSection />
        <TestimonialsSection />
        <WhyUsSection onOpenAudit={() => setIsAuditModalOpen(true)} />
        <PortfolioSection onOpenAudit={() => setIsAuditModalOpen(true)} />
        <BlogSection />
      </main>
      <Footer onOpenAudit={() => setIsAuditModalOpen(true)} />
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
      <WhatsAppWidget />
    </div>
  );
}
