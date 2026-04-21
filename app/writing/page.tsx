import Link from "next/link";
import { posts } from "@/lib/posts";

export const revalidate = 3600;

export const metadata = {
  title: "Writing — Anton Kovalev",
};

export default function WritingPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Writing
      </h1>
      <p className="mt-3 text-neutral-400 max-w-2xl">
        Short, honest notes from the 90-day run. Not listicles. Not threads
        begging for engagement.
      </p>

      <ul className="mt-10 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="group block border border-neutral-900 rounded-lg p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-medium tracking-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-neutral-600">
                  day {post.day.toString().padStart(2, "0")}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
