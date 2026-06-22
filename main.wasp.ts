import { app } from "@wasp.sh/spec";
import { fileBasedRoutes } from "./lib/file-based-routes.wasp";
import RouteLayout from "./src/layout" with { type: "ref" };

export default app({
  name: "project",
  title: "project",
  wasp: { version: "^0.24.0" },
  client: {
    rootComponent: RouteLayout,
  },
  head: ["<link rel='icon' href='/favicon.ico' />"],
  spec: [
    // highlight-next-line
    fileBasedRoutes("src"),
  ],
});
