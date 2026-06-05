import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-CmTn1p48.mjs";
import { p as portrait, N as NewsletterBlock } from "./oswaldo-portrait-3o1rNaiM.mjs";
import { a as ArrowRight, i as Instagram } from "../_libs/lucide-react.mjs";
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
const frasesSocial = {
  instagram: "https://www.instagram.com/poderdelafrases/",
  tiktok: "https://www.tiktok.com/@elpoderdelasfrases"
};
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
function TikTokIcon({
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 0h-3v15.5a3 3 0 1 1-3-3c.2 0 .4 0 .6.05v-3.1a6 6 0 1 0 5.4 6V8.4a7.4 7.4 0 0 0 4.5 1.5V6.8a4.4 4.4 0 0 1-4.5-4.3V0z" }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:h-[calc(100vh-5rem)] min-h-[32rem] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Retrato de Oswaldo Smarrelli", className: "absolute inset-0 w-full h-full object-cover object-top origin-top scale-[1.2] md:-translate-x-[9%]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent md:bg-gradient-to-l md:from-black/80 md:via-black/40 md:to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-end md:items-center justify-start md:justify-end px-6 md:px-12 lg:px-20 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl xl:text-5xl leading-[1.1] mb-6 lg:whitespace-nowrap drop-shadow-sm", children: "CRITERIOS Y PROPÓSITOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-white/90 max-w-md text-justify", children: "Creo en la fuerza de las palabras, en el poder de las frases y en su capacidad para despertar y mover voluntades, no busco tener la razón, busco sembrar dudas y crear criterios nuevos. No escribo para gustar, cada artículo es una forma de ordenar lo que pienso y compartirlos es acercarme a quienes como yo siguen creyendo que las ideas pueden cambiar realidades." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos", className: "group mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue px-8 py-3.5 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:bg-cream hover:text-brand-blue transition-colors", children: [
            "Mis articulos",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-10", children: columns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-9 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-1 w-10 rounded-full bg-brand-terracotta mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-4 leading-tight", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-[15px] leading-relaxed text-muted-foreground text-justify", children: c.body })
      ] }, c.title)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "frases", className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-20 md:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-1 w-12 rounded-full bg-brand-terracotta mx-auto mb-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl leading-[1.05] text-foreground tracking-tight text-balance", children: "El Poder de las Frases" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg md:text-xl leading-relaxed text-foreground/85 text-balance", children: "El Poder de las Frases es un proyecto personal nacido para elevar el valor de las palabras bien dichas. Creo en las frases que se quedan, que motivan una decisión, despiertan una idea, ponen orden y dan sentido a lo que vivimos: la vida, la sociedad, el liderazgo, la libertad y las emociones." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-terracotta", children: "Puedes seguir este proyecto en Instagram y TikTok" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl md:text-3xl text-foreground mb-2", children: "Sígueme en redes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-md mx-auto", children: "Nuevas frases cada semana en Instagram y TikTok." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: frasesSocial.instagram, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-brand-teal text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand-teal/90 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5" }),
              " Instagram"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: frasesSocial.tiktok, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-brand-teal text-brand-teal px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand-teal hover:text-white transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TikTokIcon, { className: "h-5 w-5" }),
              " TikTok"
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
