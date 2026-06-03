import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const PREVIEW_COUNT = 4;

export function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const open = index !== null;
  const shown = expanded ? images : images.slice(0, PREVIEW_COUNT);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {shown.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver imagen ${i + 1}`}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted ring-1 ring-border shadow-sm hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <img
              src={src}
              alt={`Galería ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors" />
          </button>
        ))}
      </div>

      {images.length > PREVIEW_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-card px-8 py-3 text-sm font-semibold text-brand-teal shadow-sm hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-colors"
          >
            {expanded ? "Ver menos" : "Ver más"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-6 animate-fade-up"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Galería"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white p-2.5 rounded-2xl shadow-2xl">
              <img
                src={images[index]}
                alt={`Galería ${index + 1}`}
                className="max-h-[78vh] w-auto rounded-lg object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {index + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
