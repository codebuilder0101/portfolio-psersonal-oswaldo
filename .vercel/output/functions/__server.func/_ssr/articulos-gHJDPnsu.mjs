import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Cw7zo4v8.mjs";
import { C as ContactBand } from "./contact-band-CR5V5Yhp.mjs";
import { a as articles } from "./router-Ck_X0tkF.mjs";
import "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
import "./contact-form-eP_bap_t.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ArticulosPage() {
  const total = articles.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-ink text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-ink via-brand-blue/40 to-ink opacity-90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl mx-auto", children: "OPINIÓN CON SENTIDO, PALABRAS QUE NACEN DE LA REFLEXIÓN Y EL COMPROMISO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-white/60", children: "www.oswaldosmarrelli.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-16 md:py-24", children: articles.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border-t border-border py-12 md:py-16 flex items-center justify-between gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl uppercase text-foreground mb-4 leading-tight", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed mb-6", children: a.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/articulos/$slug", params: {
            slug: a.slug
          }, className: "inline-block bg-brand-blue text-white text-xs tracking-wide px-5 py-2.5 rounded-sm hover:bg-brand-teal transition-colors", children: "MÁS INFORMACIÓN" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-6xl md:text-8xl text-foreground/90 shrink-0 leading-none", "aria-hidden": true, children: String(total - i).padStart(2, "0") })
      ] }, a.slug)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ArticulosPage as component
};
