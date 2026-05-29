import type { Category } from "@/lib/articles";

const palettes: Record<Category, { bg: string; ink: string }> = {
  "Política": { bg: "#1f2a37", ink: "#fcfbf7" },
  "Sociedad": { bg: "#3d2914", ink: "#fcfbf7" },
  "Emprendimiento": { bg: "#c2410c", ink: "#fcfbf7" },
  "Estrategia": { bg: "#f3f1ea", ink: "#1a1817" },
  "Pensamiento": { bg: "#1a1817", ink: "#fcfbf7" },
};

// Deterministic numeric "hash" from slug
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function ArticleArtwork({
  slug,
  category,
  className = "",
  big = false,
}: {
  slug: string;
  category: Category;
  className?: string;
  big?: boolean;
}) {
  const p = palettes[category];
  const h = hash(slug);
  const angle = (h % 90) - 45;
  const cx = 20 + (h % 60);
  const cy = 20 + ((h >> 3) % 60);
  const num = String((h % 99) + 1).padStart(2, "0");

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: p.bg, color: p.ink }}
      aria-hidden="true"
    >
      {/* abstract editorial pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`grid-${slug}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M 6 0 L 0 0 0 6" fill="none" stroke={p.ink} strokeWidth="0.15" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#grid-${slug})`} />
        <circle cx={cx} cy={cy} r={big ? 38 : 32} fill={p.ink} fillOpacity="0.08" />
        <line
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          stroke={p.ink}
          strokeWidth="0.4"
          strokeOpacity="0.4"
          transform={`rotate(${angle} 50 50)`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
          № {num}
        </span>
        <span
          className="font-display italic leading-none self-end"
          style={{ fontSize: big ? "clamp(4rem, 14vw, 11rem)" : "clamp(3rem, 8vw, 6rem)" }}
        >
          {category.charAt(0)}
        </span>
      </div>
    </div>
  );
}
