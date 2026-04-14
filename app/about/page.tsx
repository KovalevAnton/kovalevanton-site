export const metadata = {
  title: "About — Anton Kovalev",
};

export default function AboutPage() {
  return (
    <section className="py-16 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        About
      </h1>

      <div className="mt-8 space-y-5 text-neutral-300 leading-relaxed">
        <p>
          I&apos;m Anton. I&apos;ve been writing frontend for 10 years —
          React, Next, TypeScript, the whole thing. I live in Buenos Aires,
          work remote, and speak English and Russian.
        </p>
        <p>
          I&apos;m currently pivoting into AI engineering. Not because it&apos;s
          the hype cycle — because the work is actually new, the tools are raw,
          and the best products shipping right now are built by people who care
          about both the model and the interface. That&apos;s the gap I want to
          live in.
        </p>
        <p>
          I&apos;m building three projects in 90 days, out loud. If you&apos;re
          hiring at a Series A–C AI startup and you want a senior engineer who
          already knows how to ship UI and is serious about learning the rest,
          text me. No calls — we&apos;re all busy. Just send a message.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-neutral-900">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500">
          Contact
        </h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <span className="text-neutral-600 font-mono">email</span>{" "}
            <a
              href="mailto:kooovaaal@gmail.com"
              className="text-neutral-300 hover:text-accent transition-colors"
            >
              kooovaaal@gmail.com
            </a>
          </li>
          <li>
            <span className="text-neutral-600 font-mono">twitter</span>{" "}
            <a
              href="https://twitter.com/kovalevantondev"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 hover:text-accent transition-colors"
            >
              @kovalevantondev
            </a>
          </li>
          <li>
            <span className="text-neutral-600 font-mono">github</span>{" "}
            <a
              href="https://github.com/kovalevanton"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 hover:text-accent transition-colors"
            >
              kovalevanton
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
