import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-CGzVCfIw.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as site, a as submitLead } from "./forms-CzoxsSfr.mjs";
import { M as Mail, F as Facebook, I as Instagram, e as Linkedin } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
const schema = objectType({
  nombre: stringType().trim().min(2, "Tu nombre, por favor").max(100),
  mensaje: stringType().trim().min(10, "Cuéntame un poco más").max(2e3)
});
function ContactForm({
  tone = "dark",
  buttonClassName
}) {
  const [form, setForm] = reactExports.useState({ nombre: "", mensaje: "" });
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
      await submitLead("Contacto", { nombre: form.nombre, mensaje: form.mensaje });
      toast.success("Mensaje enviado. Te respondo pronto.");
      setForm({ nombre: "", mensaje: "" });
    } catch {
      toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };
  const light = tone === "light";
  const labelCls = light ? "text-foreground font-medium" : "text-white";
  const fieldCls = light ? "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition" : "w-full bg-transparent border border-white/50 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors";
  const helperCls = light ? "text-muted-foreground" : "text-white/70";
  const errCls = light ? "text-brand-teal" : "text-white/90";
  const btnCls = buttonClassName ?? "bg-brand-teal text-white hover:bg-brand-teal/90";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "nombre", className: `block text-sm ${labelCls}`, children: "Nombre*" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "nombre",
          type: "text",
          value: form.nombre,
          onChange: (e) => setForm({ ...form, nombre: e.target.value }),
          className: fieldCls
        }
      ),
      errors.nombre && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${errCls}`, children: errors.nombre })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "mensaje", className: `block text-sm ${labelCls}`, children: "Mensaje" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: "mensaje",
          rows: 6,
          value: form.mensaje,
          onChange: (e) => setForm({ ...form, mensaje: e.target.value }),
          className: `${fieldCls} resize-none`
        }
      ),
      errors.mensaje && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${errCls}`, children: errors.mensaje })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs ${helperCls}`, children: "* Indica los campos obligatorios" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: submitting,
        className: `w-full py-3.5 text-sm font-medium tracking-wide rounded-lg transition-colors disabled:opacity-60 ${btnCls}`,
        children: submitting ? "ENVIANDO..." : "ENVIAR"
      }
    )
  ] });
}
function XIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
}
const allSocials = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/16GYUVZi1q/?mibextid=wwXIfr"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/oswaldosmarrellit?igsh=MThobDUwdzlqeXRqeA%3D%3D&utm_source=qr"
  },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/oswaldosmarrelli" },
  {
    icon: XIcon,
    label: "X / Twitter",
    href: "https://x.com/o_smarrelli?s=21&t=1YRgSzYmXmOetHg4hAti6g"
  }
];
function SocialLinks({
  only,
  tone = "dark",
  className = ""
}) {
  const list = only ? allSocials.filter((s) => only.includes(s.label)) : allSocials;
  const itemCls = tone === "light" ? "border-border text-foreground/70 hover:text-white hover:bg-brand-teal hover:border-brand-teal" : tone === "brand" ? "border-white/60 text-white hover:bg-white hover:text-brand-teal hover:border-white" : "border-white/40 text-white hover:text-brand-teal hover:border-white";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex gap-3 ${className}`, children: list.map((s) => {
    const external = s.href !== "#";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: s.href,
        "aria-label": s.label,
        ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: `inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${itemCls}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" })
      },
      s.label
    );
  }) });
}
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-6xl text-white mb-5", children: "HABLEMOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl text-white/90 max-w-xl leading-snug", children: "Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia." })
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
