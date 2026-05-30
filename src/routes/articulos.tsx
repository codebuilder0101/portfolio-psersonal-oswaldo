import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactBand } from "@/components/contact-band";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/articulos")({
  head: () => ({
    meta: [
      { title: "Mi opinión — Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "Opinión con sentido: ensayos y columnas sobre política, sociedad, estrategia y emprendimiento.",
      },
      { property: "og:title", content: "Mi opinión — Oswaldo Smarrelli" },
      { property: "og:description", content: "Opinión con sentido, palabras que nacen de la reflexión." },
      { property: "og:url", content: "/articulos" },
    ],
    links: [{ rel: "canonical", href: "/articulos" }],
  }),
  component: ArticulosPage,
});

function ArticulosPage() {
  const total = articles.length;

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-ink text-white">
          {/* TODO: drop a city skyline photo here as the hero background. */}
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-brand-blue/40 to-ink opacity-90" />
          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl mx-auto">
              OPINIÓN CON SENTIDO, PALABRAS QUE NACEN DE LA REFLEXIÓN Y EL COMPROMISO
            </h1>
            <p className="mt-6 text-sm text-white/60">www.oswaldosmarrelli.com</p>
          </div>
        </section>

        {/* Numbered list */}
        <section className="bg-cream">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            {articles.map((a, i) => (
              <article
                key={a.slug}
                className="border-t border-border py-12 md:py-16 flex items-center justify-between gap-8"
              >
                <div className="max-w-2xl">
                  <h2 className="font-display font-bold text-2xl md:text-3xl uppercase text-foreground mb-4 leading-tight">
                    {a.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {a.excerpt}
                  </p>
                  <Link
                    to="/articulos/$slug"
                    params={{ slug: a.slug }}
                    className="inline-block bg-brand-blue text-white text-xs tracking-wide px-5 py-2.5 rounded-sm hover:bg-brand-teal transition-colors"
                  >
                    MÁS INFORMACIÓN
                  </Link>
                </div>
                <div
                  className="font-display font-bold text-6xl md:text-8xl text-foreground/90 shrink-0 leading-none"
                  aria-hidden
                >
                  {String(total - i).padStart(2, "0")}
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactBand socials={["Facebook", "Instagram", "X / Twitter"]} />
      </main>
      <SiteFooter />
    </div>
  );
}
