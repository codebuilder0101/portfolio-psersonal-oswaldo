import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as submitLead } from "./forms-CzoxsSfr.mjs";
import { M as Mail } from "../_libs/lucide-react.mjs";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
function NewsletterBlock({ compact = false }) {
  const [email, setEmail] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      toast.error("Introduce un correo electrónico válido.");
      return;
    }
    setLoading(true);
    try {
      await submitLead("Newsletter", { email });
      toast.success("¡Gracias! Te has suscrito al Análisis Quincenal.");
      setEmail("");
    } catch {
      toast.error("No se pudo completar la suscripción. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };
  const form = /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "flex flex-col sm:flex-row gap-3 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: compact ? "nl-email-c" : "nl-email", className: "sr-only", children: "Tu correo electrónico" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: compact ? "nl-email-c" : "nl-email",
        type: "email",
        required: true,
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "tu@correo.com",
        className: "flex-1 rounded-full bg-white/95 border border-white/40 px-5 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/60"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-ink/85 transition-colors disabled:opacity-60 whitespace-nowrap",
        children: loading ? "Enviando…" : "Suscribirme"
      }
    )
  ] });
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "my-14 rounded-2xl bg-brand-teal text-white p-7 md:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl mb-1", children: "Análisis Quincenal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-sm leading-relaxed mb-5", children: "Cada dos semanas, una reflexión en tu correo. Sin ruido." }),
      form
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-teal text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-16 md:py-20 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
      " Newsletter"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl mt-4 mb-3", children: "Análisis Quincenal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 max-w-xl mx-auto leading-relaxed mb-8", children: "Cada dos semanas, una reflexión profunda sobre los temas que definen nuestra época. Únete a la comunidad de lectores." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl mx-auto", children: form })
  ] }) });
}
const portrait = "/assets/oswaldo-portrait-Cn0On1Qk.jpeg";
export {
  NewsletterBlock as N,
  portrait as p
};
