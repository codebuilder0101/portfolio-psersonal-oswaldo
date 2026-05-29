import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/articulos", label: "Mi opinión" },
  { to: "/contacto", label: "Contacto" },
] as const;

type Variant = "light" | "blue" | "dark";

const styles: Record<
  Variant,
  { logo: string; nav: string; activeBox: string; panel: string }
> = {
  light: {
    logo: "text-brand-teal",
    nav: "text-foreground/80 hover:text-brand-teal",
    activeBox: "border-foreground/60 text-foreground",
    panel: "bg-background border-border",
  },
  blue: {
    logo: "text-white",
    nav: "text-white/80 hover:text-white",
    activeBox: "border-white/80 text-white",
    panel: "bg-brand-blue border-white/15",
  },
  dark: {
    logo: "text-brand-teal",
    nav: "text-white/80 hover:text-white",
    activeBox: "border-white/70 text-white",
    panel: "bg-ink border-white/15",
  },
};

export function SiteHeader({ variant = "light" }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);
  const s = styles[variant];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link
          to="/"
          className={`font-display font-bold text-xl leading-[1.05] tracking-tight ${s.logo}`}
        >
          Oswaldo
          <br />
          Smarrelli
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-1.5 border border-transparent rounded-sm transition-colors ${s.nav}`}
              activeProps={{ className: `border ${s.activeBox}` }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 -mr-2 ${variant === "light" ? "text-foreground" : "text-white"}`}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className={`md:hidden border-t ${s.panel}`}>
          <ul className="px-6 py-4 flex flex-col gap-1 text-sm tracking-wide">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block py-2.5 px-3 rounded-sm border border-transparent ${s.nav}`}
                  activeProps={{ className: `border ${s.activeBox}` }}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
