import { c as createServerRpc } from "./createServerRpc-DClGSFli.mjs";
import { a as createServerFn, d as setCookie$1, g as getCookie } from "./server-Bzpzupt-.mjs";
import process from "node:process";
import { v as verifyPassword, j as getSetting, b as createSessionToken, S as SESSION_COOKIE, n as setSetting, k as hashPassword, l as listArticles, g as getArticleById, u as updateArticle, c as createArticle, e as deleteArticle, m as listCategories, a as createCategory, o as updateCategory, f as deleteCategory, s as saveImage, p as verifySessionToken } from "./db.server-OhwauGgH.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, e as enumType, a as arrayType, b as booleanType, n as numberType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:sqlite";
import "node:fs";
import "node:path";
import "node:crypto";
import "./articles-CWL3RU8f.mjs";
function isAuthed() {
  return verifySessionToken(getCookie(SESSION_COOKIE));
}
function requireAuth() {
  if (!isAuthed()) throw new Error("No autorizado");
}
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
const adminLogin_createServerFn_handler = createServerRpc({
  id: "c9ff09fb61254dc405f83219dbf36b90d7f1b262c39e4af58b715041fb0a761c",
  name: "adminLogin",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminLogin.__executeServer(opts));
const adminLogin = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  password: stringType()
})).handler(adminLogin_createServerFn_handler, async ({
  data
}) => {
  if (!verifyPassword(data.password, getSetting("admin_password"))) {
    return {
      ok: false
    };
  }
  setCookie$1(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
    secure: process.env.NODE_ENV === "production"
  });
  return {
    ok: true
  };
});
const adminLogout_createServerFn_handler = createServerRpc({
  id: "3c86242b52674d0de0a1f6a4c06fb512249761cc4e86f37ccac993c1bfe71b26",
  name: "adminLogout",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminLogout.__executeServer(opts));
const adminLogout = createServerFn({
  method: "POST"
}).handler(adminLogout_createServerFn_handler, async () => {
  setCookie$1(SESSION_COOKIE, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0
  });
  return {
    ok: true
  };
});
const adminCheck_createServerFn_handler = createServerRpc({
  id: "137edaad0be9bcd740b64445fedec3b1f1703ea49e04643a42ed4e32c9c26f21",
  name: "adminCheck",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminCheck.__executeServer(opts));
const adminCheck = createServerFn({
  method: "GET"
}).handler(adminCheck_createServerFn_handler, async () => ({
  authed: isAuthed()
}));
const adminChangePassword_createServerFn_handler = createServerRpc({
  id: "409d89c19e2c4fdbf170606c2212aec85fef2fd170b07cd546c4b3f844ed2a2b",
  name: "adminChangePassword",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminChangePassword.__executeServer(opts));
const adminChangePassword = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  current: stringType(),
  next: stringType().min(4, "Mínimo 4 caracteres")
})).handler(adminChangePassword_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  if (!verifyPassword(data.current, getSetting("admin_password"))) {
    return {
      ok: false
    };
  }
  setSetting("admin_password", hashPassword(data.next));
  return {
    ok: true
  };
});
const adminListArticles_createServerFn_handler = createServerRpc({
  id: "d16249620706fa714409e60b897c2f0a30b690bc047c6e37e3ad34ee13a60d91",
  name: "adminListArticles",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminListArticles.__executeServer(opts));
const adminListArticles = createServerFn({
  method: "GET"
}).handler(adminListArticles_createServerFn_handler, async () => {
  requireAuth();
  return listArticles();
});
const adminGetArticle_createServerFn_handler = createServerRpc({
  id: "277170b5f4b6ad7735ace5780c09236588dc59df4aa2fbe6ec4b5d0885d9fdd4",
  name: "adminGetArticle",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminGetArticle.__executeServer(opts));
const adminGetArticle = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  id: numberType()
})).handler(adminGetArticle_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  return getArticleById(data.id);
});
const adminSaveArticle_createServerFn_handler = createServerRpc({
  id: "470fd0340831616a1ec677feaf5d25890ac77bce2c53cc05ce4185942805f16e",
  name: "adminSaveArticle",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminSaveArticle.__executeServer(opts));
const adminSaveArticle = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType().nullable(),
  input: articleInput
})).handler(adminSaveArticle_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  return data.id ? updateArticle(data.id, data.input) : createArticle(data.input);
});
const adminDeleteArticle_createServerFn_handler = createServerRpc({
  id: "8eb48ac8f751800d3ab96257f501944c341156d381cc42cf48beb3b0d32e3761",
  name: "adminDeleteArticle",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminDeleteArticle.__executeServer(opts));
const adminDeleteArticle = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType()
})).handler(adminDeleteArticle_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  deleteArticle(data.id);
  return {
    ok: true
  };
});
const adminListCategories_createServerFn_handler = createServerRpc({
  id: "6a0369ce86e6f708a43936dc8e8fc05b21793d5b84732b38e4d67785fcf30cbe",
  name: "adminListCategories",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminListCategories.__executeServer(opts));
const adminListCategories = createServerFn({
  method: "GET"
}).handler(adminListCategories_createServerFn_handler, async () => {
  requireAuth();
  return listCategories();
});
const adminCreateCategory_createServerFn_handler = createServerRpc({
  id: "f0c3127a5dec81d74d79642dd4bf10d9be7a7d765fb5374dfa72a1aa19e25f1f",
  name: "adminCreateCategory",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminCreateCategory.__executeServer(opts));
const adminCreateCategory = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType().min(1)
})).handler(adminCreateCategory_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  return createCategory(data.name);
});
const adminUpdateCategory_createServerFn_handler = createServerRpc({
  id: "ccf2000da44b48c80e94fee4a3bdb84b71f1186fbbd7206f1d2f6ad0d86b1ffc",
  name: "adminUpdateCategory",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminUpdateCategory.__executeServer(opts));
const adminUpdateCategory = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType(),
  name: stringType().min(1)
})).handler(adminUpdateCategory_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  updateCategory(data.id, data.name);
  return {
    ok: true
  };
});
const adminDeleteCategory_createServerFn_handler = createServerRpc({
  id: "ad900f33fc3b517d36a1d28155549b77804a57601f752c34746d04f57915e208",
  name: "adminDeleteCategory",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminDeleteCategory.__executeServer(opts));
const adminDeleteCategory = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  id: numberType()
})).handler(adminDeleteCategory_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  deleteCategory(data.id);
  return {
    ok: true
  };
});
const adminUploadImage_createServerFn_handler = createServerRpc({
  id: "e257f3bfd31d83e0e29060e7d8d7d5bdaac91d96eb0956eafbfb2ef841369069",
  name: "adminUploadImage",
  filename: "src/lib/api/admin.functions.ts"
}, (opts) => adminUploadImage.__executeServer(opts));
const adminUploadImage = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(adminUploadImage_createServerFn_handler, async ({
  data
}) => {
  requireAuth();
  const file = data.get("file");
  if (!(file instanceof File)) throw new Error("Sin archivo");
  const bytes = new Uint8Array(await file.arrayBuffer());
  return saveImage(file.name, file.type, bytes);
});
export {
  adminChangePassword_createServerFn_handler,
  adminCheck_createServerFn_handler,
  adminCreateCategory_createServerFn_handler,
  adminDeleteArticle_createServerFn_handler,
  adminDeleteCategory_createServerFn_handler,
  adminGetArticle_createServerFn_handler,
  adminListArticles_createServerFn_handler,
  adminListCategories_createServerFn_handler,
  adminLogin_createServerFn_handler,
  adminLogout_createServerFn_handler,
  adminSaveArticle_createServerFn_handler,
  adminUpdateCategory_createServerFn_handler,
  adminUploadImage_createServerFn_handler
};
