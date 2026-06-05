import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Mail, g as Clock } from "../_libs/lucide-react.mjs";
function NewsletterBlock({ compact = false }) {
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
      " Newsletter"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl mt-4 mb-3", children: "Muy pronto podrás unirte a mi comunidad de lectores" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 max-w-xl mx-auto leading-relaxed mb-8", children: "Ideas, reflexiones y frases que invitan a pensa" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        disabled: true,
        "aria-disabled": "true",
        className: "inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-8 py-3.5 text-sm font-semibold tracking-wide cursor-not-allowed select-none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
          "Próximamente"
        ]
      }
    )
  ] });
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "my-12 rounded-2xl bg-brand-teal text-white px-6 py-10 text-center", children: content });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-teal text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-16 md:py-20 text-center", children: content }) });
}
const portrait = "/assets/oswaldo-portrait-Cn0On1Qk.jpeg";
export {
  NewsletterBlock as N,
  portrait as p
};
