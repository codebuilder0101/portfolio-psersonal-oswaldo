import { createFileRoute, Link, Outlet, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Lock, FileText, Tags, LogOut, ArrowUpRight, Loader2 } from "lucide-react";
import { adminCheck, adminLogin, adminLogout } from "@/lib/api/admin.functions";

export const Route = createFileRoute("/admin")({
  loader: async () => ({ authed: (await adminCheck()).authed }),
  component: AdminLayout,
});

function AdminLayout() {
  const { authed } = Route.useLoaderData();
  return authed ? <AdminShell /> : <Login />;
}

// ── Login ────────────────────────────────────────────────────
function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await adminLogin({ data: { password } });
      if (res.ok) {
        await router.invalidate();
      } else {
        toast.error("Contraseña incorrecta");
      }
    } catch {
      toast.error("No se pudo iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-ink px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl bg-card border border-border shadow-2xl shadow-black/40 p-8"
      >
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-white">
          <Lock className="h-5 w-5" />
        </div>
        <h1 className="text-center font-display font-bold text-2xl text-foreground mb-1">
          Panel de administración
        </h1>
        <p className="text-center text-sm text-muted-foreground mb-6">
          Introduce la contraseña para continuar
        </p>
        <label htmlFor="pw" className="block text-sm font-medium text-foreground mb-1.5">
          Contraseña
        </label>
        <input
          id="pw"
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition"
        />
        <button
          type="submit"
          disabled={loading || !password}
          className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal text-white py-3 text-sm font-semibold hover:bg-brand-teal/90 transition-colors disabled:opacity-60"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Entrar
        </button>
      </form>
    </div>
  );
}

// ── Shell ────────────────────────────────────────────────────
function AdminShell() {
  const router = useRouter();
  const nav = [
    { to: "/admin", label: "Artículos", icon: FileText, exact: true },
    { to: "/admin/categorias", label: "Categorías", icon: Tags, exact: false },
  ] as const;

  const logout = async () => {
    await adminLogout();
    await router.invalidate();
    toast.success("Sesión cerrada");
  };

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-ink text-white/90 sticky top-0 h-screen">
        <div className="px-6 py-6 border-b border-white/10">
          <p className="font-display font-bold text-lg text-white leading-tight">Oswaldo Smarrelli</p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-brand-terracotta mt-1">Administración</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.exact }}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              activeProps={{ className: "bg-white/10 text-white" }}
            >
              <n.icon className="h-4 w-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10 space-y-1">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ArrowUpRight className="h-4 w-4" /> Ver el sitio
          </Link>
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LogOut className="h-4 w-4" /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between bg-ink text-white px-5 py-3">
          <span className="font-display font-bold">Administración</span>
          <button onClick={logout} className="text-sm inline-flex items-center gap-1.5">
            <LogOut className="h-4 w-4" /> Salir
          </button>
        </div>
        <main className="max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
