import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Gallery } from "@/components/gallery";
import { galleryImages } from "@/lib/gallery";
import portrait from "@/assets/photo-2.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Oswaldo Smarrelli" },
      {
        name: "description",
        content:
          "Oswaldo Smarrelli: economista, magíster en gerencia, locutor certificado y articulista por convicción.",
      },
      { property: "og:title", content: "Sobre Oswaldo Smarrelli" },
      {
        property: "og:description",
        content: "Economista, magíster en gerencia, columnista de opinión y consultor estratégico.",
      },
      { property: "og:url", content: "/sobre-mi" },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-cream">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="flex items-center px-6 md:px-14 lg:px-20 py-16 md:py-20 order-2 md:order-1">
              <div className="max-w-md">
                <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10 text-balance text-foreground">
                  ¿QUIÉN ES OSWALDO SMARRELLI TORREALBA?
                </h1>
                <Link
                  to="/contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-8 py-3.5 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:bg-brand-blue/90 transition-colors"
                >
                  ESCRÍBEME
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 md:h-[calc(100vh-5rem)] flex items-center justify-center p-6 md:p-10">
              <img
                src={portrait}
                alt="Oswaldo Smarrelli Torrealba"
                className="max-h-full w-auto max-w-full object-contain rounded-2xl shadow-2xl shadow-black/30"
              />
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="bg-muted border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-teal mb-10">
              Desafiando límites
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 text-justify">
              <p>
               Soy un ciudadano de pensamiento libre y buenas costumbres. Economista, magíster en gerencia, locutor certificado y articulista por convicción. A lo largo de mi trayectoria he liderado e integrado equipos en empresas e instituciones públicas, esto ha robustecido mi formación y afinado mi desempeño. Creo profundamente que lo único constante es la evolución y por eso me mantengo en aprendizaje constante con mirada renovadora y compromiso tenaz.
              </p>
              <p>
                Desde muy joven me ha impulsado un gran motivo: "La sociedad" y en su nombre, una pregunta esencial: ¿Cómo contribuir a una sociedad mejor? Esa inquietud me llevó a descubrir otra pasión: "La escritura",  la grandeza de dejar imperecedero el pensamiento a través de palabras y frases me encontró, ese poder que tiene la escritura como herramienta para incidir, proponer y dejar huella. Mi pensamiento lo expreso en artículos, proyectos, conversaciones y creando espacios de formación que siembren conciencia, despierten criterio y generen vínculos, esto no es solo una práctica: es vocación, es entrega y todo lo que pueda aportar en ese camino representa para mí una fuente genuina de satisfacción y aunque, no me considero experto, sí soy un aprendiz constante, comprometido y tenaz en todo aquello en lo que creo y hago.
              </p>
              <p>
                Mi historia esta llena de retos, este es otro de ellos, pero si este sitio sirve de herramienta para conectar lo que creo, lo que hago y lo que sueño, si logra inspirar, movilizar y aportar a la construcción de una sociedad más íntegra, justa y consciente, entonces habrá cumplido su propósito y todos seremos gratamente ganadores.
              </p>
            </div>
            <blockquote className="mt-10 text-right">
              <p className="font-display text-base md:text-lg text-foreground">
                "Nunca se equivoca quien mira el futuro con esperanza y trabaja con constancia para hacerlo posible"
              </p>
              <footer className="font-display font-bold text-sm mt-3 text-foreground">
                Oswaldo Smarrelli Torrealba
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-cream border-t border-border py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-teal text-center mb-3">
              GALERÍA
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Imágenes con historia, reflejos de un camino
            </p>
            <Gallery images={galleryImages} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
