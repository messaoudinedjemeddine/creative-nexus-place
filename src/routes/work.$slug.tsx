import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProject, projects, type Project } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.client} — Nexus` : "Project — Nexus";
    const desc = p?.summary ?? "Selected project from Nexus Studio.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="mx-auto max-w-7xl px-6 py-32 text-center">
          <p className="eyebrow mb-4">404 — Project not found</p>
          <h1 className="mb-8 text-4xl font-semibold tracking-tight">No such project.</h1>
          <Link to="/" className="font-mono text-xs uppercase tracking-widest text-[color:var(--signal)] hover:underline">
            ← Back home
          </Link>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center p-6 text-center">
      <p>{error.message}</p>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          {/* Hero */}
          <section className="border-b border-border">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
              <Link
                to="/"
                hash="work"
                className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-[color:var(--signal)]"
              >
                <ArrowLeft className="h-3 w-3" /> Index
              </Link>
              <div className="mb-3 flex items-center gap-3">
                <span className="hairline max-w-12" />
                <span className="eyebrow">
                  {project.no} · ’{project.year} · {project.tag}
                </span>
              </div>
              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                {project.client}.
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                {project.summary}
              </p>
            </div>
          </section>

          {/* Cover placeholder */}
          <section className="border-b border-border">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
              <Placeholder ratio="16/9" label="Cover" caption={`${project.client} — hero composition`} kind="image" />
            </div>
          </section>

          {/* Meta grid */}
          <section className="border-b border-border bg-[color:var(--signal)]/8">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:py-16">
              <Meta label="Client" value={project.client} />
              <Meta label="Scope" value={project.scope} />
              <Meta label="Duration" value={project.duration} />
              <Meta label="Year" value={`20${project.year}`} />
            </div>
          </section>

          {/* Body */}
          <section className="border-b border-border">
            <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-20 md:py-28">
              <div className="col-span-12 md:col-span-4">
                <div className="eyebrow mb-3">Role</div>
                <ul className="space-y-2 text-sm">
                  {project.role.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="eyebrow mb-3 mt-10">Deliverables</div>
                <ul className="space-y-2 text-sm">
                  {project.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="eyebrow mb-3 mt-10">Stack</div>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-12 space-y-12 md:col-span-8">
                <Block heading="Challenge" body={project.challenge} />
                <Placeholder ratio="4/3" label="Process" caption="Discovery — sketches, references, audit" kind="gif" />
                <Block heading="Approach" body={project.approach} />
                <div className="grid grid-cols-2 gap-4">
                  <Placeholder ratio="1/1" label="Detail" caption="Type system" kind="image" />
                  <Placeholder ratio="1/1" label="Detail" caption="Component grid" kind="image" />
                </div>
                <Block heading="Outcome" body={project.outcome} />
                <Placeholder ratio="16/10" label="Shipped" caption="Final interface — desktop" kind="screenshot" />
              </div>
            </div>
          </section>

          {/* Wide gallery placeholder */}
          <section className="border-b border-border bg-[color:var(--signal)]/5">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
              <div className="mb-8 flex items-center gap-3">
                <span className="hairline max-w-12" />
                <span className="eyebrow">Gallery · Selected frames</span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Placeholder ratio="3/4" label="01" caption="Mobile flow" kind="screenshot" />
                <Placeholder ratio="3/4" label="02" caption="Interaction" kind="gif" />
                <Placeholder ratio="3/4" label="03" caption="Identity in use" kind="image" />
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="border-b border-border">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
              <div className="mb-10 flex items-center gap-3">
                <span className="hairline max-w-12" />
                <span className="eyebrow">Signal · By the numbers</span>
              </div>
              <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="bg-background p-8 md:p-12">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {m.label}
                    </div>
                    <div className="mt-4 text-5xl font-semibold tracking-tight text-[color:var(--signal)] md:text-6xl">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="border-b border-border">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
              <div className="mb-10 flex items-center gap-3">
                <span className="hairline max-w-12" />
                <span className="eyebrow">Word from the client</span>
              </div>
              <figure className="grid grid-cols-12 gap-8 border-l-2 border-[color:var(--signal)] pl-6 md:pl-10">
                <blockquote className="col-span-12 md:col-span-9">
                  <p className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-4xl">
                    <span className="text-[color:var(--signal)]">“</span>
                    {project.testimonial.quote}
                    <span className="text-[color:var(--signal)]">”</span>
                  </p>
                </blockquote>
                <figcaption className="col-span-12 flex flex-col gap-1 md:col-span-3 md:items-end md:text-right">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Client
                  </div>
                  <div className="mt-2 text-base font-semibold">
                    {project.testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.testimonial.role}, {project.testimonial.company}
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Next project */}
          <section className="border-b border-border">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
              <Link
                to="/work/$slug"
                params={{ slug: next.slug }}
                className="group flex items-center justify-between gap-6"
              >
                <div>
                  <div className="eyebrow mb-3">Next project</div>
                  <div className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-[color:var(--signal)] md:text-5xl">
                    {next.client}
                  </div>
                </div>
                <ArrowUpRight className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-[color:var(--signal)] md:h-12 md:w-12" />
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-base font-medium">{value}</div>
    </div>
  );
}

function Block({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="hairline max-w-8" />
        <span className="eyebrow">{heading}</span>
      </div>
      <p className="text-xl leading-relaxed tracking-tight md:text-2xl">{body}</p>
    </div>
  );
}

function Placeholder({
  ratio = "16/9",
  label,
  caption,
  kind = "image",
}: {
  ratio?: string;
  label: string;
  caption: string;
  kind?: "image" | "screenshot" | "gif";
}) {
  return (
    <figure className="group relative w-full">
      <div
        className="relative w-full overflow-hidden border border-border bg-[color:var(--signal)]/5"
        style={{ aspectRatio: ratio }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--signal) 0 1px, transparent 1px 14px)",
          }}
        />
        <div aria-hidden className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-px bg-[color:var(--signal)]/20" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-[color:var(--signal)]/20" />
          <span className="absolute left-3 top-3 h-2 w-2 border-l border-t border-[color:var(--signal)]" />
          <span className="absolute right-3 top-3 h-2 w-2 border-r border-t border-[color:var(--signal)]" />
          <span className="absolute bottom-3 left-3 h-2 w-2 border-b border-l border-[color:var(--signal)]" />
          <span className="absolute bottom-3 right-3 h-2 w-2 border-b border-r border-[color:var(--signal)]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--signal)]">
              {kind} · placeholder
            </span>
            <span className="text-2xl font-semibold tracking-tight text-foreground/70 md:text-3xl">
              {label}
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span className="truncate">{caption}</span>
        <span className="shrink-0">{ratio}</span>
      </figcaption>
    </figure>
  );
}
