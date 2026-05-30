import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as bg, c as createSsrRpc } from "./reveal-CbUhlXyA.mjs";
import { a as createServerFn } from "./server-DODrafgD.mjs";
import { M as Mail } from "../_libs/lucide-react.mjs";
import { s as stringType, o as objectType } from "../_libs/zod.mjs";
const subscribeNewsletter = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  email: stringType().email("Correo no válido"),
  // Honeypot anti-spam: debe llegar vacío.
  website: stringType().optional().default("")
})).handler(createSsrRpc("fdfa8495d6093eac94c3dfc913fb5983fa499612e7aaf15f367760bef891f7d9"));
const emailSchema = stringType().email();
function NewsletterBlock({
  variant = "panel"
}) {
  const [email, setEmail] = reactExports.useState("");
  const [website, setWebsite] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!emailSchema.safeParse(email).success) {
      toast.error("Introduce un correo válido");
      return;
    }
    setStatus("loading");
    try {
      await subscribeNewsletter({ data: { email, website } });
      setStatus("done");
      setEmail("");
      toast.success("¡Listo! Revisa tu correo para confirmar.");
    } catch {
      setStatus("idle");
      toast.error("No se pudo completar la suscripción. Inténtalo de nuevo.");
    }
  };
  const form = /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "flex flex-col sm:flex-row gap-3 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "email",
        required: true,
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "tu@correo.com",
        "aria-label": "Correo electrónico",
        className: "flex-1 rounded-full bg-paper border border-input px-5 py-3 text-ink placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        tabIndex: -1,
        autoComplete: "off",
        value: website,
        onChange: (e) => setWebsite(e.target.value),
        className: "hidden",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: status === "loading",
        className: "rounded-full bg-brand-teal text-white px-7 py-3 text-sm font-medium hover:bg-brand-teal-dark transition-colors disabled:opacity-60 whitespace-nowrap",
        children: status === "loading" ? "Enviando…" : status === "done" ? "¡Suscrito!" : "Suscribirme"
      }
    )
  ] });
  if (variant === "compact") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "not-prose my-12 rounded-xl border border-border bg-muted/60 p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-brand-teal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-brand-teal", children: "Newsletter quincenal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl mb-4 text-ink", children: "Recibe cada análisis directo en tu correo" }),
      form
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-bg text-white", style: { ["--bg"]: `url(${bg.newsletter})` }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-cream/70", children: "Únete a la comunidad" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl leading-tight mt-3 mb-4 text-balance", children: "Análisis quincenal, sin ruido" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 max-w-xl mx-auto mb-8", children: "Suscríbete y recibe ensayos sobre política, sociedad, estrategia y emprendimiento. Ideas para pensar el presente y diseñar el mañana." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-lg mx-auto", children: form })
  ] }) });
}
export {
  NewsletterBlock as N
};
