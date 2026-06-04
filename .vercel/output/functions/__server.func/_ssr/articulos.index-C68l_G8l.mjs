import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-CmTn1p48.mjs";
import { R as Route$1, b as articles, c as categories, f as formatDate } from "./router-CgiLCbMP.mjs";
import "../_libs/sonner.mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
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
const heroBg = "/assets/image-background-D_PlxifE.jpeg";
function ArticulosPage() {
  const {
    categoria
  } = Route$1.useSearch();
  const filtered = categoria ? articles.filter((a) => a.category === categoria) : articles;
  const tabs = [{
    label: "Todos",
    value: void 0,
    count: articles.length
  }, ...categories.map((c) => ({
    label: c,
    value: c,
    count: articles.filter((a) => a.category === c).length
  }))];
  const recientes = articles.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "", "aria-hidden": "true", className: "block w-full h-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-50 md:pb-40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl mx-auto text-white drop-shadow-md", children: "OPINIÓN CON SENTIDO, PALABRAS QUE NACEN DE LA REFLEXIÓN Y EL COMPROMISO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-white/70 drop-shadow", children: "www.oswaldosmarrelli.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-14 md:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl text-foreground mb-8 md:mb-10", children: "Artículos recientes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6", children: recientes.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos/$slug", params: {
          slug: a.slug
        }, className: "group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-start text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-terracotta bg-brand-terracotta/10 px-2.5 py-1 rounded-full mb-4", children: a.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg leading-snug text-foreground transition-colors group-hover:text-brand-teal", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1", children: a.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border text-xs text-muted-foreground", children: [
            formatDate(a.date),
            " · ",
            a.readingTime,
            " min"
          ] })
        ] }, a.slug)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-14 md:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2.5 mb-12", children: tabs.map((t) => {
          const active = categoria === t.value || !categoria && !t.value;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos", search: t.value ? {
            categoria: t.value
          } : {}, className: `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${active ? "bg-brand-teal text-white border-brand-teal" : "bg-card text-foreground/70 border-border hover:border-brand-teal hover:text-brand-teal"}`, children: [
            t.label,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs rounded-full px-1.5 py-0.5 ${active ? "bg-white/20" : "bg-muted text-muted-foreground"}`, children: t.count })
          ] }, t.label);
        }) }),
        filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-16", children: "No hay artículos en esta categoría." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos/$slug", params: {
          slug: a.slug
        }, className: "group flex flex-col bg-card border border-border rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-start text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-terracotta bg-brand-terracotta/10 px-2.5 py-1 rounded-full mb-4", children: a.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl leading-snug text-foreground transition-colors group-hover:text-brand-teal", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed flex-1 text-justify", children: a.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-border flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              formatDate(a.date),
              " · ",
              a.readingTime,
              " min"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-sm font-medium text-brand-teal", children: [
              "Leer más",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ] })
          ] })
        ] }, a.slug)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ArticulosPage as component
};
