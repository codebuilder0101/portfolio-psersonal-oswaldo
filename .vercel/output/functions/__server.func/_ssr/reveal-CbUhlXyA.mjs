import { T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DODrafgD.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const base = "/img/bg";
const bg = {
  home: `${base}/hero-home.jpg`,
  // escritura / cuaderno y pluma
  articulos: `${base}/articulos.jpg`,
  // periódicos apilados — prensa
  sobremi: `${base}/sobremi.jpg`,
  // escritorio de trabajo
  contacto: `${base}/contacto.jpg`,
  // café y conversación
  newsletter: `${base}/newsletter.jpg`,
  // skyline urbano
  manifiesto: `${base}/manifiesto.jpg`
  // escritorio / máquina de escribir
};
const categoryBg = {
  Política: `${base}/cat-politica.jpg`,
  Sociedad: `${base}/cat-sociedad.jpg`,
  Emprendimiento: `${base}/cat-emprendimiento.jpg`,
  Estrategia: `${base}/cat-estrategia.jpg`,
  Pensamiento: `${base}/cat-pensamiento.jpg`
};
function bgForCategory(category) {
  return categoryBg[category] ?? `${base}/cat-pensamiento.jpg`;
}
function Reveal({
  children,
  delay = 0,
  y = 20,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`,
      style: { "--reveal-delay": `${delay}ms`, "--reveal-y": `${y}px` },
      children
    }
  );
}
export {
  Reveal as R,
  bgForCategory as a,
  bg as b,
  createSsrRpc as c
};
