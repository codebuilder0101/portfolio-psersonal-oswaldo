import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterBlock } from "@/components/newsletter-block";
import portrait from "@/assets/oswaldo-portrait.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "Oswaldo Smarrelli: economista, magíster en gerencia, columnista de opinión y consultor estratégico con más de 20 años de experiencia.",
      },
      { property: "og:title", content: "Sobre Oswaldo Smarrelli" },
      {
        property: "og:description",
        content:
          "Economista, magíster en gerencia, columnista de opinión y consultor estratégico.",
      },
      { property: "og:url", content: "/sobre-mi" },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
  }),
  component: SobreMi,
});

const expertise = [
  { label: "Estrategia organizacional", text: "Acompañamiento a juntas directivas y equipos ejecutivos en transformaciones críticas." },
  { label: "Análisis político", text: "Lectura de coyunturas, escenarios y narrativas del poder en América Latina." },
  { label: "Comunicación pública", text: "Construcción de marca personal y vocería para líderes de alto perfil." },
  { label: "Cultura y liderazgo", text: "Diseño de procesos culturales que sostienen la estrategia en el largo plazo." },
];

const appearances = [
  { outlet: "El Nacional", topic: "Columna mensual de opinión" },
  { outlet: "Globovisión", topic: "Análisis político en horario estelar" },
  { outlet: "Radio Caracas Radio", topic: "Tertulia semanal sobre actualidad" },
  { outlet: "Forbes Centroamérica", topic: "Entrevista sobre liderazgo" },
  { outlet: "Letras Libres", topic: "Ensayos invitados" },
];

function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <section className="pt-16 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
                Sobre mí
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-8 text-balance">
                ¿Quién es <span className="italic">Oswaldo</span> Smarrelli Torrealba?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Un ciudadano de pensamiento libre que cree en la fuerza de las palabras, en el
                poder de las frases y en su capacidad para despertar y mover voluntades.
              </p>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img
                  src={portrait}
                  alt="Oswaldo Smarrelli Torrealba"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </section>

          {/* Bio */}
          <section className="grid md:grid-cols-12 gap-12 py-16 border-t border-border">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl italic sticky top-28">Desafiando límites</h2>
            </div>
            <div className="md:col-span-8 prose-editorial max-w-2xl">
              <p>
                Soy un ciudadano de pensamiento libre y buenas costumbres. Economista, magíster en
                gerencia, locutor certificado y articulista por convicción. A lo largo de mi
                trayectoria he liderado e integrado equipos en empresas e instituciones públicas; esto
                ha robustecido mi formación y afinado mi desempeño.
              </p>
              <p>
                Creo profundamente que lo único constante es la evolución y por eso me mantengo en
                aprendizaje constante, con mirada renovadora y compromiso tenaz.
              </p>
              <p>
                Desde muy joven me ha impulsado un gran motivo: <strong>la sociedad</strong>, y en su
                nombre, una pregunta esencial: ¿cómo contribuir a una sociedad mejor? Esa inquietud me
                llevó a descubrir otra pasión: <strong>la escritura</strong>, la grandeza de dejar
                imperecedero el pensamiento a través de palabras y frases.
              </p>
              <blockquote>
                "Nunca se equivoca quien mira el futuro con esperanza y trabaja con constancia para
                hacerlo posible."
              </blockquote>
              <p>
                Mi historia está llena de retos, este es otro de ellos. Si este sitio sirve de
                herramienta para conectar lo que creo, lo que hago y lo que sueño, si logra inspirar,
                movilizar y aportar a la construcción de una sociedad más íntegra, justa y consciente,
                entonces habrá cumplido su propósito.
              </p>
            </div>
          </section>

          {/* Expertise */}
          <section className="py-16 border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Áreas de práctica
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-12 text-balance">
              Dónde puedo aportar
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {expertise.map((e, i) => (
                <div key={e.label} className="border-t border-border pt-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl">{e.label}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{e.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Appearances */}
          <section className="py-16 border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Apariciones en medios
            </span>
            <h2 className="font-display text-4xl md:text-5xl italic mb-12">
              Visto en
            </h2>
            <ul className="divide-y divide-border border-y border-border">
              {appearances.map((a) => (
                <li key={a.outlet} className="py-6 flex items-baseline justify-between gap-6 flex-wrap">
                  <span className="font-display text-2xl md:text-3xl">{a.outlet}</span>
                  <span className="text-muted-foreground text-sm md:text-base">{a.topic}</span>
                </li>
              ))}
            </ul>
          </section>

          <NewsletterBlock />

          <div className="text-center py-12">
            <Link
              to="/contacto"
              className="inline-block font-mono text-xs uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              ¿Conversamos? Escríbeme →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
