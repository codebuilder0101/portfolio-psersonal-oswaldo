import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm, SocialLinks } from "@/components/contact-form";
import { site } from "@/lib/site";
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      {/* Background image covers the whole contact section */}
      <main
        className="relative flex-1 bg-ink bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          {/* Heading */}
          <div className="mb-12 md:mb-16">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-5">
              HABLEMOS
            </h1>
            <p className="font-display text-2xl md:text-3xl text-white/90 max-w-xl leading-snug">
              Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia.
            </p>
          </div>

          {/* Modern contact card */}
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
            {/* Form */}
            <div className="bg-card p-8 md:p-10 lg:p-12">
              <ContactForm tone="light" />
            </div>
            {/* Contact info */}
            <div className="bg-brand-teal text-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-sm text-white/85 mb-2">Correo electrónico:</p>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4 mb-8 break-all"
              >
                <Mail className="h-5 w-5 shrink-0" />
                {site.email}
              </a>
              <p className="text-sm text-white/85 mb-4">Sígueme</p>
              <SocialLinks only={["Facebook", "Instagram", "X / Twitter"]} tone="brand" />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
