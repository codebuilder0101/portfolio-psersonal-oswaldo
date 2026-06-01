import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-BS3WVevL.mjs";
import { C as ContactBand } from "./contact-band-ByW3HjSP.mjs";
import { s as site } from "./forms-DXzJfmEe.mjs";
import { p as portrait, N as NewsletterBlock } from "./oswaldo-portrait-CB5_pz-Y.mjs";
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
import "./contact-form-C73HDMn0.mjs";
import "../_libs/zod.mjs";
function MediaStrip() {
  const outlets = site.mediaOutlets;
  const hasLogos = outlets.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal mb-8", children: "Visto en" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16", children: hasLogos ? outlets.map(
      (o) => o.url ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: o.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "opacity-60 hover:opacity-100 transition-opacity",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { outlet: o })
        },
        o.name
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { outlet: o }) }, o.name)
    ) : Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-9 w-28 rounded-md bg-muted border border-border",
        "aria-hidden": true
      },
      i
    )) })
  ] }) });
}
function Logo({ outlet }) {
  if (outlet.logo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: outlet.logo,
        alt: outlet.name,
        className: "h-8 md:h-9 w-auto object-contain grayscale",
        loading: "lazy"
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-xl text-foreground/70", children: outlet.name });
}
function InstagramFeed() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal", children: "Instagram" }) }),
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
const stats = [{
  value: "+ 20 AÑOS",
  label: "de experiencia"
}, {
  value: "100%",
  label: "Confianza"
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:h-[calc(100vh-5rem)] bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Retrato de Oswaldo Smarrelli", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl xl:text-5xl leading-[1.1] text-brand-teal mb-6 lg:whitespace-nowrap", children: "CRITERIOS Y PROPÓSITOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/80 max-w-md text-justify", children: "Creo en la fuerza de las palabras, en el poder de las frases y en su capacidad para despertar y mover voluntades, no busco tener la razón, busco sembrar dudas y crear criterios nuevos. No escribo para gustar, cada artículo es una forma de ordenar lo que pienso y compartirlos es acercarme a quienes como yo siguen creyendo que las ideas pueden cambiar realidades." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MediaStrip, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-10", children: columns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-9 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-1 w-10 rounded-full bg-brand-teal mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-4 leading-tight", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-[15px] leading-relaxed text-muted-foreground text-justify", children: c.body })
      ] }, c.title)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground text-justify", children: "Las ideas nos unen y las palabras nos conectan, aquí empieza nuestro diálogo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-10 md:gap-20", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-brand-teal/30 pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-4xl md:text-5xl text-brand-teal leading-none whitespace-nowrap", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: s.label })
        ] }, s.label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramFeed, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "LinkedIn", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
