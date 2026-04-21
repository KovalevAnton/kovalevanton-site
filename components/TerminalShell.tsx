"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MatrixRain } from "./MatrixRain";
import { JOURNEY } from "@/lib/journey";

const TABS = [
  { id: "/", label: "~/home", file: "index.tsx" },
  { id: "/projects", label: "~/projects", file: "projects.tsx" },
  { id: "/writing", label: "~/writing", file: "writing.tsx" },
  { id: "/about", label: "~/about", file: "about.tsx" },
];

type RainMode = "on" | "paused" | "off";

const RAIN_LABEL: Record<RainMode, string> = {
  on: "rain: on",
  paused: "rain: paused",
  off: "rain: off",
};

const NEXT_MODE: Record<RainMode, RainMode> = {
  on: "paused",
  paused: "off",
  off: "on",
};

export function TerminalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [rain, setRain] = useState<RainMode>("on");

  useEffect(() => {
    const saved = localStorage.getItem("rain-mode") as RainMode | null;
    if (saved === "on" || saved === "paused" || saved === "off") {
      setRain(saved);
    }
  }, []);

  const cycleRain = () => {
    setRain((cur) => {
      const next = NEXT_MODE[cur];
      localStorage.setItem("rain-mode", next);
      return next;
    });
  };

  const isActive = (id: string) => {
    if (id === "/") return pathname === "/";
    return pathname.startsWith(id);
  };

  const day = JOURNEY.currentDay;
  const total = JOURNEY.totalDays;

  return (
    <div className="stage">
      <MatrixRain
        intensity={rain === "off" ? 0 : 0.75}
        hue={142}
        paused={rain === "paused"}
      />
      <div className="scanlines" />
      <div className="noise" />
      <div className="vignette" />

      <main className="term boot-flicker">
        <header className="term__titlebar">
          <div className="term__dots">
            <span className="term__dot term__dot--r" />
            <span className="term__dot term__dot--y" />
            <span className="term__dot term__dot--g" />
          </div>
          <div className="term__title">
            <span className="dim">zsh · </span>
            <span className="accent">anton@buenos-aires</span>
            <span className="dim">:</span>
            <span>~/kovalev.dev</span>
            <span className="dim"> — 120×40</span>
          </div>
          <div className="term__status">
            <span className="live-dot" />
            <span>live</span>
            <span className="dim">·</span>
            <span>
              day {String(day).padStart(2, "0")}/{total}
            </span>
            <span className="dim">·</span>
            <button
              type="button"
              onClick={cycleRain}
              className={`rain-toggle rain-toggle--${rain}`}
              aria-label={`toggle matrix rain (current: ${RAIN_LABEL[rain]})`}
              title="click to toggle: on → paused → off"
            >
              {RAIN_LABEL[rain]}
            </button>
          </div>
        </header>

        <nav className="tabs" role="tablist">
          {TABS.map((t) => (
            <Link
              key={t.id}
              href={t.id}
              role="tab"
              aria-selected={isActive(t.id)}
              className={`tabs__tab ${isActive(t.id) ? "is-active" : ""}`}
            >
              {t.label}
              <span className="dim" style={{ marginLeft: 6 }}>
                {t.file}
              </span>
            </Link>
          ))}
          <span className="tabs__spacer" />
          <span className="tabs__trail">+ </span>
        </nav>

        <div className="tab-body">{children}</div>
      </main>
    </div>
  );
}
