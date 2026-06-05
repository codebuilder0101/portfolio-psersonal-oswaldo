// ─────────────────────────────────────────────────────────────
// SQLite data layer (server-only).
//
// Uses Node's built-in `node:sqlite` (no native deps). The DB file and
// uploaded images live on disk — designed for a persistent VPS, not
// serverless. Paths are configurable via env:
//   DATA_DIR     → folder for the .db file + uploads   (default ./data)
//   ADMIN_PASSWORD → initial admin password on first seed (default "admin")
// ─────────────────────────────────────────────────────────────
import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { randomBytes } from "node:crypto";
import { hashPassword } from "./auth.server";
import { articles as seedArticles, categories as seedCategories } from "./articles";

export interface DbCategory {
  id: number;
  name: string;
  slug: string;
}

export type BodyBlock = { type: "p" | "h2" | "h3" | "quote" | "image"; text: string };

export interface DbArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string; // category name
  categoryId: number | null;
  date: string;
  readingTime: number;
  featured: boolean;
  hero: string | null;
  tags: string[];
  body: BodyBlock[];
}

export const DATA_DIR = process.env.DATA_DIR || path.resolve(process.cwd(), "data");
export const UPLOADS_DIR = path.join(DATA_DIR, "uploads");

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80);
}

// ── Singleton (survives dev HMR) ─────────────────────────────
const g = globalThis as unknown as { __portfolioDb?: DatabaseSync };

function getDb(): DatabaseSync {
  if (g.__portfolioDb) return g.__portfolioDb;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  const db = new DatabaseSync(path.join(DATA_DIR, "portfolio.db"));
  db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;");
  migrate(db);
  seed(db);
  g.__portfolioDb = db;
  return db;
}

function migrate(db: DatabaseSync) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key   TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS categories (
      id    INTEGER PRIMARY KEY AUTOINCREMENT,
      name  TEXT NOT NULL UNIQUE,
      slug  TEXT NOT NULL UNIQUE
    );
    CREATE TABLE IF NOT EXISTS articles (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      slug         TEXT NOT NULL UNIQUE,
      title        TEXT NOT NULL,
      excerpt      TEXT NOT NULL DEFAULT '',
      category_id  INTEGER REFERENCES categories(id) ON DELETE SET NULL,
      date         TEXT NOT NULL,
      reading_time INTEGER NOT NULL DEFAULT 1,
      featured     INTEGER NOT NULL DEFAULT 0,
      hero         TEXT,
      tags         TEXT NOT NULL DEFAULT '[]',
      body         TEXT NOT NULL DEFAULT '[]',
      created_at   TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at   TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS images (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      filename      TEXT NOT NULL UNIQUE,
      original_name TEXT,
      mime          TEXT,
      size          INTEGER,
      created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}

function seed(db: DatabaseSync) {
  const catCount = (db.prepare("SELECT COUNT(*) AS n FROM categories").get() as { n: number }).n;
  if (catCount === 0) {
    const insCat = db.prepare("INSERT INTO categories (name, slug) VALUES (?, ?)");
    for (const name of seedCategories) insCat.run(name, slugify(name));
  }

  const artCount = (db.prepare("SELECT COUNT(*) AS n FROM articles").get() as { n: number }).n;
  if (artCount === 0) {
    const catId = new Map<string, number>();
    for (const c of db.prepare("SELECT id, name FROM categories").all() as { id: number; name: string }[]) {
      catId.set(c.name, c.id);
    }
    const insArt = db.prepare(`
      INSERT INTO articles (slug, title, excerpt, category_id, date, reading_time, featured, hero, tags, body)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    for (const a of seedArticles) {
      insArt.run(
        a.slug,
        a.title,
        a.excerpt,
        catId.get(a.category) ?? null,
        a.date,
        a.readingTime,
        a.featured ? 1 : 0,
        a.hero ?? null,
        JSON.stringify(a.tags ?? []),
        JSON.stringify(a.body ?? []),
      );
    }
  }

  const hasPw = db.prepare("SELECT value FROM settings WHERE key = 'admin_password'").get();
  if (!hasPw) {
    const initial = process.env.ADMIN_PASSWORD || "admin";
    db.prepare("INSERT INTO settings (key, value) VALUES ('admin_password', ?)").run(
      hashPassword(initial),
    );
  }
}

// ── Mapping ──────────────────────────────────────────────────
type ArticleRow = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category_id: number | null;
  category: string | null;
  date: string;
  reading_time: number;
  featured: number;
  hero: string | null;
  tags: string;
  body: string;
};

function mapArticle(r: ArticleRow): DbArticle {
  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    category: r.category ?? "Sin categoría",
    categoryId: r.category_id,
    date: r.date,
    readingTime: r.reading_time,
    featured: !!r.featured,
    hero: r.hero,
    tags: safeJson<string[]>(r.tags, []),
    body: safeJson<BodyBlock[]>(r.body, []),
  };
}

function safeJson<T>(s: string, fallback: T): T {
  try {
    return JSON.parse(s) as T;
  } catch {
    return fallback;
  }
}

const ARTICLE_SELECT = `
  SELECT a.*, c.name AS category
  FROM articles a
  LEFT JOIN categories c ON c.id = a.category_id
`;

// ── Categories ───────────────────────────────────────────────
export function listCategories(): DbCategory[] {
  return getDb().prepare("SELECT id, name, slug FROM categories ORDER BY name").all() as DbCategory[];
}

export function createCategory(name: string): DbCategory {
  const db = getDb();
  db.prepare("INSERT INTO categories (name, slug) VALUES (?, ?)").run(name.trim(), slugify(name));
  return db.prepare("SELECT id, name, slug FROM categories WHERE name = ?").get(name.trim()) as DbCategory;
}

export function updateCategory(id: number, name: string): void {
  getDb().prepare("UPDATE categories SET name = ?, slug = ? WHERE id = ?").run(name.trim(), slugify(name), id);
}

export function deleteCategory(id: number): void {
  // articles.category_id ON DELETE SET NULL → article keeps existing, becomes "Sin categoría"
  getDb().prepare("DELETE FROM categories WHERE id = ?").run(id);
}

// ── Articles ─────────────────────────────────────────────────
export function listArticles(): DbArticle[] {
  return (getDb().prepare(`${ARTICLE_SELECT} ORDER BY a.date DESC, a.id DESC`).all() as ArticleRow[]).map(
    mapArticle,
  );
}

export function getArticleBySlug(slug: string): DbArticle | null {
  const r = getDb().prepare(`${ARTICLE_SELECT} WHERE a.slug = ?`).get(slug) as ArticleRow | undefined;
  return r ? mapArticle(r) : null;
}

export function getArticleById(id: number): DbArticle | null {
  const r = getDb().prepare(`${ARTICLE_SELECT} WHERE a.id = ?`).get(id) as ArticleRow | undefined;
  return r ? mapArticle(r) : null;
}

export function getRelated(slug: string, n = 3): DbArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return listArticles().slice(0, n);
  const all = listArticles().filter((a) => a.slug !== slug);
  const sameCat = all.filter((a) => a.category === current.category);
  const rest = all.filter((a) => a.category !== current.category);
  return [...sameCat, ...rest].slice(0, n);
}

export interface ArticleInput {
  slug: string;
  title: string;
  excerpt: string;
  categoryId: number | null;
  date: string;
  readingTime: number;
  featured: boolean;
  hero: string | null;
  tags: string[];
  body: BodyBlock[];
}

function uniqueSlug(db: DatabaseSync, base: string, excludeId?: number): string {
  let slug = slugify(base) || "articulo";
  let i = 2;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const row = db.prepare("SELECT id FROM articles WHERE slug = ?").get(slug) as { id: number } | undefined;
    if (!row || row.id === excludeId) return slug;
    slug = `${slugify(base)}-${i++}`;
  }
}

export function createArticle(input: ArticleInput): DbArticle {
  const db = getDb();
  const slug = uniqueSlug(db, input.slug || input.title);
  const info = db
    .prepare(
      `INSERT INTO articles (slug, title, excerpt, category_id, date, reading_time, featured, hero, tags, body)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      slug,
      input.title,
      input.excerpt,
      input.categoryId,
      input.date,
      input.readingTime,
      input.featured ? 1 : 0,
      input.hero,
      JSON.stringify(input.tags),
      JSON.stringify(input.body),
    );
  return getArticleById(Number(info.lastInsertRowid))!;
}

export function updateArticle(id: number, input: ArticleInput): DbArticle {
  const db = getDb();
  const slug = uniqueSlug(db, input.slug || input.title, id);
  db.prepare(
    `UPDATE articles
       SET slug = ?, title = ?, excerpt = ?, category_id = ?, date = ?, reading_time = ?,
           featured = ?, hero = ?, tags = ?, body = ?, updated_at = datetime('now')
     WHERE id = ?`,
  ).run(
    slug,
    input.title,
    input.excerpt,
    input.categoryId,
    input.date,
    input.readingTime,
    input.featured ? 1 : 0,
    input.hero,
    JSON.stringify(input.tags),
    JSON.stringify(input.body),
    id,
  );
  return getArticleById(id)!;
}

export function deleteArticle(id: number): void {
  getDb().prepare("DELETE FROM articles WHERE id = ?").run(id);
}

// ── Settings (password) ──────────────────────────────────────
export function getSetting(key: string): string | null {
  const r = getDb().prepare("SELECT value FROM settings WHERE key = ?").get(key) as
    | { value: string }
    | undefined;
  return r?.value ?? null;
}

export function setSetting(key: string, value: string): void {
  getDb()
    .prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value")
    .run(key, value);
}

// ── Images ───────────────────────────────────────────────────
export function recordImage(meta: { filename: string; original: string; mime: string; size: number }): void {
  getDb()
    .prepare("INSERT INTO images (filename, original_name, mime, size) VALUES (?, ?, ?, ?)")
    .run(meta.filename, meta.original, meta.mime, meta.size);
}

export function listImages(): { id: number; filename: string }[] {
  return getDb()
    .prepare("SELECT id, filename FROM images ORDER BY created_at DESC")
    .all() as { id: number; filename: string }[];
}

export function saveImage(original: string, mime: string, bytes: Uint8Array): { url: string; filename: string } {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  const ext = (original.split(".").pop() || "bin").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 5) || "bin";
  const filename = `${Date.now()}-${randomBytes(6).toString("hex")}.${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), bytes);
  recordImage({ filename, original, mime, size: bytes.length });
  return { url: `/uploads/${filename}`, filename };
}

const MIME: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  svg: "image/svg+xml",
  avif: "image/avif",
};

export function readImage(filename: string): { bytes: Buffer; mime: string } | null {
  const safe = path.basename(filename);
  const fp = path.join(UPLOADS_DIR, safe);
  if (!fp.startsWith(UPLOADS_DIR) || !fs.existsSync(fp)) return null;
  const ext = safe.split(".").pop()?.toLowerCase() || "";
  return { bytes: fs.readFileSync(fp), mime: MIME[ext] || "application/octet-stream" };
}
