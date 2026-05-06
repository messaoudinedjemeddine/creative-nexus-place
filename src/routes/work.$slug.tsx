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
                <Block heading="Approach" body={project.approach} />
                <Block heading="Outcome" body={project.outcome} />
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
