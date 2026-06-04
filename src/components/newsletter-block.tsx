import { useState } from "react";
import { toast } from "sonner";
import { Mail, Clock } from "lucide-react";
import { submitLead } from "@/lib/forms";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Newsletter signup for the author's biweekly "Análisis Quincenal".
 * `compact` renders an inline band (used at the end of articles);
 * default renders a full card section (used on the home page).
 */
export function NewsletterBlock({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
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

  const form = (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <label htmlFor={compact ? "nl-email-c" : "nl-email"} className="sr-only">
        Tu correo electrónico
      </label>
      <input
        id={compact ? "nl-email-c" : "nl-email"}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@correo.com"
        className="flex-1 rounded-full bg-white/95 border border-white/40 px-5 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/60"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-ink/85 transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {loading ? "Enviando…" : "Suscribirme"}
      </button>
    </form>
  );

  if (compact) {
    return (
      <section className="my-14 rounded-2xl bg-brand-teal text-white p-7 md:p-9">
        <h3 className="font-display font-bold text-2xl mb-1">Análisis Quincenal</h3>
        <p className="text-white/85 text-sm leading-relaxed mb-5">
          Cada dos semanas, una reflexión en tu correo. Sin ruido.
        </p>
        {form}
      </section>
    );
  }

  return (
    <section className="bg-brand-teal text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          <Mail className="h-4 w-4" /> Newsletter
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-4 mb-3">
           Muy pronto podrás unirte a mi comunidad de lectores
        </h2>
        <p className="text-white/85 max-w-xl mx-auto leading-relaxed mb-8">
          Ideas, reflexiones y frases que invitan a pensa
        </p>
        <div className="max-w-xl mx-auto">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-8 py-3.5 text-sm font-semibold tracking-wide cursor-not-allowed select-none"
          >
            <Clock className="h-4 w-4" />
            Próximamente
          </button>
        </div>
      </div>
    </section>
  );
}
