import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import {
  adminCheck,
  adminGetArticle,
  adminListCategories,
  adminSaveArticle,
} from "@/lib/api/admin.functions";

type BlockType = "p" | "h2" | "h3" | "quote" | "image";
interface Block {
  type: BlockType;
  text: string;
}

export const Route = createFileRoute("/admin/articulos/$id")({
  loader: async ({ params }) => {
    const { authed } = await adminCheck();
    if (!authed) return { categories: [], article: null };
    const categories = await adminListCategories();
    const article = params.id === "new" ? null : await adminGetArticle({ data: { id: Number(params.id) } });
    return { categories, article };
  },
  component: Editor,
});

// ── Content <-> body blocks ──────────────────────────────────
// The simplified editor uses a single "Contenido" textarea. We store it as
// paragraph blocks so the public renderer (which understands p/h2/h3/quote/
// image) keeps working. Non-text blocks (e.g. images) are left out of the
// editable text — image management is handled separately.
function bodyToText(blocks: Block[] | undefined): string {
  return (blocks ?? [])
    .filter((b) => b.type !== "image" && b.text.trim() !== "")
    .map((b) => b.text.trim())
    .join("\n\n");
}

function textToBody(text: string): Block[] {
  return text
    .split(/\n\s*\n/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => ({ type: "p" as const, text: t }));
}

function estimateReadingTime(text: string): number {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return Math.max(1, Math.round(words / 200));
}

function Editor() {
  const { categories, article } = Route.useLoaderData();
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const isNew = id === "new";

  const [title, setTitle] = useState(article?.title ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [categoryId, setCategoryId] = useState<number | null>(article?.categoryId ?? categories[0]?.id ?? null);
  const [content, setContent] = useState(bodyToText(article?.body as Block[] | undefined));
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!title.trim()) {
      toast.error("El título es obligatorio");
      return;
    }
    setSaving(true);
    try {
      await adminSaveArticle({
        data: {
          id: isNew ? null : Number(id),
          input: {
            // Editable fields
            title: title.trim(),
            excerpt: excerpt.trim(),
            categoryId,
            body: textToBody(content),
            // Derived / preserved (kept out of the simplified UI)
            slug: article?.slug ?? "", // empty -> server generates from title; preserved on edit for stable URLs
            date: article?.date ?? new Date().toISOString().slice(0, 10),
            readingTime: estimateReadingTime(content),
            featured: article?.featured ?? false,
            hero: article?.hero ?? null,
            tags: article?.tags ?? [],
          },
        },
      });
      toast.success(isNew ? "Artículo creado" : "Artículo guardado");
      navigate({ to: "/admin" });
    } catch {
      toast.error("No se pudo guardar");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="pb-16">
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link to="/admin" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Volver
        </Link>
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-teal/90 transition-colors disabled:opacity-60"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Guardar
        </button>
      </div>

      <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
        {isNew ? "Nuevo artículo" : "Editar artículo"}
      </h1>

      <div className="space-y-5">
        <Field label="Título *">
          <input className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>

        <Field label="Categoría">
          <select
            className={inputCls}
            value={categoryId ?? ""}
            onChange={(e) => setCategoryId(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Sin categoría</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Extracto" hint="Resumen breve que aparece en las tarjetas">
          <textarea className={`${inputCls} resize-none`} rows={3} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        </Field>

        <Field label="Contenido" hint="Separa los párrafos con una línea en blanco">
          <textarea
            className={`${inputCls} resize-y`}
            rows={16}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribe el contenido del artículo…"
          />
        </Field>
      </div>
    </div>
  );
}

// ── Bits ─────────────────────────────────────────────────────
const inputCls =
  "w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">{label}</label>
      {children}
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
