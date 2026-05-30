import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { F as Facebook, I as Instagram, L as Linkedin, T as Twitter } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
const schema = objectType({
  nombre: stringType().trim().min(2, "Tu nombre, por favor").max(100),
  mensaje: stringType().trim().min(10, "Cuéntame un poco más").max(2e3)
});
function ContactForm({
  buttonClassName = "bg-brand-teal text-white hover:bg-brand-teal/90"
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
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Mensaje enviado. Te respondo pronto.");
    setForm({ nombre: "", mensaje: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-6", noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "nombre", className: "block text-sm text-white", children: "Nombre*" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "nombre",
          type: "text",
          value: form.nombre,
          onChange: (e) => setForm({ ...form, nombre: e.target.value }),
          className: "w-full bg-transparent border border-white/50 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
        }
      ),
      errors.nombre && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/90", children: errors.nombre })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "mensaje", className: "block text-sm text-white", children: "Mensaje" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: "mensaje",
          rows: 6,
          value: form.mensaje,
          onChange: (e) => setForm({ ...form, mensaje: e.target.value }),
          className: "w-full bg-transparent border border-white/50 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
        }
      ),
      errors.mensaje && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/90", children: errors.mensaje })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70", children: "* Indica los campos obligatorios" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: submitting,
        className: `w-full py-3.5 text-sm tracking-wide rounded-sm transition-colors disabled:opacity-60 ${buttonClassName}`,
        children: submitting ? "ENVIANDO..." : "ENVIAR"
      }
    )
  ] });
}
const allSocials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" }
];
function SocialLinks({
  only,
  className = ""
}) {
  const list = only ? allSocials.filter((s) => only.includes(s.label)) : allSocials;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex gap-3 ${className}`, children: list.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: s.href,
      "aria-label": s.label,
      className: "inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/40 text-white hover:border-white hover:text-brand-teal transition-colors",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" })
    },
    s.label
  )) });
}
export {
  ContactForm as C,
  SocialLinks as S
};
