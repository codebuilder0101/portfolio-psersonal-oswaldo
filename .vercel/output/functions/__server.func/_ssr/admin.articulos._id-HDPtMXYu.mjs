import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { e as Route, k as adminSaveArticle, m as adminUploadImage } from "./router-CRc2_FoN.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft, k as LoaderCircle, S as Save, f as ChevronUp, c as ChevronDown, r as Trash2, p as Plus, X, I as ImagePlus } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-Bzpzupt-.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
const BLOCK_LABEL = {
  p: "Párrafo",
  h2: "Subtítulo (H2)",
  h3: "Subtítulo (H3)",
  quote: "Cita",
  image: "Imagen"
};
async function uploadImage(file) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await adminUploadImage({
    data: fd
  });
  return res.url;
}
function Editor() {
  const {
    categories,
    article
  } = Route.useLoaderData();
  const {
    id
  } = Route.useParams();
  const navigate = useNavigate();
  const isNew = id === "new";
  const [title, setTitle] = reactExports.useState(article?.title ?? "");
  const [slug, setSlug] = reactExports.useState(article?.slug ?? "");
  const [excerpt, setExcerpt] = reactExports.useState(article?.excerpt ?? "");
  const [categoryId, setCategoryId] = reactExports.useState(article?.categoryId ?? categories[0]?.id ?? null);
  const [date, setDate] = reactExports.useState(article?.date ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const [readingTime, setReadingTime] = reactExports.useState(article?.readingTime ?? 5);
  const [featured, setFeatured] = reactExports.useState(article?.featured ?? false);
  const [tags, setTags] = reactExports.useState((article?.tags ?? []).join(", "));
  const [hero, setHero] = reactExports.useState(article?.hero ?? null);
  const [body, setBody] = reactExports.useState(article?.body ?? []);
  const [saving, setSaving] = reactExports.useState(false);
  const setBlock = (i, patch) => setBody((b) => b.map((blk, idx) => idx === i ? {
    ...blk,
    ...patch
  } : blk));
  const addBlock = (type) => setBody((b) => [...b, {
    type,
    text: ""
  }]);
  const removeBlock = (i) => setBody((b) => b.filter((_, idx) => idx !== i));
  const moveBlock = (i, dir) => setBody((b) => {
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
            body: body.filter((b) => b.text.trim() !== "")
          }
        }
      });
      toast.success(isNew ? "Artículo creado" : "Artículo guardado");
      navigate({
        to: "/admin"
      });
    } catch {
      toast.error("No se pudo guardar");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin", className: "inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Volver"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: save, disabled: saving, className: "inline-flex items-center gap-2 rounded-xl bg-brand-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-teal/90 transition-colors disabled:opacity-60", children: [
        saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
        "Guardar"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl md:text-3xl text-foreground mb-6", children: isNew ? "Nuevo artículo" : "Editar artículo" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Título *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: title, onChange: (e) => setTitle(e.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Slug (URL)", hint: "Se genera del título si lo dejas vacío", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: slug, onChange: (e) => setSlug(e.target.value), placeholder: "mi-articulo" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Categoría", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, value: categoryId ?? "", onChange: (e) => setCategoryId(e.target.value ? Number(e.target.value) : null), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Sin categoría" }),
          categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.id, children: c.name }, c.id))
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Extracto", hint: "Resumen breve que aparece en las tarjetas", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: `${inputCls} resize-none`, rows: 3, value: excerpt, onChange: (e) => setExcerpt(e.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fecha", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: inputCls, value: date, onChange: (e) => setDate(e.target.value) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lectura (min)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 1, className: inputCls, value: readingTime, onChange: (e) => setReadingTime(Number(e.target.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Destacado", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 h-[46px] px-1 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-5 w-5 accent-[var(--brand-teal)]", checked: featured, onChange: (e) => setFeatured(e.target.checked) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Marcar como destacado" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Etiquetas", hint: "Separadas por comas", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: tags, onChange: (e) => setTags(e.target.value), placeholder: "política, sociedad" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Imagen de portada", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageField, { value: hero, onChange: setHero }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-foreground mb-2", children: "Contenido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: body.map((blk, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm text-foreground focus:outline-none focus:border-brand-teal", value: blk.type, onChange: (e) => setBlock(i, {
              type: e.target.value
            }), children: Object.keys(BLOCK_LABEL).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: BLOCK_LABEL[t] }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { onClick: () => moveBlock(i, -1), "aria-label": "Subir", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { onClick: () => moveBlock(i, 1), "aria-label": "Bajar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { onClick: () => removeBlock(i), "aria-label": "Eliminar", danger: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] })
          ] }),
          blk.type === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ImageField, { value: blk.text || null, onChange: (url) => setBlock(i, {
            text: url ?? ""
          }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: `${inputCls} resize-y`, rows: blk.type === "p" ? 4 : 2, value: blk.text, onChange: (e) => setBlock(i, {
            text: e.target.value
          }), placeholder: BLOCK_LABEL[blk.type] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: Object.keys(BLOCK_LABEL).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => addBlock(t), className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground/80 hover:border-brand-teal hover:text-brand-teal transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
          " ",
          BLOCK_LABEL[t]
        ] }, t)) })
      ] })
    ] })
  ] });
}
const inputCls = "w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition";
function Field({
  label,
  hint,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-foreground mb-1.5", children: label }),
    children,
    hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: hint }) : null
  ] });
}
function IconBtn({
  children,
  onClick,
  danger,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick, className: `inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/60 transition-colors ${danger ? "hover:bg-destructive hover:text-white hover:border-destructive" : "hover:bg-muted"}`, ...rest, children });
}
function ImageField({
  value,
  onChange
}) {
  const ref = reactExports.useRef(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const pick = async (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref, type: "file", accept: "image/*", className: "hidden", onChange: pick }),
    value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "", className: "max-h-48 rounded-xl border border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onChange(null), className: "absolute -top-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white shadow", "aria-label": "Quitar imagen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => ref.current?.click(), disabled: uploading, className: "inline-flex items-center gap-2 rounded-xl border border-dashed border-border bg-card px-5 py-4 text-sm font-medium text-foreground/70 hover:border-brand-teal hover:text-brand-teal transition-colors disabled:opacity-60", children: [
      uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "h-4 w-4" }),
      "Subir imagen"
    ] })
  ] });
}
export {
  Editor as component
};
