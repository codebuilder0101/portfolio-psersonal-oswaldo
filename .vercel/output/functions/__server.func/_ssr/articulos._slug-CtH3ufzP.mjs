import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-9qGk-_3j.mjs";
import { A as ArticleCard } from "./article-card-BdwlYoMf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { N as NewsletterBlock } from "./newsletter-block-CDwOuImS.mjs";
import { a as bgForCategory, R as Reveal } from "./reveal-CbUhlXyA.mjs";
import { a as Route, f as formatDate, s as site } from "./router-Drg4k5g4.mjs";
import { p as portrait } from "./oswaldo-portrait-5fTWhhVp.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft, C as Check, L as Link2, S as Share2 } from "../_libs/lucide-react.mjs";
import { M as Markdown$1 } from "../_libs/react-markdown.mjs";
import { r as remarkGfm } from "../_libs/remark-gfm.mjs";
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
import "./server-DODrafgD.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/devlop.mjs";
import "../_libs/unified.mjs";
import "../_libs/bail.mjs";
import "../_libs/extend.mjs";
import "../_libs/is-plain-obj.mjs";
import "../_libs/trough.mjs";
import "../_libs/vfile.mjs";
import "../_libs/vfile-message.mjs";
import "../_libs/unist-util-stringify-position.mjs";
import "node:process";
import "node:path";
import "node:url";
import "../_libs/remark-parse.mjs";
import "../_libs/mdast-util-from-markdown.mjs";
import "../_libs/micromark-util-decode-numeric-character-reference+[...].mjs";
import "../_libs/micromark-util-decode-string.mjs";
import "../_libs/decode-named-character-reference+[...].mjs";
import "../_libs/character-entities.mjs";
import "../_libs/micromark-util-normalize-identifier+[...].mjs";
import "../_libs/micromark.mjs";
import "../_libs/micromark-util-combine-extensions+[...].mjs";
import "../_libs/micromark-util-chunked.mjs";
import "../_libs/micromark-factory-space.mjs";
import "../_libs/micromark-util-character.mjs";
import "../_libs/micromark-core-commonmark.mjs";
import "../_libs/micromark-util-classify-character+[...].mjs";
import "../_libs/micromark-util-resolve-all.mjs";
import "../_libs/micromark-util-subtokenize.mjs";
import "../_libs/micromark-factory-destination.mjs";
import "../_libs/micromark-factory-label.mjs";
import "../_libs/micromark-factory-title.mjs";
import "../_libs/micromark-factory-whitespace.mjs";
import "../_libs/micromark-util-html-tag-name.mjs";
import "../_libs/mdast-util-to-string.mjs";
import "../_libs/remark-rehype.mjs";
import "../_libs/mdast-util-to-hast.mjs";
import "../_libs/ungap__structured-clone.mjs";
import "../_libs/micromark-util-sanitize-uri.mjs";
import "../_libs/unist-util-position.mjs";
import "../_libs/trim-lines.mjs";
import "../_libs/unist-util-visit.mjs";
import "../_libs/unist-util-visit-parents.mjs";
import "../_libs/unist-util-is.mjs";
import "../_libs/hast-util-to-jsx-runtime.mjs";
import "../_libs/comma-separated-tokens.mjs";
import "../_libs/property-information.mjs";
import "../_libs/space-separated-tokens.mjs";
import "../_libs/style-to-js.mjs";
import "../_libs/style-to-object.mjs";
import "../_libs/inline-style-parser.mjs";
import "../_libs/hast-util-whitespace.mjs";
import "../_libs/estree-util-is-identifier-name.mjs";
import "../_libs/html-url-attributes.mjs";
import "../_libs/micromark-extension-gfm.mjs";
import "../_libs/micromark-extension-gfm-autolink-literal+[...].mjs";
import "../_libs/micromark-extension-gfm-footnote+[...].mjs";
import "../_libs/micromark-extension-gfm-strikethrough+[...].mjs";
import "../_libs/micromark-extension-gfm-table.mjs";
import "../_libs/micromark-extension-gfm-task-list-item+[...].mjs";
import "../_libs/mdast-util-gfm.mjs";
import "../_libs/mdast-util-gfm-autolink-literal+[...].mjs";
import "../_libs/ccount.mjs";
import "../_libs/mdast-util-find-and-replace.mjs";
import "../_libs/escape-string-regexp.mjs";
import "../_libs/mdast-util-gfm-footnote.mjs";
import "../_libs/mdast-util-gfm-strikethrough.mjs";
import "../_libs/mdast-util-gfm-table.mjs";
import "../_libs/markdown-table.mjs";
import "../_libs/mdast-util-to-markdown.mjs";
import "../_libs/longest-streak.mjs";
import "../_libs/mdast-util-phrasing.mjs";
import "../_libs/mdast-util-gfm-task-list-item.mjs";
function buildShareLinks(url, title) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  return {
    whatsapp: `https://wa.me/?text=${t}%20${u}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    x: `https://twitter.com/intent/tweet?url=${u}&text=${t}`
  };
}
function absoluteUrl(path, origin) {
  if (typeof window !== "undefined") return `${window.location.origin}${path}`;
  return `https://www.oswaldosmarrelli.com${path}`;
}
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.748-.607zm5.93-6.802c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" }) });
}
function XIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
}
function LinkedInIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" }) });
}
function ShareBar({
  title,
  slug,
  variant = "inline"
}) {
  const [url, setUrl] = reactExports.useState(`/articulos/${slug}`);
  const [copied, setCopied] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setUrl(absoluteUrl(`/articulos/${slug}`));
  }, [slug]);
  const links = buildShareLinks(url, title);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Enlace copiado");
      setTimeout(() => setCopied(false), 2e3);
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };
  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, url });
      } catch {
      }
    } else {
      copy();
    }
  };
  const btn = "inline-flex items-center justify-center rounded-full border border-border text-ink-soft hover:text-white hover:border-brand-teal hover:bg-brand-teal transition-colors";
  if (variant === "floating") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden xl:flex flex-col gap-2.5 sticky top-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: `${btn} h-10 w-10`, href: links.whatsapp, target: "_blank", rel: "noopener noreferrer", "aria-label": "Compartir en WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: `${btn} h-10 w-10`, href: links.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": "Compartir en LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinkedInIcon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: `${btn} h-10 w-10`, href: links.x, target: "_blank", rel: "noopener noreferrer", "aria-label": "Compartir en X", children: /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: copy, className: `${btn} h-10 w-10`, "aria-label": "Copiar enlace", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-4 w-4" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "not-prose flex flex-wrap items-center gap-3 py-6 my-8 border-y border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-muted-foreground mr-1", children: "Compartir" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: `${btn} h-10 w-10`, href: links.whatsapp, target: "_blank", rel: "noopener noreferrer", "aria-label": "Compartir en WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: `${btn} h-10 w-10`, href: links.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": "Compartir en LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinkedInIcon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: `${btn} h-10 w-10`, href: links.x, target: "_blank", rel: "noopener noreferrer", "aria-label": "Compartir en X", children: /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: copy, className: `${btn} h-10 w-10`, "aria-label": "Copiar enlace", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: nativeShare,
        className: "sm:hidden inline-flex items-center gap-2 rounded-full bg-ink text-cream px-4 h-10 text-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4" }),
          " Compartir"
        ]
      }
    )
  ] });
}
function PullQuote({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "not-prose relative my-10 md:-mx-8 md:px-8 py-2 border-l-2 border-brand-teal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-hidden": true,
        className: "absolute -top-4 left-4 md:left-6 font-display text-6xl leading-none text-brand-teal/25 select-none",
        children: "“"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative pl-6 font-display italic text-xl md:text-2xl leading-snug text-ink text-balance", children })
  ] });
}
function Markdown({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Markdown$1,
    {
      remarkPlugins: [remarkGfm],
      components: {
        blockquote: ({ children: children2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(PullQuote, { children: children2 }),
        a: ({ href, children: children2 }) => {
          const external = !!href && /^https?:\/\//.test(href);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              target: external ? "_blank" : void 0,
              rel: external ? "noopener noreferrer" : void 0,
              children: children2
            }
          );
        },
        img: ({ src, alt }) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: alt ?? "", loading: "lazy" })
      },
      children
    }
  );
}
function ReadingProgress() {
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, doc.scrollTop / max * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "h-full bg-brand-teal transition-[width] duration-150 ease-out",
      style: { width: `${progress}%` }
    }
  ) });
}
function ArticlePage() {
  const {
    article,
    related
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReadingProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, { overlay: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "hero-bg relative -mt-16 md:-mt-20 text-cream", style: {
        ["--bg"]: `url(${article.cover ?? bgForCategory(article.category)})`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-5 md:px-8 pt-32 pb-14 md:pt-40 md:pb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articulos", className: "inline-flex items-center gap-2 eyebrow text-cream/70 hover:text-cream transition-colors mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
          " Mi opinión"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-sm mb-5 anim-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/categoria/$categoria", params: {
            categoria: article.category
          }, className: "eyebrow text-cream bg-brand-teal/80 rounded-full px-3 py-1 hover:bg-brand-teal transition-colors", children: article.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cream/75", children: [
            formatDate(article.date),
            " · ",
            article.readingTime,
            " min de lectura"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight text-balance anim-fade-up anim-delay-1", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-serif text-xl md:text-2xl italic leading-snug text-cream/85 text-pretty anim-fade-up anim-delay-2", children: article.excerpt })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid xl:grid-cols-[3.5rem_minmax(0,1fr)] xl:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareBar, { title: article.title, slug: article.slug, variant: "floating" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reading-measure mx-auto w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "article-body has-dropcap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: article.content }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShareBar, { title: article.title, slug: article.slug }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "flex gap-5 items-start rounded-xl border border-border bg-paper p-6 md:p-7 my-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: site.author, className: "size-20 md:size-24 object-cover rounded-lg flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-brand-teal", children: "Sobre el autor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mt-1 mb-2 text-ink", children: site.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Economista con maestría en gerencia administrativa y más de 15 años de experiencia. Columnista de opinión por más de 8 años y consultor estratégico." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sobre-mi", className: "inline-block mt-3 text-sm font-medium text-brand-teal hover:text-brand-teal-dark transition-colors", children: "Leer biografía completa →" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterBlock, { variant: "compact" })
        ] })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-ink mb-10", children: "Seguir leyendo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10", children: related.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }) }, a.slug)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ArticlePage as component
};
