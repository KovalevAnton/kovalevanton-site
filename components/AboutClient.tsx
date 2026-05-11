"use client";

import { Scramble } from "@/components/kinetic/Scramble";

const TIMELINE: [string, string][] = [
  ["2026 — now", "AI engineering pivot (90 days, public)"],
  ["2024 — now", "Senior frontend @ Dats.Team (Nicosia, remote)"],
  ["2022 — 2024", "Senior / lead frontend, Moscow startups (Formind, Etalon)"],
  ["2019 — 2022", "Lead frontend @ Samolet — Moscow, prop-tech"],
  ["2016 — 2019", "Frontend, Nizhny Novgorod (Olprime, Yaat, The Best App)"],
];

export function AboutClient() {
  return (
    <>
      <div className="section__head">
        <span className="section__bullet">//</span>
        <Scramble text="about / cat ~/.bio" duration={700} />
      </div>

      <div className="about-grid">
        <div>
          <p className="about__lede">
            I am Anton. I write frontend for a living and I am trying to change
            that.
          </p>
          <p className="body">
            Nine years in. React since hooks were a proposal. Next.js across
            half a dozen apps — pages router, app router, the awkward in-between.
            I have shipped construction-tech web + mobile, ed-tech platforms,
            internal kanban boards, design-system UI kits, i18n for fifty
            countries, and a React Native MVP I am still oddly fond of. I lead
            more than I IC these days, but the IC reflex never went away.
          </p>
          <p className="body" style={{ marginTop: 16 }}>
            The pivot is not a panic move. The best frontend engineers I know are
            all quietly learning LLMs on the side. I want to do it loudly, on a
            clock, with something to show at the end.
          </p>
          <p className="body" style={{ marginTop: 16 }}>
            I live in Buenos Aires. I speak Russian, English, and enough Spanish
            to argue about coffee. I run in the morning, read in the afternoon,
            ship at night.
          </p>
        </div>

        <aside className="about__side">
          <div className="label">currently</div>
          <div className="body-mono">
            shipped /chat-with-docs →{" "}
            <a
              href="https://brocode.kovalevanton.xyz"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              brocode.kovalevanton.xyz
            </a>
          </div>
          <div className="body-mono">building /research-agent</div>
          <div className="body-mono dim">
            side: open-source llm-limits-tracker (npm)
          </div>
          <div className="body-mono dim">
            day job: senior frontend @ Dats.Team
          </div>

          <div className="label mt">looking for</div>
          <div className="body-mono">AI startup, real LLM products</div>
          <div className="body-mono">remote, BA-timezone friendly</div>
          <div className="body-mono">senior / staff / founding eng</div>
          <div className="body-mono">problem worth eighty hours a week</div>

          <div className="label mt">not looking for</div>
          <div className="body-mono dim">big co. ML research roles</div>
          <div className="body-mono dim">
            &quot;AI-enhanced&quot; crud apps
          </div>
          <div className="body-mono dim">agencies</div>

          <div className="label mt">reach me</div>
          <a
            href="mailto:kovalevantondev@gmail.com"
            className="body-mono link"
          >
            kovalevantondev@gmail.com
          </a>
          <a
            href="https://twitter.com/kovalevantondev"
            target="_blank"
            rel="noreferrer"
            className="body-mono link"
          >
            @kovalevantondev
          </a>
          <a
            href="https://github.com/KovalevAnton"
            target="_blank"
            rel="noreferrer"
            className="body-mono link"
          >
            github.com/KovalevAnton
          </a>
          <a
            href="https://linkedin.com/in/kovalevantondev"
            target="_blank"
            rel="noreferrer"
            className="body-mono link"
          >
            linkedin.com/in/kovalevantondev
          </a>
        </aside>
      </div>

      <section className="timeline">
        <div className="label">timeline</div>
        <div className="timeline__list">
          {TIMELINE.map(([when, what]) => (
            <div key={when} className="timeline__row">
              <span className="timeline__when">{when}</span>
              <span className="timeline__what">{what}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
