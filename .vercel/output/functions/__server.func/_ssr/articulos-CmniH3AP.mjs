import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useChildMatches, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-9qGk-_3j.mjs";
import { A as ArticleCard } from "./article-card-BdwlYoMf.mjs";
import { b as articles, c as categories, d as countByCategory } from "./router-Drg4k5g4.mjs";
import { N as NewsletterBlock } from "./newsletter-block-CDwOuImS.mjs";
import { b as bg, R as Reveal } from "./reveal-CbUhlXyA.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-DODrafgD.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
function CategoryFilter({ value, onChange, total }) {
  const items = [
    { key: "", label: "Todos", count: total },
    ...categories.map((c) => ({ key: c, label: c, count: countByCategory(c) }))
  ].filter((i) => i.key === "" || i.count > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: items.map((item) => {
    const active = value === item.key;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => onChange(item.key),
        "aria-pressed": active,
        className: `inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors ${active ? "border-brand-teal bg-brand-teal text-white" : "border-border bg-paper text-ink-soft hover:border-brand-teal hover:text-brand-teal"}`,
        children: [
          item.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: active ? "text-white/70" : "text-muted-foreground", children: item.count })
        ]
      },
      item.key || "all"
    );
  }) });
}
function ArticulosLayout() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticulosIndex, {});
}
function ArticulosIndex() {
  const [category, setCategory] = reactExports.useState("");
  const filtered = reactExports.useMemo(() => category ? articles.filter((a) => a.category === category) : articles, [category]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, { overlay: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-bg relative -mt-16 md:-mt-20 text-cream", style: {
        ["--bg"]: `url(${bg.articulos})`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pt-44 md:pb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-cream/70 anim-fade-up", children: "Mi opinión" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold text-4xl md:text-6xl leading-[1.04] tracking-tight mt-4 max-w-3xl text-balance anim-fade-up anim-delay-1", children: "Opinión con sentido, palabras que nacen de la reflexión" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-cream/80 max-w-2xl anim-fade-up anim-delay-2", children: "Ensayos y columnas sobre política, sociedad, estrategia y emprendimiento." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryFilter, { value: category, onChange: setCategory, total: articles.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10", children: filtered.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }) }, a.slug)) }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-16", children: "No hay artículos en esta categoría todavía." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ArticulosLayout as component
};
