import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "Escribe a Oswaldo Smarrelli para colaboraciones editoriales, consultoría estratégica o entrevistas.",
      },
      { property: "og:title", content: "Hablemos — Oswaldo Smarrelli" },
      { property: "og:description", content: "Las buenas ideas comienzan con una conversación." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Tu nombre, por favor").max(100),
  email: z.string().trim().email("Correo no válido").max(255),
  motivo: z.string().min(1, "Elige un motivo"),
  mensaje: z.string().trim().min(10, "Cuéntame un poco más").max(2000),
});

const motivos = [
  "Consultoría estratégica",
  "Conferencia o charla",
  "Entrevista de prensa",
  "Colaboración editorial",
  "Otro",
];

function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", motivo: "", mensaje: "" });
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
    setForm({ nombre: "", email: "", motivo: "", mensaje: "" });
  };

  const field = (id: keyof typeof form, label: string, type: "text" | "email" = "text") => (
    <div className="space-y-2">
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
      />
      {errors[id] && <p className="text-xs text-accent font-mono">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
              Contacto
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6 text-balance">
              Hablemos.
            </h1>
            <p className="font-display italic text-2xl md:text-3xl text-muted-foreground max-w-2xl text-pretty">
              Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia.
            </p>
          </section>

          <section className="grid md:grid-cols-12 gap-12 py-16">
            <form onSubmit={onSubmit} className="md:col-span-7 space-y-8" noValidate>
              <div className="grid md:grid-cols-2 gap-8">
                {field("nombre", "Nombre *")}
                {field("email", "Email *", "email")}
              </div>

              <div className="space-y-2">
                <label htmlFor="motivo" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Motivo *
                </label>
                <select
                  id="motivo"
                  value={form.motivo}
                  onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                >
                  <option value="">Selecciona un motivo</option>
                  {motivos.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                {errors.motivo && <p className="text-xs text-accent font-mono">{errors.motivo}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={6}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full bg-transparent border border-border p-4 focus:outline-none focus:border-foreground transition-colors resize-none"
                />
                {errors.mensaje && <p className="text-xs text-accent font-mono">{errors.mensaje}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto bg-foreground text-background px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors disabled:opacity-50"
              >
                {submitting ? "Enviando..." : "Enviar mensaje"}
              </button>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                * Campos obligatorios
              </p>
            </form>

            <aside className="md:col-span-5 md:pl-12 md:border-l border-border space-y-10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block">
                  Escríbeme directo
                </span>
                <a
                  href="mailto:hola@oswaldosmarrelli.com"
                  className="font-display text-2xl md:text-3xl italic hover:text-accent transition-colors break-all inline-flex items-center gap-3"
                >
                  <Mail className="h-5 w-5" />
                  hola@oswaldosmarrelli.com
                </a>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  En redes
                </span>
                <ul className="space-y-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Instagram, label: "Instagram · @elpoderdelasfrases", href: "#" },
                    { icon: Twitter, label: "X / Twitter", href: "#" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-3 hover:text-accent transition-colors"
                      >
                        <s.icon className="h-4 w-4" />
                        <span>{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-display italic text-lg text-muted-foreground text-pretty">
                  "Las buenas conversaciones son el primer paso de cualquier transformación."
                </p>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
