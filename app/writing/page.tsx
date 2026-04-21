import { posts } from "@/lib/posts";
import { WritingClient } from "@/components/WritingClient";

export const revalidate = 3600;

export const metadata = {
  title: "Writing — Anton Kovalev",
};

export default function WritingPage() {
  return <WritingClient posts={posts} />;
}
