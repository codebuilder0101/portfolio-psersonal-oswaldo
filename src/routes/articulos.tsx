import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleCard } from "@/components/article-card";
import { NewsletterBlock } from "@/components/newsletter-block";
import { articles, categories, type Category } from "@/lib/articles";
import { Search } from "lucide-react";
import { z } from "zod";

const categoryValues = ["Todos", ...categories] as const;
type CategoryFilter = (typeof categoryValues)[number];

const searchSchema = z.object({
  category: z.enum(categoryValues).optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/articulos")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Mi Opinión — Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "Archivo de ensayos y columnas de opinión sobre política, sociedad, estrategia y emprendimiento.",
      },
      { property: "og:title", content: "Mi Opinión — Oswaldo Smarrelli" },
      {
        property: "og:description",
        content: "Archivo de ensayos y columnas de opinión.",
      },
      { property: "og:url", content: "/articulos" },
    ],
    links: [{ rel: "canonical", href: "/articulos" }],
  }),
  component: ArticulosPage,
});

function ArticulosPage() {
  const { category, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/articulos" });
  const [query, setQuery] = useState(q ?? "");

  const active: CategoryFilter = (category as CategoryFilter) ?? "Todos";

  const filtered = useMemo(() => {
    let list = articles.slice();
    if (active !== "Todos") list = list.filter((a) => a.category === (active as Category));
    if (query.trim()) {
      const needle = query.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(needle) ||
          a.excerpt.toLowerCase().includes(needle) ||
          a.tags.some((t) => t.toLowerCase().includes(needle))
      );
    }
    return list;
  }, [active, query]);

  const setCategory = (c: CategoryFilter) => {
    navigate({ search: (prev: { category?: string; q?: string }) => ({ ...prev, category: c === "Todos" ? undefined : c }) });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <header className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
              Archivo editorial
            </span>
            <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6 text-balance">
              Mi Opinión
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Ensayos y columnas sobre la conversación pública. Política, sociedad, estrategia y
              emprendimiento desde una mirada humanista.
            </p>
          </header>

          {/* Filters */}
          <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-border">
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest">
              {categoryValues.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`pb-1 border-b transition-colors ${
                    active === c
                      ? "text-accent border-accent"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 bg-transparent border border-border focus:outline-none focus:border-foreground font-mono text-sm w-full md:w-64"
              />
            </div>
          </div>

          {/* Grid */}
          <section className="py-16">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20 font-display italic text-xl">
                No se encontraron artículos para esta búsqueda.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {filtered.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            )}
          </section>

          <NewsletterBlock />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
