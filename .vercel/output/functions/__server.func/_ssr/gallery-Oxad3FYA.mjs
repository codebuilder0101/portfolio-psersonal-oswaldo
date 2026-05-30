import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as mediaLogos } from "./router-Drg4k5g4.mjs";
function MediaLogos({ tone = "light" }) {
  const dark = tone === "dark";
  const items = [...mediaLogos, ...mediaLogos];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: dark ? "bg-ink text-cream" : "bg-paper text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `eyebrow text-center mb-8 ${dark ? "text-cream/50" : "text-muted-foreground"}`, children: "Visto en" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track gap-x-12 md:gap-x-20", children: items.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        "aria-hidden": i >= mediaLogos.length,
        className: `shrink-0 font-display text-lg md:text-xl tracking-tight transition-opacity ${dark ? "text-cream/70 hover:text-cream" : "text-ink/55 hover:text-ink"}`,
        children: m.name
      },
      i
    )) }) })
  ] }) });
}
const galleryImages = [
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/758f32c1-a9de-48e5-8e1a-a2ccbb8aa0f2/image-107x134.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/8b3f2f80-a958-4676-aa15-ca9957fcac77/image-107x169.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/08bc940e-64a1-4587-be05-5b344172aea5/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/3e18be8e-938b-4f0d-a41d-34f3905013b1/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/fbd05ad9-6251-430a-80a7-9095c4e9bdc5/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/59610ca2-2770-41c2-9678-f1e9901fd919/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/8ca50ddf-c10f-4f92-b9d4-7b28e8e5b0db/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/46b10a9c-6bf7-49c2-99ff-21929da35f95/image.png",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/c60de348-70b8-4b48-b9f2-8108d2439335/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/856a1f08-1927-4d3a-9250-cd81df8ad035/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/71e65a2e-d676-4dd7-bf92-72ef3ca55247/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/4e1af14d-c8cd-41cd-bafc-3a1f0be779e6/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/e79869d5-ce6d-4463-baa3-cbb4de1485ec/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/3b132e2e-f3ff-4634-90e0-892e305ab815/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/a5d0f206-6592-47bb-bdf0-5f6592213a90/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/a1bbe6ff-a7e0-42ce-9031-92f994fac5b6/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/d846c9c1-af39-4bdc-9e64-35f9847b4b00/image.png",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/3061c6d5-c4ed-41f9-a1de-34d204270d78/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/d4ac8bfe-6231-48b7-a547-c7e5ac712c93/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/f9fe6405-635c-4b71-99b6-401002955292/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/68fe4e12-2061-4b60-ad46-855d0a3d5ed5/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/3e1181d2-4a13-422d-a31a-0c40c3d9d265/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/b786b99f-f445-4a2f-bafd-5c71e78d5676/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/77275a1f-5525-449e-9428-40996f7f6de7/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/b7559e7f-c65a-491c-a338-5a1c21ce6787/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/7ec938e0-2d9b-418f-9014-313f80c58fae/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/7229ab36-f6cb-4780-9296-fde65dbf7520/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/f8c5cf15-d339-411c-8b6f-ec34ea21058b/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/efeadd60-7d12-4ca7-a329-475f703cfa55/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/ca7612e8-f3b3-403f-bbb6-80462f9460b9/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/15faf976-5537-4275-8b77-fac34bad1f00/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/f1c26856-9cdf-4e75-84c5-c425722a2073/image.jpg",
  "https://www.oswaldosmarrelli.com/wp-content/uploads/go-x/u/f0d5e73b-c524-4fac-aee2-8e330ae95d4c/image.jpg"
];
export {
  MediaLogos as M,
  galleryImages as g
};
