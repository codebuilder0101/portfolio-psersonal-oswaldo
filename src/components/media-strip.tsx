const outlets = ["El Nacional", "Letras Libres", "El País", "Forbes", "La Nación", "Reforma"];

export function MediaStrip() {
  return (
    <section className="py-12 border-y border-border">
      <div className="flex flex-wrap justify-between items-center gap-x-8 gap-y-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground w-full md:w-auto">
          Visto en
        </span>
        {outlets.map((name) => (
          <div
            key={name}
            className="font-display font-bold text-xl italic opacity-70 hover:opacity-100 transition-opacity"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
