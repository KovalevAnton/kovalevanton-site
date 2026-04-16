import Link from "next/link";
import { JOURNEY } from "@/lib/journey";
import { projects } from "@/lib/projects";

// Revalidate every hour — day counter updates without redeploy
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      {/* Hero — manually written, no AI-slop */}
      <section className="pt-20 pb-16">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Anton Kovalev
        </h1>
        <p className="mt-5 text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          Frontend engineer (10y) learning to build AI products in public.
          <br />
          RAG → Agents → Evals. 3 projects in 90 days.
        </p>
        <p className="mt-4 text-sm font-mono text-neutral-500">
          Day{" "}
          <span className="text-accent">
            {JOURNEY.currentDay.toString().padStart(2, "0")}
          </span>
          <span className="text-neutral-700"> / {JOURNEY.totalDays}</span>
          <span className="text-neutral-700"> · </span>
          Buenos Aires
          <span className="text-neutral-700"> · </span>
          <a
            href="https://twitter.com/kovalevantondev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            @kovalevantondev
          </a>
        </p>
      </section>

      {/* Why this site exists */}
      <section className="py-8 border-t border-neutral-900">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500">
          Why this site exists
        </h2>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          I spent a decade writing frontend for other people&apos;s products. I
          got good at it — and restless. The next 90 days I&apos;m going deep on
          LLM apps: retrieval, agents, evaluation. Not reading about it. Building it,
          out loud, with receipts.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          This page is the receipt. Three projects, one a month, each one harder
          than the last. When the counter hits 90, I want an offer at an AI
          startup I respect.
        </p>
      </section>

      {/* Projects */}
      <section className="py-10 border-t border-neutral-900">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs font-mono text-neutral-500 hover:text-accent transition-colors"
          >
            all →
          </Link>
        </div>
        <ul className="mt-5 space-y-5">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="group border border-neutral-900 rounded-lg p-5 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium tracking-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                    {p.tagline}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-neutral-600">
                  day {p.dayTarget}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono text-neutral-500 border border-neutral-800 rounded px-1.5 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="py-10 border-t border-neutral-900">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500">
          What I&apos;m learning
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <div>
            <p className="text-neutral-500 font-mono text-xs mb-1">month 1</p>
            <p className="text-neutral-300">Claude API, prompts, RAG, pgvector</p>
          </div>
          <div>
            <p className="text-neutral-500 font-mono text-xs mb-1">month 2</p>
            <p className="text-neutral-300">Agents, LangGraph, evals, observability</p>
          </div>
          <div>
            <p className="text-neutral-500 font-mono text-xs mb-1">month 3</p>
            <p className="text-neutral-300">Portfolio, outreach, interviews</p>
          </div>
          <div>
            <p className="text-neutral-500 font-mono text-xs mb-1">background</p>
            <p className="text-neutral-300">10y frontend — React, Next, TS</p>
          </div>
        </div>
      </section>
    </>
  );
}
