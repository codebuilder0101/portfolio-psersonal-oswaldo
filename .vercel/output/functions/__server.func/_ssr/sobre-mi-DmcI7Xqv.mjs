import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-BS3WVevL.mjs";
import { C as ContactBand } from "./contact-band-ByW3HjSP.mjs";
import "../_libs/sonner.mjs";
import { a as ArrowRight, X, b as ChevronLeft, c as ChevronRight } from "../_libs/lucide-react.mjs";
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
function Gallery({ images }) {
  const [index, setIndex] = reactExports.useState(null);
  const open = index !== null;
  const close = reactExports.useCallback(() => setIndex(null), []);
  const prev = reactExports.useCallback(
    () => setIndex((i) => i === null ? i : (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = reactExports.useCallback(
    () => setIndex((i) => i === null ? i : (i + 1) % images.length),
    [images.length]
  );
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setIndex(i),
        "aria-label": `Ver imagen ${i + 1}`,
        className: "group aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt: `Galería ${i + 1}`,
            loading: "lazy",
            className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          }
        )
      },
      src
    )) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-6 animate-fade-up",
        onClick: close,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Galería",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: close,
              "aria-label": "Cerrar",
              className: "absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                prev();
              },
              "aria-label": "Anterior",
              className: "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "max-w-3xl", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-2.5 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: images[index],
                alt: `Galería ${index + 1}`,
                className: "max-h-[78vh] w-auto rounded-lg object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-center text-sm text-white/80", children: [
              index + 1,
              " / ",
              images.length
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                next();
              },
              "aria-label": "Siguiente",
              className: "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6" })
            }
          )
        ]
      }
    )
  ] });
}
const __vite_glob_0_0 = "/assets/01-DXdxQ0lu.jpg";
const __vite_glob_0_1 = "/assets/02-cKvoCXGq.jpg";
const __vite_glob_0_2 = "/assets/03-DT9-FphU.jpg";
const __vite_glob_0_3 = "/assets/04-a2anMXZg.jpg";
const __vite_glob_0_4 = "/assets/05-zxG7jyrx.jpg";
const __vite_glob_0_5 = "/assets/06-CgLWb98Q.jpg";
const __vite_glob_0_6 = "/assets/07-Dsa4yw3J.jpg";
const __vite_glob_0_7 = "/assets/08-vuFUC40z.png";
const __vite_glob_0_8 = "/assets/09-DunQGXw6.jpg";
const __vite_glob_0_9 = "/assets/10-Cj93uBY7.jpg";
const __vite_glob_0_10 = "/assets/11-CjqYd6-b.jpg";
const __vite_glob_0_11 = "/assets/12-DFDmXAKN.jpg";
const __vite_glob_0_12 = "/assets/13-BJ9q27vq.jpg";
const __vite_glob_0_13 = "/assets/14-Qoe-YPHQ.jpg";
const __vite_glob_0_14 = "/assets/15-zXDUHpAI.jpg";
const __vite_glob_0_15 = "/assets/16-DFHKcEQI.jpg";
const __vite_glob_0_16 = "/assets/17-VwVg1vTT.png";
const __vite_glob_0_17 = "/assets/18-CqkCN8SV.jpg";
const __vite_glob_0_18 = "/assets/19-BPgvV7C5.jpg";
const __vite_glob_0_19 = "/assets/20-Bd-YGrnB.jpg";
const __vite_glob_0_20 = "/assets/21-DIL8Q4qc.jpg";
const __vite_glob_0_21 = "/assets/22-DnGDB1D4.jpg";
const __vite_glob_0_22 = "/assets/23-CUNCXGk8.jpg";
const __vite_glob_0_23 = "/assets/24-i2MJSfqa.jpg";
const __vite_glob_0_24 = "/assets/25-BwmV9uKo.jpg";
const __vite_glob_0_25 = "/assets/26-KVwjp_jo.jpg";
const __vite_glob_0_26 = "/assets/27-J9aNRfK6.jpg";
const __vite_glob_0_27 = "/assets/28-DDp4VD-W.jpg";
const __vite_glob_0_28 = "/assets/29-Fb2MWySo.jpg";
const __vite_glob_0_29 = "/assets/30-BXUTNSM7.jpg";
const __vite_glob_0_30 = "/assets/31-BbgGSn3l.jpg";
const __vite_glob_0_31 = "/assets/32-BTFQF16p.jpg";
const __vite_glob_0_32 = "/assets/33-LALK19Ku.jpg";
const __vite_glob_0_33 = "/assets/image-background-q8Yix3YT.png";
const __vite_glob_0_34 = "/assets/image-background1-BTtnEc14.jpg";
const __vite_glob_0_35 = "/assets/image-new-C_s1VTCn.png";
const __vite_glob_0_36 = "/assets/oswaldo-portrait-IZLttOq9.jpg";
const __vite_glob_0_37 = "/assets/photo-2-D6mQB-nV.jpg";
const imageNew = "/assets/image-new-C_s1VTCn.png";
const modules = /* @__PURE__ */ Object.assign({
  "../assets/01.jpg": __vite_glob_0_0,
  "../assets/02.jpg": __vite_glob_0_1,
  "../assets/03.jpg": __vite_glob_0_2,
  "../assets/04.jpg": __vite_glob_0_3,
  "../assets/05.jpg": __vite_glob_0_4,
  "../assets/06.jpg": __vite_glob_0_5,
  "../assets/07.jpg": __vite_glob_0_6,
  "../assets/08.png": __vite_glob_0_7,
  "../assets/09.jpg": __vite_glob_0_8,
  "../assets/10.jpg": __vite_glob_0_9,
  "../assets/11.jpg": __vite_glob_0_10,
  "../assets/12.jpg": __vite_glob_0_11,
  "../assets/13.jpg": __vite_glob_0_12,
  "../assets/14.jpg": __vite_glob_0_13,
  "../assets/15.jpg": __vite_glob_0_14,
  "../assets/16.jpg": __vite_glob_0_15,
  "../assets/17.png": __vite_glob_0_16,
  "../assets/18.jpg": __vite_glob_0_17,
  "../assets/19.jpg": __vite_glob_0_18,
  "../assets/20.jpg": __vite_glob_0_19,
  "../assets/21.jpg": __vite_glob_0_20,
  "../assets/22.jpg": __vite_glob_0_21,
  "../assets/23.jpg": __vite_glob_0_22,
  "../assets/24.jpg": __vite_glob_0_23,
  "../assets/25.jpg": __vite_glob_0_24,
  "../assets/26.jpg": __vite_glob_0_25,
  "../assets/27.jpg": __vite_glob_0_26,
  "../assets/28.jpg": __vite_glob_0_27,
  "../assets/29.jpg": __vite_glob_0_28,
  "../assets/30.jpg": __vite_glob_0_29,
  "../assets/31.jpg": __vite_glob_0_30,
  "../assets/32.jpg": __vite_glob_0_31,
  "../assets/33.jpg": __vite_glob_0_32,
  "../assets/image-background.png": __vite_glob_0_33,
  "../assets/image-background1.jpg": __vite_glob_0_34,
  "../assets/image-new.png": __vite_glob_0_35,
  "../assets/oswaldo-portrait.jpg": __vite_glob_0_36,
  "../assets/photo-2.jpg": __vite_glob_0_37
});
const numbered = Object.entries(modules).filter(([path]) => /\/\d{2}\.(jpe?g|png|webp)$/i.test(path)).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url);
const galleryImages = [...numbered, imageNew];
const portrait = "/assets/photo-2-D6mQB-nV.jpg";
function SobreMi() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-brand-blue text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-6 md:px-14 lg:px-20 py-16 md:py-20 order-2 md:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10 text-balance", children: "¿QUIÉN ES OSWALDO SMARRELLI TORREALBA?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contacto", className: "group inline-flex items-center gap-2 rounded-full bg-brand-teal text-white px-8 py-3.5 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:bg-white hover:text-brand-blue transition-colors", children: [
            "ESCRÍBEME",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 md:order-2 md:h-[calc(100vh-5rem)] flex items-center justify-center p-6 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Oswaldo Smarrelli Torrealba", className: "max-h-full w-auto max-w-full object-contain rounded-2xl shadow-2xl shadow-black/30" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-20 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-brand-teal mb-10", children: "Desafiando límites" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 text-justify", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Soy un ciudadano de pensamiento libre y buenas costumbres. Economista, magíster en gerencia, locutor certificado y articulista por convicción. A lo largo de mi trayectoria he liderado e integrado equipos en empresas e instituciones públicas, esto ha robustecido mi formación y afinado mi desempeño. Creo profundamente que lo único constante es la evolución y por eso me mantengo en aprendizaje constante con mirada renovadora y compromiso tenaz." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Desde muy joven me ha impulsado un gran motivo: "La sociedad" y en su nombre, una pregunta esencial: ¿Cómo contribuir a una sociedad mejor? Esa inquietud me llevó a descubrir otra pasión: "La escritura",  la grandeza de dejar imperecedero el pensamiento a través de palabras y frases me encontró, ese poder que tiene la escritura como herramienta para incidir, proponer y dejar huella. Mi pensamiento lo expreso en artículos, proyectos, conversaciones y creando espacios de formación que siembren conciencia, despierten criterio y generen vínculos, esto no es solo una práctica: es vocación, es entrega y todo lo que pueda aportar en ese camino representa para mí una fuente genuina de satisfacción y aunque, no me considero experto, sí soy un aprendiz constante, comprometido y tenaz en todo aquello en lo que creo y hago.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mi historia esta llena de retos, este es otro de ellos, pero si este sitio sirve de herramienta para conectar lo que creo, lo que hago y lo que sueño, si logra inspirar, movilizar y aportar a la construcción de una sociedad más íntegra, justa y consciente, entonces habrá cumplido su propósito y todos seremos gratamente ganadores." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-10 text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base md:text-lg text-foreground", children: '"Nunca se equivoca quien mira el futuro con esperanza y trabaja con constancia para hacerlo posible"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "font-display font-bold text-sm mt-3 text-foreground", children: "Oswaldo Smarrelli Torrealba" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted border-y border-border py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl text-brand-teal text-center mb-3", children: "GALERÍA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground mb-12", children: "Imágenes con historia, reflejos de un camino" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, { images: galleryImages })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  SobreMi as component
};
