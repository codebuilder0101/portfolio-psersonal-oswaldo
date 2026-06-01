import { site } from "./site";

/**
 * Submits a lead (contact message or newsletter signup).
 *
 * - If `site.formEndpoint` is configured, it POSTs the data there (Formspree /
 *   Brevo / webhook compatible) — fully functional, no page reload.
 * - Otherwise it falls back to opening the visitor's email client addressed to
 *   the author, so the form still delivers the message today with zero backend.
 */
export async function submitLead(
  kind: "Contacto" | "Newsletter",
  data: Record<string, string>
): Promise<void> {
  if (site.formEndpoint) {
    const res = await fetch(site.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _tipo: kind, ...data }),
    });
    if (!res.ok) throw new Error("No se pudo enviar el formulario.");
    return;
  }

  // Fallback: mailto
  if (typeof window === "undefined") return;
  const subject =
    kind === "Newsletter" ? "Suscripción · Análisis Quincenal" : "Mensaje desde oswaldosmarrelli.com";
  const body = Object.entries(data)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
