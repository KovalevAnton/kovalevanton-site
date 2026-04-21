"use client";

import { useState, useEffect } from "react";

interface CounterScrambleProps {
  value: number;
  width?: number;
  duration?: number;
}

export function CounterScramble({
  value,
  width = 2,
  duration = 1200,
}: CounterScrambleProps) {
  const [out, setOut] = useState("0".repeat(width));

  useEffect(() => {
    const target = String(value).padStart(width, "0");
    const start = performance.now();
    const reveals = Array.from(
      { length: width },
      (_, i) => start + (i / width) * duration + Math.random() * 200
    );
    let raf: number;
    const loop = (t: number) => {
      let s = "";
      let still = false;
      for (let i = 0; i < width; i++) {
        if (t >= reveals[i]) s += target[i];
        else {
          still = true;
          s += String(Math.floor(Math.random() * 10));
        }
      }
      setOut(s);
      if (still) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [value, width, duration]);

  return <span>{out}</span>;
}
