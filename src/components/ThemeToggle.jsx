import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width: 44, height: 44, borderRadius: 12,
        background: 'var(--toggle-bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.3s ease', border: '1px solid var(--border-main)',
        cursor: 'pointer', position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-main)'}
    >
      <div style={{
        position: 'absolute', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isDark ? 'translateY(0) rotate(0)' : 'translateY(-40px) rotate(90deg)',
        opacity: isDark ? 1 : 0,
      }}>
        <Sun style={{ width: 20, height: 20, color: '#fbbf24' }} />
      </div>
      <div style={{
        position: 'absolute', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isDark ? 'translateY(40px) rotate(-90deg)' : 'translateY(0) rotate(0)',
        opacity: isDark ? 0 : 1,
      }}>
        <Moon style={{ width: 20, height: 20, color: 'var(--toggle-icon)' }} />
      </div>
    </button>
  );
}
