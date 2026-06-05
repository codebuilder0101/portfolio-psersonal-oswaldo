import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Check, X } from "lucide-react";
import {
  adminCheck,
  adminListCategories,
  adminCreateCategory,
  adminUpdateCategory,
  adminDeleteCategory,
} from "@/lib/api/admin.functions";

export const Route = createFileRoute("/admin/categorias")({
  loader: async () => {
    const { authed } = await adminCheck();
    if (!authed) return { categories: [] as Awaited<ReturnType<typeof adminListCategories>> };
    return { categories: await adminListCategories() };
  },
  component: Categorias,
});

function Categorias() {
  const { categories } = Route.useLoaderData();
  const router = useRouter();
  const [name, setName] = useState("");
  const [editing, setEditing] = useState<{ id: number; name: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setBusy(true);
    try {
      await adminCreateCategory({ data: { name: name.trim() } });
      setName("");
      await router.invalidate();
      toast.success("Categoría creada");
    } catch {
      toast.error("No se pudo crear (¿nombre repetido?)");
    } finally {
      setBusy(false);
    }
  };

  const save = async () => {
    if (!editing || !editing.name.trim()) return;
    try {
      await adminUpdateCategory({ data: { id: editing.id, name: editing.name.trim() } });
      setEditing(null);
      await router.invalidate();
      toast.success("Categoría actualizada");
    } catch {
      toast.error("No se pudo actualizar");
    }
  };

  const remove = async (id: number, n: string) => {
    if (!confirm(`¿Eliminar la categoría "${n}"? Los artículos quedarán sin categoría.`)) return;
    try {
      await adminDeleteCategory({ data: { id } });
      await router.invalidate();
      toast.success("Categoría eliminada");
    } catch {
      toast.error("No se pudo eliminar");
    }
  };

  return (
    <div>
      <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8">Categorías</h1>

      <form onSubmit={add} className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nueva categoría"
          className="flex-1 bg-card border border-border rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition"
        />
        <button
          type="submit"
          disabled={busy || !name.trim()}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-teal/90 transition-colors disabled:opacity-60"
        >
          <Plus className="h-4 w-4" /> Añadir
        </button>
      </form>

      <div className="space-y-2">
        {categories.map((c) => (
          <div key={c.id} className="flex items-center gap-3 bg-card border border-border rounded-xl p-3 md:p-4">
            {editing?.id === c.id ? (
              <>
                <input
                  value={editing.name}
                  onChange={(e) => setEditing({ id: c.id, name: e.target.value })}
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-1.5 text-foreground focus:outline-none focus:border-brand-teal"
                  autoFocus
                />
                <button onClick={save} className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal text-white" aria-label="Guardar">
                  <Check className="h-4 w-4" />
                </button>
                <button onClick={() => setEditing(null)} className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/70" aria-label="Cancelar">
                  <X className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <span className="flex-1 font-medium text-foreground">{c.name}</span>
                <span className="text-xs text-foreground/40">/{c.slug}</span>
                <button onClick={() => setEditing({ id: c.id, name: c.name })} className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-muted" aria-label="Editar">
                  <Pencil className="h-4 w-4" />
                </button>
                <button onClick={() => remove(c.id, c.name)} className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground/70 hover:bg-destructive hover:text-white hover:border-destructive transition-colors" aria-label="Eliminar">
                  <Trash2 className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
