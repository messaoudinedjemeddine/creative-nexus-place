import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 flex items-center gap-3">
          <span className="hairline max-w-12" />
          <span className="eyebrow">04 — Contact</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1] tracking-[-0.04em]">
              Have something<br />
              worth building<span className="text-[color:var(--signal)]">?</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Tell us about the project. We reply within two business days.
            </p>
            <a
              href="mailto:hello@nexus.studio"
              className="group mt-10 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight md:text-4xl"
            >
              hello@nexus.studio
              <ArrowUpRight className="h-6 w-6 text-[color:var(--signal)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <dl className="space-y-6 border-t border-border pt-6 font-mono text-xs uppercase tracking-widest">
              <div>
                <dt className="text-muted-foreground">Studio</dt>
                <dd className="mt-2 text-foreground">Berlin · Remote</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Hours</dt>
                <dd className="mt-2 text-foreground">Mon — Fri · 09–18 CET</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="mt-2 text-foreground">+00 0000 0000</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Social</dt>
                <dd className="mt-2 flex gap-3 text-foreground">
                  <a href="#" className="hover:text-[color:var(--signal)]">↗ Twitter</a>
                  <a href="#" className="hover:text-[color:var(--signal)]">↗ Read.cv</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
