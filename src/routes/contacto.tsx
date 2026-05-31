import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm, SocialLinks } from "@/components/contact-form";
import heroBg1 from "@/assets/image-background1.jpg";

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

function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative bg-ink bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${heroBg1})` }}
        >
          <div className="absolute inset-0 bg-ink/60" />
          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-brand-teal mb-6">
              HABLEMOS
            </h1>
            <p className="font-display text-2xl md:text-3xl text-brand-teal/90 max-w-xl leading-snug">
              Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia.
            </p>
          </div>
        </section>

        {/* Form panel */}
        <section className="bg-ink px-6 pb-20">
          <div className="max-w-7xl mx-auto bg-[#6d6f72] grid md:grid-cols-2 gap-12 lg:gap-20 p-8 md:p-14 rounded-sm">
            <ContactForm buttonClassName="bg-brand-blue text-white hover:bg-brand-blue/90" />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-white/90 mb-6">Correo electrónico:</p>
              <SocialLinks only={["Facebook", "Instagram", "X / Twitter"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
