import { ContactForm, SocialLinks } from "@/components/contact-form";

/**
 * Blue "ESCRÍBEME" contact section shown at the bottom of Inicio,
 * Sobre mí and Mi opinión. `socials` lets each page choose which icons to show.
 */
export function ContactBand({
  socials,
}: {
  socials?: ReadonlyArray<"Facebook" | "Instagram" | "LinkedIn" | "X / Twitter">;
}) {
  return (
    <section className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="md:pt-8">
          <h2 className="font-display text-4xl md:text-5xl mb-12">ESCRÍBEME</h2>
          <p className="text-sm text-white/80 mb-6">Correo electrónico:</p>
          <SocialLinks only={socials} />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
