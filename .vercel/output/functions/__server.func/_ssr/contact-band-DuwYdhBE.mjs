import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SocialLinks, C as ContactForm } from "./contact-form-Bq80LZ0I.mjs";
function ContactBand({
  socials
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 rounded-3xl overflow-hidden border border-border shadow-xl shadow-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-teal text-white p-8 md:p-12 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl mb-8", children: "ESCRÍBEME" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 mb-4", children: "Correo electrónico:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { only: socials, tone: "brand" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card p-8 md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, { tone: "light" }) })
  ] }) }) });
}
export {
  ContactBand as C
};
