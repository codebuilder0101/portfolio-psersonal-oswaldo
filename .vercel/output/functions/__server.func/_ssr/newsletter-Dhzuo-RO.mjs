import { c as createServerRpc } from "./createServerRpc-537T2hmM.mjs";
import { a as createServerFn } from "./server-DODrafgD.mjs";
import process from "node:process";
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
const subscribeNewsletter_createServerFn_handler = createServerRpc({
  id: "fdfa8495d6093eac94c3dfc913fb5983fa499612e7aaf15f367760bef891f7d9",
  name: "subscribeNewsletter",
  filename: "src/lib/api/newsletter.ts"
}, (opts) => subscribeNewsletter.__executeServer(opts));
const subscribeNewsletter = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  email: stringType().email("Correo no válido"),
  // Honeypot anti-spam: debe llegar vacío.
  website: stringType().optional().default("")
})).handler(subscribeNewsletter_createServerFn_handler, async ({
  data
}) => {
  if (data.website) return {
    ok: true,
    pending: false
  };
  const endpoint = process.env.NEWSLETTER_ENDPOINT;
  const apiKey = process.env.NEWSLETTER_API_KEY;
  if (!endpoint) {
    console.info("[newsletter] (sin proveedor configurado) nueva suscripción:", data.email);
    return {
      ok: true,
      pending: true
    };
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...apiKey ? {
        Authorization: `Token ${apiKey}`
      } : {}
    },
    body: JSON.stringify({
      email_address: data.email,
      email: data.email
    })
  });
  if (!res.ok && res.status !== 409) {
    throw new Error(`Proveedor de newsletter devolvió ${res.status}`);
  }
  return {
    ok: true,
    pending: false
  };
});
export {
  subscribeNewsletter_createServerFn_handler
};
