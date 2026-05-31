import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/articulos", label: "Mi opinión" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="w-full px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="leading-tight">
          <span className="block font-display font-bold text-xl md:text-2xl text-brand-teal tracking-tight">
            Oswaldo Smarrelli
          </span>
          <span className="block text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal mt-1">
            
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="pb-0.5 font-medium text-foreground/70 hover:text-brand-teal transition-colors"
              activeProps={{ className: "text-brand-teal font-semibold underline underline-offset-8 decoration-2" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-cream">
          <ul className="px-6 py-3 flex flex-col gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block py-2.5 px-3 rounded-lg font-medium text-foreground/70 hover:text-brand-teal transition-colors"
                  activeProps={{ className: "text-brand-teal font-semibold bg-brand-teal/10" }}
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
