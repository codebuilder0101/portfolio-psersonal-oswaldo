import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-CGzVCfIw.mjs";
import { s as site } from "./forms-CzoxsSfr.mjs";
import { p as portrait, N as NewsletterBlock } from "./oswaldo-portrait-BcRpIJzR.mjs";
import "../_libs/sonner.mjs";
import { I as Instagram, a as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function InstagramFeed() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta", children: "Instagram" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: site.instagramUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal/75 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
            " Seguir"
          ]
        }
      )
    ] }),
    // Honest fallback until the widget embed is configured
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: site.instagramUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group block rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all p-10 md:p-14 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mb-2", children: "Sigue el diario visual en Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground max-w-md mx-auto", children: [
            "Frases, ideas y reflexiones en @",
            site.instagramHandle,
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-teal", children: [
            "Ver perfil",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] })
        ]
      }
    )
  ] }) });
}
const columns = [{
  title: "Presentación",
  body: "Es un verdadero placer darte la bienvenida a mi web, aunque con forma de blog, está pensado para compartir ideas que puedan inspirarte, hacerte reflexionar. Aquí encontrarás contenido diverso e interesante que quizás quieras comentar o compartir. Mi intención es ofrecer un lugar donde distintos temas puedan dialogarse con libertad: vida, ciudadanía, sociedad, política, gerencia, tecnología y más.."
}, {
  title: "Diálogo y planificación del futuro",
  body: "Estos temas inciden en cómo pensamos y actuamos, tanto en lo inmediato como en lo que está por venir. Aquí no pretendemos tener la última palabra, por eso este sitio se nutre del intercambio con personas como tú: curiosas, críticas y con ganas de seguir aprendiendo. Estoy convencido que formaremos un gran equipo, conectado por historias, preguntas y proyectos apasionantes, mientras cada quien sigue adelante con su vida diaria.",
  highlight: true
}, {
  title: "Participación",
  body: "Tú participación es valiosa: cuantas más voces se sumen al diálogo, más posibilidades tendremos de construir ideas con impacto. Explora, céntrate en los temas que más te interesen y comparte aquello que resuene contigo."
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:h-[calc(100vh-5rem)] min-h-[32rem] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Retrato de Oswaldo Smarrelli", className: "absolute inset-0 w-full h-full object-cover object-top origin-top scale-[1.2] md:-translate-x-[9%]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent md:bg-gradient-to-l md:from-black/80 md:via-black/40 md:to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-end md:items-center justify-start md:justify-end px-6 md:px-12 lg:px-20 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl xl:text-5xl leading-[1.1] mb-6 lg:whitespace-nowrap drop-shadow-sm", children: "CRITERIOS Y PROPÓSITOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-white/90 max-w-md text-justify", children: "Creo en la fuerza de las palabras, en el poder de las frases y en su capacidad para despertar y mover voluntades, no busco tener la razón, busco sembrar dudas y crear criterios nuevos. No escribo para gustar, cada artículo es una forma de ordenar lo que pienso y compartirlos es acercarme a quienes como yo siguen creyendo que las ideas pueden cambiar realidades." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-10", children: columns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-9 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-1 w-10 rounded-full bg-brand-terracotta mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-4 leading-tight", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-[15px] leading-relaxed text-muted-foreground text-justify", children: c.body })
      ] }, c.title)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramFeed, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
