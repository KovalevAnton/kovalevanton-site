"use client";

import Link from "next/link";
import { Scramble } from "@/components/kinetic/Scramble";
import type { Post } from "@/lib/posts";

interface WritingClientProps {
  posts: Post[];
}

export function WritingClient({ posts }: WritingClientProps) {
  return (
    <>
      <div className="section__head">
        <span className="section__bullet">//</span>
        <Scramble
          text="writing / tail -n 20 journal.log"
          duration={700}
        />
      </div>

      <p className="writing__intro">
        Every Sunday I publish a recap of the week — what I built, what broke,
        what I learned that a tutorial would not have taught me. Short posts in
        between.
      </p>

      <div className="post-list">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/writing/${p.slug}`}
            className="post-row"
          >
            <div className="post-row__meta">
              <span className="post-row__day">
                d{String(p.day).padStart(2, "0")}
              </span>
              <span>{p.date}</span>
              <span className="post-row__dot">·</span>
              <span>
                {Math.ceil(p.body.split(/\s+/).length / 200)} min
              </span>
            </div>
            <h3 className="post-row__title">{p.title}</h3>
            <p className="post-row__excerpt">{p.summary}</p>
            <div className="post-row__tags">
              <span className="post-tag">#recap</span>
              <span className="post-row__read">read →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="writing__rss">
        <span className="dim">// subscribe</span>
        <span className="dim">·</span>
        <a
          href="https://twitter.com/kovalevantondev"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          @kovalevantondev
        </a>
      </div>
    </>
  );
}
