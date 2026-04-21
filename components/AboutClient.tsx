"use client";

import { Scramble } from "@/components/kinetic/Scramble";

const TIMELINE: [string, string][] = [
  ["2026 — now", "AI engineering pivot (90 days, public)"],
  ["2023 — 2026", "Senior frontend, design-tools startup (NYC, remote)"],
  ["2020 — 2023", "Frontend lead, fintech (London, remote)"],
  ["2017 — 2020", "Frontend, two B2B SaaS startups (Moscow)"],
  ["2015 — 2017", "First real job, jQuery-era frontend, learned by shipping"],
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
            Ten years in. React since it was a curiosity. Next.js since before
            app router. I have shipped dashboards for fintechs, editors for
            design tools, and more than a few onboarding flows I am still proud
            of. I also know what burnout tastes like and I have opinions about
            design systems.
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
          <div className="body-mono">building /chat-with-docs</div>
          <div className="body-mono dim">reading /anthropic-cookbook</div>
          <div className="body-mono dim">listening /latent-space-pod</div>

          <div className="label mt">looking for</div>
          <div className="body-mono">AI startup, series A–C</div>
          <div className="body-mono">$250k+ TC</div>
          <div className="body-mono">remote or BA / SF / NYC</div>
          <div className="body-mono">senior / staff / founding eng</div>

          <div className="label mt">not looking for</div>
          <div className="body-mono dim">big co. ML research roles</div>
          <div className="body-mono dim">
            &quot;AI-enhanced&quot; crud apps
          </div>
          <div className="body-mono dim">agencies</div>

          <div className="label mt">reach me</div>
          <a href="mailto:kooovaaal@gmail.com" className="body-mono link">
            kooovaaal@gmail.com
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
            href="https://github.com/kovalevanton"
            target="_blank"
            rel="noreferrer"
            className="body-mono link"
          >
            github.com/kovalevanton
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
