import { site } from "@/lib/site";

/**
 * "Visto en" — authority / media logos.
 * Populate `site.mediaOutlets` with the REAL outlets + logo files to show them.
 * Until then, neutral placeholder slots render so the section is laid out and ready
 * (we never display invented media credits).
 */
export function MediaStrip() {
  const outlets = site.mediaOutlets;
  const hasLogos = outlets.length > 0;

  return (
    <section className="bg-cream border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal mb-8">
          Visto en
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
          {hasLogos
            ? outlets.map((o) =>
                o.url ? (
                  <a
                    key={o.name}
                    href={o.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <Logo outlet={o} />
                  </a>
                ) : (
                  <div key={o.name} className="opacity-60">
                    <Logo outlet={o} />
                  </div>
                )
              )
            : Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-28 rounded-md bg-muted border border-border"
                  aria-hidden
                />
              ))}
        </div>
      </div>
    </section>
  );
}

function Logo({ outlet }: { outlet: { name: string; logo?: string } }) {
  if (outlet.logo) {
    return (
      <img
        src={outlet.logo}
        alt={outlet.name}
        className="h-8 md:h-9 w-auto object-contain grayscale"
        loading="lazy"
      />
    );
  }
  return <span className="font-display font-semibold text-xl text-foreground/70">{outlet.name}</span>;
}
