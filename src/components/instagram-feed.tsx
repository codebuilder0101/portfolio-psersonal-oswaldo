import { Instagram, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function InstagramFeed() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              Instagram
            </span>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal/75 transition-colors"
          >
            <Instagram className="h-4 w-4" /> Seguir
          </a>
        </div>

        {site.instagramEmbedUrl ? (
          // Live feed (widget provider embed)
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
            <iframe
              src={site.instagramEmbedUrl}
              title={`Instagram de @${site.instagramHandle}`}
              loading="lazy"
              className="w-full"
              style={{ height: 560, border: 0 }}
            />
          </div>
        ) : (
          // Honest fallback until the widget embed is configured
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all p-10 md:p-14 text-center"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal mb-5">
              <Instagram className="h-8 w-8" />
            </span>
            <h3 className="font-display text-2xl text-foreground mb-2">
              Sigue el diario visual en Instagram
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Frases, ideas y reflexiones en @elpoderdelasfrases
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-teal">
              Ver perfil
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
