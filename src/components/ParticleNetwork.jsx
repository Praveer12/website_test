import React, { useRef, useEffect } from 'react';

export default function ParticleNetwork({ style = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: 0, y: 0, isOver: false };
    let rotY = 0;
    let rotX = 0.3;
    let autoRotateSpeed = 0.003;
    let targetRotY = 0;
    let targetRotX = 0.3;

    // Generate points on a sphere
    const POINT_COUNT = 600;
    const points = [];
    // Fibonacci sphere distribution for even spacing
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < POINT_COUNT; i++) {
      const theta = Math.acos(1 - 2 * (i + 0.5) / POINT_COUNT);
      const phi = 2 * Math.PI * i / goldenRatio;
      points.push({
        x: Math.sin(theta) * Math.cos(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(theta),
      });
    }

    // Connection pairs (pre-compute for performance)
    const connections = [];
    const CONNECT_THRESHOLD = 0.38;
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < CONNECT_THRESHOLD) {
          connections.push([i, j, d]);
        }
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas._w = rect.width;
      canvas._h = rect.height;
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
      mouse.isOver = true;
    }
    function handleMouseLeave() {
      mouse.isOver = false;
    }

    function project(x, y, z) {
      // Rotate around Y axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;

      // Rotate around X axis
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      let y1 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;

      // Perspective projection
      const perspective = 2.8;
      const scale = perspective / (perspective + z2);
      const radius = Math.min(canvas._w, canvas._h) * 0.32;

      return {
        px: canvas._w / 2 + x1 * radius * scale,
        py: canvas._h / 2 + y1 * radius * scale,
        scale,
        z: z2,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, canvas._w, canvas._h);

      // Mouse-controlled rotation
      if (mouse.isOver) {
        targetRotY = (mouse.x - 0.5) * Math.PI * 0.8;
        targetRotX = (mouse.y - 0.5) * Math.PI * 0.4;
      } else {
        targetRotY += autoRotateSpeed;
      }

      // Smooth interpolation
      rotY += (targetRotY - rotY) * 0.04;
      rotX += (targetRotX - rotX) * 0.04;

      // Project all points
      const projected = points.map(p => project(p.x, p.y, p.z));

      // Draw connections (only front-facing)
      for (const [i, j] of connections) {
        const a = projected[i];
        const b = projected[j];
        // Only draw if both points are front-facing
        if (a.z > -0.2 && b.z > -0.2) {
          const alpha = Math.min(a.z + 0.5, b.z + 0.5) * 0.12;
          if (alpha <= 0) continue;
          ctx.beginPath();
          ctx.moveTo(a.px, a.py);
          ctx.lineTo(b.px, b.py);
          ctx.strokeStyle = `rgba(103, 84, 233, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      // Draw points
      for (const p of projected) {
        if (p.z < -0.3) continue; // cull back-facing
        const alpha = (p.z + 1) * 0.45;
        const dotSize = p.scale * 2;

        // Gradient dot: purple to cyan based on position
        const hue = p.z > 0 ? `103, 84, 233` : `0, 190, 200`;

        ctx.beginPath();
        ctx.arc(p.px, p.py, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hue}, ${alpha})`;
        ctx.fill();

        // Glow on larger front-facing dots
        if (p.z > 0.5 && dotSize > 1.5) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, dotSize * 3, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, dotSize * 3);
          glow.addColorStop(0, `rgba(103, 84, 233, 0.08)`);
          glow.addColorStop(1, `rgba(103, 84, 233, 0)`);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      }

      // Soft ambient glow in center
      const cg = ctx.createRadialGradient(
        canvas._w / 2, canvas._h / 2, 0,
        canvas._w / 2, canvas._h / 2, Math.min(canvas._w, canvas._h) * 0.38
      );
      cg.addColorStop(0, 'rgba(103, 84, 233, 0.03)');
      cg.addColorStop(0.5, 'rgba(0, 190, 200, 0.015)');
      cg.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cg;
      ctx.fillRect(0, 0, canvas._w, canvas._h);

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = (e.touches[0].clientX - rect.left) / rect.width;
        mouse.y = (e.touches[0].clientY - rect.top) / rect.height;
        mouse.isOver = true;
      }
    }, { passive: true });
    canvas.addEventListener('touchend', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'auto', zIndex: 1,
        ...style,
      }}
    />
  );
}
