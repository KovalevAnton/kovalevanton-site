import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/70 border-b border-neutral-900">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight hover:text-accent transition-colors"
        >
          kovalevanton
        </Link>
        <div className="flex items-center gap-6 text-sm text-neutral-400">
          <Link href="/projects" className="hover:text-accent transition-colors">
            projects
          </Link>
          <Link href="/writing" className="hover:text-accent transition-colors">
            writing
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}
