import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useRouter, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Route$7, j as adminLogout, i as adminLogin } from "./router-CRc2_FoN.mjs";
import "../_libs/seroval.mjs";
import { h as FileText, T as Tags, b as ArrowUpRight, m as LogOut, l as Lock, k as LoaderCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-Bzpzupt-.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
function AdminLayout() {
  const {
    authed
  } = Route$7.useLoaderData();
  return authed ? /* @__PURE__ */ jsxRuntimeExports.jsx(AdminShell, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {});
}
function Login() {
  const router = useRouter();
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await adminLogin({
        data: {
          password
        }
      });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-ink px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "w-full max-w-sm rounded-2xl bg-card border border-border shadow-2xl shadow-black/40 p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-center font-display font-bold text-2xl text-foreground mb-1", children: "Panel de administración" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mb-6", children: "Introduce la contraseña para continuar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "pw", className: "block text-sm font-medium text-foreground mb-1.5", children: "Contraseña" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "pw", type: "password", autoFocus: true, value: password, onChange: (e) => setPassword(e.target.value), className: "w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading || !password, className: "mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal text-white py-3 text-sm font-semibold hover:bg-brand-teal/90 transition-colors disabled:opacity-60", children: [
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
      "Entrar"
    ] })
  ] }) });
}
function AdminShell() {
  const router = useRouter();
  const nav = [{
    to: "/admin",
    label: "Artículos",
    icon: FileText,
    exact: true
  }, {
    to: "/admin/categorias",
    label: "Categorías",
    icon: Tags,
    exact: false
  }];
  const logout = async () => {
    await adminLogout();
    await router.invalidate();
    toast.success("Sesión cerrada");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-muted", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden md:flex w-64 flex-col bg-ink text-white/90 sticky top-0 h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-white leading-tight", children: "Oswaldo Smarrelli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.18em] text-brand-terracotta mt-1", children: "Administración" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 p-3 space-y-1", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: n.to, activeOptions: {
        exact: n.exact
      }, className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors", activeProps: {
        className: "bg-white/10 text-white"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(n.icon, { className: "h-4 w-4" }),
        n.label
      ] }, n.to)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-white/10 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", target: "_blank", className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }),
          " Ver el sitio"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: logout, className: "w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Cerrar sesión"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center justify-between bg-ink text-white px-5 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold", children: "Administración" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: logout, className: "text-sm inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Salir"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
export {
  AdminLayout as component
};
