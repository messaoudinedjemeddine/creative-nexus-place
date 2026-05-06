export type Project = {
  slug: string;
  no: string;
  client: string;
  scope: string;
  year: string;
  tag: string;
  summary: string;
  role: string[];
  deliverables: string[];
  duration: string;
  stack: string[];
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "halden-audio",
    no: "W·01",
    client: "Halden Audio",
    scope: "Brand · Web",
    year: "26",
    tag: "E-commerce",
    summary:
      "A boutique audio house redefined around tactile product storytelling and a frictionless commerce flow.",
    role: ["Brand identity", "E-commerce design", "Front-end engineering"],
    deliverables: ["Visual identity", "Headless storefront", "Product configurator"],
    duration: "10 weeks",
    stack: ["Next.js", "Shopify Hydrogen", "TypeScript", "GSAP"],
    challenge:
      "Halden's catalog was buried in a generic theme that flattened the craft of each amplifier into stock thumbnails and bullet lists.",
    approach:
      "We rebuilt the storefront around the products themselves — high-resolution silhouettes, signal-flow diagrams, and a quiet typographic system that gets out of the way.",
    outcome:
      "A storefront that reads like an editorial monograph and converts like a focused funnel.",
    metrics: [
      { label: "Conversion", value: "+38%" },
      { label: "Avg. order", value: "+22%" },
      { label: "LCP", value: "1.1s" },
    ],
  },
  {
    slug: "forma-studio",
    no: "W·02",
    client: "Forma Studio",
    scope: "Identity · Site",
    year: "26",
    tag: "Architecture",
    summary:
      "A new identity and portfolio site for a Lisbon architecture practice working at the intersection of stone and light.",
    role: ["Identity system", "Art direction", "Web design & build"],
    deliverables: ["Wordmark", "Editorial site", "Photography direction"],
    duration: "8 weeks",
    stack: ["Astro", "Sanity", "TypeScript"],
    challenge:
      "Forma's previous site treated every project the same. The studio needed a system that respected the rhythm of each commission.",
    approach:
      "A modular grid that flexes between intimate detail shots and full-bleed plans, anchored by a quiet serif and a single accent.",
    outcome:
      "An archive that scales from one project to one hundred without losing its sense of authorship.",
    metrics: [
      { label: "Inquiries", value: "+64%" },
      { label: "Sessions", value: "+3.1×" },
      { label: "Bounce", value: "-41%" },
    ],
  },
  {
    slug: "lattice-labs",
    no: "W·03",
    client: "Lattice Labs",
    scope: "Product · UI",
    year: "25",
    tag: "SaaS",
    summary:
      "Product design and front-end engineering for an analytics platform serving infrastructure teams.",
    role: ["Product design", "Design system", "Front-end engineering"],
    deliverables: ["Design system", "Dashboard suite", "Onboarding flow"],
    duration: "16 weeks",
    stack: ["React", "Tailwind", "tRPC", "PostgreSQL"],
    challenge:
      "Lattice's dashboard had grown into a museum of one-off charts. Every new feature compounded the complexity.",
    approach:
      "We built a token-driven design system, then refactored the surface area around a small set of primitives — query, chart, table, panel.",
    outcome:
      "A product that scales horizontally without growing visually heavier.",
    metrics: [
      { label: "Time to chart", value: "-72%" },
      { label: "Activation", value: "+44%" },
      { label: "NPS", value: "+18" },
    ],
  },
  {
    slug: "north-index",
    no: "W·04",
    client: "North Index",
    scope: "Web · CMS",
    year: "25",
    tag: "Editorial",
    summary:
      "An independent journal of design criticism, rebuilt as a long-lived editorial platform.",
    role: ["Editorial design", "CMS architecture", "Web build"],
    deliverables: ["Editorial site", "Custom CMS", "Newsletter system"],
    duration: "12 weeks",
    stack: ["Remix", "Payload CMS", "TypeScript"],
    challenge:
      "North Index publishes long-form essays and short field notes side by side. Their CMS forced both into the same template.",
    approach:
      "A flexible composition model — articles assembled from a small set of editorial blocks, each tuned for reading rhythm rather than visual novelty.",
    outcome:
      "A platform that treats reading as the product, not a feature.",
    metrics: [
      { label: "Read time", value: "+2.4×" },
      { label: "Subscribers", value: "+5.8k" },
      { label: "Returning", value: "62%" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
