const work = [
  { no: "W·01", client: "Halden Audio", scope: "Brand · Web", year: "26", tag: "E-commerce" },
  { no: "W·02", client: "Forma Studio", scope: "Identity · Site", year: "26", tag: "Architecture" },
  { no: "W·03", client: "Lattice Labs", scope: "Product · UI", year: "25", tag: "SaaS" },
  { no: "W·04", client: "North Index", scope: "Web · CMS", year: "25", tag: "Editorial" },
];

export function Work() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="hairline max-w-12" />
              <span className="eyebrow">01 — Selected work</span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Recent projects.
            </h2>
          </div>
          <a href="#contact" className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground md:inline">
            Index → 24 / 24
          </a>
        </div>

        <ul className="border-t border-border">
          {work.map((w) => (
            <li key={w.no}>
              <a href="#" className="group grid grid-cols-12 items-center gap-4 border-b border-border py-6 transition-colors hover:bg-secondary/40 md:py-8">
                <span className="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-1">{w.no}</span>
                <span className="col-span-10 text-xl font-semibold tracking-tight md:col-span-5 md:text-2xl">
                  {w.client}
                </span>
                <span className="col-span-6 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-3 md:inline">
                  {w.scope}
                </span>
                <span className="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-2 md:inline">
                  {w.tag}
                </span>
                <span className="col-span-12 text-right font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-[color:var(--signal)] md:col-span-1">
                  ’{w.year} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
