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

      <div className="mt-10 border border-dashed border-neutral-800 rounded-lg p-8 text-center">
        <p className="text-neutral-500 font-mono text-sm">
          First post ships on day 07.
        </p>
      </div>
    </section>
  );
}
