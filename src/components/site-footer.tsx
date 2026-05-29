import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-24 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl italic mb-6">Oswaldo Smarrelli</div>
            <p className="opacity-60 max-w-sm text-sm leading-relaxed">
              Columnista de opinión y consultor estratégico. Acompaño a líderes y organizaciones a
              navegar la complejidad del mundo contemporáneo a través de la palabra precisa y el
              pensamiento crítico.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest mb-6 opacity-60">
              Navegación
            </h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/articulos" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Artículos</Link></li>
              <li><Link to="/sobre-mi" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Sobre mí</Link></li>
              <li><Link to="/contacto" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest mb-6 opacity-60">
              Social
            </h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">X / Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-widest opacity-40">
          <span>© {new Date().getFullYear()} Oswaldo Smarrelli. Todos los derechos reservados.</span>
          <div className="flex gap-8">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
