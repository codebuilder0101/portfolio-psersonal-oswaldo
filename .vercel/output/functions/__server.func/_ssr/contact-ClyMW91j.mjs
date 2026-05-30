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
const sendContactMessage_createServerFn_handler = createServerRpc({
  id: "713c2d46e1bc9cba4ef43dcaf8386594ee2f7c6f8c94bb4b8feae4ce5b937fe9",
  name: "sendContactMessage",
  filename: "src/lib/api/contact.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
const sendContactMessage = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  nombre: stringType().trim().min(2, "Tu nombre, por favor").max(100),
  email: stringType().trim().email("Correo no válido"),
  asunto: stringType().trim().max(150).optional().default(""),
  mensaje: stringType().trim().min(10, "Cuéntame un poco más").max(3e3),
  // Honeypot anti-spam.
  website: stringType().optional().default("")
})).handler(sendContactMessage_createServerFn_handler, async ({
  data
}) => {
  if (data.website) return {
    ok: true,
    pending: false
  };
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.info("[contacto] (sin proveedor configurado) mensaje de:", {
      nombre: data.nombre,
      email: data.email,
      asunto: data.asunto
    });
    return {
      ok: true,
      pending: true
    };
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Web <onboarding@resend.dev>",
      to: [to],
      reply_to: data.email,
      subject: data.asunto ? `[Web] ${data.asunto}` : `[Web] Mensaje de ${data.nombre}`,
      text: `Nombre: ${data.nombre}
Correo: ${data.email}
Asunto: ${data.asunto || "—"}

${data.mensaje}`
    })
  });
  if (!res.ok) throw new Error(`Resend devolvió ${res.status}`);
  return {
    ok: true,
    pending: false
  };
});
export {
  sendContactMessage_createServerFn_handler
};
