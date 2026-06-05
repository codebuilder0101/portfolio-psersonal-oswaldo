import { c as createServerRpc } from "./createServerRpc-DClGSFli.mjs";
import { a as createServerFn } from "./server-Bzpzupt-.mjs";
import { l as listArticles, m as listCategories, h as getArticleBySlug, i as getRelated } from "./db.server-OhwauGgH.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
import "node:process";
import "node:crypto";
import "./articles-CWL3RU8f.mjs";
const fetchArticles_createServerFn_handler = createServerRpc({
  id: "db3d5862df01923394424d139237b14806d72c6b2d8b94198c16a730647d9beb",
  name: "fetchArticles",
  filename: "src/lib/api/content.functions.ts"
}, (opts) => fetchArticles.__executeServer(opts));
const fetchArticles = createServerFn({
  method: "GET"
}).handler(fetchArticles_createServerFn_handler, async () => listArticles());
const fetchCategories_createServerFn_handler = createServerRpc({
  id: "fcb2fc5be24b347e9e0d21cd4aa690dda25abd6e2ecdd67a25034904f6a745cb",
  name: "fetchCategories",
  filename: "src/lib/api/content.functions.ts"
}, (opts) => fetchCategories.__executeServer(opts));
const fetchCategories = createServerFn({
  method: "GET"
}).handler(fetchCategories_createServerFn_handler, async () => listCategories());
const fetchArticle_createServerFn_handler = createServerRpc({
  id: "a847a272df6e1de2b0c695d7e19e27ea46d2225644a4db1ed26526431e4daf59",
  name: "fetchArticle",
  filename: "src/lib/api/content.functions.ts"
}, (opts) => fetchArticle.__executeServer(opts));
const fetchArticle = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  slug: stringType()
})).handler(fetchArticle_createServerFn_handler, async ({
  data
}) => getArticleBySlug(data.slug));
const fetchRelated_createServerFn_handler = createServerRpc({
  id: "7f438b20e11c9cbc6e42f07b84b7ea49185e37e91ce6729dba3575c53be44994",
  name: "fetchRelated",
  filename: "src/lib/api/content.functions.ts"
}, (opts) => fetchRelated.__executeServer(opts));
const fetchRelated = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  slug: stringType()
})).handler(fetchRelated_createServerFn_handler, async ({
  data
}) => getRelated(data.slug, 3));
export {
  fetchArticle_createServerFn_handler,
  fetchArticles_createServerFn_handler,
  fetchCategories_createServerFn_handler,
  fetchRelated_createServerFn_handler
};
