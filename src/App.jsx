import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import AnalyticsSection from './components/AnalyticsSection';
import WhyUsSection from './components/WhyUsSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import AuditModal from './components/AuditModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
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

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-body)', color: 'var(--text-body)', transition: 'background 0.3s, color 0.3s' }}>
      <Header onOpenAudit={() => setIsAuditModalOpen(true)} theme={theme} setTheme={setTheme} />
      <main>
        <Hero onOpenAudit={() => setIsAuditModalOpen(true)} />
        <StatsBar />
        <AboutSection />
        <CapabilitiesSection onOpenAudit={() => setIsAuditModalOpen(true)} />
        <AnalyticsSection />
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
