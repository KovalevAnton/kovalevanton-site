"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#ABCDEF0123456789";

interface ScrambleProps {
  text: string;
  duration?: number;
  trigger?: "mount" | "scroll";
  className?: string;
}

export function Scramble({
  text,
  duration = 900,
  trigger = "mount",
  className = "",
}: ScrambleProps) {
  const [out, setOut] = useState(() => (trigger === "mount" ? "" : text));
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);

  const run = useCallback(() => {
    const start = performance.now();
    const len = text.length;
    const revealMap = Array.from(
      { length: len },
      () => start + Math.random() * duration
    );
    const loop = (t: number) => {
      let s = "";
      let stillGoing = false;
      for (let i = 0; i < len; i++) {
        if (t >= revealMap[i]) s += text[i];
        else {
          stillGoing = true;
          const c = text[i];
          if (c === " ") s += " ";
          else
            s +=
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setOut(s);
      if (stillGoing) rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }, [text, duration]);

  useEffect(() => {
    if (trigger === "mount") {
      run();
      return () => cancelAnimationFrame(rafRef.current);
    }
    if (trigger === "scroll") {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              run();
              obs.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }
  }, [run, trigger]);

  return (
    <span ref={ref} className={className}>
      {out || "\u00A0"}
    </span>
  );
}
