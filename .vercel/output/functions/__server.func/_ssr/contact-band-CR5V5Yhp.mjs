import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SocialLinks, C as ContactForm } from "./contact-form-eP_bap_t.mjs";
function ContactBand({
  socials
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-blue text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:pt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-12", children: "ESCRÍBEME" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 mb-6", children: "Correo electrónico:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { only: socials })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
  ] }) });
}
export {
  ContactBand as C
};
