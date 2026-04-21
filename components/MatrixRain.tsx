"use client";

import { useEffect, useRef } from "react";


interface MatrixRainProps {
  intensity?: number;
  hue?: number;
  paused?: boolean;
}

export function MatrixRain({
  intensity = 0.75,
  hue = 142,
  paused = false,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      cols = 0;
    let drops: { y: number; speed: number; trail: number }[] = [];
    const fontSize = 18;
    const colStep = 14;
    const glyphs =
      "ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789:・.=*+-<>¦｜╌";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / colStep);
      drops = new Array(cols).fill(0).map(() => ({
        y: Math.random() * -50,
        speed: 0.1 + Math.random() * 0.28,
        trail: 14 + Math.floor(Math.random() * 26),
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const draw = (t: number) => {
      const dt = Math.min((t - last) / 16.67, 3);
      last = t;

      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = `rgba(6, 10, 8, ${0.055 + (1 - intensity) * 0.04})`;
      ctx.fillRect(0, 0, w, h);

      ctx.font = `600 ${fontSize}px ui-monospace, "JetBrains Mono", monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < cols; i++) {
        const d = drops[i];
        const x = i * colStep;
        const headY = d.y * fontSize;
        if (headY > -fontSize && headY < h) {
          const ch = glyphs[(Math.floor(t / 110) + i) % glyphs.length];
          ctx.shadowColor = `oklch(0.85 0.20 ${hue} / ${0.9 * intensity})`;
          ctx.shadowBlur = 8;
          ctx.fillStyle = `oklch(0.98 0.12 ${hue} / ${Math.min(1, 1.1 * intensity)})`;
          ctx.fillText(ch, x, headY);
          ctx.shadowBlur = 0;
        }
        for (let k = 1; k < d.trail; k++) {
          const y = headY - k * fontSize;
          if (y < -fontSize || y > h) continue;
          const alpha = (1 - k / d.trail) * 0.95 * intensity;
          const ch = glyphs[(Math.floor(t / 90) + i * 7 + k) % glyphs.length];
          const L = 0.72 - (k / d.trail) * 0.25;
          const C = 0.22 - (k / d.trail) * 0.06;
          ctx.fillStyle = `oklch(${L} ${C} ${hue} / ${alpha})`;
          ctx.fillText(ch, x, y);
        }
        d.y += d.speed * dt;
        if (headY > h + d.trail * fontSize) {
          d.y = -d.trail - Math.random() * 30;
          d.speed = 0.1 + Math.random() * 0.28;
          d.trail = 14 + Math.floor(Math.random() * 26);
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [intensity, hue]);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: intensity === 0 ? 0 : 1,
        transition: "opacity 300ms",
      }}
    />
  );
}
