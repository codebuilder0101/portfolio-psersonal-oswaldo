import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const schema = z.object({
  nombre: z.string().trim().min(2, "Tu nombre, por favor").max(100),
  mensaje: z.string().trim().min(10, "Cuéntame un poco más").max(2000),
});

export function ContactForm({
  buttonClassName = "bg-brand-teal text-white hover:bg-brand-teal/90",
}: {
  buttonClassName?: string;
}) {
  const [form, setForm] = useState({ nombre: "", mensaje: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErr: Record<string, string> = {};
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

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="space-y-2">
        <label htmlFor="nombre" className="block text-sm text-white">
          Nombre*
        </label>
        <input
          id="nombre"
          type="text"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full bg-transparent border border-white/50 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
        />
        {errors.nombre && <p className="text-sm text-white/90">{errors.nombre}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className="block text-sm text-white">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={6}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className="w-full bg-transparent border border-white/50 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
        />
        {errors.mensaje && <p className="text-sm text-white/90">{errors.mensaje}</p>}
      </div>

      <p className="text-xs text-white/70">* Indica los campos obligatorios</p>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-3.5 text-sm tracking-wide rounded-sm transition-colors disabled:opacity-60 ${buttonClassName}`}
      >
        {submitting ? "ENVIANDO..." : "ENVIAR"}
      </button>
    </form>
  );
}

const allSocials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
] as const;

export function SocialLinks({
  only,
  className = "",
}: {
  only?: ReadonlyArray<"Facebook" | "Instagram" | "LinkedIn" | "X / Twitter">;
  className?: string;
}) {
  const list = only ? allSocials.filter((s) => only.includes(s.label)) : allSocials;
  return (
    <div className={`flex gap-3 ${className}`}>
      {list.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/40 text-white hover:border-white hover:text-brand-teal transition-colors"
        >
          <s.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
