import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Anton Kovalev` };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.body.split("\n\n");

  return (
    <>
      <Link
        href="/writing"
        className="link"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
        }}
      >
        ← writing
      </Link>

      <header style={{ marginTop: 24 }}>
        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 600,
            color: "var(--text)",
            margin: 0,
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            marginTop: 8,
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--text-dim)",
          }}
        >
          Day {String(post.day).padStart(2, "0")} · {post.date}
        </p>
      </header>

      <div
        style={{
          marginTop: 32,
          maxWidth: 640,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              margin: 0,
              color: "var(--text)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </>
  );
}
