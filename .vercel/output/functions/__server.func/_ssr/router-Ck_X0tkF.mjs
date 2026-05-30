import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
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
const appCss = "/assets/styles-BI_jPaDB.css";
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
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap"
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
const $$splitComponentImporter$4 = () => import("./sobre-mi-DGjk_Ad-.mjs");
const Route$5 = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [{
      title: "Sobre mí — Oswaldo Smarrelli"
    }, {
      name: "description",
      content: "Oswaldo Smarrelli: economista, magíster en gerencia, locutor certificado y articulista por convicción."
    }, {
      property: "og:title",
      content: "Sobre Oswaldo Smarrelli"
    }, {
      property: "og:description",
      content: "Economista, magíster en gerencia, columnista de opinión y consultor estratégico."
    }, {
      property: "og:url",
      content: "/sobre-mi"
    }],
    links: [{
      rel: "canonical",
      href: "/sobre-mi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
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
const $$splitComponentImporter$3 = () => import("./contacto-DOj-9Bp3.mjs");
const Route$3 = createFileRoute("/contacto")({
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
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./articulos-gHJDPnsu.mjs");
const Route$2 = createFileRoute("/articulos")({
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
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-QffePfl9.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Oswaldo Smarrelli — Criterios y propósitos"
    }, {
      name: "description",
      content: "Columnista de opinión y consultor estratégico. Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática."
    }, {
      property: "og:title",
      content: "Oswaldo Smarrelli — Criterios y propósitos"
    }, {
      property: "og:description",
      content: "Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./articulos._slug-oKWPELcL.mjs");
const $$splitErrorComponentImporter = () => import("./articulos._slug-DdqJ9Aqs.mjs");
const $$splitNotFoundComponentImporter = () => import("./articulos._slug-DMJDhwU8.mjs");
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
        content: "Oswaldo Smarrelli"
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
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          author: {
            "@type": "Person",
            name: "Oswaldo Smarrelli"
          },
          articleSection: a.category
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
  Route as R,
  articles as a,
  formatDate as f,
  router as r
};
