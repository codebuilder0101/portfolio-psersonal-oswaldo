// Gallery images for the "Sobre mí" page — bundled from src/assets/NN.{jpg,png}.
// Drop more numbered files (e.g. 34.jpg) into src/assets and they appear automatically.
import imageNew from "../assets/image-new.png";

const modules = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const numbered = Object.entries(modules)
  .filter(([path]) => /\/\d{2}\.(jpe?g|png|webp)$/i.test(path))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url as string);

export const galleryImages: string[] = [...numbered, imageNew];
