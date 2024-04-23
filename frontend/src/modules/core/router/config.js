import { routeLoader } from "./utils/loader";
import { routes } from "./routes";
import { createWebHashHistory } from "vue-router";
routeLoader.add(routes);
export const routerConfig = {
    history: createWebHashHistory(),
    routes: routeLoader.routes,
};
//# sourceMappingURL=config.js.map