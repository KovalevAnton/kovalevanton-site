import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
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
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1 max-w-3xl w-full mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
