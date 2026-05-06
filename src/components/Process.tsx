const steps = [
  { no: "i", title: "Define", body: "We map the problem, the audience, and the constraints. No briefs left abstract." },
  { no: "ii", title: "Design", body: "Grid first. Type, hierarchy, motion. Prototyped in the medium it ships in." },
  { no: "iii", title: "Develop", body: "Type-safe, accessible code. Reviewed, tested, performance-budgeted." },
  { no: "iv", title: "Ship", body: "Launch, measure, iterate. We stay close after handoff." },
];

export function Process() {
  return (
    <section id="process" className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex items-center gap-3">
          <span className="hairline max-w-12" />
          <span className="eyebrow">03 — Process</span>
        </div>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Four phases.<br />
          <span className="text-muted-foreground">Built like the mark — equal, on the grid.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.no} className="border-t border-foreground pt-6">
              <div className="mb-8 flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">phase {s.no}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
