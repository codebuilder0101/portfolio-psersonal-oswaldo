import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Serves uploaded images from the on-disk uploads folder (VPS).
export const Route = createFileRoute("/uploads/$")({
  server: {
    handlers: {
      GET: async ({ params }: { params: { _splat?: string } }) => {
        const { readImage } = await import("@/lib/db.server");
        const img = readImage(params._splat ?? "");
        if (!img) return new Response("Not found", { status: 404 });
        return new Response(img.bytes, {
          headers: {
            "Content-Type": img.mime,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
