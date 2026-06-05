import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  Save,
  Loader2,
  ImagePlus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Plus,
  X,
} from "lucide-react";
import {
  adminCheck,
  adminGetArticle,
  adminListCategories,
  adminSaveArticle,
  adminUploadImage,
} from "@/lib/api/admin.functions";

type BlockType = "p" | "h2" | "h3" | "quote" | "image";
interface Block {
  type: BlockType;
  text: string;
}

const BLOCK_LABEL: Record<BlockType, string> = {
  p: "Párrafo",
  h2: "Subtítulo (H2)",
  h3: "Subtítulo (H3)",
  quote: "Cita",
  image: "Imagen",
};

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

async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await adminUploadImage({ data: fd });
  return res.url;
}

function Editor() {
  const { categories, article } = Route.useLoaderData();
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const isNew = id === "new";

  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [categoryId, setCategoryId] = useState<number | null>(article?.categoryId ?? categories[0]?.id ?? null);
  const [date, setDate] = useState(article?.date ?? new Date().toISOString().slice(0, 10));
  const [readingTime, setReadingTime] = useState(article?.readingTime ?? 5);
  const [featured, setFeatured] = useState(article?.featured ?? false);
  const [tags, setTags] = useState((article?.tags ?? []).join(", "));
  const [hero, setHero] = useState<string | null>(article?.hero ?? null);
  const [body, setBody] = useState<Block[]>((article?.body as Block[]) ?? []);
  const [saving, setSaving] = useState(false);

  const setBlock = (i: number, patch: Partial<Block>) =>
    setBody((b) => b.map((blk, idx) => (idx === i ? { ...blk, ...patch } : blk)));
  const addBlock = (type: BlockType) => setBody((b) => [...b, { type, text: "" }]);
  const removeBlock = (i: number) => setBody((b) => b.filter((_, idx) => idx !== i));
  const moveBlock = (i: number, dir: -1 | 1) =>
    setBody((b) => {
      const j = i + dir;
      if (j < 0 || j >= b.length) return b;
      const next = [...b];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

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
            slug: slug.trim(),
            title: title.trim(),
            excerpt: excerpt.trim(),
            categoryId,
            date,
            readingTime: Number(readingTime) || 1,
            featured,
            hero,
            tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
            body: body.filter((b) => b.text.trim() !== ""),
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

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Slug (URL)" hint="Se genera del título si lo dejas vacío">
            <input className={inputCls} value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="mi-articulo" />
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
        </div>

        <Field label="Extracto" hint="Resumen breve que aparece en las tarjetas">
          <textarea className={`${inputCls} resize-none`} rows={3} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        </Field>

        <div className="grid sm:grid-cols-3 gap-5">
          <Field label="Fecha">
            <input type="date" className={inputCls} value={date} onChange={(e) => setDate(e.target.value)} />
          </Field>
          <Field label="Lectura (min)">
            <input type="number" min={1} className={inputCls} value={readingTime} onChange={(e) => setReadingTime(Number(e.target.value))} />
          </Field>
          <Field label="Destacado">
            <label className="inline-flex items-center gap-2 h-[46px] px-1 cursor-pointer">
              <input type="checkbox" className="h-5 w-5 accent-[var(--brand-teal)]" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
              <span className="text-sm text-muted-foreground">Marcar como destacado</span>
            </label>
          </Field>
        </div>

        <Field label="Etiquetas" hint="Separadas por comas">
          <input className={inputCls} value={tags} onChange={(e) => setTags(e.target.value)} placeholder="política, sociedad" />
        </Field>

        <Field label="Imagen de portada">
          <ImageField value={hero} onChange={setHero} />
        </Field>

        {/* Body editor */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Contenido</label>
          <div className="space-y-3">
            {body.map((blk, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <select
                    className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm text-foreground focus:outline-none focus:border-brand-teal"
                    value={blk.type}
                    onChange={(e) => setBlock(i, { type: e.target.value as BlockType })}
                  >
                    {(Object.keys(BLOCK_LABEL) as BlockType[]).map((t) => (
                      <option key={t} value={t}>
                        {BLOCK_LABEL[t]}
                      </option>
                    ))}
                  </select>
                  <div className="ml-auto flex items-center gap-1">
                    <IconBtn onClick={() => moveBlock(i, -1)} aria-label="Subir"><ChevronUp className="h-4 w-4" /></IconBtn>
                    <IconBtn onClick={() => moveBlock(i, 1)} aria-label="Bajar"><ChevronDown className="h-4 w-4" /></IconBtn>
                    <IconBtn onClick={() => removeBlock(i)} aria-label="Eliminar" danger><Trash2 className="h-4 w-4" /></IconBtn>
                  </div>
                </div>
                {blk.type === "image" ? (
                  <ImageField value={blk.text || null} onChange={(url) => setBlock(i, { text: url ?? "" })} />
                ) : (
                  <textarea
                    className={`${inputCls} resize-y`}
                    rows={blk.type === "p" ? 4 : 2}
                    value={blk.text}
                    onChange={(e) => setBlock(i, { text: e.target.value })}
                    placeholder={BLOCK_LABEL[blk.type]}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {(Object.keys(BLOCK_LABEL) as BlockType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => addBlock(t)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/80 hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                <Plus className="h-3.5 w-3.5" /> {BLOCK_LABEL[t]}
              </button>
            ))}
          </div>
        </div>
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

function IconBtn({
  children,
  onClick,
  danger,
  ...rest
}: { children: React.ReactNode; onClick: () => void; danger?: boolean } & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/60 transition-colors ${
        danger ? "hover:bg-destructive hover:text-white hover:border-destructive" : "hover:bg-muted"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

function ImageField({ value, onChange }: { value: string | null; onChange: (url: string | null) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const pick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      onChange(url);
      toast.success("Imagen subida");
    } catch {
      toast.error("No se pudo subir la imagen");
    } finally {
      setUploading(false);
      if (ref.current) ref.current.value = "";
    }
  };

  return (
    <div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={pick} />
      {value ? (
        <div className="relative inline-block">
          <img src={value} alt="" className="max-h-48 rounded-xl border border-border" />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute -top-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white shadow"
            aria-label="Quitar imagen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => ref.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border bg-card px-5 py-4 text-sm font-medium text-foreground/70 hover:border-brand-teal hover:text-brand-teal transition-colors disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
          Subir imagen
        </button>
      )}
    </div>
  );
}
