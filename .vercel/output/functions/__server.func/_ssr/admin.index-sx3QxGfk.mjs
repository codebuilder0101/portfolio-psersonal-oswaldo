import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as Route$4, g as adminDeleteArticle } from "./router-CRc2_FoN.mjs";
import { f as formatDate } from "./articles-CWL3RU8f.mjs";
import "../_libs/seroval.mjs";
import { p as Plus, q as Star, P as Pencil, r as Trash2 } from "../_libs/lucide-react.mjs";
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
function Dashboard() {
  const {
    articles
  } = Route$4.useLoaderData();
  const router = useRouter();
  const [busy, setBusy] = reactExports.useState(null);
  const remove = async (id, title) => {
    if (!confirm(`¿Eliminar "${title}"? Esta acción no se puede deshacer.`)) return;
    setBusy(id);
    try {
      await adminDeleteArticle({
        data: {
          id
        }
      });
      await router.invalidate();
      toast.success("Artículo eliminado");
    } catch {
      toast.error("No se pudo eliminar");
    } finally {
      setBusy(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl md:text-3xl text-foreground", children: "Artículos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
          articles.length,
          " en total"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/articulos/$id", params: {
        id: "new"
      }, className: "inline-flex items-center gap-2 rounded-xl bg-brand-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-teal/90 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Nuevo artículo"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      articles.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm py-10 text-center bg-card border border-border rounded-2xl", children: "No hay artículos todavía." }),
      articles.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 bg-card border border-border rounded-2xl p-4 md:p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground truncate", children: a.title }),
            a.featured ? /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 text-brand-terracotta fill-brand-terracotta shrink-0" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold uppercase tracking-wide text-brand-terracotta", children: a.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(a.date) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "· ",
              a.readingTime,
              " min"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/40", children: [
              "/",
              a.slug
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/articulos/$id", params: {
            id: String(a.id)
          }, "aria-label": "Editar", className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-muted transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => remove(a.id, a.title), disabled: busy === a.id, "aria-label": "Eliminar", className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-destructive hover:text-white hover:border-destructive transition-colors disabled:opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }, a.id))
    ] })
  ] });
}
export {
  Dashboard as component
};
