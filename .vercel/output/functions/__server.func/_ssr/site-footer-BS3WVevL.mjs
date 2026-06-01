import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, e as Menu } from "../_libs/lucide-react.mjs";
const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/articulos", label: "Mi opinión" },
  { to: "/contacto", label: "Contacto" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-display font-bold text-xl md:text-2xl text-brand-teal tracking-tight", children: "Oswaldo Smarrelli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal mt-1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: "pb-0.5 font-medium text-foreground/70 hover:text-brand-teal transition-colors",
          activeProps: { className: "text-brand-teal font-semibold underline underline-offset-8 decoration-2" },
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
          className: "md:hidden p-2 -mr-2 text-ink",
          "aria-label": "Abrir menú",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden border-t border-border bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "px-6 py-3 flex flex-col gap-1 text-sm", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: item.to,
        className: "block py-2.5 px-3 rounded-lg font-medium text-foreground/70 hover:text-brand-teal transition-colors",
        activeProps: { className: "text-brand-teal font-semibold bg-brand-teal/10" },
        activeOptions: { exact: item.to === "/" },
        onClick: () => setOpen(false),
        children: item.label
      }
    ) }, item.to)) }) })
  ] });
}
function SiteFooter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-ink text-white/80 py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto text-center space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
      "© ",
      year,
      " oswaldosmarrelli.com. Todos los derechos reservados."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand-teal", children: "Legal y Política de Privacidad" })
  ] }) });
}
export {
  SiteFooter as S,
  SiteHeader as a
};
