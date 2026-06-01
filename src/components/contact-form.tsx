import { useState, type ComponentType } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { submitLead } from "@/lib/forms";

const schema = z.object({
  nombre: z.string().trim().min(2, "Tu nombre, por favor").max(100),
  mensaje: z.string().trim().min(10, "Cuéntame un poco más").max(2000),
});

type Tone = "light" | "dark";

export function ContactForm({
  tone = "dark",
  buttonClassName,
}: {
  tone?: Tone;
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
  const fieldCls = light
    ? "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition"
    : "w-full bg-transparent border border-white/50 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors";
  const helperCls = light ? "text-muted-foreground" : "text-white/70";
  const errCls = light ? "text-brand-teal" : "text-white/90";
  const btnCls = buttonClassName ?? "bg-brand-teal text-white hover:bg-brand-teal/90";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <label htmlFor="nombre" className={`block text-sm ${labelCls}`}>
          Nombre*
        </label>
        <input
          id="nombre"
          type="text"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className={fieldCls}
        />
        {errors.nombre && <p className={`text-sm ${errCls}`}>{errors.nombre}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className={`block text-sm ${labelCls}`}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={6}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className={`${fieldCls} resize-none`}
        />
        {errors.mensaje && <p className={`text-sm ${errCls}`}>{errors.mensaje}</p>}
      </div>

      <p className={`text-xs ${helperCls}`}>* Indica los campos obligatorios</p>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-3.5 text-sm font-medium tracking-wide rounded-lg transition-colors disabled:opacity-60 ${btnCls}`}
      >
        {submitting ? "ENVIANDO..." : "ENVIAR"}
      </button>
    </form>
  );
}

// X (formerly Twitter) brand logo.
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

type SocialLabel = "Facebook" | "Instagram" | "LinkedIn" | "X / Twitter";

const allSocials: { icon: ComponentType<{ className?: string }>; label: SocialLabel; href: string }[] = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/16GYUVZi1q/?mibextid=wwXIfr",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/oswaldosmarrellit?igsh=MThobDUwdzlqeXRqeA%3D%3D&utm_source=qr",
  },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/oswaldosmarrelli" },
  {
    icon: XIcon,
    label: "X / Twitter",
    href: "https://x.com/o_smarrelli?s=21&t=1YRgSzYmXmOetHg4hAti6g",
  },
];

export function SocialLinks({
  only,
  tone = "dark",
  className = "",
}: {
  only?: ReadonlyArray<SocialLabel>;
  tone?: "light" | "dark" | "brand";
  className?: string;
}) {
  const list = only ? allSocials.filter((s) => only.includes(s.label)) : allSocials;
  const itemCls =
    tone === "light"
      ? "border-border text-foreground/70 hover:text-white hover:bg-brand-teal hover:border-brand-teal"
      : tone === "brand"
        ? "border-white/60 text-white hover:bg-white hover:text-brand-teal hover:border-white"
        : "border-white/40 text-white hover:text-brand-teal hover:border-white";
  return (
    <div className={`flex gap-3 ${className}`}>
      {list.map((s) => {
        const external = s.href !== "#";
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${itemCls}`}
          >
            <s.icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
