import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const phone = '918447135270';
  const presets = ['Hi! I want a website development quote.', 'Hi! I need SEO services.', 'I want a free digital audit.'];

  const handleSend = (text) => {
    const msg = encodeURIComponent(text || customMsg || 'Hi AtrangiHome! I would like to inquire about your services.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 40 }}>
      {isOpen && (
        <div style={{ marginBottom: 16, background: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: 16, width: 320, boxShadow: 'var(--shadow-card)', padding: 16, animation: 'fadeIn 0.2s ease-out', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid var(--border-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 12 }}>AH</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-heading)' }}>AtrangiHome</div>
                <div style={{ fontSize: 10, color: '#25d366', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#25d366', animation: 'pulseSubtle 2s infinite' }} /> Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: 'var(--text-muted)', cursor: 'pointer', border: 'none', background: 'none', padding: 4 }}><X style={{ width: 16, height: 16 }} /></button>
          </div>
          <div style={{ padding: 12, background: 'var(--bg-subtle)', borderRadius: 12, fontSize: 13, color: 'var(--text-body)', lineHeight: 1.6 }}>👋 Hello! How can we help grow your business?</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Quick Messages:</div>
            {presets.map((msg, i) => (
              <button key={i} onClick={() => handleSend(msg)} style={{ width: '100%', textAlign: 'left', fontSize: 12, padding: 8, borderRadius: 8, background: 'var(--bg-subtle)', color: 'var(--text-body)', border: '1px solid var(--border-main)', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-subtle-hover)'; e.currentTarget.style.color = 'var(--text-heading)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--text-body)'; }}>{msg}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input type="text" placeholder="Type message..." value={customMsg} onChange={e => setCustomMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()}
              style={{ flex: 1, background: 'var(--bg-input)', border: '1px solid var(--bg-input-border)', borderRadius: 12, padding: '6px 12px', fontSize: 12, color: 'var(--text-heading)', outline: 'none' }} />
            <button onClick={() => handleSend()} style={{ background: '#25d366', color: '#fff', padding: 8, borderRadius: 12, cursor: 'pointer', border: 'none' }}><Send style={{ width: 16, height: 16 }} /></button>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} style={{ width: 56, height: 56, borderRadius: '50%', background: '#25d366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(37,211,102,0.35)', transition: 'all 0.3s', cursor: 'pointer', border: 'none', position: 'relative' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} aria-label="WhatsApp Chat">
        <span style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'rgba(37,211,102,0.3)', animation: 'pulseSubtle 2s infinite', pointerEvents: 'none' }} />
        {isOpen ? <X style={{ width: 24, height: 24 }} /> : <MessageSquare style={{ width: 24, height: 24 }} />}
      </button>
    </div>
  );
}
