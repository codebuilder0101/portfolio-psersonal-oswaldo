import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Cw7zo4v8.mjs";
import { C as ContactForm, S as SocialLinks } from "./contact-form-eP_bap_t.mjs";
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
import "../_libs/zod.mjs";
function ContactoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-ink text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-ink via-ink to-brand-blue/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-20 md:py-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-6xl text-brand-teal mb-6", children: "HABLEMOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl text-brand-teal/90 max-w-xl leading-snug", children: "Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto bg-[#6d6f72] grid md:grid-cols-2 gap-12 lg:gap-20 p-8 md:p-14 rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, { buttonClassName: "bg-brand-blue text-white hover:bg-brand-blue/90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/90 mb-6", children: "Correo electrónico:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { only: ["Facebook", "Instagram", "X / Twitter"] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactoPage as component
};
