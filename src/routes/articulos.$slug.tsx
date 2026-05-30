import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleCard } from "@/components/article-card";
import { ArticleArtwork } from "@/components/article-artwork";
import { ShareBar } from "@/components/share-bar";
import { NewsletterBlock } from "@/components/newsletter-block";
import { getArticle, getRelated, formatDate, articles } from "@/lib/articles";
import portrait from "@/assets/oswaldo-portrait.jpg";
import { ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 grid place-items-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">Error 404</p>
          <h1 className="font-display text-5xl mb-6">Artículo no encontrado</h1>
          <Link to="/articulos" className="font-mono text-xs uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
            Volver al archivo
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article>
          {/* Article header */}
          <header className="max-w-3xl mx-auto px-6 pt-12 md:pt-16 pb-10">
            <Link
              to="/articulos"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10"
            >
              <ArrowLeft className="h-3 w-3" /> Mi Opinión
            </Link>
            <div className="flex gap-4 mb-6 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-accent">{article.category}</span>
              <span className="text-muted-foreground">
                {formatDate(article.date)} · {article.readingTime} min de lectura
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance mb-8">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-display italic text-pretty">
              {article.excerpt}
            </p>
          </header>

          {/* Hero artwork */}
          <div className="max-w-5xl mx-auto px-6 mb-12">
            <ArticleArtwork
              slug={article.slug}
              category={article.category}
              big
              className="w-full aspect-[16/9] md:aspect-[21/9] rounded-sm"
            />
          </div>

          {/* Body */}
          <div className="max-w-2xl mx-auto px-6 prose-editorial">
            {article.body.map((block: { type: string; text: string }, i: number) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
              if (block.type === "quote")
                return (
                  <blockquote key={i}>
                    "{block.text}"
                  </blockquote>
                );
              return <p key={i}>{block.text}</p>;
            })}

            <ShareBar title={article.title} slug={article.slug} />

            {/* Author box */}
            <aside className="not-prose border border-border p-6 md:p-8 my-12 flex gap-6 items-start">
              <img
                src={portrait}
                alt="Oswaldo Smarrelli"
                className="size-20 md:size-24 object-cover rounded-sm grayscale flex-shrink-0"
              />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2 block">
                  Sobre el autor
                </span>
                <h3 className="font-display text-2xl mb-3">Oswaldo Smarrelli</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Economista, magíster en gerencia, locutor certificado y articulista por convicción.
                  Más de 20 años acompañando a líderes y organizaciones a pensar el presente para
                  diseñar el mañana.
                </p>
                <Link
                  to="/sobre-mi"
                  className="inline-block mt-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                >
                  Leer biografía completa →
                </Link>
              </div>
            </aside>

            <NewsletterBlock compact />
          </div>

          {/* Related */}
          <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
            <h2 className="font-display text-3xl md:text-4xl italic mb-12">
              Seguir leyendo
            </h2>
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
              {related.map((a: typeof articles[number]) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

// Avoid unused warning
void articles;
