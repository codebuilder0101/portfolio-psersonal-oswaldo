import { ContactForm, SocialLinks } from "@/components/contact-form";

/**
 * Modern "ESCRÍBEME" contact section shown at the bottom of Inicio,
 * Sobre mí and Mi opinión. `socials` lets each page choose which icons to show.
 */
export function ContactBand({
  socials,
}: {
  socials?: ReadonlyArray<"Facebook" | "Instagram" | "LinkedIn" | "X / Twitter">;
}) {
  return (
    <section className="bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border border-border shadow-xl shadow-black/5">
          {/* Teal info panel */}
          <div className="bg-brand-teal text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">ESCRÍBEME</h2>
            <p className="text-sm text-white/80 mb-4">Correo electrónico:</p>
            <SocialLinks only={socials} tone="brand" />
          </div>

          {/* Form */}
          <div className="bg-card p-8 md:p-12">
            <ContactForm tone="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
