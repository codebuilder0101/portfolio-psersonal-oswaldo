import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute } from "../_libs/tanstack__react-router.mjs";
import { H as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { a as ArrowRight, X, M as Menu, C as ChevronLeft, b as ChevronRight, F as Facebook, I as Instagram, L as Linkedin, A as ArrowLeft, S as Share2, T as Twitter, c as MessageCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-NiGX-k4q.css";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6", children: "Error 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl md:text-7xl mb-6", children: "Página no encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "La página que buscas no existe o ha sido reubicada." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block font-mono text-xs uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors",
        children: "Volver al inicio →"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl mb-4", children: "Algo salió mal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 text-sm", children: "La página no pudo cargarse. Inténtalo de nuevo." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router.invalidate();
          reset();
        },
        className: "font-mono text-xs uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors",
        children: "Reintentar"
      }
    )
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oswaldo Smarrelli — Columnista de opinión y consultor estratégico" },
      {
        name: "description",
        content: "Análisis y ensayos sobre política, sociedad, estrategia y emprendimiento por Oswaldo Smarrelli. Ideas para gobernar el caos."
      },
      { name: "author", content: "Oswaldo Smarrelli" },
      { property: "og:site_name", content: "Oswaldo Smarrelli" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Oswaldo Smarrelli",
          jobTitle: "Columnista de opinión y consultor estratégico",
          url: "/"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "es", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/articulos", label: "Mi opinión" },
  { to: "/contacto", label: "Contacto" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-display font-bold text-xl md:text-2xl text-brand-teal tracking-tight", children: "Oswaldo Smarrelli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal mt-1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          className: "pb-0.5 font-medium text-foreground/70 hover:text-brand-teal transition-colors",
          activeProps: { className: "text-brand-teal font-semibold underline underline-offset-8 decoration-2" },
          activeOptions: { exact: item.to === "/" },
          children: item.label
        },
        item.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen((v) => !v),
          className: "md:hidden p-2 -mr-2 text-ink",
          "aria-label": "Abrir menú",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden border-t border-border bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "px-6 py-3 flex flex-col gap-1 text-sm", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: item.to,
        className: "block py-2.5 px-3 rounded-lg font-medium text-foreground/70 hover:text-brand-teal transition-colors",
        activeProps: { className: "text-brand-teal font-semibold bg-brand-teal/10" },
        activeOptions: { exact: item.to === "/" },
        onClick: () => setOpen(false),
        children: item.label
      }
    ) }, item.to)) }) })
  ] });
}
function SiteFooter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-ink text-white/80 py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto text-center space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
      "© ",
      year,
      " oswaldosmarrelli.com. Todos los derechos reservados."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand-teal", children: "Legal y Política de Privacidad" })
  ] }) });
}
const schema = objectType({
  nombre: stringType().trim().min(2, "Tu nombre, por favor").max(100),
  mensaje: stringType().trim().min(10, "Cuéntame un poco más").max(2e3)
});
function ContactForm({
  tone = "dark",
  buttonClassName
}) {
  const [form, setForm] = reactExports.useState({ nombre: "", mensaje: "" });
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErr = {};
      parsed.error.issues.forEach((i) => {
        fieldErr[String(i.path[0])] = i.message;
      });
      setErrors(fieldErr);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Mensaje enviado. Te respondo pronto.");
    setForm({ nombre: "", mensaje: "" });
  };
  const light = tone === "light";
  const labelCls = light ? "text-foreground font-medium" : "text-white";
  const fieldCls = light ? "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition" : "w-full bg-transparent border border-white/50 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors";
  const helperCls = light ? "text-muted-foreground" : "text-white/70";
  const errCls = light ? "text-brand-teal" : "text-white/90";
  const btnCls = buttonClassName ?? "bg-brand-teal text-white hover:bg-brand-teal/90";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "nombre", className: `block text-sm ${labelCls}`, children: "Nombre*" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "nombre",
          type: "text",
          value: form.nombre,
          onChange: (e) => setForm({ ...form, nombre: e.target.value }),
          className: fieldCls
        }
      ),
      errors.nombre && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${errCls}`, children: errors.nombre })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "mensaje", className: `block text-sm ${labelCls}`, children: "Mensaje" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          id: "mensaje",
          rows: 6,
          value: form.mensaje,
          onChange: (e) => setForm({ ...form, mensaje: e.target.value }),
          className: `${fieldCls} resize-none`
        }
      ),
      errors.mensaje && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${errCls}`, children: errors.mensaje })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs ${helperCls}`, children: "* Indica los campos obligatorios" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: submitting,
        className: `w-full py-3.5 text-sm font-medium tracking-wide rounded-lg transition-colors disabled:opacity-60 ${btnCls}`,
        children: submitting ? "ENVIANDO..." : "ENVIAR"
      }
    )
  ] });
}
function XIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
}
const allSocials = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/16GYUVZi1q/?mibextid=wwXIfr"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/oswaldosmarrellit?igsh=MThobDUwdzlqeXRqeA%3D%3D&utm_source=qr"
  },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/oswaldosmarrelli" },
  {
    icon: XIcon,
    label: "X / Twitter",
    href: "https://x.com/o_smarrelli?s=21&t=1YRgSzYmXmOetHg4hAti6g"
  }
];
function SocialLinks({
  only,
  tone = "dark",
  className = ""
}) {
  const list = only ? allSocials.filter((s) => only.includes(s.label)) : allSocials;
  const itemCls = tone === "light" ? "border-border text-foreground/70 hover:text-white hover:bg-brand-teal hover:border-brand-teal" : tone === "brand" ? "border-white/60 text-white hover:bg-white hover:text-brand-teal hover:border-white" : "border-white/40 text-white hover:text-brand-teal hover:border-white";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex gap-3 ${className}`, children: list.map((s) => {
    const external = s.href !== "#";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: s.href,
        "aria-label": s.label,
        ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: `inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${itemCls}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" })
      },
      s.label
    );
  }) });
}
function ContactBand({
  socials
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 rounded-3xl overflow-hidden border border-border shadow-xl shadow-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-teal text-white p-8 md:p-12 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl mb-8", children: "ESCRÍBEME" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 mb-4", children: "Correo electrónico:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { only: socials, tone: "brand" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card p-8 md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, { tone: "light" }) })
  ] }) }) });
}
function Gallery({ images }) {
  const [index, setIndex] = reactExports.useState(null);
  const open = index !== null;
  const close = reactExports.useCallback(() => setIndex(null), []);
  const prev = reactExports.useCallback(
    () => setIndex((i) => i === null ? i : (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = reactExports.useCallback(
    () => setIndex((i) => i === null ? i : (i + 1) % images.length),
    [images.length]
  );
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setIndex(i),
        "aria-label": `Ver imagen ${i + 1}`,
        className: "group aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt: `Galería ${i + 1}`,
            loading: "lazy",
            className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          }
        )
      },
      src
    )) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-6 animate-fade-up",
        onClick: close,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Galería",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: close,
              "aria-label": "Cerrar",
              className: "absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                prev();
              },
              "aria-label": "Anterior",
              className: "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "max-w-3xl", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-2.5 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: images[index],
                alt: `Galería ${index + 1}`,
                className: "max-h-[78vh] w-auto rounded-lg object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-center text-sm text-white/80", children: [
              index + 1,
              " / ",
              images.length
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                next();
              },
              "aria-label": "Siguiente",
              className: "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6" })
            }
          )
        ]
      }
    )
  ] });
}
const __vite_glob_0_0 = "/assets/01-DXdxQ0lu.jpg";
const __vite_glob_0_1 = "/assets/02-cKvoCXGq.jpg";
const __vite_glob_0_2 = "/assets/03-DT9-FphU.jpg";
const __vite_glob_0_3 = "/assets/04-a2anMXZg.jpg";
const __vite_glob_0_4 = "/assets/05-zxG7jyrx.jpg";
const __vite_glob_0_5 = "/assets/06-CgLWb98Q.jpg";
const __vite_glob_0_6 = "/assets/07-Dsa4yw3J.jpg";
const __vite_glob_0_7 = "/assets/08-vuFUC40z.png";
const __vite_glob_0_8 = "/assets/09-DunQGXw6.jpg";
const __vite_glob_0_9 = "/assets/10-Cj93uBY7.jpg";
const __vite_glob_0_10 = "/assets/11-CjqYd6-b.jpg";
const __vite_glob_0_11 = "/assets/12-DFDmXAKN.jpg";
const __vite_glob_0_12 = "/assets/13-BJ9q27vq.jpg";
const __vite_glob_0_13 = "/assets/14-Qoe-YPHQ.jpg";
const __vite_glob_0_14 = "/assets/15-zXDUHpAI.jpg";
const __vite_glob_0_15 = "/assets/16-DFHKcEQI.jpg";
const __vite_glob_0_16 = "/assets/17-VwVg1vTT.png";
const __vite_glob_0_17 = "/assets/18-CqkCN8SV.jpg";
const __vite_glob_0_18 = "/assets/19-BPgvV7C5.jpg";
const __vite_glob_0_19 = "/assets/20-Bd-YGrnB.jpg";
const __vite_glob_0_20 = "/assets/21-DIL8Q4qc.jpg";
const __vite_glob_0_21 = "/assets/22-DnGDB1D4.jpg";
const __vite_glob_0_22 = "/assets/23-CUNCXGk8.jpg";
const __vite_glob_0_23 = "/assets/24-i2MJSfqa.jpg";
const __vite_glob_0_24 = "/assets/25-BwmV9uKo.jpg";
const __vite_glob_0_25 = "/assets/26-KVwjp_jo.jpg";
const __vite_glob_0_26 = "/assets/27-J9aNRfK6.jpg";
const __vite_glob_0_27 = "/assets/28-DDp4VD-W.jpg";
const __vite_glob_0_28 = "/assets/29-Fb2MWySo.jpg";
const __vite_glob_0_29 = "/assets/30-BXUTNSM7.jpg";
const __vite_glob_0_30 = "/assets/31-BbgGSn3l.jpg";
const __vite_glob_0_31 = "/assets/32-BTFQF16p.jpg";
const __vite_glob_0_32 = "/assets/33-LALK19Ku.jpg";
const __vite_glob_0_33 = "/assets/image-background-q8Yix3YT.png";
const __vite_glob_0_34 = "/assets/image-background1-BTtnEc14.jpg";
const __vite_glob_0_35 = "/assets/image-new-C_s1VTCn.png";
const __vite_glob_0_36 = "/assets/oswaldo-portrait-IZLttOq9.jpg";
const __vite_glob_0_37 = "/assets/photo-2-D6mQB-nV.jpg";
const imageNew = "/assets/image-new-C_s1VTCn.png";
const modules = /* @__PURE__ */ Object.assign({
  "../assets/01.jpg": __vite_glob_0_0,
  "../assets/02.jpg": __vite_glob_0_1,
  "../assets/03.jpg": __vite_glob_0_2,
  "../assets/04.jpg": __vite_glob_0_3,
  "../assets/05.jpg": __vite_glob_0_4,
  "../assets/06.jpg": __vite_glob_0_5,
  "../assets/07.jpg": __vite_glob_0_6,
  "../assets/08.png": __vite_glob_0_7,
  "../assets/09.jpg": __vite_glob_0_8,
  "../assets/10.jpg": __vite_glob_0_9,
  "../assets/11.jpg": __vite_glob_0_10,
  "../assets/12.jpg": __vite_glob_0_11,
  "../assets/13.jpg": __vite_glob_0_12,
  "../assets/14.jpg": __vite_glob_0_13,
  "../assets/15.jpg": __vite_glob_0_14,
  "../assets/16.jpg": __vite_glob_0_15,
  "../assets/17.png": __vite_glob_0_16,
  "../assets/18.jpg": __vite_glob_0_17,
  "../assets/19.jpg": __vite_glob_0_18,
  "../assets/20.jpg": __vite_glob_0_19,
  "../assets/21.jpg": __vite_glob_0_20,
  "../assets/22.jpg": __vite_glob_0_21,
  "../assets/23.jpg": __vite_glob_0_22,
  "../assets/24.jpg": __vite_glob_0_23,
  "../assets/25.jpg": __vite_glob_0_24,
  "../assets/26.jpg": __vite_glob_0_25,
  "../assets/27.jpg": __vite_glob_0_26,
  "../assets/28.jpg": __vite_glob_0_27,
  "../assets/29.jpg": __vite_glob_0_28,
  "../assets/30.jpg": __vite_glob_0_29,
  "../assets/31.jpg": __vite_glob_0_30,
  "../assets/32.jpg": __vite_glob_0_31,
  "../assets/33.jpg": __vite_glob_0_32,
  "../assets/image-background.png": __vite_glob_0_33,
  "../assets/image-background1.jpg": __vite_glob_0_34,
  "../assets/image-new.png": __vite_glob_0_35,
  "../assets/oswaldo-portrait.jpg": __vite_glob_0_36,
  "../assets/photo-2.jpg": __vite_glob_0_37
});
const numbered = Object.entries(modules).filter(([path]) => /\/\d{2}\.(jpe?g|png|webp)$/i.test(path)).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url);
const galleryImages = [...numbered, imageNew];
const portrait$1 = "/assets/photo-2-D6mQB-nV.jpg";
const Route$5 = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Oswaldo Smarrelli" },
      {
        name: "description",
        content: "Oswaldo Smarrelli: economista, magíster en gerencia, locutor certificado y articulista por convicción."
      },
      { property: "og:title", content: "Sobre Oswaldo Smarrelli" },
      {
        property: "og:description",
        content: "Economista, magíster en gerencia, columnista de opinión y consultor estratégico."
      },
      { property: "og:url", content: "/sobre-mi" }
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }]
  }),
  component: SobreMi
});
function SobreMi() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-brand-blue text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-6 md:px-14 lg:px-20 py-16 md:py-20 order-2 md:order-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-10 text-balance", children: "¿QUIÉN ES OSWALDO SMARRELLI TORREALBA?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contacto",
              className: "group inline-flex items-center gap-2 rounded-full bg-brand-teal text-white px-8 py-3.5 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:bg-white hover:text-brand-blue transition-colors",
              children: [
                "ESCRÍBEME",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 md:order-2 md:h-[calc(100vh-5rem)] flex items-center justify-center p-6 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: portrait$1,
            alt: "Oswaldo Smarrelli Torrealba",
            className: "max-h-full w-auto max-w-full object-contain rounded-2xl shadow-2xl shadow-black/30"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-20 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-brand-teal mb-10", children: "Desafiando límites" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-base md:text-lg leading-relaxed text-foreground/85 text-justify", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Soy un ciudadano de pensamiento libre y buenas costumbres. Economista, magíster en gerencia, locutor certificado y articulista por convicción. A lo largo de mi trayectoria he liderado e integrado equipos en empresas e instituciones públicas, esto ha robustecido mi formación y afinado mi desempeño. Creo profundamente que lo único constante es la evolución y por eso me mantengo en aprendizaje constante con mirada renovadora y compromiso tenaz." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Desde muy joven me ha impulsado un gran motivo: "La sociedad" y en su nombre, una pregunta esencial: ¿Cómo contribuir a una sociedad mejor? Esa inquietud me llevó a descubrir otra pasión: "La escritura",  la grandeza de dejar imperecedero el pensamiento a través de palabras y frases me encontró, ese poder que tiene la escritura como herramienta para incidir, proponer y dejar huella. Mi pensamiento lo expreso en artículos, proyectos, conversaciones y creando espacios de formación que siembren conciencia, despierten criterio y generen vínculos, esto no es solo una práctica: es vocación, es entrega y todo lo que pueda aportar en ese camino representa para mí una fuente genuina de satisfacción y aunque, no me considero experto, sí soy un aprendiz constante, comprometido y tenaz en todo aquello en lo que creo y hago.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mi historia esta llena de retos, este es otro de ellos, pero si este sitio sirve de herramienta para conectar lo que creo, lo que hago y lo que sueño, si logra inspirar, movilizar y aportar a la construcción de una sociedad más íntegra, justa y consciente, entonces habrá cumplido su propósito y todos seremos gratamente ganadores." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-10 text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base md:text-lg text-foreground", children: '"Nunca se equivoca quien mira el futuro con esperanza y trabaja con constancia para hacerlo posible"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "font-display font-bold text-sm mt-3 text-foreground", children: "Oswaldo Smarrelli Torrealba" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream pb-20 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl text-brand-teal text-center mb-3", children: "GALERÍA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground mb-12", children: "Imágenes con historia, reflejos de un camino" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, { images: galleryImages })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const articles = [
  {
    slug: "todos-somos-marca",
    title: "Todos somos marca",
    excerpt: "Aunque no lo queramos, todos somos marca, así nos perciben y así percibimos, ser visibles o no queda a vuestra decisión, quizás, esta idea se asocie a la autopromoción vacía o al influencer sin contenido que mencioné en mi artículo anterior, pero no es así, esto es otra cosa, hablo de una estrategia de posicionamiento con propósito, de una marca personal construida sobre la base de la experiencia, credibilidad y trayectoria.",
    category: "Estrategia",
    date: "2025-05-20",
    readingTime: 4,
    featured: true,
    tags: ["marca personal", "reputación", "posicionamiento"],
    body: [
      {
        type: "p",
        text: "Aunque no lo queramos, todos somos marca, así nos perciben y así percibimos, ser visibles o no queda a vuestra decisión, quizás, esta idea se asocie a la autopromoción vacía o al influencer sin contenido que mencioné en mi artículo anterior, pero no es así, esto es otra cosa, hablo de una estrategia de posicionamiento con propósito, de una marca personal construida sobre la base de la experiencia, credibilidad y trayectoria."
      }
    ]
  },
  {
    slug: "dinamicas-actuales-decadencia-o-evolucion",
    title: "Dinámicas actuales: decadencia o evolución",
    excerpt: "La historia sigue un ciclo de nacimiento, desarrollo y decadencia” así opinaba el filósofo italiano Giambattista Vico, sobran evidencias históricas de momentos de esplendor y estabilidad seguidos de crisis y transformación, algo así como que no avanzamos en línea recta, solo transitamos en espirales, cambiando de formas, pero repitiendo patrones. Es probable que hoy estemos transitando uno de esos espirales en los que el mundo parece desmoronarse, Winston Churchill decía “cuanto más atrás puedas mirar, más adelante verás”.",
    category: "Pensamiento",
    date: "2025-05-06",
    readingTime: 4,
    tags: ["historia", "ciclos", "sociedad"],
    body: [
      {
        type: "p",
        text: "La historia sigue un ciclo de nacimiento, desarrollo y decadencia” así opinaba el filósofo italiano Giambattista Vico, sobran evidencias históricas de momentos de esplendor y estabilidad seguidos de crisis y transformación, algo así como que no avanzamos en línea recta, solo transitamos en espirales, cambiando de formas, pero repitiendo patrones. Es probable que hoy estemos transitando uno de esos espirales en los que el mundo parece desmoronarse, Winston Churchill decía “cuanto más atrás puedas mirar, más adelante verás”."
      }
    ]
  },
  {
    slug: "transformacion-digital-empresa",
    title: "Transformación digital: el desafío de la empresa de hoy",
    excerpt: "Actualmente muchas pequeñas y medianas empresas aún dependen de métodos anticuados para gestionar sus operaciones, no es sorpresa, encontrar oficinas donde el inventario se controla desde hojas de cálculo de excel, el mantenimiento de equipos se registra en papel, el análisis de facturas se realiza de forma manual e igualmente sucede con los pedidos de clientes, entre otras tantas cosas, pero esta forma de trabajar, aunque parezca inofensiva, tiene un costo muy alto.",
    category: "Estrategia",
    date: "2025-04-22",
    readingTime: 4,
    tags: ["transformación", "pymes", "tecnología"],
    body: [
      {
        type: "p",
        text: "Actualmente muchas pequeñas y medianas empresas aún dependen de métodos anticuados para gestionar sus operaciones, no es sorpresa, encontrar oficinas donde el inventario se controla desde hojas de cálculo de excel, el mantenimiento de equipos se registra en papel, el análisis de facturas se realiza de forma manual e igualmente sucede con los pedidos de clientes, entre otras tantas cosas, pero esta forma de trabajar, aunque parezca inofensiva, tiene un costo muy alto."
      }
    ]
  },
  {
    slug: "agonia-de-las-dictaduras",
    title: "Agonía de las dictaduras: caso Venezuela",
    excerpt: "La historia conserva grandes ejemplos del ascenso y caída de regímenes autoritarios, por más sólidos que parezcan, llevan en sí mismos su propia ruina. Al aferrarse al poder, recurren a abusos cada vez mayores, acelerando su colapso. Venezuela no será la excepción.",
    category: "Política",
    date: "2025-04-08",
    readingTime: 3,
    tags: ["venezuela", "autoritarismo", "poder"],
    body: [
      {
        type: "p",
        text: "La historia conserva grandes ejemplos del ascenso y caída de regímenes autoritarios, por más sólidos que parezcan, llevan en sí mismos su propia ruina. Al aferrarse al poder, recurren a abusos cada vez mayores, acelerando su colapso. Venezuela no será la excepción."
      }
    ]
  },
  {
    slug: "brecha-saber-saber-hacer",
    title: 'La brecha entre "saber" y "saber hacer"',
    excerpt: "El genio Leonardo Da Vinci destacó la importancia de la acción sobre el conocimiento y lo dejó plasmado en la frase: “No es el saber lo que es más importante, sino el saber hacer” poderosa sentencia que aplica a cualquier gestión, ya que la posibilidad de un resultado exitoso se sustenta en el equilibrio entre el conocimiento teórico y la capacidad de aplicarlo en la práctica, si bien la inteligencia y el dominio de conceptos son fundamentales, estos por sí solos no garantizan el éxito de la gestión.",
    category: "Pensamiento",
    date: "2025-03-25",
    readingTime: 4,
    tags: ["conocimiento", "acción", "gestión"],
    body: [
      {
        type: "p",
        text: "El genio Leonardo Da Vinci destacó la importancia de la acción sobre el conocimiento y lo dejó plasmado en la frase: “No es el saber lo que es más importante, sino el saber hacer” poderosa sentencia que aplica a cualquier gestión, ya que la posibilidad de un resultado exitoso se sustenta en el equilibrio entre el conocimiento teórico y la capacidad de aplicarlo en la práctica, si bien la inteligencia y el dominio de conceptos son fundamentales, estos por sí solos no garantizan el éxito de la gestión."
      }
    ]
  },
  {
    slug: "mision-trump-ii",
    title: "Misión: Trump II",
    excerpt: "La “Misión: Trump II” no será sencilla, tendrá que navegar un panorama complejo, donde cada decisión será una prueba de su liderazgo y de la capacidad de Estados Unidos para reinventarse y reafirmarse en un mundo cada vez más incierto.",
    category: "Política",
    date: "2025-03-11",
    readingTime: 3,
    tags: ["geopolítica", "estados unidos", "liderazgo"],
    body: [
      {
        type: "p",
        text: "La “Misión: Trump II” no será sencilla, tendrá que navegar un panorama complejo, donde cada decisión será una prueba de su liderazgo y de la capacidad de Estados Unidos para reinventarse y reafirmarse en un mundo cada vez más incierto."
      }
    ]
  },
  {
    slug: "los-amos-del-mundo",
    title: "Los amos del mundo",
    excerpt: "Quizás para muchos será difícil de creer, pero los amos del mundo no son los líderes de las potencias, ellos son circunstanciales, tampoco son los dueños de los grandes bancos, ellos luchan por mantener a flote el valor de sus monedas en un mundo cada vez más diversificado y menos creyente en sus bondades, los verdaderos amos del mundo son los que cambian los hábitos de vida, modifican la cotidianidad y nos hacen dependientes < hasta viciosos > de sus inventos.",
    category: "Política",
    date: "2025-02-25",
    readingTime: 4,
    tags: ["poder", "geopolítica", "tecnología"],
    body: [
      {
        type: "p",
        text: "Quizás para muchos será difícil de creer, pero los amos del mundo no son los líderes de las potencias, ellos son circunstanciales, tampoco son los dueños de los grandes bancos, ellos luchan por mantener a flote el valor de sus monedas en un mundo cada vez más diversificado y menos creyente en sus bondades, los verdaderos amos del mundo son los que cambian los hábitos de vida, modifican la cotidianidad y nos hacen dependientes < hasta viciosos > de sus inventos."
      }
    ]
  },
  {
    slug: "umbrales-de-la-democracia",
    title: "Los umbrales de la democracia",
    excerpt: "La democracia sigue siendo el mejor sistema de gobierno, pero dejando claro que no es un estado estático, es un proceso continuo que requiere vigilancia, defensa constante y todos debemos tener el deber de defenderla, consolidarla y en cuanto sea posible mejorarla, por lo tanto, la democracia no es solo un ideal a ser celebrado, es una tarea a ser realizada.",
    category: "Política",
    date: "2025-02-11",
    readingTime: 3,
    tags: ["democracia", "instituciones", "ciudadanía"],
    body: [
      {
        type: "p",
        text: "La democracia sigue siendo el mejor sistema de gobierno, pero dejando claro que no es un estado estático, es un proceso continuo que requiere vigilancia, defensa constante y todos debemos tener el deber de defenderla, consolidarla y en cuanto sea posible mejorarla, por lo tanto, la democracia no es solo un ideal a ser celebrado, es una tarea a ser realizada."
      }
    ]
  },
  {
    slug: "era-de-la-velocidad",
    title: "La era de la velocidad: te mueves o claudicas",
    excerpt: "Muchas empresas nacen con la misma concepción de las personas en su juventud, elaboran planes de vida exitosos, a largo plazo, rígidos y luego les pasa como el que construye un castillo de arena en la orilla del mar, por muy sólido que parezca está condenado a ser destruido por las olas. En un mundo empresarial cada vez más competitivo y volátil, las organizaciones deben ser capaces de adaptarse a los cambios con la misma agilidad que un camaleón cambia de color, solo aquellas empresas que sean capaces de aprender, innovar y evolucionar de manera constante lograrán sobrevivir y prosperar a largo plazo de igual manera sucede con las personas ante aquella planificación soñada, por lo tanto, es mejor moverse para no claudicar.",
    category: "Emprendimiento",
    date: "2025-01-28",
    readingTime: 5,
    tags: ["innovación", "agilidad", "adaptación"],
    body: [
      {
        type: "p",
        text: "Muchas empresas nacen con la misma concepción de las personas en su juventud, elaboran planes de vida exitosos, a largo plazo, rígidos y luego les pasa como el que construye un castillo de arena en la orilla del mar, por muy sólido que parezca está condenado a ser destruido por las olas. En un mundo empresarial cada vez más competitivo y volátil, las organizaciones deben ser capaces de adaptarse a los cambios con la misma agilidad que un camaleón cambia de color, solo aquellas empresas que sean capaces de aprender, innovar y evolucionar de manera constante lograrán sobrevivir y prosperar a largo plazo de igual manera sucede con las personas ante aquella planificación soñada, por lo tanto, es mejor moverse para no claudicar."
      }
    ]
  }
];
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
}
function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}
function getRelated(slug, n = 3) {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, n);
  return articles.filter((a) => a.slug !== slug && a.category === current.category).slice(0, n).concat(
    articles.filter((a) => a.slug !== slug && a.category !== current.category).slice(0, n)
  ).slice(0, n);
}
const BASE_URL = "";
const Route$4 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/articulos", changefreq: "weekly", priority: "0.9" },
          { path: "/sobre-mi", changefreq: "monthly", priority: "0.7" },
          { path: "/contacto", changefreq: "monthly", priority: "0.6" },
          ...articles.map((a) => ({
            path: `/articulos/${a.slug}`,
            lastmod: a.date,
            changefreq: "monthly",
            priority: "0.8"
          }))
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            "lastmod" in e && e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const heroBg1 = "/assets/image-background1-BTtnEc14.jpg";
const Route$3 = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Oswaldo Smarrelli" },
      {
        name: "description",
        content: "Escribe a Oswaldo Smarrelli para colaboraciones editoriales, consultoría estratégica o entrevistas."
      },
      { property: "og:title", content: "Hablemos — Oswaldo Smarrelli" },
      { property: "og:description", content: "Las buenas ideas comienzan con una conversación." },
      { property: "og:url", content: "/contacto" }
    ],
    links: [{ rel: "canonical", href: "/contacto" }]
  }),
  component: ContactoPage
});
function ContactoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "relative bg-ink bg-cover bg-center text-white",
          style: { backgroundImage: `url(${heroBg1})` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-20 md:py-28", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-6xl text-brand-teal mb-6", children: "HABLEMOS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl text-brand-teal/90 max-w-xl leading-snug", children: "Las buenas ideas comienzan con una conversación. Estoy a un mensaje de distancia." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto bg-[#6d6f72] grid md:grid-cols-2 gap-12 lg:gap-20 p-8 md:p-14 rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, { buttonClassName: "bg-brand-blue text-white hover:bg-brand-blue/90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/90 mb-6", children: "Correo electrónico:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { only: ["Facebook", "Instagram", "X / Twitter"] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const heroBg = "/assets/image-background-q8Yix3YT.png";
const Route$2 = createFileRoute("/articulos")({
  head: () => ({
    meta: [
      { title: "Mi opinión — Oswaldo Smarrelli" },
      {
        name: "description",
        content: "Opinión con sentido: ensayos y columnas sobre política, sociedad, estrategia y emprendimiento."
      },
      { property: "og:title", content: "Mi opinión — Oswaldo Smarrelli" },
      { property: "og:description", content: "Opinión con sentido, palabras que nacen de la reflexión." },
      { property: "og:url", content: "/articulos" }
    ],
    links: [{ rel: "canonical", href: "/articulos" }]
  }),
  component: ArticulosPage
});
function ArticulosPage() {
  const total = articles.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "relative bg-ink bg-cover bg-center text-white",
          style: { backgroundImage: `url(${heroBg})` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl mx-auto text-brand-teal", children: "OPINIÓN CON SENTIDO, PALABRAS QUE NACEN DE LA REFLEXIÓN Y EL COMPROMISO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-white/60", children: "www.oswaldosmarrelli.com" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-16 md:py-24", children: articles.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "border-t border-border py-12 md:py-16 flex items-center justify-between gap-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl uppercase text-foreground mb-4 leading-tight", children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed mb-6", children: a.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/articulos/$slug",
                  params: { slug: a.slug },
                  className: "inline-block bg-brand-blue text-white text-xs tracking-wide px-5 py-2.5 rounded-sm hover:bg-brand-teal transition-colors",
                  children: "MÁS INFORMACIÓN"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-display font-bold text-6xl md:text-8xl text-foreground/90 shrink-0 leading-none",
                "aria-hidden": true,
                children: String(total - i).padStart(2, "0")
              }
            )
          ]
        },
        a.slug
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const portrait = "/assets/oswaldo-portrait-IZLttOq9.jpg";
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oswaldo Smarrelli" },
      {
        name: "description",
        content: "Columnista de opinión y consultor estratégico. Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática."
      },
      { property: "og:title", content: "Oswaldo Smarrelli" },
      {
        property: "og:description",
        content: "Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática."
      },
      { property: "og:url", content: "/" }
    ],
    links: [{ rel: "canonical", href: "/" }]
  }),
  component: HomePage
});
const columns = [
  {
    title: "Presentación",
    body: "Es un verdadero placer darte la bienvenida a mi web, aunque con forma de blog, está pensado para compartir ideas que puedan inspirarte, hacerte reflexionar. Aquí encontrarás contenido diverso e interesante que quizás quieras comentar o compartir. Mi intención es ofrecer un lugar donde distintos temas puedan dialogarse con libertad: vida, ciudadanía, sociedad, política, gerencia, tecnología y más.."
  },
  {
    title: "Diálogo y planificación del futuro",
    body: "Estos temas inciden en cómo pensamos y actuamos, tanto en lo inmediato como en lo que está por venir. Aquí no pretendemos tener la última palabra, por eso este sitio se nutre del intercambio con personas como tú: curiosas, críticas y con ganas de seguir aprendiendo. Estoy convencido que formaremos un gran equipo, conectado por historias, preguntas y proyectos apasionantes, mientras cada quien sigue adelante con su vida diaria.",
    highlight: true
  },
  {
    title: "Participación",
    body: "Tú participación es valiosa: cuantas más voces se sumen al diálogo, más posibilidades tendremos de construir ideas con impacto. Explora, céntrate en los temas que más te interesen y comparte aquello que resuene contigo."
  }
];
const stats = [
  { value: "+ 20 AÑOS", label: "de experiencia" },
  { value: "100%", label: "Confianza" }
];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:h-[calc(100vh-5rem)] bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: portrait,
            alt: "Retrato de Oswaldo Smarrelli",
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl xl:text-5xl leading-[1.1] text-brand-teal mb-6 lg:whitespace-nowrap", children: "CRITERIOS Y PROPÓSITOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/80 max-w-md text-justify", children: "Creo en la fuerza de las palabras, en el poder de las frases y en su capacidad para despertar y mover voluntades, no busco tener la razón, busco sembrar dudas y crear criterios nuevos. No escribo para gustar, cada artículo es una forma de ordenar lo que pienso y compartirlos es acercarme a quienes como yo siguen creyendo que las ideas pueden cambiar realidades." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1440px] mx-auto px-6 lg:px-10 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-10", children: columns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card rounded-2xl border border-border p-9 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-1 w-10 rounded-full bg-brand-teal mb-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-4 leading-tight", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-[15px] leading-relaxed text-muted-foreground text-justify", children: c.body })
          ]
        },
        c.title
      )) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground text-justify", children: "Las ideas nos unen y las palabras nos conectan, aquí empieza nuestro diálogo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-10 md:gap-20", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-brand-teal/30 pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-4xl md:text-5xl text-brand-teal leading-none whitespace-nowrap", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: s.label })
        ] }, s.label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBand, { socials: ["Facebook", "Instagram", "LinkedIn", "X / Twitter"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const palettes = {
  "Política": { bg: "#1f2a37", ink: "#fcfbf7" },
  "Sociedad": { bg: "#3d2914", ink: "#fcfbf7" },
  "Emprendimiento": { bg: "#c2410c", ink: "#fcfbf7" },
  "Estrategia": { bg: "#f3f1ea", ink: "#1a1817" },
  "Pensamiento": { bg: "#1a1817", ink: "#fcfbf7" }
};
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
function ArticleArtwork({
  slug,
  category,
  className = "",
  big = false
}) {
  const p = palettes[category];
  const h = hash(slug);
  const angle = h % 90 - 45;
  const cx = 20 + h % 60;
  const cy = 20 + (h >> 3) % 60;
  const num = String(h % 99 + 1).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative overflow-hidden ${className}`,
      style: { backgroundColor: p.bg, color: p.ink },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full opacity-25",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid slice",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: `grid-${slug}`, width: "6", height: "6", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 6 0 L 0 0 0 6", fill: "none", stroke: p.ink, strokeWidth: "0.15" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", fill: `url(#grid-${slug})` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: big ? 38 : 32, fill: p.ink, fillOpacity: "0.08" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: "0",
                  y1: "50",
                  x2: "100",
                  y2: "50",
                  stroke: p.ink,
                  strokeWidth: "0.4",
                  strokeOpacity: "0.4",
                  transform: `rotate(${angle} 50 50)`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] opacity-70", children: [
            "№ ",
            num
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display italic leading-none self-end",
              style: { fontSize: big ? "clamp(4rem, 14vw, 11rem)" : "clamp(3rem, 8vw, 6rem)" },
              children: category.charAt(0)
            }
          )
        ] })
      ]
    }
  );
}
function ArticleCard({ article }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/articulos/$slug",
      params: { slug: article.slug },
      className: "block",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 overflow-hidden rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArticleArtwork,
          {
            slug: article.slug,
            category: article.category,
            className: "w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-accent mb-3 block", children: article.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl leading-tight mb-4 group-hover:italic transition-all text-balance", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] text-muted-foreground uppercase tracking-wider", children: [
          formatDate(article.date),
          " — ",
          article.readingTime,
          " min"
        ] })
      ]
    }
  ) });
}
function ShareBar({ title, slug }) {
  const url = typeof window !== "undefined" ? `${window.location.origin}/articulos/${slug}` : `/articulos/${slug}`;
  const text = encodeURIComponent(title);
  const u = encodeURIComponent(url);
  const links = [
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X", icon: Twitter, href: `https://twitter.com/intent/tweet?text=${text}&url=${u}` },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${text}%20${u}` }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-y border-border py-4 my-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3 w-3" }),
      " Compartir"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 ml-auto", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Compartir en ${l.label}`,
        className: "size-9 grid place-items-center border border-border hover:bg-foreground hover:text-background transition-colors rounded-sm",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(l.icon, { className: "h-4 w-4" })
      },
      l.label
    )) })
  ] });
}
function NewsletterBlock({ compact = false }) {
  const [email, setEmail] = reactExports.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Introduce un correo válido");
      return;
    }
    toast.success("¡Suscripción recibida! Pronto recibirás el primer análisis.");
    setEmail("");
  };
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "border-t border-b border-border py-12 my-12 grid md:grid-cols-2 gap-8 items-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Suscríbete al Análisis Quincenal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Cada dos semanas, una reflexión profunda en tu correo. Sin ruido." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "tu@correo.com",
                className: "flex-1 bg-transparent border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "bg-foreground text-background font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-accent transition-colors",
                children: "Suscribirme"
              }
            )
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "my-24 bg-foreground text-background p-10 md:p-20 rounded-sm grid md:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block", children: "Newsletter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl italic mb-6 text-balance", children: "Análisis Quincenal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-70 leading-relaxed text-pretty max-w-md", children: "Cada dos semanas, una reflexión profunda sobre los eventos que definen nuestra época. Sin ruido. Sólo ideas que merecen tu tiempo." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-widest opacity-60", htmlFor: "nl-email", children: "Tu correo electrónico" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "nl-email",
          type: "email",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: "nombre@correo.com",
          className: "bg-transparent border-b border-background/30 py-3 focus:border-accent outline-none font-mono text-sm placeholder:text-background/30"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest py-4 mt-4 hover:bg-background hover:text-foreground transition-colors",
          children: "Suscribirme →"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest opacity-40 mt-2", children: "Sin spam. Cancela cuando quieras." })
    ] })
  ] });
}
const Route = createFileRoute("/articulos/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, related: getRelated(params.slug) };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Artículo — Oswaldo Smarrelli" }] };
    return {
      meta: [
        { title: `${a.title} — Oswaldo Smarrelli` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/articulos/${a.slug}` },
        { property: "article:published_time", content: a.date },
        { property: "article:author", content: "Oswaldo Smarrelli" },
        { property: "article:section", content: a.category }
      ],
      links: [{ rel: "canonical", href: `/articulos/${a.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: a.date,
            author: { "@type": "Person", name: "Oswaldo Smarrelli" },
            articleSection: a.category
          })
        }
      ]
    };
  },
  notFoundComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 grid place-items-center px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6", children: "Error 404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl mb-6", children: "Artículo no encontrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/articulos", className: "font-mono text-xs uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors", children: "Volver al archivo" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] }),
  errorComponent: ({ error }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
    "No pudimos cargar este artículo: ",
    error.message
  ] }) }),
  component: ArticlePage
});
function ArticlePage() {
  const { article, related } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl mx-auto px-6 pt-12 md:pt-16 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/articulos",
            className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
              " Mi Opinión"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mb-6 font-mono text-[10px] uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: article.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            formatDate(article.date),
            " · ",
            article.readingTime,
            " min de lectura"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance mb-8", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground leading-relaxed font-display italic text-pretty", children: article.excerpt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ArticleArtwork,
        {
          slug: article.slug,
          category: article.category,
          big: true,
          className: "w-full aspect-[16/9] md:aspect-[21/9] rounded-sm"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-6 prose-editorial", children: [
        article.body.map((block, i) => {
          if (block.type === "h2") return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: block.text }, i);
          if (block.type === "h3") return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: block.text }, i);
          if (block.type === "quote")
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
              '"',
              block.text,
              '"'
            ] }, i);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: block.text }, i);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShareBar, { title: article.title, slug: article.slug }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "not-prose border border-border p-6 md:p-8 my-12 flex gap-6 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: portrait,
              alt: "Oswaldo Smarrelli",
              className: "size-20 md:size-24 object-cover rounded-sm grayscale flex-shrink-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-accent mb-2 block", children: "Sobre el autor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: "Oswaldo Smarrelli" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Economista, magíster en gerencia, locutor certificado y articulista por convicción. Más de 20 años acompañando a líderes y organizaciones a pensar el presente para diseñar el mañana." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/sobre-mi",
                className: "inline-block mt-4 font-mono text-[10px] uppercase tracking-widest text-foreground hover:text-accent transition-colors",
                children: "Leer biografía completa →"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, { compact: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-6 py-20 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl italic mb-12", children: "Seguir leyendo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-x-10 gap-y-16", children: related.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }, a.slug)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const SobreMiRoute = Route$5.update({
  id: "/sobre-mi",
  path: "/sobre-mi",
  getParentRoute: () => Route$6
});
const SitemapDotxmlRoute = Route$4.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ContactoRoute = Route$3.update({
  id: "/contacto",
  path: "/contacto",
  getParentRoute: () => Route$6
});
const ArticulosRoute = Route$2.update({
  id: "/articulos",
  path: "/articulos",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const ArticulosSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ArticulosRoute
});
const ArticulosRouteChildren = {
  ArticulosSlugRoute
};
const ArticulosRouteWithChildren = ArticulosRoute._addFileChildren(
  ArticulosRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  ArticulosRoute: ArticulosRouteWithChildren,
  ContactoRoute,
  SitemapDotxmlRoute,
  SobreMiRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
