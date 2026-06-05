import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { adminCheck, adminListArticles, adminDeleteArticle } from "@/lib/api/admin.functions";
import { formatDate } from "@/lib/articles";

export const Route = createFileRoute("/admin/")({
  loader: async () => {
    const { authed } = await adminCheck();
    if (!authed) return { articles: [] as Awaited<ReturnType<typeof adminListArticles>> };
    return { articles: await adminListArticles() };
  },
  component: Dashboard,
});

function Dashboard() {
  const { articles } = Route.useLoaderData();
  const router = useRouter();
  const [busy, setBusy] = useState<number | null>(null);

  const remove = async (id: number, title: string) => {
    if (!confirm(`¿Eliminar "${title}"? Esta acción no se puede deshacer.`)) return;
    setBusy(id);
    try {
      await adminDeleteArticle({ data: { id } });
      await router.invalidate();
      toast.success("Artículo eliminado");
    } catch {
      toast.error("No se pudo eliminar");
    } finally {
      setBusy(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">Artículos</h1>
          <p className="text-sm text-muted-foreground mt-1">{articles.length} en total</p>
        </div>
        <Link
          to="/admin/articulos/$id"
          params={{ id: "new" }}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-teal/90 transition-colors"
        >
          <Plus className="h-4 w-4" /> Nuevo artículo
        </Link>
      </div>

      <div className="space-y-3">
        {articles.length === 0 && (
          <p className="text-muted-foreground text-sm py-10 text-center bg-card border border-border rounded-2xl">
            No hay artículos todavía.
          </p>
        )}
        {articles.map((a) => (
          <div
            key={a.id}
            className="flex items-center gap-4 bg-card border border-border rounded-2xl p-4 md:p-5 shadow-sm"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-display font-semibold text-foreground truncate">{a.title}</h2>
                {a.featured ? <Star className="h-3.5 w-3.5 text-brand-terracotta fill-brand-terracotta shrink-0" /> : null}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-wide text-brand-terracotta">{a.category}</span>
                <span>{formatDate(a.date)}</span>
                <span>· {a.readingTime} min</span>
                <span className="text-foreground/40">/{a.slug}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <Link
                to="/admin/articulos/$id"
                params={{ id: String(a.id) }}
                aria-label="Editar"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-muted transition-colors"
              >
                <Pencil className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => remove(a.id, a.title)}
                disabled={busy === a.id}
                aria-label="Eliminar"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-destructive hover:text-white hover:border-destructive transition-colors disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
