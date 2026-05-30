import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Cw7zo4v8.mjs";
import { C as ContactBand } from "./contact-band-CR5V5Yhp.mjs";
import { p as portrait } from "./oswaldo-portrait-C2iPk6O3.mjs";
import "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
import "./contact-form-eP_bap_t.mjs";
import "../_libs/zod.mjs";
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:min-h-[88vh] bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Retrato de Oswaldo Smarrelli", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-6 md:px-14 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-brand-teal mb-8", children: "CRITERIOS Y PROPÓSITOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/80", children: "Creo en la fuerza de las palabras, en el poder de las frases y en su capacidad para despertar y mover voluntades, no busco tener la razón, busco sembrar dudas y crear criterios nuevos. No escribo para gustar, cada artículo es una forma de ordenar lo que pienso y compartirlos es acercarme a quienes como yo siguen creyendo que las ideas pueden cambiar realidades." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-blue text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3", children: columns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-8 md:px-10 py-14 md:py-20 ${c.highlight ? "bg-brand-blue-light" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl mb-6 leading-tight", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-[15px] leading-relaxed text-white/85", children: c.body })
      ] }, c.title)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight uppercase text-foreground", children: "Las ideas nos unen y las palabras nos conectan, aquí empieza nuestro diálogo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10 md:pl-10", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-5xl md:text-6xl text-foreground", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg text-muted-foreground mt-1", children: s.label })
        ] }, s.label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "LinkedIn", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
