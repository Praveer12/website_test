import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementHover = () => {
      const hoverTargets = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .glass-card, .hero-bento__item');
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Delayed init for hover targets (after DOM renders)
    const timer = setTimeout(handleElementHover, 1000);
    // Re-bind on mutations
    const observer = new MutationObserver(() => {
      setTimeout(handleElementHover, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Smooth follower animation
    const animate = () => {
      const speed = 0.12;
      circle.current.x += (mouse.current.x - circle.current.x) * speed;
      circle.current.y += (mouse.current.y - circle.current.y) * speed;
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circle.current.x}px, ${circle.current.y}px) scale(${isHovering ? 1.8 : 1})`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animRef.current);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isHovering, isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Small dot — follows cursor exactly */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: -4, left: -4, width: 8, height: 8,
          background: 'var(--primary)', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference',
          transition: 'opacity 0.3s, width 0.3s, height 0.3s',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform',
        }}
      />
      {/* Larger follower circle — lags behind with spring */}
      <div
        ref={circleRef}
        style={{
          position: 'fixed', top: -20, left: -20, width: 40, height: 40,
          border: `1.5px solid ${isHovering ? 'var(--primary)' : 'var(--text-muted)'}`,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          transition: 'opacity 0.3s, border-color 0.3s, width 0.3s, height 0.3s',
          opacity: isVisible ? 0.5 : 0,
          willChange: 'transform',
        }}
      />
    </>
  );
}
