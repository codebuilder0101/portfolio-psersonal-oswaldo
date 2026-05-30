import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as formatDate } from "./router-Drg4k5g4.mjs";
import { a as bgForCategory } from "./reveal-CbUhlXyA.mjs";
import { b as ArrowUpRight } from "../_libs/lucide-react.mjs";
function ArticleCard({ article }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group flex flex-col h-full overflow-hidden rounded-xl border border-border bg-paper transition-shadow hover:shadow-xl hover:shadow-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/articulos/$slug",
      params: { slug: article.slug },
      className: "flex flex-col h-full",
      "aria-label": article.title,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "tile-photo aspect-[16/9] overflow-hidden group-hover:scale-[1.04]",
            style: { backgroundImage: `url(${article.cover ?? bgForCategory(article.category)})` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 z-[1] inline-block rounded-full bg-cream/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-ink", children: article.category })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-[1.45rem] leading-tight text-ink text-balance transition-colors group-hover:text-brand-teal-dark", children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[0.92rem] leading-relaxed text-muted-foreground line-clamp-3", children: article.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              formatDate(article.date),
              " · ",
              article.readingTime,
              " min"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-teal" })
          ] })
        ] })
      ]
    }
  ) });
}
export {
  ArticleCard as A
};
