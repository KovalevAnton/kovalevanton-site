export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  status: "planned" | "building" | "shipped";
  dayTarget: number;
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "chat-with-docs",
    title: "Chat with docs",
    tagline:
      "RAG pipeline over PDFs. Embeddings, cosine retrieval, LLM reranking, query expansion, streaming, multi-turn.",
    stack: ["Next.js", "Claude API", "Embeddings", "TypeScript"],
    status: "shipped",
    dayTarget: 15,
    demo: "https://brocode.kovalevanton.xyz",
  },
  {
    slug: "research-agent",
    title: "Research agent",
    tagline:
      "Agentic loop with Claude — tool selection, multi-turn execution, evals.",
    stack: ["Claude API", "TypeScript", "Evals"],
    status: "building",
    dayTarget: 60,
  },
  {
    slug: "ai-code-review",
    title: "AI code review agent",
    tagline:
      "Reviews PRs the way a senior would — with taste, not rules. Runs on GitHub Actions.",
    stack: ["Claude API", "GitHub Actions", "TypeScript", "Evals"],
    status: "planned",
    dayTarget: 90,
  },
];
