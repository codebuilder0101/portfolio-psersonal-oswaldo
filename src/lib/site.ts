// ─────────────────────────────────────────────────────────────
// Central site configuration.
// Replace the TODO values with the client's real data to go live.
// ─────────────────────────────────────────────────────────────
export const site = {
  /** Author contact email — used for the contact form, newsletter and "Escríbeme". TODO: confirm the real address. */
  email: "hola@oswaldosmarrelli.com",

  /** Instagram account shown by the feed widget. */
  instagramHandle: "elpoderdelasfrases",
  instagramUrl: "https://www.instagram.com/elpoderdelasfrases",
  /**
   * Live Instagram feed. Paste the embed URL from a widget provider
   * (Behold.so / LightWidget / SnapWidget / EmbedSocial) to show real posts.
   * Leave empty to show the styled "follow" block instead.
   */
  instagramEmbedUrl: "",

  /**
   * Where contact + newsletter submissions are delivered.
   * Set to a Formspree / Brevo / webhook endpoint to capture them via AJAX.
   * Leave empty to fall back to opening the visitor's email client (mailto:).
   */
  formEndpoint: "",
};
