import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus — Studio for Web & Design" },
      { name: "description", content: "Nexus is a small studio building considered websites and digital products. Engineering and design, held in the same hand." },
      { property: "og:title", content: "Nexus — Studio for Web & Design" },
      { property: "og:description", content: "Engineering and design, held in the same hand." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Work />
          <Services />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
