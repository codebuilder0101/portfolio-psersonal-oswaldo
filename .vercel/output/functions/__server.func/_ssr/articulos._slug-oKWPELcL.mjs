import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Cw7zo4v8.mjs";
import { R as Route, f as formatDate } from "./router-Ck_X0tkF.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { p as portrait } from "./oswaldo-portrait-C2iPk6O3.mjs";
import { A as ArrowLeft, S as Share2, L as Linkedin, T as Twitter, a as MessageCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const palettes = {
  "Política": { bg: "#1f2a37", ink: "#fcfbf7" },
  "Sociedad": { bg: "#3d2914", ink: "#fcfbf7" },
  "Emprendimiento": { bg: "#c2410c", ink: "#fcfbf7" },
  "Estrategia": { bg: "#f3f1ea", ink: "#1a1817" },
  "Pensamiento": { bg: "#1a1817", ink: "#fcfbf7" }
};
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
function ArticleArtwork({
  slug,
  category,
  className = "",
  big = false
}) {
  const p = palettes[category];
  const h = hash(slug);
  const angle = h % 90 - 45;
  const cx = 20 + h % 60;
  const cy = 20 + (h >> 3) % 60;
  const num = String(h % 99 + 1).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative overflow-hidden ${className}`,
      style: { backgroundColor: p.bg, color: p.ink },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full opacity-25",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid slice",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: `grid-${slug}`, width: "6", height: "6", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 6 0 L 0 0 0 6", fill: "none", stroke: p.ink, strokeWidth: "0.15" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", fill: `url(#grid-${slug})` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: big ? 38 : 32, fill: p.ink, fillOpacity: "0.08" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: "0",
                  y1: "50",
                  x2: "100",
                  y2: "50",
                  stroke: p.ink,
                  strokeWidth: "0.4",
                  strokeOpacity: "0.4",
                  transform: `rotate(${angle} 50 50)`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] opacity-70", children: [
            "№ ",
            num
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display italic leading-none self-end",
              style: { fontSize: big ? "clamp(4rem, 14vw, 11rem)" : "clamp(3rem, 8vw, 6rem)" },
              children: category.charAt(0)
            }
          )
        ] })
      ]
    }
  );
}
function ArticleCard({ article }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/articulos/$slug",
      params: { slug: article.slug },
      className: "block",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 overflow-hidden rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArticleArtwork,
          {
            slug: article.slug,
            category: article.category,
            className: "w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-accent mb-3 block", children: article.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl leading-tight mb-4 group-hover:italic transition-all text-balance", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] text-muted-foreground uppercase tracking-wider", children: [
          formatDate(article.date),
          " — ",
          article.readingTime,
          " min"
        ] })
      ]
    }
  ) });
}
function ShareBar({ title, slug }) {
  const url = typeof window !== "undefined" ? `${window.location.origin}/articulos/${slug}` : `/articulos/${slug}`;
  const text = encodeURIComponent(title);
  const u = encodeURIComponent(url);
  const links = [
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X", icon: Twitter, href: `https://twitter.com/intent/tweet?text=${text}&url=${u}` },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${text}%20${u}` }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-y border-border py-4 my-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3 w-3" }),
      " Compartir"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 ml-auto", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Compartir en ${l.label}`,
        className: "size-9 grid place-items-center border border-border hover:bg-foreground hover:text-background transition-colors rounded-sm",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(l.icon, { className: "h-4 w-4" })
      },
      l.label
    )) })
  ] });
}
function NewsletterBlock({ compact = false }) {
  const [email, setEmail] = reactExports.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Introduce un correo válido");
      return;
    }
    toast.success("¡Suscripción recibida! Pronto recibirás el primer análisis.");
    setEmail("");
  };
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "border-t border-b border-border py-12 my-12 grid md:grid-cols-2 gap-8 items-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Suscríbete al Análisis Quincenal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Cada dos semanas, una reflexión profunda en tu correo. Sin ruido." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "tu@correo.com",
                className: "flex-1 bg-transparent border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "bg-foreground text-background font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-accent transition-colors",
                children: "Suscribirme"
              }
            )
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "my-24 bg-foreground text-background p-10 md:p-20 rounded-sm grid md:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block", children: "Newsletter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic mb-6 text-balance", children: "Análisis Quincenal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-70 leading-relaxed text-pretty max-w-md", children: "Cada dos semanas, una reflexión profunda sobre los eventos que definen nuestra época. Sin ruido. Sólo ideas que merecen tu tiempo." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-widest opacity-60", htmlFor: "nl-email", children: "Tu correo electrónico" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "nl-email",
          type: "email",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: "nombre@correo.com",
          className: "bg-transparent border-b border-background/30 py-3 focus:border-accent outline-none font-mono text-sm placeholder:text-background/30"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest py-4 mt-4 hover:bg-background hover:text-foreground transition-colors",
          children: "Suscribirme →"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest opacity-40 mt-2", children: "Sin spam. Cancela cuando quieras." })
    ] })
  ] });
}
function ArticlePage() {
  const {
    article,
    related
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl mx-auto px-6 pt-12 md:pt-16 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos", className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
          " Mi Opinión"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mb-6 font-mono text-[10px] uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: article.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            formatDate(article.date),
            " · ",
            article.readingTime,
            " min de lectura"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance mb-8", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground leading-relaxed font-display italic text-pretty", children: article.excerpt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleArtwork, { slug: article.slug, category: article.category, big: true, className: "w-full aspect-[16/9] md:aspect-[21/9] rounded-sm" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-6 prose-editorial", children: [
        article.body.map((block, i) => {
          if (block.type === "h2") return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: block.text }, i);
          if (block.type === "h3") return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: block.text }, i);
          if (block.type === "quote") return /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
            '"',
            block.text,
            '"'
          ] }, i);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: block.text }, i);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShareBar, { title: article.title, slug: article.slug }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "not-prose border border-border p-6 md:p-8 my-12 flex gap-6 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Oswaldo Smarrelli", className: "size-20 md:size-24 object-cover rounded-sm grayscale flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-accent mb-2 block", children: "Sobre el autor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: "Oswaldo Smarrelli" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Economista, magíster en gerencia, locutor certificado y articulista por convicción. Más de 20 años acompañando a líderes y organizaciones a pensar el presente para diseñar el mañana." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sobre-mi", className: "inline-block mt-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-accent transition-colors", children: "Leer biografía completa →" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, { compact: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-6 py-20 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl italic mb-12", children: "Seguir leyendo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-x-10 gap-y-16", children: related.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }, a.slug)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ArticlePage as component
};
