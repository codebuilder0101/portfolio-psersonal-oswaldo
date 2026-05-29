import { Instagram } from "lucide-react";

const quotes = [
  "Las palabras que elegimos son los mapas con los que viajamos.",
  "Pensar es resistir el primer impulso.",
  "La estrategia comienza donde termina la prisa.",
  "Una sociedad se mide por sus silencios, no por sus discursos.",
  "El liderazgo es la capacidad de ver lo que aún no existe.",
  "Toda idea nueva nace incómoda.",
  "Quien no escribe, deja que otros piensen por él.",
  "La libertad es una práctica diaria, no una herencia.",
];

const bg = ["#1a1817", "#c2410c", "#f3f1ea", "#1f2a37", "#3d2914", "#1a1817", "#c2410c", "#1f2a37"];
const ink = ["#fcfbf7", "#fcfbf7", "#1a1817", "#fcfbf7", "#fcfbf7", "#fcfbf7", "#fcfbf7", "#fcfbf7"];

export function InstagramFeed() {
  return (
    <section className="py-24">
      <div className="mb-10 flex flex-wrap justify-between items-end gap-4">
        <div>
          <h3 className="font-display text-3xl">@elpoderdelasfrases</h3>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
            Diario visual de pensamiento
          </p>
        </div>
        <a
          href="https://instagram.com/elpoderdelasfrases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:text-foreground transition-colors"
        >
          <Instagram className="h-4 w-4" /> Seguir
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="aspect-square p-5 flex items-end font-display italic text-lg leading-snug text-balance"
            style={{ backgroundColor: bg[i % bg.length], color: ink[i % ink.length] }}
          >
            <span>"{q}"</span>
          </div>
        ))}
      </div>
    </section>
  );
}
