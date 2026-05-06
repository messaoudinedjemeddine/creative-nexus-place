const services = [
  {
    no: "01",
    title: "Web Development",
    desc: "Production-grade websites and apps. Type-safe, accessible, fast. We treat performance as a feature.",
    items: ["Next.js · React", "Design systems", "CMS & commerce"],
  },
  {
    no: "02",
    title: "Product Design",
    desc: "Interfaces built on a grid. Clear hierarchy, honest copy, considered motion. No surplus.",
    items: ["UX & UI", "Prototyping", "Component libraries"],
  },
  {
    no: "03",
    title: "Brand & Identity",
    desc: "Marks, type systems, and guidelines that hold together at 16 px and at 16 m.",
    items: ["Visual identity", "Guidelines", "Web brand systems"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex items-center gap-3">
          <span className="hairline max-w-12" />
          <span className="eyebrow">02 — Services</span>
        </div>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          One studio. Three crafts.<br />
          <span className="text-muted-foreground">All on the same grid.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {services.map((s) => (
            <article key={s.no} className="group relative bg-background p-8 transition-colors hover:bg-secondary/40 md:p-10">
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.no}</span>
                <span className="h-2 w-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-[color:var(--signal)]" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-8 space-y-2 border-t border-border pt-6 font-mono text-xs uppercase tracking-widest text-foreground/80">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[color:var(--signal)]">+</span> {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
