const site = {
  /** Author contact email — used for the contact form, newsletter and "Escríbeme". TODO: confirm the real address. */
  email: "hola@oswaldosmarrelli.com",
  /** Instagram account shown by the feed widget. */
  instagramHandle: "elpoderdelasfrases",
  instagramUrl: "https://www.instagram.com/elpoderdelasfrases",
  /**
   * "Visto en" — media outlets where the author has been featured.
   * Add { name, logo (imported asset or URL), url } items with the REAL logos.
   * Leave empty until the real assets are provided (placeholders render meanwhile).
   */
  mediaOutlets: []
};
async function submitLead(kind, data) {
  if (typeof window === "undefined") return;
  const subject = kind === "Newsletter" ? "Suscripción · Análisis Quincenal" : "Mensaje desde oswaldosmarrelli.com";
  const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
export {
  submitLead as a,
  site as s
};
