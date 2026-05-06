import { NexusMark } from "./NexusMark";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-24 md:py-32">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="hairline max-w-12" />
            <span className="eyebrow">NX · 001 — Studio for web & design</span>
          </div>
          <h1 className="text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            Engineering and<br />
            <span className="text-[color:var(--signal)]">design</span>, held in<br />
            the same hand<span className="text-[color:var(--signal)]">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Nexus is a small studio building considered websites and digital products.
            We don't shout — we ship. Every element is grid-derived. Nothing is decorative.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex h-12 items-center gap-2 rounded-sm bg-[color:var(--signal)] px-6 font-mono text-xs uppercase tracking-widest text-white transition-opacity hover:opacity-90">
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#work" className="inline-flex h-12 items-center gap-2 rounded-sm border border-border px-6 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-secondary">
              See our work
            </a>
          </div>
        </div>
        <div className="col-span-12 hidden items-end justify-end lg:col-span-4 lg:flex">
          <NexusMark accent className="h-56 w-56" />
        </div>
      </div>

      {/* meta footer of hero */}
      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:grid-cols-4">
          <div>doc — nx-bid-001</div>
          <div>rev — 01</div>
          <div>est — 2026</div>
          <div className="md:text-right">design × development</div>
        </div>
      </div>
    </section>
  );
}
