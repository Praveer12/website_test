import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', countryCode: '+1', phone: '', website: '', service: 'SEO & Web Development', budget: '$1,000 - $3,000', notes: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const handleReset = () => { setSubmitted(false); onClose(); };

  const inputStyle = { width: '100%', background: 'var(--bg-input)', border: '1px solid var(--bg-input-border)', borderRadius: 12, padding: '10px 16px', fontSize: 13, color: 'var(--text-heading)', outline: 'none', fontFamily: 'inherit' };
  const selectStyle = { ...inputStyle, appearance: 'auto' };
  const labelStyle = { display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-body)', marginBottom: 4 };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'var(--bg-modal-overlay)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, overflowY: 'auto' }} onClick={onClose}>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: 24, maxWidth: 540, width: '100%', padding: 32, position: 'relative', boxShadow: 'var(--shadow-card)', animation: 'fadeIn 0.2s ease-out', margin: '32px 0' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, padding: 8, borderRadius: 9999, background: 'var(--bg-subtle)', color: 'var(--text-muted)', cursor: 'pointer', border: 'none' }}>
          <X style={{ width: 20, height: 20 }} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
              <Sparkles style={{ width: 16, height: 16 }} /> Complimentary Audit
            </div>
            <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)', marginBottom: 8 }}>Get Your Free Audit Today</h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>Our strategists will analyze your website performance within 24 hours.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div><label style={labelStyle}>Full Name *</label><input type="text" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><label style={labelStyle}>Work Email *</label><input type="email" required placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={inputStyle} /></div>
                <div><label style={labelStyle}>Phone</label><div style={{ display: 'flex', gap: 8 }}>
                  <select value={formData.countryCode} onChange={e => setFormData({...formData, countryCode: e.target.value})} style={{ ...selectStyle, width: 90, padding: '10px 8px' }}><option value="+1">🇺🇸 +1</option><option value="+44">🇬🇧 +44</option><option value="+61">🇦🇺 +61</option><option value="+91">🇮🇳 +91</option></select>
                  <input type="tel" placeholder="(555) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ ...inputStyle, flex: 1 }} />
                </div></div>
              </div>
              <div><label style={labelStyle}>Website URL *</label><input type="text" required placeholder="https://yourcompany.com" value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})} style={inputStyle} /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><label style={labelStyle}>Service Needed</label><select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} style={selectStyle}><option>Website Development</option><option>SEO</option><option>PPC & Ads</option><option>E-commerce</option><option>School ERP</option><option>App Development</option></select></div>
                <div><label style={labelStyle}>Budget</label><select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} style={selectStyle}><option>Under $1,000</option><option>$1,000 - $3,000</option><option>$3,000 - $7,000</option><option>$7,000+</option></select></div>
              </div>
              <div><label style={labelStyle}>Notes</label><textarea rows={3} placeholder="Your growth targets..." value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} style={{ ...inputStyle, resize: 'vertical' }} /></div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px 0', fontSize: 14 }}>Submit Audit Request <Send style={{ width: 16, height: 16 }} /></button>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 11, color: 'var(--text-muted)' }}>
                <ShieldCheck style={{ width: 14, height: 14, color: 'var(--accent-cyan)' }} /> 100% Free & Confidential
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 64, height: 64, background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 style={{ width: 40, height: 40 }} />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>Audit Request Received!</h3>
            <p style={{ fontSize: 13, color: 'var(--text-body)', maxWidth: 400, lineHeight: 1.7 }}>
              Thank you, <strong style={{ color: 'var(--text-heading)' }}>{formData.name}</strong>. We'll send your audit to <strong style={{ color: 'var(--text-heading)' }}>{formData.email}</strong> within 24 hours.
            </p>
            <button onClick={handleReset} className="btn-primary" style={{ padding: '12px 32px', fontSize: 13 }}>Done & Return</button>
          </div>
        )}
      </div>
    </div>
  );
}
