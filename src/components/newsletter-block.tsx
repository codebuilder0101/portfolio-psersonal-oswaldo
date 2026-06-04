import { Mail, Clock } from "lucide-react";

/**
 * Newsletter "Análisis Quincenal" — próximamente.
 * `compact` renders an inline rounded band (used at the end of articles);
 * default renders a full-width section (used on the home page).
 * Both variants share the exact same content.
 */
export function NewsletterBlock({ compact = false }: { compact?: boolean }) {
  const content = (
    <>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        <Mail className="h-4 w-4" /> Newsletter
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl mt-4 mb-3">
        Muy pronto podrás unirte a mi comunidad de lectores
      </h2>
      <p className="text-white/85 max-w-xl mx-auto leading-relaxed mb-8">
        Ideas, reflexiones y frases que invitan a pensa
      </p>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-8 py-3.5 text-sm font-semibold tracking-wide cursor-not-allowed select-none"
      >
        <Clock className="h-4 w-4" />
        Próximamente
      </button>
    </>
  );

  if (compact) {
    return (
      <section className="my-12 rounded-2xl bg-brand-teal text-white px-6 py-10 text-center">
        {content}
      </section>
    );
  }

  return (
    <section className="bg-brand-teal text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">{content}</div>
    </section>
  );
}
