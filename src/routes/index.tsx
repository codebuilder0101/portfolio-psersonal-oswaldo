import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleCard } from "@/components/article-card";
import { ArticleArtwork } from "@/components/article-artwork";
import { NewsletterBlock } from "@/components/newsletter-block";
import { MediaStrip } from "@/components/media-strip";
import { InstagramFeed } from "@/components/instagram-feed";
import { articles, categories, formatDate } from "@/lib/articles";
import portrait from "@/assets/oswaldo-portrait.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oswaldo Smarrelli — Ideas para gobernar el caos" },
      {
        name: "description",
        content:
          "Columnista de opinión y consultor estratégico. Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática.",
      },
      { property: "og:title", content: "Oswaldo Smarrelli — Ideas para gobernar el caos" },
      {
        property: "og:description",
        content:
          "Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const recent = articles.filter((a) => a.slug !== featured.slug).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <section className="pt-16 pb-20 md:pt-24 md:pb-32 grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8 animate-fade-up">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
                Columnista & Consultor
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance mb-8">
                Ideas para <span className="italic">gobernar</span> el caos.
              </h1>
              <p className="max-w-[48ch] text-lg text-muted-foreground leading-relaxed">
                Análisis sobre política, sociedad y estrategia empresarial desde una perspectiva
                humanista y pragmática. Entender el hoy para diseñar el mañana.
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Link
                  to="/articulos"
                  className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  Leer los ensayos <ArrowRight className="h-3 w-3" />
                </Link>
                <Link
                  to="/sobre-mi"
                  className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre Oswaldo
                </Link>
              </div>
            </div>
            <div className="md:col-span-4 animate-fade-up [animation-delay:200ms]">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img
                  src={portrait}
                  alt="Retrato editorial de Oswaldo Smarrelli"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </section>

          <MediaStrip />

          {/* Featured Article */}
          <section className="py-20 md:py-28">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8 block">
              Lectura destacada
            </span>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <Link to="/articulos/$slug" params={{ slug: featured.slug }} className="block group">
                <ArticleArtwork
                  slug={featured.slug}
                  category={featured.category}
                  big
                  className="w-full aspect-square rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </Link>
              <div className="flex flex-col justify-center">
                <div className="flex gap-4 mb-6 font-mono text-[10px] uppercase tracking-widest">
                  <span className="text-accent">{featured.category}</span>
                  <span className="text-muted-foreground">
                    {formatDate(featured.date)} · {featured.readingTime} min lectura
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-balance">
                  <Link
                    to="/articulos/$slug"
                    params={{ slug: featured.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-pretty text-lg">
                  {featured.excerpt}
                </p>
                <Link
                  to="/articulos/$slug"
                  params={{ slug: featured.slug }}
                  className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest self-start group"
                >
                  Leer artículo completo
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Category navigation */}
          <section className="border-t border-border py-10">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Temas
              </span>
              {categories.map((c) => (
                <Link
                  key={c}
                  to="/articulos"
                  search={{ category: c }}
                  className="font-display text-xl md:text-2xl italic hover:text-accent transition-colors"
                >
                  {c}
                </Link>
              ))}
            </div>
          </section>

          {/* Opinion Grid */}
          <section className="py-20 md:py-28">
            <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                  Archivo
                </span>
                <h2 className="font-display text-4xl md:text-5xl italic">Mi Opinión</h2>
              </div>
              <Link
                to="/articulos"
                className="font-mono text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors"
              >
                Ver todo →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {recent.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>

          <NewsletterBlock />

          <InstagramFeed />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
