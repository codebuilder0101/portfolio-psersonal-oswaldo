import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles, categories, formatDate, type Category } from "@/lib/articles";
import heroBg from "@/assets/image-background.jpeg";

export const Route = createFileRoute("/articulos/")({
  validateSearch: (search: Record<string, unknown>): { categoria?: Category } => {
    const c = search.categoria;
    return typeof c === "string" && (categories as readonly string[]).includes(c)
      ? { categoria: c as Category }
      : {};
  },
  head: () => ({
    meta: [
      { title: "Mis artículos — Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "Opinión con sentido: artículos sobre política, sociedad, emprendimiento y estrategia.",
      },
      { property: "og:title", content: "Mis artículos — Oswaldo Smarrelli" },
      { property: "og:description", content: "Opinión con sentido, palabras que nacen de la reflexión." },
      { property: "og:url", content: "/articulos" },
    ],
    links: [{ rel: "canonical", href: "/articulos" }],
  }),
  component: ArticulosPage,
});

function ArticulosPage() {
  const { categoria } = Route.useSearch();
  const filtered = categoria ? articles.filter((a) => a.category === categoria) : articles;

  const tabs: { label: string; value?: Category; count: number }[] = [
    { label: "Todos", value: undefined, count: articles.length },
    ...categories.map((c) => ({
      label: c,
      value: c,
      count: articles.filter((a) => a.category === c).length,
    })),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-white">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="block w-full h-auto"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-50 md:pb-40">
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl mx-auto text-white drop-shadow-md">
              OPINIÓN CON SENTIDO, PALABRAS QUE NACEN DE LA REFLEXIÓN Y EL COMPROMISO
            </h1>
            <p className="mt-6 text-sm text-white/70 drop-shadow">www.oswaldosmarrelli.com</p>
          </div>
        </section>

        {/* Filter + grid */}
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {tabs.map((t) => {
                const active = categoria === t.value || (!categoria && !t.value);
                return (
                  <Link
                    key={t.label}
                    to="/articulos"
                    search={t.value ? { categoria: t.value } : {}}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                      active
                        ? "bg-brand-teal text-white border-brand-teal"
                        : "bg-card text-foreground/70 border-border hover:border-brand-teal hover:text-brand-teal"
                    }`}
                  >
                    {t.label}
                    <span
                      className={`text-xs rounded-full px-1.5 py-0.5 ${
                        active ? "bg-white/20" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {t.count}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">
                No hay artículos en esta categoría.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((a) => (
                  <Link
                    key={a.slug}
                    to="/articulos/$slug"
                    params={{ slug: a.slug }}
                    className="group flex flex-col bg-card border border-border rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="self-start text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-terracotta bg-brand-terracotta/10 px-2.5 py-1 rounded-full mb-4">
                      {a.category}
                    </span>
                    <h2 className="font-display text-xl leading-snug text-foreground transition-colors group-hover:text-brand-teal">
                      {a.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1 text-justify">
                      {a.excerpt}
                    </p>
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-3">
                      <span className="text-xs text-muted-foreground">
                        {formatDate(a.date)} · {a.readingTime} min
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-teal">
                        Leer más
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
