import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { randomBytes, scryptSync, timingSafeEqual, createHmac } from "node:crypto";
import { c as categories, a as articles } from "./articles-CWL3RU8f.mjs";
const SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 1e3 * 60 * 60 * 12;
function secret() {
  return process.env.SESSION_SECRET || "dev-insecure-secret-change-me";
}
function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}
function verifyPassword(password, stored) {
  if (!stored || !stored.includes(":")) return false;
  const [salt, hash] = stored.split(":");
  const a = Buffer.from(hash, "hex");
  const b = scryptSync(password, salt, 64);
  return a.length === b.length && timingSafeEqual(a, b);
}
function sign(payload) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}
function createSessionToken() {
  const payload = JSON.stringify({ exp: Date.now() + SESSION_TTL_MS });
  const body = Buffer.from(payload).toString("base64url");
  return `${body}.${sign(body)}`;
}
function verifySessionToken(token) {
  if (!token || !token.includes(".")) return false;
  const [body, sig] = token.split(".");
  const expected = sign(body);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(body, "base64url").toString());
    return typeof exp === "number" && exp > Date.now();
  } catch {
    return false;
  }
}
const DATA_DIR = process.env.DATA_DIR || path.resolve(process.cwd(), "data");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");
function slugify(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "").slice(0, 80);
}
const g = globalThis;
function getDb() {
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
function migrate(db) {
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
function seed(db) {
  const catCount = db.prepare("SELECT COUNT(*) AS n FROM categories").get().n;
  if (catCount === 0) {
    const insCat = db.prepare("INSERT INTO categories (name, slug) VALUES (?, ?)");
    for (const name of categories) insCat.run(name, slugify(name));
  }
  const artCount = db.prepare("SELECT COUNT(*) AS n FROM articles").get().n;
  if (artCount === 0) {
    const catId = /* @__PURE__ */ new Map();
    for (const c of db.prepare("SELECT id, name FROM categories").all()) {
      catId.set(c.name, c.id);
    }
    const insArt = db.prepare(`
      INSERT INTO articles (slug, title, excerpt, category_id, date, reading_time, featured, hero, tags, body)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    for (const a of articles) {
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
        JSON.stringify(a.body ?? [])
      );
    }
  }
  const hasPw = db.prepare("SELECT value FROM settings WHERE key = 'admin_password'").get();
  if (!hasPw) {
    const initial = process.env.ADMIN_PASSWORD || "admin";
    db.prepare("INSERT INTO settings (key, value) VALUES ('admin_password', ?)").run(
      hashPassword(initial)
    );
  }
}
function mapArticle(r) {
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
    tags: safeJson(r.tags, []),
    body: safeJson(r.body, [])
  };
}
function safeJson(s, fallback) {
  try {
    return JSON.parse(s);
  } catch {
    return fallback;
  }
}
const ARTICLE_SELECT = `
  SELECT a.*, c.name AS category
  FROM articles a
  LEFT JOIN categories c ON c.id = a.category_id
`;
function listCategories() {
  return getDb().prepare("SELECT id, name, slug FROM categories ORDER BY name").all();
}
function createCategory(name) {
  const db = getDb();
  db.prepare("INSERT INTO categories (name, slug) VALUES (?, ?)").run(name.trim(), slugify(name));
  return db.prepare("SELECT id, name, slug FROM categories WHERE name = ?").get(name.trim());
}
function updateCategory(id, name) {
  getDb().prepare("UPDATE categories SET name = ?, slug = ? WHERE id = ?").run(name.trim(), slugify(name), id);
}
function deleteCategory(id) {
  getDb().prepare("DELETE FROM categories WHERE id = ?").run(id);
}
function listArticles() {
  return getDb().prepare(`${ARTICLE_SELECT} ORDER BY a.date DESC, a.id DESC`).all().map(
    mapArticle
  );
}
function getArticleBySlug(slug) {
  const r = getDb().prepare(`${ARTICLE_SELECT} WHERE a.slug = ?`).get(slug);
  return r ? mapArticle(r) : null;
}
function getArticleById(id) {
  const r = getDb().prepare(`${ARTICLE_SELECT} WHERE a.id = ?`).get(id);
  return r ? mapArticle(r) : null;
}
function getRelated(slug, n = 3) {
  const current = getArticleBySlug(slug);
  if (!current) return listArticles().slice(0, n);
  const all = listArticles().filter((a) => a.slug !== slug);
  const sameCat = all.filter((a) => a.category === current.category);
  const rest = all.filter((a) => a.category !== current.category);
  return [...sameCat, ...rest].slice(0, n);
}
function uniqueSlug(db, base, excludeId) {
  let slug = slugify(base) || "articulo";
  let i = 2;
  while (true) {
    const row = db.prepare("SELECT id FROM articles WHERE slug = ?").get(slug);
    if (!row || row.id === excludeId) return slug;
    slug = `${slugify(base)}-${i++}`;
  }
}
function createArticle(input) {
  const db = getDb();
  const slug = uniqueSlug(db, input.slug || input.title);
  const info = db.prepare(
    `INSERT INTO articles (slug, title, excerpt, category_id, date, reading_time, featured, hero, tags, body)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
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
    JSON.stringify(input.body)
  );
  return getArticleById(Number(info.lastInsertRowid));
}
function updateArticle(id, input) {
  const db = getDb();
  const slug = uniqueSlug(db, input.slug || input.title, id);
  db.prepare(
    `UPDATE articles
       SET slug = ?, title = ?, excerpt = ?, category_id = ?, date = ?, reading_time = ?,
           featured = ?, hero = ?, tags = ?, body = ?, updated_at = datetime('now')
     WHERE id = ?`
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
    id
  );
  return getArticleById(id);
}
function deleteArticle(id) {
  getDb().prepare("DELETE FROM articles WHERE id = ?").run(id);
}
function getSetting(key) {
  const r = getDb().prepare("SELECT value FROM settings WHERE key = ?").get(key);
  return r?.value ?? null;
}
function setSetting(key, value) {
  getDb().prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value").run(key, value);
}
function recordImage(meta) {
  getDb().prepare("INSERT INTO images (filename, original_name, mime, size) VALUES (?, ?, ?, ?)").run(meta.filename, meta.original, meta.mime, meta.size);
}
function saveImage(original, mime, bytes) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  const ext = (original.split(".").pop() || "bin").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 5) || "bin";
  const filename = `${Date.now()}-${randomBytes(6).toString("hex")}.${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), bytes);
  recordImage({ filename, original, mime, size: bytes.length });
  return { url: `/uploads/${filename}`, filename };
}
const MIME = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  svg: "image/svg+xml",
  avif: "image/avif"
};
function readImage(filename) {
  const safe = path.basename(filename);
  const fp = path.join(UPLOADS_DIR, safe);
  if (!fp.startsWith(UPLOADS_DIR) || !fs.existsSync(fp)) return null;
  const ext = safe.split(".").pop()?.toLowerCase() || "";
  return { bytes: fs.readFileSync(fp), mime: MIME[ext] || "application/octet-stream" };
}
const db_server = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATA_DIR,
  UPLOADS_DIR,
  createArticle,
  createCategory,
  deleteArticle,
  deleteCategory,
  getArticleById,
  getArticleBySlug,
  getRelated,
  getSetting,
  listArticles,
  listCategories,
  readImage,
  recordImage,
  saveImage,
  setSetting,
  updateArticle,
  updateCategory
}, Symbol.toStringTag, { value: "Module" }));
export {
  SESSION_COOKIE as S,
  createCategory as a,
  createSessionToken as b,
  createArticle as c,
  db_server as d,
  deleteArticle as e,
  deleteCategory as f,
  getArticleById as g,
  getArticleBySlug as h,
  getRelated as i,
  getSetting as j,
  hashPassword as k,
  listArticles as l,
  listCategories as m,
  setSetting as n,
  updateCategory as o,
  verifySessionToken as p,
  saveImage as s,
  updateArticle as u,
  verifyPassword as v
};
