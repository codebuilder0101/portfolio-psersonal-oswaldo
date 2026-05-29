import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/articles";
import { ArticleArtwork } from "./article-artwork";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group">
      <Link
        to="/articulos/$slug"
        params={{ slug: article.slug }}
        className="block"
      >
        <div className="mb-6 overflow-hidden rounded-sm">
          <ArticleArtwork
            slug={article.slug}
            category={article.category}
            className="w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3 block">
          {article.category}
        </span>
        <h3 className="font-display text-2xl leading-tight mb-4 group-hover:italic transition-all text-balance">
          {article.title}
        </h3>
        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
          {formatDate(article.date)} — {article.readingTime} min
        </div>
      </Link>
    </article>
  );
}
