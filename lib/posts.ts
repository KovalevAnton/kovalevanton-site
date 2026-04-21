export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  day: number; // journey day when published
  summary: string;
  body: string; // markdown-ish, rendered as paragraphs
};

export const posts: Post[] = [
  {
    slug: "week-1-the-retrieval-half",
    title: "Week 1: The Retrieval Half",
    date: "2026-04-21",
    day: 7,
    summary:
      "Seven days in. I can call an LLM, validate its output, eval it, embed documents, and retrieve the right chunk. No frameworks.",
    body: `I started this 90-day run to pivot from frontend to AI engineering. Week 1 is done. Here's what actually happened.

Day 1–2 were orientation. Read the Anthropic docs end to end, set up the repo, made my first messages.create() call. Nothing fancy — just getting the feedback loop tight.

Day 3 was structured output. I needed Claude to return JSON, not prose. Tried XML tags in the system prompt, tried prefill (dead on Claude 4 — returns HTTP 400), tried tool_use with a fake tool. Tool_use won: guaranteed schema, no regex, no parsing failures. Built a Zod eval harness: 10 test cases, all passed first run.

Day 4 was about making evals useful. Added content assertions — exact match for numbers, contains for dates, stem-matching for titles. First run: 23/30. But every failure was a bad expected value or too-strict matching, not a model bug. Three iterations later: 30/30. The lesson is counterintuitive — you fix evals more than you fix prompts.

Day 5 I compared the three structured output methods head to head. XML tags: 29/30. Prefill: 0/30 (dead). Tool_use: 29/30. Functionally equivalent, but tool_use is cleaner for production — you get typed JSON, no regex.

Day 6–7 were retrieval. Embedded 10 help center chunks with OpenAI's text-embedding-3-small (1536 dimensions, hand-written cosine similarity). Built a search module, then plugged it into Claude as a RAG pipeline. System prompt gets the top 3 chunks as XML documents, Claude answers from them. 8/8 eval including a hallucination test — asked about a feature that doesn't exist, Claude correctly refused.

No LangChain. No LlamaIndex. No vector database. Just TypeScript, two APIs, and a JSON file.

Next week: real documents, chunking strategies, and the first version of chat-with-docs.`,
  },
];
