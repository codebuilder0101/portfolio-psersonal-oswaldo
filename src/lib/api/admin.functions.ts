// Admin server functions: password auth + CRUD on articles/categories + image upload.
// Every mutating/reading-private function calls requireAuth().
import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";
import { z } from "zod";
import process from "node:process";
import {
  listArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getSetting,
  setSetting,
  saveImage,
} from "../db.server";
import {
  SESSION_COOKIE,
  createSessionToken,
  verifySessionToken,
  verifyPassword,
  hashPassword,
} from "../auth.server";

function isAuthed(): boolean {
  return verifySessionToken(getCookie(SESSION_COOKIE));
}
function requireAuth() {
  if (!isAuthed()) throw new Error("No autorizado");
}

const bodyBlock = z.object({
  type: z.enum(["p", "h2", "h3", "quote", "image"]),
  text: z.string(),
});

const articleInput = z.object({
  slug: z.string().default(""),
  title: z.string().min(1, "El título es obligatorio"),
  excerpt: z.string().default(""),
  categoryId: z.number().nullable().default(null),
  date: z.string().min(1, "La fecha es obligatoria"),
  readingTime: z.number().int().min(1).default(1),
  featured: z.boolean().default(false),
  hero: z.string().nullable().default(null),
  tags: z.array(z.string()).default([]),
  body: z.array(bodyBlock).default([]),
});

// ── Auth ─────────────────────────────────────────────────────
export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator(z.object({ password: z.string() }))
  .handler(async ({ data }) => {
    if (!verifyPassword(data.password, getSetting("admin_password"))) {
      return { ok: false as const };
    }
    setCookie(SESSION_COOKIE, createSessionToken(), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 12,
      secure: process.env.NODE_ENV === "production",
    });
    return { ok: true as const };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  setCookie(SESSION_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return { ok: true };
});

export const adminCheck = createServerFn({ method: "GET" }).handler(async () => ({
  authed: isAuthed(),
}));

export const adminChangePassword = createServerFn({ method: "POST" })
  .inputValidator(z.object({ current: z.string(), next: z.string().min(4, "Mínimo 4 caracteres") }))
  .handler(async ({ data }) => {
    requireAuth();
    if (!verifyPassword(data.current, getSetting("admin_password"))) {
      return { ok: false as const };
    }
    setSetting("admin_password", hashPassword(data.next));
    return { ok: true as const };
  });

// ── Articles ─────────────────────────────────────────────────
export const adminListArticles = createServerFn({ method: "GET" }).handler(async () => {
  requireAuth();
  return listArticles();
});

export const adminGetArticle = createServerFn({ method: "GET" })
  .inputValidator(z.object({ id: z.number() }))
  .handler(async ({ data }) => {
    requireAuth();
    return getArticleById(data.id);
  });

export const adminSaveArticle = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.number().nullable(), input: articleInput }))
  .handler(async ({ data }) => {
    requireAuth();
    return data.id ? updateArticle(data.id, data.input) : createArticle(data.input);
  });

export const adminDeleteArticle = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.number() }))
  .handler(async ({ data }) => {
    requireAuth();
    deleteArticle(data.id);
    return { ok: true };
  });

// ── Categories ───────────────────────────────────────────────
export const adminListCategories = createServerFn({ method: "GET" }).handler(async () => {
  requireAuth();
  return listCategories();
});

export const adminCreateCategory = createServerFn({ method: "POST" })
  .inputValidator(z.object({ name: z.string().min(1) }))
  .handler(async ({ data }) => {
    requireAuth();
    return createCategory(data.name);
  });

export const adminUpdateCategory = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.number(), name: z.string().min(1) }))
  .handler(async ({ data }) => {
    requireAuth();
    updateCategory(data.id, data.name);
    return { ok: true };
  });

export const adminDeleteCategory = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.number() }))
  .handler(async ({ data }) => {
    requireAuth();
    deleteCategory(data.id);
    return { ok: true };
  });

// ── Image upload ─────────────────────────────────────────────
export const adminUploadImage = createServerFn({ method: "POST" })
  .inputValidator((d: FormData) => d)
  .handler(async ({ data }) => {
    requireAuth();
    const file = data.get("file");
    if (!(file instanceof File)) throw new Error("Sin archivo");
    const bytes = new Uint8Array(await file.arrayBuffer());
    return saveImage(file.name, file.type, bytes);
  });
