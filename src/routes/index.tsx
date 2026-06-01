import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactBand } from "@/components/contact-band";
import { InstagramFeed } from "@/components/instagram-feed";
import { NewsletterBlock } from "@/components/newsletter-block";
// TODO: replace with the provided home hero photo (sitting portrait).
import portrait from "@/assets/oswaldo-portrait.jpg";

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
            <div className="md:h-[calc(100vh-5rem)] bg-muted">
              <img
                src={portrait}
                alt="Retrato de Oswaldo Smarrelli"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-16">
              <div className="w-full max-w-2xl">
                <h1 className="font-display font-bold text-4xl xl:text-5xl leading-[1.1] text-brand-teal mb-6 lg:whitespace-nowrap">
                  CRITERIOS Y PROPÓSITOS
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-md text-justify">
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
        <section className="bg-muted border-y border-border">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-28">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {columns.map((c) => (
                <div
                  key={c.title}
                  className="bg-card rounded-2xl border border-border p-9 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="block h-1 w-10 rounded-full bg-brand-teal mb-6" />
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

        {/* Statement + stats */}
        <section className="bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground text-justify">
              Las ideas nos unen y las palabras nos conectan, aquí empieza nuestro diálogo
            </h2>
            <div className="flex gap-10 md:gap-20">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-brand-teal/30 pl-5">
                  <div className="font-display font-bold text-4xl md:text-5xl text-brand-teal leading-none whitespace-nowrap">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram feed */}
        <InstagramFeed />

        {/* Newsletter — comunidad */}
        <NewsletterBlock />

        <ContactBand socials={["Facebook", "Instagram", "LinkedIn", "X / Twitter"]} />
      </main>
      <SiteFooter />
    </div>
  );
}
