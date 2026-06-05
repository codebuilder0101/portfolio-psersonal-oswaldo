import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { I as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, b as getServerFnById } from "./server-Bzpzupt-.mjs";
import { o as objectType, s as stringType, n as numberType, e as enumType, a as arrayType, b as booleanType } from "../_libs/zod.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-Da8j6AuB.css";
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-brand-terracotta mb-6", children: "Error 404" }),
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
const Route$c = createRootRouteWithContext()({
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
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
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
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const $$splitComponentImporter$9 = () => import("./sobre-mi-CK5_Wkiz.mjs");
const Route$b = createFileRoute("/sobre-mi")({
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
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const BASE_URL = "";
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { listArticles } = await import("./db.server-OhwauGgH.mjs").then((n) => n.d);
        const articles = listArticles();
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
const $$splitComponentImporter$8 = () => import("./contacto-BL6UAnZ5.mjs");
const Route$9 = createFileRoute("/contacto")({
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
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./articulos-CAcAwuPq.mjs");
const Route$8 = createFileRoute("/articulos")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const bodyBlock = objectType({
  type: enumType(["p", "h2", "h3", "quote", "image"]),
  text: stringType()
});
const articleInput = objectType({
  slug: stringType().default(""),
  title: stringType().min(1, "El título es obligatorio"),
  excerpt: stringType().default(""),
  categoryId: numberType().nullable().default(null),
  date: stringType().min(1, "La fecha es obligatoria"),
  readingTime: numberType().int().min(1).default(1),
  featured: booleanType().default(false),
  hero: stringType().nullable().default(null),
  tags: arrayType(stringType()).default([]),
  body: arrayType(bodyBlock).default([])
});
const adminLogin = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  password: stringType()
})).handler(createSsrRpc("c9ff09fb61254dc405f83219dbf36b90d7f1b262c39e4af58b715041fb0a761c"));
const adminLogout = createServerFn({
  method: "POST"
}).handler(createSsrRpc("3c86242b52674d0de0a1f6a4c06fb512249761cc4e86f37ccac993c1bfe71b26"));
const adminCheck = createServerFn({
  method: "GET"
}).handler(createSsrRpc("137edaad0be9bcd740b64445fedec3b1f1703ea49e04643a42ed4e32c9c26f21"));
createServerFn({
  method: "POST"
}).inputValidator(objectType({
  current: stringType(),
  next: stringType().min(4, "Mínimo 4 caracteres")
})).handler(createSsrRpc("409d89c19e2c4fdbf170606c2212aec85fef2fd170b07cd546c4b3f844ed2a2b"));
const adminListArticles = createServerFn({
  method: "GET"
}).handler(createSsrRpc("d16249620706fa714409e60b897c2f0a30b690bc047c6e37e3ad34ee13a60d91"));
const adminGetArticle = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  id: numberType()
})).handler(createSsrRpc("277170b5f4b6ad7735ace5780c09236588dc59df4aa2fbe6ec4b5d0885d9fdd4"));
const adminSaveArticle = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType().nullable(),
  input: articleInput
})).handler(createSsrRpc("470fd0340831616a1ec677feaf5d25890ac77bce2c53cc05ce4185942805f16e"));
const adminDeleteArticle = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType()
})).handler(createSsrRpc("8eb48ac8f751800d3ab96257f501944c341156d381cc42cf48beb3b0d32e3761"));
const adminListCategories = createServerFn({
  method: "GET"
}).handler(createSsrRpc("6a0369ce86e6f708a43936dc8e8fc05b21793d5b84732b38e4d67785fcf30cbe"));
const adminCreateCategory = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType().min(1)
})).handler(createSsrRpc("f0c3127a5dec81d74d79642dd4bf10d9be7a7d765fb5374dfa72a1aa19e25f1f"));
const adminUpdateCategory = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType(),
  name: stringType().min(1)
})).handler(createSsrRpc("ccf2000da44b48c80e94fee4a3bdb84b71f1186fbbd7206f1d2f6ad0d86b1ffc"));
const adminDeleteCategory = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType()
})).handler(createSsrRpc("ad900f33fc3b517d36a1d28155549b77804a57601f752c34746d04f57915e208"));
const adminUploadImage = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(createSsrRpc("e257f3bfd31d83e0e29060e7d8d7d5bdaac91d96eb0956eafbfb2ef841369069"));
const $$splitComponentImporter$6 = () => import("./admin-A9oX4Iv0.mjs");
const Route$7 = createFileRoute("/admin")({
  loader: async () => ({
    authed: (await adminCheck()).authed
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-BewyQS7_.mjs");
const Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Oswaldo Smarrelli"
    }, {
      name: "description",
      content: "Columnista de opinión y consultor estratégico. Análisis sobre política, sociedad y estrategia desde una perspectiva humanista y pragmática."
    }, {
      property: "og:title",
      content: "Oswaldo Smarrelli"
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
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const fetchArticles = createServerFn({
  method: "GET"
}).handler(createSsrRpc("db3d5862df01923394424d139237b14806d72c6b2d8b94198c16a730647d9beb"));
const fetchCategories = createServerFn({
  method: "GET"
}).handler(createSsrRpc("fcb2fc5be24b347e9e0d21cd4aa690dda25abd6e2ecdd67a25034904f6a745cb"));
const fetchArticle = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  slug: stringType()
})).handler(createSsrRpc("a847a272df6e1de2b0c695d7e19e27ea46d2225644a4db1ed26526431e4daf59"));
const fetchRelated = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  slug: stringType()
})).handler(createSsrRpc("7f438b20e11c9cbc6e42f07b84b7ea49185e37e91ce6729dba3575c53be44994"));
const $$splitComponentImporter$4 = () => import("./articulos.index-DZVHIyLC.mjs");
const Route$5 = createFileRoute("/articulos/")({
  validateSearch: (search) => {
    const c = search.categoria;
    return typeof c === "string" && c ? {
      categoria: c
    } : {};
  },
  loader: async () => ({
    articles: await fetchArticles(),
    categories: await fetchCategories()
  }),
  head: () => ({
    meta: [{
      title: "Mis artículos — Oswaldo Smarrelli"
    }, {
      name: "description",
      content: "Opinión con sentido: artículos sobre política, sociedad, emprendimiento y estrategia."
    }, {
      property: "og:title",
      content: "Mis artículos — Oswaldo Smarrelli"
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
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin.index-sx3QxGfk.mjs");
const Route$4 = createFileRoute("/admin/")({
  loader: async () => {
    const {
      authed
    } = await adminCheck();
    if (!authed) return {
      articles: []
    };
    return {
      articles: await adminListArticles()
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const Route$3 = createFileRoute("/uploads/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { readImage } = await import("./db.server-OhwauGgH.mjs").then((n) => n.d);
        const img = readImage(params._splat ?? "");
        if (!img) return new Response("Not found", { status: 404 });
        return new Response(img.bytes, {
          headers: {
            "Content-Type": img.mime,
            "Cache-Control": "public, max-age=31536000, immutable"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$2 = () => import("./articulos._slug-BSiMpXUu.mjs");
const $$splitErrorComponentImporter = () => import("./articulos._slug-DdqJ9Aqs.mjs");
const $$splitNotFoundComponentImporter = () => import("./articulos._slug-Cr0kUIE3.mjs");
const Route$2 = createFileRoute("/articulos/$slug")({
  loader: async ({
    params
  }) => {
    const article = await fetchArticle({
      data: {
        slug: params.slug
      }
    });
    if (!article) throw notFound();
    const related = await fetchRelated({
      data: {
        slug: params.slug
      }
    });
    return {
      article,
      related
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
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.categorias-BoEJ7fMg.mjs");
const Route$1 = createFileRoute("/admin/categorias")({
  loader: async () => {
    const {
      authed
    } = await adminCheck();
    if (!authed) return {
      categories: []
    };
    return {
      categories: await adminListCategories()
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.articulos._id-HDPtMXYu.mjs");
const Route = createFileRoute("/admin/articulos/$id")({
  loader: async ({
    params
  }) => {
    const {
      authed
    } = await adminCheck();
    if (!authed) return {
      categories: [],
      article: null
    };
    const categories = await adminListCategories();
    const article = params.id === "new" ? null : await adminGetArticle({
      data: {
        id: Number(params.id)
      }
    });
    return {
      categories,
      article
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SobreMiRoute = Route$b.update({
  id: "/sobre-mi",
  path: "/sobre-mi",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const ContactoRoute = Route$9.update({
  id: "/contacto",
  path: "/contacto",
  getParentRoute: () => Route$c
});
const ArticulosRoute = Route$8.update({
  id: "/articulos",
  path: "/articulos",
  getParentRoute: () => Route$c
});
const AdminRoute = Route$7.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ArticulosIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => ArticulosRoute
});
const AdminIndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const UploadsSplatRoute = Route$3.update({
  id: "/uploads/$",
  path: "/uploads/$",
  getParentRoute: () => Route$c
});
const ArticulosSlugRoute = Route$2.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ArticulosRoute
});
const AdminCategoriasRoute = Route$1.update({
  id: "/categorias",
  path: "/categorias",
  getParentRoute: () => AdminRoute
});
const AdminArticulosIdRoute = Route.update({
  id: "/articulos/$id",
  path: "/articulos/$id",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminCategoriasRoute,
  AdminIndexRoute,
  AdminArticulosIdRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const ArticulosRouteChildren = {
  ArticulosSlugRoute,
  ArticulosIndexRoute
};
const ArticulosRouteWithChildren = ArticulosRoute._addFileChildren(
  ArticulosRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  ArticulosRoute: ArticulosRouteWithChildren,
  ContactoRoute,
  SitemapDotxmlRoute,
  SobreMiRoute,
  UploadsSplatRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
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
  Route$7 as R,
  Route$5 as a,
  Route$4 as b,
  Route$2 as c,
  Route$1 as d,
  Route as e,
  adminCreateCategory as f,
  adminDeleteArticle as g,
  adminDeleteCategory as h,
  adminLogin as i,
  adminLogout as j,
  adminSaveArticle as k,
  adminUpdateCategory as l,
  adminUploadImage as m,
  router as r
};
