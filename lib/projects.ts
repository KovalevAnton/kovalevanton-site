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
      "RAG pipeline over your own PDFs. Embeddings, pgvector, reranking — no magic.",
    stack: ["Next.js", "Claude API", "pgvector", "TypeScript"],
    status: "planned",
    dayTarget: 30,
  },
  {
    slug: "research-agent",
    title: "Research agent",
    tagline:
      "An agent that plans, searches, reads, and writes a brief. Built with LangGraph and evals.",
    stack: ["LangGraph", "Claude API", "Langfuse", "Python"],
    status: "planned",
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
