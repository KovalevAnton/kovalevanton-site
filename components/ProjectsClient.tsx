"use client";

import { useState } from "react";
import { Scramble } from "@/components/kinetic/Scramble";
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

const PROJECT_DETAIL: Record<
  string,
  {
    subtitle: string;
    why: string;
    deliverables: string[];
    log: [string, string][];
    progress: number;
  }
> = {
  "chat-with-docs": {
    subtitle: "Month 1 · RAG fundamentals, shipped by day 30",
    why: "RAG is the first thing any AI engineer ships. Doing it well — chunking, retrieval eval, reranking — separates hobby projects from production. This is the proof.",
    deliverables: [
      "Upload any PDF, ask questions, get cited answers",
      "Eval set of 50 Q/A pairs; measured retrieval recall@5 and answer faithfulness",
      "Write-up comparing naive vs. hybrid vs. reranked retrieval",
    ],
    log: [
      ["d04", "repo scaffold, Claude + pgvector talking to each other"],
      ["d06", "first retrieval working. cited answers look sane."],
      ["d07", "full RAG pipeline. 8/8 eval."],
    ],
    progress: 0.28,
  },
  "research-agent": {
    subtitle: "Month 2 · Agents, shipped by day 60",
    why: "Anyone can call a model in a loop. Building an agent that recovers from bad tool output, stays on task across 20+ steps, and produces something a human would send — that is the bar.",
    deliverables: [
      "Takes a research question, returns a 1-page brief with sources",
      "LangGraph DAG with plan → search → read → synthesize → critique",
      "Langfuse traces; eval set of 25 questions scored for accuracy",
    ],
    log: [["--", "queued — starts day 31"]],
    progress: 0,
  },
  "ai-code-review": {
    subtitle: "Month 3 · The capstone, shipped by day 90",
    why: "Code review is where judgement matters most. A system that reviews PRs the way a senior engineer would — catches real issues, ignores style noise, disagrees politely — is a demo I want to open every interview with.",
    deliverables: [
      "GitHub Action: runs on every PR, posts inline comments",
      "Tuned on 200 real reviews from open-source projects",
      "Self-evaluates: does its comment actually improve the code?",
    ],
    log: [["--", "queued — starts day 61"]],
    progress: 0,
  },
};

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [active, setActive] = useState(projects[0]?.slug ?? "chat-with-docs");
  const p = projects.find((x) => x.slug === active) ?? projects[0];
  const d = PROJECT_DETAIL[active] ?? PROJECT_DETAIL["chat-with-docs"];
  const s = STATUS_STYLE[p.status] ?? STATUS_STYLE.planned;

  return (
    <>
      <div className="section__head">
        <span className="section__bullet">//</span>
        <Scramble text="projects / detail" duration={700} />
      </div>

      <div className="proj-switcher">
        {projects.map((pp, i) => {
          const ss = STATUS_STYLE[pp.status] ?? STATUS_STYLE.planned;
          return (
            <button
              key={pp.slug}
              onClick={() => setActive(pp.slug)}
              className={`proj-switcher__btn ${active === pp.slug ? "is-active" : ""}`}
            >
              <span className="proj-switcher__idx">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{pp.slug}</span>
              <span style={{ color: ss.color, fontSize: 10 }}>
                [{ss.label}]
              </span>
            </button>
          );
        })}
      </div>

      <section className="proj-detail">
        <div className="proj-detail__head">
          <h2 className="proj-detail__title">{p.slug}</h2>
          <div className="proj-detail__sub">{d.subtitle}</div>
        </div>

        <div className="proj-detail__meta">
          <span
            className="proj-row__status"
            style={{ color: s.color, background: s.bg, borderColor: s.color }}
          >
            [{s.label}]
          </span>
          <span className="dim">
            eta day&nbsp;{String(p.dayTarget).padStart(2, "0")}
          </span>
          <span className="dim">·</span>
          <span className="dim">repo</span>
          <span className="mono">{p.repo ?? "—"}</span>
        </div>

        <div className="proj-detail__grid">
          <div>
            <div className="label">why this project</div>
            <p className="body">{d.why}</p>

            <div className="label mt">deliverables</div>
            <ul className="checklist">
              {d.deliverables.map((t, i) => (
                <li key={i}>
                  <span className="checkbox">
                    [{p.status === "shipped" ? "x" : " "}]
                  </span>{" "}
                  {t}
                </li>
              ))}
            </ul>

            <div className="label mt">stack</div>
            <div className="stack-row">
              {p.stack.map((t) => (
                <span key={t} className="stack-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="label">build log</div>
            <div className="build-log">
              {d.log.map(([day, msg], i) => (
                <div key={i} className="build-log__row">
                  <span className="build-log__day">{day}</span>
                  <span className="build-log__msg">{msg}</span>
                </div>
              ))}
              <div className="build-log__row build-log__row--pending">
                <span className="build-log__day">···</span>
                <span className="build-log__msg dim">
                  awaiting next commit
                </span>
                <span className="blink">▍</span>
              </div>
            </div>

            <div className="label mt">progress</div>
            <div className="proj-detail__progress">
              <span className="bar-filled">
                {"█".repeat(Math.round(d.progress * 30))}
              </span>
              <span className="bar-empty">
                {"░".repeat(30 - Math.round(d.progress * 30))}
              </span>
              <span className="dim">{Math.round(d.progress * 100)}%</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
