"use client";

import Link from "next/link";
import { TypeIn } from "@/components/kinetic/TypeIn";
import { Scramble } from "@/components/kinetic/Scramble";
import { CounterScramble } from "@/components/kinetic/CounterScramble";
import type { Project } from "@/lib/projects";

const STATUS_STYLE: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  building: {
    label: "building",
    color: "var(--accent)",
    bg: "rgba(0,255,65,0.1)",
  },
  planned: {
    label: "queued",
    color: "#7a7a7a",
    bg: "rgba(255,255,255,0.04)",
  },
  shipped: {
    label: "shipped",
    color: "var(--accent)",
    bg: "rgba(0,255,65,0.14)",
  },
};

function DayCounter({ day, total }: { day: number; total: number }) {
  const pct = day / total;
  const filled = Math.round(pct * 40);
  return (
    <div className="day-counter">
      <div className="day-counter__numbers">
        <span className="day-counter__label">DAY</span>
        <span className="day-counter__big">
          <CounterScramble value={day} width={2} duration={1400} />
        </span>
        <span className="day-counter__slash">/</span>
        <span className="day-counter__total">
          {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="day-counter__bar">
        <span className="day-counter__bar-filled">{"█".repeat(filled)}</span>
        <span className="day-counter__bar-empty">
          {"░".repeat(40 - filled)}
        </span>
        <span className="day-counter__pct">{Math.round(pct * 100)}%</span>
      </div>
    </div>
  );
}

function ProjectRow({ p, idx }: { p: Project; idx: string }) {
  const s = STATUS_STYLE[p.status] ?? STATUS_STYLE.planned;
  return (
    <Link href="/projects" className="proj-row">
      <span className="proj-row__idx">{idx}</span>
      <span className="proj-row__perms">drwxr-xr-x</span>
      <span className="proj-row__name">{p.slug}</span>
      <span className="proj-row__day">
        day&nbsp;{String(p.dayTarget).padStart(2, "0")}
      </span>
      <span
        className="proj-row__status"
        style={{ color: s.color, background: s.bg, borderColor: s.color }}
      >
        [{s.label}]
      </span>
      <span className="proj-row__tagline">{p.tagline}</span>
      <span className="proj-row__stack">
        {p.stack.map((t) => (
          <span key={t} className="stack-tag">
            {t}
          </span>
        ))}
      </span>
    </Link>
  );
}

interface HomeClientProps {
  day: number;
  total: number;
  projects: Project[];
}

export function HomeClient({ day, total, projects }: HomeClientProps) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__promptline">
          <span className="prompt-dim">anton@buenos-aires</span>
          <span className="prompt-punc">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-punc">$</span>
          <span className="prompt-cmd">
            <TypeIn text="whoami --verbose" speed={50} delay={150} />
          </span>
        </div>
        <h1 className="hero__name">
          <Scramble text="ANTON KOVALEV" duration={1100} />
        </h1>
        <p className="hero__tagline">
          Frontend engineer (10y) learning to build AI products in public.
          <br />
          <span className="dim">RAG → Agents → Evals.</span> Three projects in
          ninety days.
        </p>
        <div className="hero__meta">
          <span className="meta-chunk">
            <span className="dim">loc</span>
            <span className="sep">=</span>
            Buenos Aires
          </span>
          <span className="meta-sep">·</span>
          <span className="meta-chunk">
            <span className="dim">twitter</span>
            <span className="sep">=</span>
            <a
              href="https://twitter.com/kovalevantondev"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              @kovalevantondev
            </a>
          </span>
          <span className="meta-sep">·</span>
          <span className="meta-chunk">
            <span className="dim">email</span>
            <span className="sep">=</span>
            <a href="mailto:kovalevantondev@gmail.com" className="link">
              kovalevantondev@gmail.com
            </a>
          </span>
        </div>
      </section>

      {/* DAY COUNTER */}
      <section className="section">
        <div className="section__head">
          <span className="section__bullet">//</span>
          <Scramble
            text="journey / decrypting"
            duration={800}
            trigger="scroll"
          />
        </div>
        <DayCounter day={day} total={total} />
        <div className="day-counter__legend">
          <span>started 2026-04-14</span>
          <span className="dim">→</span>
          <span>target 2026-07-13</span>
          <span className="dim">·</span>
          <span>T-{total - day} days to offer</span>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section">
        <div className="section__head">
          <span className="section__bullet">//</span>
          <Scramble
            text="why this site exists"
            duration={800}
            trigger="scroll"
          />
        </div>
        <div className="manifesto">
          <p>
            I spent a decade writing frontend for other people&apos;s products.
            I got good at it — and restless. The next ninety days I&apos;m going
            deep on LLM apps: retrieval, agents, evaluation. Not reading about
            it. <em>Building</em> it, out loud, with receipts.
          </p>
          <p>
            This page is the receipt. Three projects, one a month, each harder
            than the last. When the counter hits <span className="hl">90</span>,
            I want an offer at an AI startup I respect.
          </p>
          <p className="quiet">
            No affiliate links. No course to sell. No &quot;10x your
            output&quot; thread. Just the work, shipped and timestamped.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="section__head">
          <span className="section__bullet">//</span>
          <Scramble text="projects / ls -la" duration={800} trigger="scroll" />
          <Link href="/projects" className="section__more">
            open /projects →
          </Link>
        </div>
        <div className="proj-table">
          <div className="proj-table__header">
            <span>idx</span>
            <span>perms</span>
            <span>name</span>
            <span>eta</span>
            <span>status</span>
            <span>description</span>
          </div>
          {projects.map((p, i) => (
            <ProjectRow
              key={p.slug}
              p={p}
              idx={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <div className="section__head">
          <span className="section__bullet">//</span>
          <Scramble
            text="learning / cat ~/syllabus.md"
            duration={800}
            trigger="scroll"
          />
        </div>
        <div className="skills-grid">
          <div className="skills-cell">
            <div className="skills-cell__label">
              month&nbsp;1 <span className="dim">· apr</span>
            </div>
            <div className="skills-cell__body">
              Claude API, prompting, RAG, embeddings, reranking, query
              expansion
            </div>
            <div className="skills-cell__bar skills-cell__bar--full">
              <span style={{ width: "100%" }} />
            </div>
          </div>
          <div className="skills-cell">
            <div className="skills-cell__label">
              month&nbsp;2 <span className="dim">· may</span>
            </div>
            <div className="skills-cell__body">
              Agents, tool use, multi-turn evals, traces
            </div>
            <div className="skills-cell__bar">
              <span style={{ width: "15%" }} />
            </div>
          </div>
          <div className="skills-cell">
            <div className="skills-cell__label">
              month&nbsp;3 <span className="dim">· jun</span>
            </div>
            <div className="skills-cell__body">
              Polish, portfolio, outreach, on-site interviews
            </div>
            <div className="skills-cell__bar">
              <span style={{ width: "0%" }} />
            </div>
          </div>
          <div className="skills-cell">
            <div className="skills-cell__label">
              background <span className="dim">· 10y</span>
            </div>
            <div className="skills-cell__body">
              React, Next.js, TypeScript, design systems, perf, DX
            </div>
            <div className="skills-cell__bar skills-cell__bar--full">
              <span style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Easter egg footer */}
      <footer className="tab-footer">
        <span className="dim">// </span>
        <a
          href="https://arcanoid.kovalevanton.xyz"
          target="_blank"
          rel="noreferrer"
          className="rabbit"
        >
          follow_the_white_rabbit()
        </a>
      </footer>
    </>
  );
}
