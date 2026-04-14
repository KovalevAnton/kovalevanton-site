import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Anton Kovalev",
};

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Projects
      </h1>
      <p className="mt-3 text-neutral-400 max-w-2xl">
        Three projects in 90 days. Each one ships on a deadline, public repo,
        public writeup. No drafts, no vaults.
      </p>

      <ul className="mt-10 space-y-6">
        {projects.map((p) => (
          <li
            key={p.slug}
            className="border border-neutral-900 rounded-lg p-6 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-medium tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-2 text-neutral-400 leading-relaxed">
                  {p.tagline}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs text-neutral-600">
                day {p.dayTarget}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono text-neutral-500 border border-neutral-800 rounded px-1.5 py-0.5"
                >
                  {s}
                </span>
              ))}
              <span className="text-[11px] font-mono text-accent border border-accent/40 rounded px-1.5 py-0.5">
                {p.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
