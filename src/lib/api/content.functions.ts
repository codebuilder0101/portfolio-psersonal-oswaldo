// Public content reads (no auth). Used by route loaders.
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { listArticles, getArticleBySlug, getRelated, listCategories } from "../db.server";

export const fetchArticles = createServerFn({ method: "GET" }).handler(async () => listArticles());

export const fetchCategories = createServerFn({ method: "GET" }).handler(async () => listCategories());

export const fetchArticle = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string() }))
  .handler(async ({ data }) => getArticleBySlug(data.slug));

export const fetchRelated = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string() }))
  .handler(async ({ data }) => getRelated(data.slug, 3));
