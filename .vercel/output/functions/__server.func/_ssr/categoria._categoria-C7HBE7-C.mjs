import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-9qGk-_3j.mjs";
import { A as ArticleCard } from "./article-card-BdwlYoMf.mjs";
import { N as NewsletterBlock } from "./newsletter-block-CDwOuImS.mjs";
import { a as bgForCategory, R as Reveal } from "./reveal-CbUhlXyA.mjs";
import { R as Route$1 } from "./router-Drg4k5g4.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "./server-DODrafgD.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function CategoriaPage() {
  const {
    categoria,
    items
  } = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, { overlay: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-bg relative -mt-16 md:-mt-20 text-cream", style: {
        ["--bg"]: `url(${bgForCategory(categoria)})`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pt-44 md:pb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos", className: "inline-flex items-center gap-2 eyebrow text-cream/70 hover:text-cream transition-colors mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
          " Mi opinión"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-cream/70", children: "Categoría" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold text-4xl md:text-6xl tracking-tight mt-3", children: categoria }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-cream/80", children: [
          items.length,
          " ",
          items.length === 1 ? "artículo" : "artículos"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10", children: items.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }) }, a.slug)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  CategoriaPage as component
};
