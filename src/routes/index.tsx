import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterBlock } from "@/components/newsletter-block";
import { frasesSocial } from "@/lib/frases";
// TODO: replace with the provided home hero photo (sitting portrait).
import portrait from "@/assets/oswaldo-portrait.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "Columnista de opinión y consultor estratégico. Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática.",
      },
      { property: "og:title", content: "Oswaldo Smarrelli" },
      {
        property: "og:description",
        content:
          "Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const columns = [
  {
    title: "Presentación",
    body: "Es un verdadero placer darte la bienvenida a mi web, aunque con forma de blog, está pensado para compartir ideas que puedan inspirarte, hacerte reflexionar. Aquí encontrarás contenido diverso e interesante que quizás quieras comentar o compartir. Mi intención es ofrecer un lugar donde distintos temas puedan dialogarse con libertad: vida, ciudadanía, sociedad, política, gerencia, tecnología y más..",
  },
  {
    title: "Diálogo y planificación del futuro",
    body: "Estos temas inciden en cómo pensamos y actuamos, tanto en lo inmediato como en lo que está por venir. Aquí no pretendemos tener la última palabra, por eso este sitio se nutre del intercambio con personas como tú: curiosas, críticas y con ganas de seguir aprendiendo. Estoy convencido que formaremos un gran equipo, conectado por historias, preguntas y proyectos apasionantes, mientras cada quien sigue adelante con su vida diaria.",
    highlight: true,
  },
  {
    title: "Participación",
    body: "Tú participación es valiosa: cuantas más voces se sumen al diálogo, más posibilidades tendremos de construir ideas con impacto. Explora, céntrate en los temas que más te interesen y comparte aquello que resuene contigo.",
  },
];

// Logo de TikTok (lucide no incluye marca TikTok).
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 0h-3v15.5a3 3 0 1 1-3-3c.2 0 .4 0 .6.05v-3.1a6 6 0 1 0 5.4 6V8.4a7.4 7.4 0 0 0 4.5 1.5V6.8a4.4 4.4 0 0 1-4.5-4.3V0z" />
    </svg>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="relative md:h-[calc(100vh-5rem)] min-h-[32rem] overflow-hidden">
            <img
              src={portrait}
              alt="Retrato de Oswaldo Smarrelli"
              className="absolute inset-0 w-full h-full object-cover object-top origin-top scale-[1.2] md:-translate-x-[9%]"
            />
            {/* Velo de contraste: oscurece sólo el lado del texto, la foto se mantiene */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent md:bg-gradient-to-l md:from-black/80 md:via-black/40 md:to-transparent" />
            <div className="relative h-full flex items-end md:items-center justify-start md:justify-end px-6 md:px-12 lg:px-20 py-12 md:py-16">
              <div className="w-full max-w-xl text-white">
                <h1 className="font-display font-bold text-4xl xl:text-5xl leading-[1.1] mb-6 lg:whitespace-nowrap drop-shadow-sm">
                  CRITERIOS Y PROPÓSITOS
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-md text-justify">
                  Creo en la fuerza de las palabras, en el poder de las frases y en su capacidad
                  para despertar y mover voluntades, no busco tener la razón, busco sembrar dudas y
                  crear criterios nuevos. No escribo para gustar, cada artículo es una forma de
                  ordenar lo que pienso y compartirlos es acercarme a quienes como yo siguen
                  creyendo que las ideas pueden cambiar realidades.
                </p>
                <Link
                  to="/articulos"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue px-8 py-3.5 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:bg-cream hover:text-brand-blue transition-colors"
                >
                  Mis articulos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Three info columns */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-28">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {columns.map((c) => (
                <div
                  key={c.title}
                  className="bg-card rounded-2xl border border-border p-9 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="block h-1 w-10 rounded-full bg-brand-terracotta mb-6" />
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4 leading-tight">
                    {c.title}
                  </h2>
                  <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground text-justify">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* El Poder de las Frases */}
        <section id="frases" className="bg-cream">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <span className="block h-1 w-12 rounded-full bg-brand-terracotta mx-auto mb-7" />
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] text-foreground tracking-tight text-balance">
              El Poder de las Frases
            </h2>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/85 text-balance">
              El Poder de las Frases es un proyecto personal nacido para elevar el valor de las
              palabras bien dichas. Creo en las frases que se quedan, que motivan una decisión,
              despiertan una idea, ponen orden y dan sentido a lo que vivimos: la vida, la
              sociedad, el liderazgo, la libertad y las emociones.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-terracotta">
              Puedes seguir este proyecto en Instagram y TikTok
            </p>

            <div className="mt-12 flex flex-col items-center">
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Sígueme en redes
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
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
          </div>
        </section>

        {/* Newsletter — comunidad */}
        <NewsletterBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
