import { useState } from "react";
import { toast } from "sonner";

export function NewsletterBlock({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Introduce un correo válido");
      return;
    }
    toast.success("¡Suscripción recibida! Pronto recibirás el primer análisis.");
    setEmail("");
  };

  if (compact) {
    return (
      <form
        onSubmit={handleSubmit}
        className="border-t border-b border-border py-12 my-12 grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h3 className="font-display text-2xl mb-2">Suscríbete al Análisis Quincenal</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Cada dos semanas, una reflexión profunda en tu correo. Sin ruido.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="flex-1 bg-transparent border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
          />
          <button
            type="submit"
            className="bg-foreground text-background font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-accent transition-colors"
          >
            Suscribirme
          </button>
        </div>
      </form>
    );
  }

  return (
    <section className="my-24 bg-foreground text-background p-10 md:p-20 rounded-sm grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Newsletter
        </span>
        <h2 className="font-display text-4xl md:text-5xl italic mb-6 text-balance">
          Análisis Quincenal
        </h2>
        <p className="opacity-70 leading-relaxed text-pretty max-w-md">
          Cada dos semanas, una reflexión profunda sobre los eventos que definen nuestra
          época. Sin ruido. Sólo ideas que merecen tu tiempo.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-mono text-[10px] uppercase tracking-widest opacity-60" htmlFor="nl-email">
          Tu correo electrónico
        </label>
        <input
          id="nl-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nombre@correo.com"
          className="bg-transparent border-b border-background/30 py-3 focus:border-accent outline-none font-mono text-sm placeholder:text-background/30"
        />
        <button
          type="submit"
          className="bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest py-4 mt-4 hover:bg-background hover:text-foreground transition-colors"
        >
          Suscribirme →
        </button>
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-2">
          Sin spam. Cancela cuando quieras.
        </p>
      </form>
    </section>
  );
}
