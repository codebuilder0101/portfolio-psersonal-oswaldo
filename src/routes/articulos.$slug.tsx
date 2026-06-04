import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getArticle, getRelated, formatDate } from "@/lib/articles";
import { ShareBar } from "@/components/share-bar";
import { NewsletterBlock } from "@/components/newsletter-block";
import portrait from "@/assets/oswaldo-portrait.jpeg";

export const Route = createFileRoute("/articulos/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, related: getRelated(params.slug) };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Artículo — Oswaldo Smarrelli" }] };
    return {
      meta: [
        { title: `${a.title} — Oswaldo Smarrelli` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/articulos/${a.slug}` },
        { property: "article:published_time", content: a.date },
        { property: "article:author", content: "Oswaldo Smarrelli" },
        { property: "article:section", content: a.category },
      ],
      links: [{ rel: "canonical", href: `/articulos/${a.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: a.date,
            author: { "@type": "Person", name: "Oswaldo Smarrelli" },
            articleSection: a.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 grid place-items-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta mb-5">
            Error 404
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Artículo no encontrado
          </h1>
          <Link
            to="/articulos"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal/75 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a Mis artículos
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center p-6">
      <p className="text-muted-foreground">No pudimos cargar este artículo: {error.message}</p>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <article>
          {/* Header */}
          <header className="max-w-2xl mx-auto px-6 pt-12 md:pt-16 pb-8">
            <Link
              to="/articulos"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal/75 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a Mis artículos
            </Link>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-[1.1] text-foreground text-balance mb-6">
              {article.title}
            </h1>
          </header>

          <div className="max-w-2xl mx-auto px-6">
            <hr className="border-border" />
          </div>

          {/* Body */}
          <div className="max-w-2xl mx-auto px-6 pt-10 prose-editorial">
            {article.body.map((block: { type: string; text: string }, i: number) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
              if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>;
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          {/* Compartir + Newsletter (fuera de prose para no heredar estilos) */}
          <div className="max-w-2xl mx-auto px-6">
            <ShareBar title={article.title} slug={article.slug} />
            <NewsletterBlock compact />
          </div>

          {/* Author */}
          <div className="max-w-4xl mx-auto px-6 mt-14">
            <div className="flex gap-5 items-start bg-card border border-border rounded-2xl p-6 md:p-7 shadow-sm">
              <img
                src={portrait}
                alt="Oswaldo Smarrelli"
                className="size-16 md:size-20 object-cover rounded-full flex-shrink-0"
              />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-brand-terracotta mb-1">
                  Sobre el autor
                </span>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Oswaldo Smarrelli
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Economista, magíster en gerencia, locutor certificado y articulista por
                  convicción. Más de 20 años acompañando a líderes y organizaciones a pensar el
                  presente para diseñar el mañana.
                </p>
                <Link
                  to="/sobre-mi"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-brand-teal hover:text-brand-teal/75 transition-colors"
                >
                  Leer biografía completa <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 mt-8 border-t border-border">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8">
                Seguir leyendo
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    to="/articulos/$slug"
                    params={{ slug: a.slug }}
                    className="group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-terracotta mb-3">
                      {a.category}
                    </span>
                    <h3 className="font-display text-lg leading-snug text-foreground transition-colors group-hover:text-brand-teal">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {a.excerpt}
                    </p>
                    <span className="mt-4 pt-3 text-xs text-muted-foreground border-t border-border">
                      {formatDate(a.date)} · {a.readingTime} min
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
