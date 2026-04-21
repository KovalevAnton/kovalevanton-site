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
    <article className="py-16 max-w-2xl">
      <Link
        href="/writing"
        className="text-xs font-mono text-neutral-500 hover:text-accent transition-colors"
      >
        ← writing
      </Link>

      <header className="mt-6">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-2 text-sm font-mono text-neutral-500">
          Day {post.day.toString().padStart(2, "0")} · {post.date}
        </p>
      </header>

      <div className="mt-8 space-y-5 text-neutral-300 leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
