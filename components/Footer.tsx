import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-neutral-500">
        <div className="flex items-center gap-5">
          <a
            href="https://twitter.com/kovalevantondev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            twitter
          </a>
          <a
            href="https://github.com/kovalevanton"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            github
          </a>
          <a
            href="mailto:kooovaaal@gmail.com"
            className="hover:text-accent transition-colors"
          >
            email
          </a>
        </div>
        <Link
          href="/arkanoid"
          className="font-mono text-xs text-neutral-700 hover:text-accent transition-colors"
          aria-label="arkanoid easter egg"
        >
          ./arkanoid
        </Link>
      </div>
    </footer>
  );
}
