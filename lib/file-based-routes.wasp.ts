import { page, ref, route } from "@wasp.sh/spec";
import { pascalCase } from "es-toolkit";
import { globSync } from "node:fs";
import * as path from "node:path";

const ROUTE_GROUP_REGEX = /^\(.*\)$/; // Wrapped in parentheses

export const fileBasedRoutes = (baseDir: string) => {
  return globSync("**/page.tsx", { cwd: baseDir })
    .sort() // Make the list stable between runs
    .map((filePath) => {
      const absoluteFilePath = path.resolve(baseDir, filePath);

      const isPrerender = filePath.includes("(prerender)");
      const isAuth = filePath.includes("(auth)");

      const urlRoute = filePath
        .split(path.sep)
        .slice(0, -1) // Removes the "page.tsx" part
        .filter((part) => !ROUTE_GROUP_REGEX.test(part)) // Remove any route groups
        .join("/");

      const routeName = pascalCase(urlRoute) || "Root";

      return route(
        `${routeName}Route`,
        "/" + urlRoute,
        page(
          ref({
            importDefault: `${routeName}Page`,
            from: absoluteFilePath,
          }),
          { authRequired: isAuth },
        ),
        { prerender: isPrerender },
      );
    });
};
