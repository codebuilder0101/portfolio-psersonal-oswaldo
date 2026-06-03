import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { frases, frasesSocial } from "@/lib/frases";

export const Route = createFileRoute("/frases")({
  head: () => ({
    meta: [
      { title: "El Poder de las Frases — Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "El Poder de las Frases es un proyecto personal nacido para elevar el valor de las palabras bien dichas.",
      },
      { property: "og:title", content: "El Poder de las Frases" },
      {
        property: "og:description",
        content: "Creo en las frases que se quedan, que motivan, despiertan ideas y dan sentido.",
      },
      { property: "og:url", content: "/frases" },
    ],
    links: [{ rel: "canonical", href: "/frases" }],
  }),
  component: FrasesPage,
});

// Logo de TikTok (lucide no incluye marca TikTok).
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 0h-3v15.5a3 3 0 1 1-3-3c.2 0 .4 0 .6.05v-3.1a6 6 0 1 0 5.4 6V8.4a7.4 7.4 0 0 0 4.5 1.5V6.8a4.4 4.4 0 0 1-4.5-4.3V0z" />
    </svg>
  );
}

function FrasesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Manifiesto / introducción */}
        <section className="bg-cream">
          <div className="max-w-3xl mx-auto px-6 pt-20 md:pt-28 pb-14 md:pb-20 text-center">
            <span className="block h-1 w-12 rounded-full bg-brand-terracotta mx-auto mb-7" />
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-foreground tracking-tight text-balance">
              El Poder de las Frases
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/85 text-balance">
              El Poder de las Frases es un proyecto personal nacido para elevar el valor de las
              palabras bien dichas. Creo en las frases que se quedan, que motivan una decisión,
              despiertan una idea, ponen orden y dan sentido a lo que vivimos: la vida, la
              sociedad, el liderazgo, la libertad y las emociones.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-terracotta">
              Puedes seguir este proyecto en Instagram y TikTok
            </p>
          </div>
        </section>

        {/* 2. Colección de frases */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-10 md:mb-12">
              Frases que se quedan
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {frases.map((frase, i) => (
                <figure
                  key={i}
                  className="rounded-2xl bg-card border border-border shadow-sm p-8 flex flex-col"
                >
                  <span
                    className="font-display text-5xl leading-none text-brand-terracotta mb-3"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="font-display text-xl leading-snug text-foreground text-balance">
                    {frase}
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Logo de la cuenta + 4. Enlaces */}
        <section className="bg-cream">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            {/* TODO (CLIENTE): reemplazar este distintivo por el logo real de la cuenta. */}
            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg shadow-black/10">
              <span className="font-display font-bold text-[11px] leading-tight tracking-wide px-4">
                EL PODER DE LAS FRASES
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              Sígueme en redes
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Nuevas frases cada semana en Instagram y TikTok.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={frasesSocial.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-teal text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand-teal/90 transition-colors"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a
                href={frasesSocial.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-teal text-brand-teal px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand-teal hover:text-white transition-colors"
              >
                <TikTokIcon className="h-5 w-5" /> TikTok
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
