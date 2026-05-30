import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-9qGk-_3j.mjs";
import { A as ArticleCard } from "./article-card-BdwlYoMf.mjs";
import { N as NewsletterBlock } from "./newsletter-block-CDwOuImS.mjs";
import { g as getFeatured, b as articles, s as site, f as formatDate, e as socials } from "./router-Drg4k5g4.mjs";
import { M as MediaLogos, g as galleryImages } from "./gallery-Oxad3FYA.mjs";
import { b as bg, R as Reveal, a as bgForCategory } from "./reveal-CbUhlXyA.mjs";
import { p as portrait } from "./oswaldo-portrait-5fTWhhVp.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { a as ArrowRight, I as Instagram } from "../_libs/lucide-react.mjs";
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
function InstagramFeed({ count = 6 }) {
  const items = galleryImages.slice(0, count);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-brand-teal", children: "Instagram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-ink mt-2", children: "El poder de las frases" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: socials.instagram,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-brand-teal transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
            "@",
            site.instagramHandle
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3", children: items.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: socials.instagram,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group relative block aspect-square overflow-hidden rounded-lg bg-muted",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src,
              alt: `Publicación de Instagram ${i + 1}`,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 grid place-items-center bg-ink/0 group-hover:bg-ink/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" }) })
        ]
      }
    ) }, src)) })
  ] }) });
}
const principles = [{
  title: "Presentación",
  body: "Un espacio para compartir ideas que inspiren y hagan reflexionar. Contenido diverso sobre vida, ciudadanía, sociedad, política, gerencia y tecnología."
}, {
  title: "Diálogo",
  body: "Aquí no se pretende tener la última palabra. El sitio se nutre del intercambio con personas curiosas, críticas y con ganas de seguir aprendiendo."
}, {
  title: "Participación",
  body: "Cuantas más voces se sumen al diálogo, más posibilidades de construir ideas con impacto. Explora, céntrate en lo que te interese y comparte lo que resuene."
}];
function HomePage() {
  const featured = getFeatured();
  const latest = articles.filter((a) => a.slug !== featured?.slug).slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, { overlay: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero-bg relative -mt-16 md:-mt-20 min-h-[88vh] flex items-center text-cream", style: {
        ["--bg"]: `url(${bg.home})`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-kenburns", style: {
          backgroundImage: `url(${bg.home})`
        }, "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center pt-28 pb-16 md:py-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-cream/70 anim-fade-up", children: site.brand }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold text-[2.8rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight mt-4 text-balance anim-fade-up anim-delay-1", children: "Ideas que crean criterio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-cream/85 max-w-xl reading-measure anim-fade-up anim-delay-2", children: "Creo en la fuerza de las palabras y en su capacidad para mover voluntades. No escribo para gustar: cada artículo es una forma de ordenar lo que pienso y compartirlo es acercarme a quienes creen que las ideas pueden cambiar realidades." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 anim-fade-up anim-delay-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos", className: "inline-flex items-center gap-2 rounded-full bg-brand-teal text-white px-6 py-3 text-sm font-medium hover:bg-brand-teal-dark transition-colors", children: [
                "Leer mi opinión ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sobre-mi", className: "inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-6 py-3 text-sm font-medium hover:bg-cream/10 transition-colors", children: "Sobre mí" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block anim-scale-in anim-delay-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-cream/20 shadow-2xl shadow-black/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Retrato de Oswaldo Smarrelli", className: "h-full w-full object-cover" }) }) })
        ] })
      ] }),
      featured && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-brand-teal", children: "Artículo destacado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos/$slug", params: {
          slug: featured.slug
        }, className: "group mt-5 grid md:grid-cols-2 gap-8 md:gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 md:order-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-muted-foreground", children: featured.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl leading-[1.05] text-ink mt-3 text-balance transition-colors group-hover:text-brand-teal-dark", children: featured.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-relaxed text-muted-foreground text-pretty", children: featured.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-sm text-muted-foreground", children: [
              formatDate(featured.date),
              " · ",
              featured.readingTime,
              " min de lectura"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-teal", children: [
              "Leer artículo",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 md:order-2 tile-photo aspect-[16/11] overflow-hidden rounded-2xl group-hover:scale-[1.02]", style: {
            backgroundImage: `url(${featured.cover ?? bgForCategory(featured.category)})`
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] grid place-items-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl md:text-3xl italic text-white text-center text-balance drop-shadow-lg", children: featured.category }) }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-ink", children: "Últimos artículos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos", className: "hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-brand-teal transition-colors whitespace-nowrap", children: [
            "Ver todos ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10", children: latest.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }) }, a.slug)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-bg bg-fixed text-cream", style: {
        ["--bg"]: `url(${bg.manifiesto})`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-10 md:gap-12", children: principles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 90, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3 text-cream", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 leading-relaxed text-[0.95rem]", children: p.body })
      ] }, p.title)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MediaLogos, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramFeed, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
