import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as site, n as nav, e as socials, c as categories } from "./router-Drg4k5g4.mjs";
import { X, d as Menu, F as Facebook, I as Instagram, c as Linkedin, T as Twitter } from "../_libs/lucide-react.mjs";
function SiteHeader({ overlay = false }) {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || open || !overlay;
  const light = overlay && !solid;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `sticky top-0 z-50 transition-colors duration-300 ${solid ? "bg-paper/90 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16 md:h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex flex-col leading-none", onClick: () => setOpen(false), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `font-display font-semibold text-xl md:text-2xl tracking-tight ${light ? "text-cream" : "text-ink"}`,
                children: site.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `eyebrow text-[0.6rem] mt-0.5 ${light ? "text-cream/70" : "text-brand-teal"}`,
                children: site.brand
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-7", children: nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              className: `link-underline text-[0.8rem] font-medium tracking-wide transition-colors ${light ? "text-cream/85 hover:text-cream" : "text-ink-soft hover:text-brand-teal"}`,
              activeProps: { className: light ? "text-cream" : "text-brand-teal" },
              activeOptions: { exact: item.to === "/" },
              children: item.label
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen((v) => !v),
              className: `md:hidden p-2 -mr-2 ${light ? "text-cream" : "text-ink"}`,
              "aria-label": open ? "Cerrar menú" : "Abrir menú",
              "aria-expanded": open,
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }) }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden border-t border-border bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "px-5 py-3 flex flex-col", children: nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: "block py-3 text-base font-medium text-ink-soft border-b border-border/60 last:border-0",
            activeProps: { className: "text-brand-teal" },
            activeOptions: { exact: item.to === "/" },
            onClick: () => setOpen(false),
            children: item.label
          }
        ) }, item.to)) }) })
      ]
    }
  );
}
const socialList = [
  { icon: Facebook, label: "Facebook", href: socials.facebook },
  { icon: Instagram, label: "Instagram", href: socials.instagram },
  { icon: Linkedin, label: "LinkedIn", href: socials.linkedin },
  { icon: Twitter, label: "X / Twitter", href: socials.x }
];
function SiteFooter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-ink text-cream/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-2xl text-cream", children: site.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-brand-teal mt-1", children: site.brand }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-sm text-sm leading-relaxed text-cream/70", children: "Columnista de opinión y consultor estratégico. Ideas que siembran dudas y crean criterio." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-6", children: socialList.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: s.href,
            "aria-label": s.label,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 text-cream/80 hover:border-brand-teal hover:text-brand-teal transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" })
          },
          s.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Navegación", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-cream/50 mb-4", children: "Navegación" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.to, className: "hover:text-brand-teal transition-colors", children: item.label }) }, item.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Temas", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-cream/50 mb-4", children: "Temas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/categoria/$categoria",
            params: { categoria: c },
            className: "hover:text-brand-teal transition-colors",
            children: c
          }
        ) }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-6 border-t border-cream/15 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-cream/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        year,
        " ",
        site.name,
        ". Todos los derechos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hecho con criterio y propósito." })
    ] })
  ] }) });
}
export {
  SiteFooter as S,
  SiteHeader as a
};
