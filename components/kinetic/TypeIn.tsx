"use client";

import { useState, useEffect } from "react";

interface TypeInProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
  onDone?: () => void;
}

export function TypeIn({
  text,
  speed = 40,
  delay = 0,
  cursor = true,
  className = "",
  onDone,
}: TypeInProps) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const tick = () => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          setDone(true);
          onDone?.();
          return;
        }
        setTimeout(tick, speed + Math.random() * 30);
      };
      tick();
    }, delay);
    return () => clearTimeout(start);
  }, [text, speed, delay, onDone]);

  return (
    <span className={className}>
      {shown}
      {cursor && !done && <span className="type-caret">▍</span>}
    </span>
  );
}
