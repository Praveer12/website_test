import React, { useRef, useEffect } from 'react';

export default function GradientBlobs({ style = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let time = 0;

    const waves = [
      { amplitude: 35, frequency: 0.008, speed: 0.015, yOffset: 0.55, color1: 'rgba(103, 84, 233, 0.08)', color2: 'rgba(103, 84, 233, 0.01)' },
      { amplitude: 25, frequency: 0.012, speed: 0.02, yOffset: 0.60, color1: 'rgba(0, 190, 200, 0.06)', color2: 'rgba(0, 190, 200, 0.01)' },
      { amplitude: 40, frequency: 0.006, speed: 0.01, yOffset: 0.48, color1: 'rgba(168, 85, 247, 0.05)', color2: 'rgba(168, 85, 247, 0.01)' },
      { amplitude: 20, frequency: 0.015, speed: 0.025, yOffset: 0.65, color1: 'rgba(236, 72, 153, 0.04)', color2: 'rgba(236, 72, 153, 0.005)' },
    ];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas._w = rect.width;
      canvas._h = rect.height;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas._w, canvas._h);
      time++;

      for (const wave of waves) {
        const baseY = canvas._h * wave.yOffset;

        ctx.beginPath();
        ctx.moveTo(0, canvas._h);

        // Draw wave curve
        for (let x = 0; x <= canvas._w; x += 3) {
          const y = baseY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3) * wave.amplitude * 0.5 +
            Math.cos(x * wave.frequency * 0.3 + time * wave.speed * 0.7) * wave.amplitude * 0.3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas._w, canvas._h);
        ctx.closePath();

        // Gradient fill
        const gradient = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, canvas._h);
        gradient.addColorStop(0, wave.color1);
        gradient.addColorStop(0.4, wave.color2);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Top floating orbs
      for (let i = 0; i < 3; i++) {
        const orbX = canvas._w * (0.2 + i * 0.3) + Math.sin(time * 0.008 + i * 2) * 60;
        const orbY = canvas._h * 0.25 + Math.cos(time * 0.006 + i * 1.5) * 40;
        const orbR = 80 + i * 20;

        const orb = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbR);
        const colors = [
          ['rgba(103, 84, 233, 0.06)', 'rgba(103, 84, 233, 0)'],
          ['rgba(0, 190, 200, 0.05)', 'rgba(0, 190, 200, 0)'],
          ['rgba(168, 85, 247, 0.05)', 'rgba(168, 85, 247, 0)'],
        ];
        orb.addColorStop(0, colors[i][0]);
        orb.addColorStop(1, colors[i][1]);

        ctx.beginPath();
        ctx.arc(orbX, orbY, orbR, 0, Math.PI * 2);
        ctx.fillStyle = orb;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
        ...style,
      }}
    />
  );
}
