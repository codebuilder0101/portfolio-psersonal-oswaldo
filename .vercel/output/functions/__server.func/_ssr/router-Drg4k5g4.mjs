import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { I as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
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
const appCss = "/assets/styles-rFAtR66P.css";
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
const site = {
  name: "Oswaldo Smarrelli",
  brand: "",
  title: "Oswaldo Smarrelli — Columnista de opinión y consultor estratégico",
  description: "Análisis y ensayos sobre política, sociedad, estrategia y emprendimiento por Oswaldo Smarrelli. Criterios y propósitos para pensar el presente y diseñar el mañana.",
  url: "https://www.oswaldosmarrelli.com",
  author: "Oswaldo Smarrelli",
  jobTitle: "Columnista de opinión y consultor estratégico",
  // TODO(cliente): confirmar correo de contacto público.
  email: "contacto@oswaldosmarrelli.com",
  instagramHandle: "elpoderdelasfrases"
};
const socials = {
  facebook: "#",
  instagram: `https://instagram.com/${site.instagramHandle}`,
  linkedin: "#",
  x: "#"
};
const nav = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/articulos", label: "Mi opinión" },
  { to: "/contacto", label: "Contacto" }
];
const mediaLogos = [
  { name: "El Nacional" },
  { name: "Tal Cual" },
  { name: "Runrun.es" },
  { name: "Analítica" },
  { name: "El Universal" }
];
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-brand-teal mb-6", children: "Error 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl mb-6", children: "Página no encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "La página que buscas no existe o ha sido reubicada." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block font-medium text-sm border-b-2 border-ink pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors",
        children: "Volver al inicio →"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl mb-4", children: "Algo salió mal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 text-sm", children: "La página no pudo cargarse. Inténtalo de nuevo." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "font-medium text-sm border-b-2 border-ink pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors",
        children: "Reintentar"
      }
    )
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: site.title },
      { name: "description", content: site.description },
      { name: "author", content: site.author },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0f6e6e" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.author,
          jobTitle: site.jobTitle,
          url: site.url,
          sameAs: [`https://instagram.com/${site.instagramHandle}`]
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("noscript", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.reveal{opacity:1!important;transform:none!important}` }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center" })
  ] });
}
const $$splitComponentImporter$5 = () => import("./sobre-mi-6DZrOxue.mjs");
const Route$6 = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [{
      title: "Sobre mí — Oswaldo Smarrelli"
    }, {
      name: "description",
      content: "Oswaldo Smarrelli: economista con maestría en gerencia administrativa, +15 años de experiencia y columnista de opinión por más de 8 años."
    }, {
      property: "og:title",
      content: "Sobre Oswaldo Smarrelli"
    }, {
      property: "og:description",
      content: "Economista, magíster en gerencia administrativa, columnista y consultor estratégico."
    }, {
      property: "og:url",
      content: "/sobre-mi"
    }],
    links: [{
      rel: "canonical",
      href: "/sobre-mi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const __vite_glob_0_0 = '---\r\ntitle: "Agonía de las dictaduras: el caso Venezuela"\r\nslug: "agonia-de-las-dictaduras"\r\nexcerpt: "Las dictaduras no caen: agonizan. Un análisis sobre los mecanismos del poder absoluto cuando se queda sin futuro y solo le queda el presente."\r\ncategory: "Política"\r\ndate: "2025-03-18"\r\nreadingTime: 14\r\ncover: "/img/bg/art-dictaduras.jpg"\r\ntags: ["venezuela", "autoritarismo", "transición"]\r\n---\r\n\r\nLas dictaduras del siglo XXI han aprendido a sobrevivir más allá de su legitimidad. Sustituyen la convicción por el miedo, y la institución por la red de complicidades.\r\n\r\nPero ni el miedo ni la complicidad son eternos. Llega un momento en que el régimen se mantiene en pie solo por inercia.\r\n\r\n> Cuando el poder solo se sostiene por el cálculo de quienes lo rodean, ha dejado de ser poder: es ya una forma de espera.\r\n';
const __vite_glob_0_1 = '---\r\ntitle: "La brecha entre saber y saber hacer"\r\nslug: "brecha-saber-saber-hacer"\r\nexcerpt: "Hay un abismo entre la información disponible y la sabiduría aplicada. Sobre la urgencia de cerrar la distancia entre el diagnóstico y la acción."\r\ncategory: "Pensamiento"\r\ndate: "2025-03-04"\r\nreadingTime: 6\r\ncover: "/img/bg/art-brecha.jpg"\r\ntags: ["educación", "acción"]\r\n---\r\n\r\nVivimos en la era de la sobreinformación y, paradójicamente, de la subdecisión. Sabemos mucho y resolvemos poco.\r\n\r\nLa diferencia entre saber y saber hacer es, casi siempre, una cuestión de carácter: la disposición de poner el cuerpo en aquello que la mente ya entendió.\r\n';
const __vite_glob_0_2 = '---\r\ntitle: "La era de la velocidad: te mueves o claudicas"\r\nslug: "era-de-la-velocidad"\r\nexcerpt: "El cambio dejó de ser un evento para convertirse en clima. Lo que diferencia hoy a las organizaciones no es su tamaño, sino su cadencia."\r\ncategory: "Emprendimiento"\r\ndate: "2025-02-05"\r\nreadingTime: 8\r\ncover: "/img/bg/art-velocidad.jpg"\r\ntags: ["innovación", "agilidad"]\r\n---\r\n\r\nLo que antes se medía en décadas hoy se mide en trimestres. Lo que antes era ventaja competitiva, hoy es boleto de entrada.\r\n\r\nLa velocidad sin propósito es agitación. Pero el propósito sin velocidad, en este mercado, es nostalgia.\r\n';
const __vite_glob_0_3 = '---\r\ntitle: "Los amos del mundo"\r\nslug: "los-amos-del-mundo"\r\nexcerpt: "Quien controla los datos, controla el relato. Y quien controla el relato, redibuja en silencio las fronteras del poder global."\r\ncategory: "Política"\r\ndate: "2025-02-20"\r\nreadingTime: 11\r\ncover: "/img/bg/art-amos.jpg"\r\ntags: ["geopolítica", "tecnología", "poder"]\r\n---\r\n\r\nEl siglo XX inventó las multinacionales. El XXI inventó algo más extraño: empresas más poderosas que la mayoría de los Estados, sin pasaporte, sin frontera, sin contrapeso.\r\n';
const __vite_glob_0_4 = '---\r\ntitle: "La soledad en la era de la hiperconectividad"\r\nslug: "soledad-hiperconectividad"\r\nexcerpt: "Nunca estuvimos tan acompañados ni tan solos. Una reflexión sobre los vínculos que la pantalla simula y los que la vida exige."\r\ncategory: "Sociedad"\r\ndate: "2025-04-15"\r\nreadingTime: 9\r\ncover: "/img/bg/art-soledad.jpg"\r\ntags: ["sociedad", "tecnología", "vínculos"]\r\n---\r\n\r\nLa paradoja contemporánea: cuanto más conectados estamos, más reportamos sentirnos solos. Algo no cuadra en la ecuación del progreso.\r\n\r\nLos vínculos digitales nos dan la sensación de presencia sin el costo del compromiso. Pero la amistad, la familia, la comunidad, son ejercicios de fricción tolerada.\r\n\r\n> La soledad moderna no es ausencia de gente: es ausencia de tiempo compartido sin pantalla intermedia.\r\n';
const __vite_glob_0_5 = '---\r\ntitle: "Todos somos marca"\r\nslug: "todos-somos-marca"\r\nexcerpt: "Aunque no lo queramos, todos somos marca, y eso conlleva una responsabilidad mayor: cada interacción suma o resta a nuestra reputación."\r\ncategory: "Estrategia"\r\ndate: "2025-04-02"\r\nreadingTime: 7\r\ncover: "/img/bg/art-marca.jpg"\r\ntags: ["marca personal", "reputación"]\r\n---\r\n\r\nLa marca personal no es un proyecto opcional: es la consecuencia inevitable de existir en un mundo conectado.\r\n\r\nLo que se proyecta en una conversación, en una publicación o en un silencio, va construyendo —día a día— el activo más volátil y más valioso que tenemos: la reputación.\r\n';
const __vite_glob_0_6 = '---\r\ntitle: "Transformación digital: el desafío de la empresa de hoy"\r\nslug: "transformacion-digital-empresa"\r\nexcerpt: "La tecnología es la parte fácil. El verdadero desafío es cultural: dejar de gerenciar desde la nostalgia y empezar a liderar desde la curiosidad."\r\ncategory: "Estrategia"\r\ndate: "2025-04-28"\r\nreadingTime: 8\r\ncover: "/img/bg/art-transformacion.jpg"\r\ntags: ["transformación", "liderazgo", "cultura"]\r\n---\r\n\r\nLa mayoría de los proyectos de transformación digital fracasan no por la tecnología, sino por la incapacidad de la organización para reescribir sus propias narrativas internas.\r\n\r\n## El liderazgo como traducción\r\n\r\nEl líder contemporáneo no es quien tiene todas las respuestas; es quien sabe formular las preguntas correctas y traducir incertidumbre en aprendizaje colectivo.\r\n\r\n> Digitalizar procesos rotos solo produce errores más rápidos.\r\n\r\nLa verdadera transformación empieza cuando la organización acepta que el viejo modelo ya no explica el mundo —y que el nuevo todavía está por escribirse, con su gente dentro.\r\n';
const __vite_glob_0_7 = '---\r\ntitle: "Los umbrales de la democracia: ¿hacia dónde camina el contrato social?"\r\nslug: "umbrales-de-la-democracia"\r\nexcerpt: "En una era de polarización algorítmica, los pilares de la convivencia se tambalean. Una mirada a la erosión de las instituciones y la urgencia de una nueva pedagogía civil."\r\ncategory: "Política"\r\ndate: "2025-05-12"\r\nreadingTime: 12\r\nfeatured: true\r\ncover: "/img/bg/art-umbrales.jpg"\r\ntags: ["democracia", "instituciones", "polarización"]\r\n---\r\n\r\nLa democracia se mide menos por sus rituales que por la salud silenciosa de los acuerdos que la sostienen. Hoy, esos acuerdos crujen.\r\n\r\nCuando el ciudadano deja de creer que las reglas son las mismas para todos, no abandona la república con un portazo: lo hace en silencio, votando con desinterés, con cinismo, con migraciones internas hacia lo privado.\r\n\r\n## El algoritmo y la plaza pública\r\n\r\nLas plataformas digitales han fragmentado la conversación común. Cada usuario habita una realidad curada por su propio sesgo, multiplicada por la lógica del engagement. Ya no discutimos los mismos hechos.\r\n\r\n> La polarización no es un accidente: es un modelo de negocio que externalizó sus costos sobre la democracia.\r\n\r\nNecesitamos, con urgencia, una pedagogía civil que vuelva a enseñar el arte difícil de disentir sin destruir. No para imponer consensos artificiales, sino para recuperar la idea —tan antigua y tan moderna— de que el otro existe.\r\n\r\n## Reconstruir, no restaurar\r\n\r\nNo se trata de volver a un pasado idealizado. Se trata de imaginar instituciones a la altura del siglo que habitamos: más transparentes, más cercanas, más capaces de rendir cuentas en tiempo real.\r\n\r\nEl contrato social que viene no se firmará en papel. Se escribirá, día a día, en la calidad de nuestras conversaciones públicas.\r\n';
function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(normalized);
  if (!match) return { data: {}, content: normalized.trim() };
  const data = {};
  for (const line of match[1].split("\n")) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    data[key] = parseValue(line.slice(idx + 1).trim());
  }
  return { data, content: normalized.slice(match[0].length).trim() };
}
function parseValue(value) {
  if (value === "") return "";
  if (value === "true") return true;
  if (value === "false") return false;
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((s) => stripQuotes(s.trim()));
  }
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return stripQuotes(value);
}
function stripQuotes(s) {
  if (s.startsWith('"') && s.endsWith('"') || s.startsWith("'") && s.endsWith("'")) {
    return s.slice(1, -1);
  }
  return s;
}
const modules = /* @__PURE__ */ Object.assign({
  "../content/articulos/agonia-de-las-dictaduras.md": __vite_glob_0_0,
  "../content/articulos/brecha-saber-saber-hacer.md": __vite_glob_0_1,
  "../content/articulos/era-de-la-velocidad.md": __vite_glob_0_2,
  "../content/articulos/los-amos-del-mundo.md": __vite_glob_0_3,
  "../content/articulos/soledad-hiperconectividad.md": __vite_glob_0_4,
  "../content/articulos/todos-somos-marca.md": __vite_glob_0_5,
  "../content/articulos/transformacion-digital-empresa.md": __vite_glob_0_6,
  "../content/articulos/umbrales-de-la-democracia.md": __vite_glob_0_7
});
function estimateReadingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
function buildArticles() {
  const list = [];
  for (const [path, raw] of Object.entries(modules)) {
    const { data, content } = parseFrontmatter(raw);
    const fileSlug = path.split("/").pop().replace(/\.md$/, "");
    list.push({
      slug: data.slug || fileSlug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Pensamiento",
      date: data.date ?? "",
      readingTime: data.readingTime || estimateReadingTime(content),
      featured: Boolean(data.featured),
      cover: data.cover || void 0,
      tags: Array.isArray(data.tags) ? data.tags : [],
      content
    });
  }
  return list.sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0);
}
const articles = buildArticles();
const categories = [
  "Política",
  "Sociedad",
  "Emprendimiento",
  "Estrategia",
  "Pensamiento"
];
function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
}
function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}
function getFeatured() {
  return articles.find((a) => a.featured) ?? articles[0];
}
function getByCategory(category) {
  return articles.filter((a) => a.category === category);
}
function countByCategory(category) {
  return articles.filter((a) => a.category === category).length;
}
function getRelated(slug, n = 3) {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, n);
  const sameCat = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const otherCat = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...sameCat, ...otherCat].slice(0, n);
}
const BASE_URL = site.url;
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/articulos", changefreq: "weekly", priority: "0.9" },
          { path: "/sobre-mi", changefreq: "monthly", priority: "0.7" },
          { path: "/contacto", changefreq: "monthly", priority: "0.6" },
          ...categories.map((c) => ({
            path: `/categoria/${encodeURIComponent(c)}`,
            changefreq: "weekly",
            priority: "0.6"
          })),
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
const $$splitComponentImporter$4 = () => import("./contacto-BS337eyV.mjs");
const Route$4 = createFileRoute("/contacto")({
  head: () => ({
    meta: [{
      title: "Contacto — Oswaldo Smarrelli"
    }, {
      name: "description",
      content: "Escribe a Oswaldo Smarrelli para colaboraciones editoriales, consultoría estratégica o entrevistas."
    }, {
      property: "og:title",
      content: "Hablemos — Oswaldo Smarrelli"
    }, {
      property: "og:description",
      content: "Las buenas ideas comienzan con una conversación."
    }, {
      property: "og:url",
      content: "/contacto"
    }],
    links: [{
      rel: "canonical",
      href: "/contacto"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./articulos-CmniH3AP.mjs");
const Route$3 = createFileRoute("/articulos")({
  head: () => ({
    meta: [{
      title: "Mi opinión — Oswaldo Smarrelli"
    }, {
      name: "description",
      content: "Opinión con sentido: ensayos y columnas sobre política, sociedad, estrategia y emprendimiento."
    }, {
      property: "og:title",
      content: "Mi opinión — Oswaldo Smarrelli"
    }, {
      property: "og:description",
      content: "Opinión con sentido, palabras que nacen de la reflexión."
    }, {
      property: "og:url",
      content: "/articulos"
    }],
    links: [{
      rel: "canonical",
      href: "/articulos"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DIDEsvbc.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: site.title
    }, {
      name: "description",
      content: site.description
    }, {
      property: "og:title",
      content: site.title
    }, {
      property: "og:description",
      content: site.description
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./categoria._categoria-C7HBE7-C.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./categoria._categoria-C6-f9bGL.mjs");
const Route$1 = createFileRoute("/categoria/$categoria")({
  loader: ({
    params
  }) => {
    const categoria = decodeURIComponent(params.categoria);
    if (!categories.includes(categoria)) throw notFound();
    return {
      categoria,
      items: getByCategory(categoria)
    };
  },
  head: ({
    loaderData
  }) => {
    const c = loaderData?.categoria ?? "Temas";
    return {
      meta: [{
        title: `${c} — Oswaldo Smarrelli`
      }, {
        name: "description",
        content: `Artículos de opinión sobre ${c.toLowerCase()}.`
      }, {
        property: "og:title",
        content: `${c} — Oswaldo Smarrelli`
      }, {
        property: "og:url",
        content: `/categoria/${c}`
      }],
      links: [{
        rel: "canonical",
        href: `/categoria/${c}`
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./articulos._slug-CtH3ufzP.mjs");
const $$splitNotFoundComponentImporter = () => import("./articulos._slug-C8CJdRa8.mjs");
const Route = createFileRoute("/articulos/$slug")({
  loader: ({
    params
  }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return {
      article,
      related: getRelated(params.slug)
    };
  },
  head: ({
    loaderData
  }) => {
    const a = loaderData?.article;
    if (!a) return {
      meta: [{
        title: "Artículo — Oswaldo Smarrelli"
      }]
    };
    return {
      meta: [{
        title: `${a.title} — Oswaldo Smarrelli`
      }, {
        name: "description",
        content: a.excerpt
      }, {
        property: "og:title",
        content: a.title
      }, {
        property: "og:description",
        content: a.excerpt
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/articulos/${a.slug}`
      }, {
        property: "article:published_time",
        content: a.date
      }, {
        property: "article:author",
        content: site.author
      }, {
        property: "article:section",
        content: a.category
      }],
      links: [{
        rel: "canonical",
        href: `/articulos/${a.slug}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          author: {
            "@type": "Person",
            name: site.author
          },
          articleSection: a.category,
          keywords: a.tags.join(", ")
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SobreMiRoute = Route$6.update({
  id: "/sobre-mi",
  path: "/sobre-mi",
  getParentRoute: () => Route$7
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const ContactoRoute = Route$4.update({
  id: "/contacto",
  path: "/contacto",
  getParentRoute: () => Route$7
});
const ArticulosRoute = Route$3.update({
  id: "/articulos",
  path: "/articulos",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const CategoriaCategoriaRoute = Route$1.update({
  id: "/categoria/$categoria",
  path: "/categoria/$categoria",
  getParentRoute: () => Route$7
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
  SobreMiRoute,
  CategoriaCategoriaRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  Route as a,
  articles as b,
  categories as c,
  countByCategory as d,
  socials as e,
  formatDate as f,
  getFeatured as g,
  mediaLogos as m,
  nav as n,
  router as r,
  site as s
};
