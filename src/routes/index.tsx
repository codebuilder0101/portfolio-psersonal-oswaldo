import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactBand } from "@/components/contact-band";
// TODO: replace with the provided home hero photo (sitting portrait).
import portrait from "@/assets/oswaldo-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oswaldo Smarrelli — Criterios y propósitos" },
      {
        name: "description",
        content:
          "Columnista de opinión y consultor estratégico. Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática.",
      },
      { property: "og:title", content: "Oswaldo Smarrelli — Criterios y propósitos" },
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

const stats = [
  { value: "+ 20 AÑOS", label: "de experiencia" },
  { value: "100%", label: "Confianza" },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="md:min-h-[88vh] bg-muted">
              <img
                src={portrait}
                alt="Retrato de Oswaldo Smarrelli"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center px-6 md:px-14 py-16 md:py-24">
              <div className="max-w-xl">
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-brand-teal mb-8">
                  CRITERIOS Y PROPÓSITOS
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  Creo en la fuerza de las palabras, en el poder de las frases y en su capacidad
                  para despertar y mover voluntades, no busco tener la razón, busco sembrar dudas y
                  crear criterios nuevos. No escribo para gustar, cada artículo es una forma de
                  ordenar lo que pienso y compartirlos es acercarme a quienes como yo siguen
                  creyendo que las ideas pueden cambiar realidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three info columns */}
        <section className="bg-brand-blue text-white">
          <div className="grid md:grid-cols-3">
            {columns.map((c) => (
              <div
                key={c.title}
                className={`px-8 md:px-10 py-14 md:py-20 ${
                  c.highlight ? "bg-brand-blue-light" : ""
                }`}
              >
                <h2 className="font-display text-2xl md:text-3xl mb-6 leading-tight">{c.title}</h2>
                <p className="text-sm md:text-[15px] leading-relaxed text-white/85">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statement + stats */}
        <section className="bg-cream">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight uppercase text-foreground">
              Las ideas nos unen y las palabras nos conectan, aquí empieza nuestro diálogo
            </h2>
            <div className="space-y-10 md:pl-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-5xl md:text-6xl text-foreground">
                    {s.value}
                  </div>
                  <div className="text-lg text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBand socials={["Facebook", "Instagram", "LinkedIn", "X / Twitter"]} />
      </main>
      <SiteFooter />
    </div>
  );
}
