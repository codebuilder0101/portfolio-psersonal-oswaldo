import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouter } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { d as Route$1, f as adminCreateCategory, l as adminUpdateCategory, h as adminDeleteCategory } from "./router-CRc2_FoN.mjs";
import "../_libs/seroval.mjs";
import { p as Plus, C as Check, X, P as Pencil, r as Trash2 } from "../_libs/lucide-react.mjs";
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
function Categorias() {
  const {
    categories
  } = Route$1.useLoaderData();
  const router = useRouter();
  const [name, setName] = reactExports.useState("");
  const [editing, setEditing] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const add = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setBusy(true);
    try {
      await adminCreateCategory({
        data: {
          name: name.trim()
        }
      });
      setName("");
      await router.invalidate();
      toast.success("Categoría creada");
    } catch {
      toast.error("No se pudo crear (¿nombre repetido?)");
    } finally {
      setBusy(false);
    }
  };
  const save = async () => {
    if (!editing || !editing.name.trim()) return;
    try {
      await adminUpdateCategory({
        data: {
          id: editing.id,
          name: editing.name.trim()
        }
      });
      setEditing(null);
      await router.invalidate();
      toast.success("Categoría actualizada");
    } catch {
      toast.error("No se pudo actualizar");
    }
  };
  const remove = async (id, n) => {
    if (!confirm(`¿Eliminar la categoría "${n}"? Los artículos quedarán sin categoría.`)) return;
    try {
      await adminDeleteCategory({
        data: {
          id
        }
      });
      await router.invalidate();
      toast.success("Categoría eliminada");
    } catch {
      toast.error("No se pudo eliminar");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl md:text-3xl text-foreground mb-8", children: "Categorías" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Nueva categoría", className: "flex-1 bg-card border border-border rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: busy || !name.trim(), className: "inline-flex items-center gap-2 rounded-xl bg-brand-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-teal/90 transition-colors disabled:opacity-60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Añadir"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 bg-card border border-border rounded-xl p-3 md:p-4", children: editing?.id === c.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: editing.name, onChange: (e) => setEditing({
        id: c.id,
        name: e.target.value
      }), className: "flex-1 bg-background border border-border rounded-lg px-3 py-1.5 text-foreground focus:outline-none focus:border-brand-teal", autoFocus: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: save, className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal text-white", "aria-label": "Guardar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(null), className: "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/70", "aria-label": "Cancelar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 font-medium text-foreground", children: c.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-foreground/40", children: [
        "/",
        c.slug
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing({
        id: c.id,
        name: c.name
      }), className: "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-muted", "aria-label": "Editar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(c.id, c.name), className: "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-destructive hover:text-white hover:border-destructive transition-colors", "aria-label": "Eliminar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
    ] }) }, c.id)) })
  ] });
}
export {
  Categorias as component
};
