import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
  "No pudimos cargar este artículo: ",
  error.message
] }) });
export {
  SplitErrorComponent as errorComponent
};
