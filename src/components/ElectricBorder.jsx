import { useEffect, useRef, useCallback } from 'react';

/**
 * ElectricBorder — canvas-based electric arc border.
 * Based on react-bits ElectricBorder (MIT). Extended with:
 * thickness, glow, spread, intensity, arcs, flicker.
 */
const ElectricBorder = ({
  children,
  color = '#5227FF',
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  thickness = 1,
  glow = 1,
  spread = 1,
  intensity = 1,
  arcs = 1,
  flicker = 0,
  className = '',
  style,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const timeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const pausedRef = useRef(false);

  const random = useCallback(x => (Math.sin(x * 12.9898) * 43758.5453) % 1, []);

  const noise2D = useCallback((x, y) => {
    const i = Math.floor(x), j = Math.floor(y);
    const fx = x - i, fy = y - j;
    const a = random(i + j * 57), b = random(i + 1 + j * 57);
    const c = random(i + (j + 1) * 57), d = random(i + 1 + (j + 1) * 57);
    const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }, [random]);

  const octavedNoise = useCallback((x, time, seed) => {
    let y = 0, amp = chaos, freq = 10;
    for (let i = 0; i < 10; i++) {
      y += amp * noise2D(freq * x + seed * 100, time * freq * 0.3);
      freq *= 1.6; amp *= 0.7;
    }
    return y;
  }, [noise2D, chaos]);

  const getCornerPt = useCallback((cx, cy, r, startA, arcLen, p) => ({
    x: cx + r * Math.cos(startA + p * arcLen),
    y: cy + r * Math.sin(startA + p * arcLen),
  }), []);

  const getRoundedRectPt = useCallback((t, L, T, W, H, r) => {
    const sw = W - 2 * r, sh = H - 2 * r;
    const ca = (Math.PI / 2) * r;
    const total = 2 * sw + 2 * sh + 4 * ca;
    let d = t * total, a = 0;
    if (d <= a + sw) return { x: L + r + ((d - a) / sw) * sw, y: T };
    a += sw;
    if (d <= a + ca) return getCornerPt(L + W - r, T + r, r, -Math.PI / 2, Math.PI / 2, (d - a) / ca);
    a += ca;
    if (d <= a + sh) return { x: L + W, y: T + r + ((d - a) / sh) * sh };
    a += sh;
    if (d <= a + ca) return getCornerPt(L + W - r, T + H - r, r, 0, Math.PI / 2, (d - a) / ca);
    a += ca;
    if (d <= a + sw) return { x: L + W - r - ((d - a) / sw) * sw, y: T + H };
    a += sw;
    if (d <= a + ca) return getCornerPt(L + r, T + H - r, r, Math.PI / 2, Math.PI / 2, (d - a) / ca);
    a += ca;
    if (d <= a + sh) return { x: L, y: T + H - r - ((d - a) / sh) * sh };
    a += sh;
    return getCornerPt(L + r, T + r, r, Math.PI, Math.PI / 2, (d - a) / ca);
  }, [getCornerPt]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const BORDER_OFFSET = 60;
    const DISPLACEMENT = 60 * spread;
    let lastDpr = Math.min(window.devicePixelRatio || 1, 2);
    let width, height;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = rect.width + BORDER_OFFSET * 2;
      const h = rect.height + BORDER_OFFSET * 2;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      return { w, h };
    };

    ({ w: width, h: height } = updateSize());

    // Pause off-screen canvases
    const visObs = new IntersectionObserver(
      ([entry]) => { pausedRef.current = !entry.isIntersecting; },
      { threshold: 0 }
    );
    visObs.observe(container);

    const draw = ts => {
      if (!pausedRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (dpr !== lastDpr) { lastDpr = dpr; ({ w: width, h: height } = updateSize()); }

        const dt = Math.min((ts - lastTimeRef.current) / 1000, 0.1);
        timeRef.current += dt * speed;
        lastTimeRef.current = ts;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(dpr, dpr);

        const flickAlpha = flicker > 0
          ? intensity * (1 - 0.18 * flicker * (0.5 + 0.5 * Math.sin(timeRef.current * 8.7 + 1.3)))
          : intensity;

        const L = BORDER_OFFSET, T = BORDER_OFFSET;
        const bw = width - 2 * BORDER_OFFSET, bh = height - 2 * BORDER_OFFSET;
        const r = Math.min(borderRadius, Math.min(bw, bh) / 2);
        const N = Math.floor((2 * (bw + bh) + 2 * Math.PI * r) / 2);

        const arcCount = Math.ceil(arcs);
        for (let a = 0; a < arcCount; a++) {
          const alpha = a < Math.floor(arcs) ? 1 : arcs % 1;
          if (alpha <= 0) continue;
          ctx.globalAlpha = flickAlpha * alpha;
          ctx.strokeStyle = color;
          ctx.lineWidth = thickness;
          ctx.lineCap = 'round'; ctx.lineJoin = 'round';
          ctx.beginPath();
          for (let i = 0; i <= N; i++) {
            const t = i / N;
            const pt = getRoundedRectPt(t, L, T, bw, bh, r);
            const x = pt.x + octavedNoise(t * 8, timeRef.current, a * 2) * DISPLACEMENT;
            const y = pt.y + octavedNoise(t * 8, timeRef.current, a * 2 + 1) * DISPLACEMENT;
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      } else {
        lastTimeRef.current = ts;
      }
      animRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { ({ w: width, h: height } = updateSize()); });
    ro.observe(container);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      ro.disconnect(); visObs.disconnect();
    };
  }, [color, speed, chaos, borderRadius, thickness, spread, intensity, arcs, flicker, octavedNoise, getRoundedRectPt]);

  return (
    <div
      ref={containerRef}
      className={`electric-border${className ? ` ${className}` : ''}`}
      style={{ '--electric-border-color': color, '--eb-glow': glow, borderRadius, ...style }}
    >
      <div className="eb-canvas-container">
        <canvas ref={canvasRef} className="eb-canvas" />
      </div>
      <div className="eb-layers">
        <div className="eb-glow-1" />
        <div className="eb-glow-2" />
        <div className="eb-background-glow" />
      </div>
      <div className="eb-content">{children}</div>
    </div>
  );
};

export default ElectricBorder;
