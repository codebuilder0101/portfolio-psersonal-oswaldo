import { Linkedin, MessageCircle, Twitter, Share2 } from "lucide-react";

export function ShareBar({ title, slug }: { title: string; slug: string }) {
  const url = typeof window !== "undefined" ? `${window.location.origin}/articulos/${slug}` : `/articulos/${slug}`;
  const text = encodeURIComponent(title);
  const u = encodeURIComponent(url);

  const links = [
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X", icon: Twitter, href: `https://twitter.com/intent/tweet?text=${text}&url=${u}` },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${text}%20${u}` },
  ];

  return (
    <div className="flex items-center gap-4 border-y border-border py-4 my-8">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
        <Share2 className="h-3 w-3" /> Compartir
      </span>
      <div className="flex gap-2 ml-auto">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartir en ${l.label}`}
            className="size-9 grid place-items-center border border-border hover:bg-foreground hover:text-background transition-colors rounded-sm"
          >
            <l.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
