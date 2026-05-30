import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-9qGk-_3j.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as bg, R as Reveal, c as createSsrRpc } from "./reveal-CbUhlXyA.mjs";
import { a as createServerFn } from "./server-DODrafgD.mjs";
import { s as site, e as socials } from "./router-Drg4k5g4.mjs";
import "../_libs/seroval.mjs";
import { M as Mail, I as Instagram, F as Facebook, c as Linkedin, T as Twitter } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const sendContactMessage = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  nombre: stringType().trim().min(2, "Tu nombre, por favor").max(100),
  email: stringType().trim().email("Correo no válido"),
  asunto: stringType().trim().max(150).optional().default(""),
  mensaje: stringType().trim().min(10, "Cuéntame un poco más").max(3e3),
  // Honeypot anti-spam.
  website: stringType().optional().default("")
})).handler(createSsrRpc("713c2d46e1bc9cba4ef43dcaf8386594ee2f7c6f8c94bb4b8feae4ce5b937fe9"));
const schema = objectType({
  nombre: stringType().trim().min(2, "Tu nombre, por favor").max(100),
  email: stringType().trim().email("Correo no válido"),
  asunto: stringType().trim().max(150).optional(),
  mensaje: stringType().trim().min(10, "Cuéntame un poco más").max(3e3)
});
const empty = { nombre: "", email: "", asunto: "", mensaje: "" };
function ContactForm() {
  const [form, setForm] = reactExports.useState(empty);
  const [website, setWebsite] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErr = {};
      parsed.error.issues.forEach((i) => {
        fieldErr[String(i.path[0])] = i.message;
      });
      setErrors(fieldErr);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await sendContactMessage({ data: { ...parsed.data, asunto: parsed.data.asunto ?? "", website } });
      toast.success("Mensaje enviado. Te respondo pronto.");
      setForm(empty);
    } catch {
      toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };
  const field = "w-full rounded-lg bg-paper border border-input px-4 py-3 text-ink placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "nombre", className: "block text-sm font-medium text-ink", children: "Nombre *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "nombre",
            type: "text",
            value: form.nombre,
            onChange: (e) => setForm({ ...form, nombre: e.target.value }),
            className: field
          }
        ),
        errors.nombre && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: errors.nombre })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-ink", children: "Correo *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "email",
            type: "email",
            value: form.email,
            onChange: (e) => setForm({ ...form, email: e.target.value }),
            className: field
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: errors.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "asunto", className: "block text-sm font-medium text-ink", children: "Asunto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "asunto",
          type: "text",
          value: form.asunto,
          onChange: (e) => setForm({ ...form, asunto: e.target.value }),
          className: field
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "mensaje", className: "block text-sm font-medium text-ink", children: "Mensaje *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: "mensaje",
          rows: 6,
          value: form.mensaje,
          onChange: (e) => setForm({ ...form, mensaje: e.target.value }),
          className: `${field} resize-none`
        }
      ),
      errors.mensaje && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: errors.mensaje })
    ] }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "* Campos obligatorios" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: submitting,
        className: "w-full sm:w-auto rounded-full bg-brand-teal text-white px-8 py-3.5 text-sm font-medium hover:bg-brand-teal-dark transition-colors disabled:opacity-60",
        children: submitting ? "Enviando…" : "Enviar mensaje"
      }
    )
  ] });
}
const socialList = [
  { icon: Facebook, label: "Facebook", href: socials.facebook },
  { icon: Instagram, label: "Instagram", href: socials.instagram },
  { icon: Linkedin, label: "LinkedIn", href: socials.linkedin },
  { icon: Twitter, label: "X / Twitter", href: socials.x }
];
function SocialLinks({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex gap-3 ${className}`, children: socialList.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: s.href,
      "aria-label": s.label,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-soft hover:border-brand-teal hover:text-brand-teal transition-colors",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" })
    },
    s.label
  )) });
}
function ContactoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, { overlay: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-bg relative -mt-16 md:-mt-20 text-cream", style: {
        ["--bg"]: `url(${bg.contacto})`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pt-44 md:pb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-cream/70 anim-fade-up", children: "Contacto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold text-4xl md:text-6xl tracking-tight mt-4 text-balance anim-fade-up anim-delay-1", children: "Hablemos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl text-cream/85 max-w-xl anim-fade-up anim-delay-2", children: "Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "rounded-2xl border border-border bg-paper p-6 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-ink mb-4", children: "Otros canales" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${site.email}`, className: "inline-flex items-center gap-3 text-ink-soft hover:text-brand-teal transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
              site.email
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-muted-foreground mb-3", children: "Sígueme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-brand-blue text-white p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4 text-brand-teal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "eyebrow text-cream/70", children: [
                "@",
                site.instagramHandle
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 text-sm leading-relaxed", children: "El poder de las frases — citas e ideas que invitan a pensar, cada semana." })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactoPage as component
};
