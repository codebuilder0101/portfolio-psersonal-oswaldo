import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/articulos")({
  component: ArticulosLayout,
});

function ArticulosLayout() {
  return <Outlet />;
}
