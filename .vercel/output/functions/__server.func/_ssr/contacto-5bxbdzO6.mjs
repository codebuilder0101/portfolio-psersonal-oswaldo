import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-BS3WVevL.mjs";
import { C as ContactForm, S as SocialLinks } from "./contact-form-C73HDMn0.mjs";
import { s as site } from "./forms-DXzJfmEe.mjs";
import "../_libs/sonner.mjs";
import { M as Mail } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
const heroBg1 = "/assets/image-background1-BTtnEc14.jpg";
function ContactoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative flex-1 bg-ink bg-cover bg-center", style: {
      backgroundImage: `url(${heroBg1})`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/75" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto px-6 py-20 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 md:mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-6xl text-brand-teal mb-5", children: "HABLEMOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl text-brand-teal/90 max-w-xl leading-snug", children: "Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card p-8 md:p-10 lg:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, { tone: "light" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-teal text-white p-8 md:p-10 lg:p-12 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/85 mb-2", children: "Correo electrónico:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${site.email}`, className: "inline-flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4 mb-8 break-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 shrink-0" }),
              site.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/85 mb-4", children: "Sígueme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { only: ["Facebook", "Instagram", "X / Twitter"], tone: "brand" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactoPage as component
};
