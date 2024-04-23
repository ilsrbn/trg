import { routeLoader } from "./utils/loader";
import { routes } from "./routes";
import { createWebHashHistory } from "vue-router";
import type { RouterOptions } from "vue-router";

routeLoader.add(routes);

export const routerConfig: RouterOptions = {
  history: createWebHashHistory(),
  routes: routeLoader.routes,
};
