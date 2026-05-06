import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Studio for web & design. One symbol, one wordmark, one accent — consistency is the brand.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow mb-4">Studio</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#work" className="hover:text-[color:var(--signal)]">Work</a></li>
              <li><a href="#services" className="hover:text-[color:var(--signal)]">Services</a></li>
              <li><a href="#process" className="hover:text-[color:var(--signal)]">Process</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@nexus.studio" className="hover:text-[color:var(--signal)]">hello@nexus.studio</a></li>
              <li className="text-muted-foreground">+00 0000 0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>© 2026 Nexus Studio · All rights reserved</span>
          <span>doc nx-bid-001 · rev 01</span>
        </div>
      </div>
    </footer>
  );
}
