import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-BS3WVevL.mjs";
import { C as ContactBand } from "./contact-band-ByW3HjSP.mjs";
import { R as Route$1, b as articles, c as categories, f as formatDate } from "./router-CzOu8QcY.mjs";
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
import "./contact-form-C73HDMn0.mjs";
import "./forms-DXzJfmEe.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const heroBg = "/assets/image-background-q8Yix3YT.png";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-ink bg-cover bg-center text-white", style: {
        backgroundImage: `url(${heroBg})`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/75" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl mx-auto text-brand-teal", children: "OPINIÓN CON SENTIDO, PALABRAS QUE NACEN DE LA REFLEXIÓN Y EL COMPROMISO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-white/60", children: "www.oswaldosmarrelli.com" })
        ] })
      ] }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-start text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-full mb-4", children: a.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl leading-snug text-foreground transition-colors group-hover:text-brand-teal", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4 flex-1", children: a.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-border flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              formatDate(a.date),
              " · ",
              a.readingTime,
              " min"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-sm font-medium text-brand-teal", children: [
              "Leer",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ] })
          ] })
        ] }, a.slug)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ArticulosPage as component
};
