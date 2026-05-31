export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/80 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p className="text-sm">
          © {year} oswaldosmarrelli.com. Todos los derechos reservados.
        </p>
        <p className="text-sm text-brand-teal">Legal y Política de Privacidad</p>
      </div>
    </footer>
  );
}
