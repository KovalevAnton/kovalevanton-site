import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { TerminalShell } from "@/components/TerminalShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anton Kovalev — frontend engineer learning to build AI products",
  description:
    "Senior frontend engineer (10y) pivoting into AI engineering. 3 projects in 90 days, in public.",
  metadataBase: new URL("https://kovalevanton.xyz"),
  openGraph: {
    title: "Anton Kovalev — frontend → AI engineer",
    description:
      "Frontend engineer (10y) learning to build AI products in public. RAG → Agents → Evals. 3 projects in 90 days.",
    url: "https://kovalevanton.xyz",
    siteName: "kovalevanton.xyz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anton Kovalev — frontend → AI engineer",
    description:
      "Frontend engineer (10y) learning to build AI products in public.",
    creator: "@kovalevantondev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TerminalShell>{children}</TerminalShell>
        <Analytics />
      </body>
    </html>
  );
}
