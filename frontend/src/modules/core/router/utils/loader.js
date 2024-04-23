export class RouteLoader {
    routes = [];
    add(routes) {
        this.routes = [...this.routes, ...routes];
    }
    // INFO: Singleton logic
    static instance;
    constructor() { }
    static getInstance() {
        if (!RouteLoader.instance) {
            RouteLoader.instance = new RouteLoader();
        }
        return RouteLoader.instance;
    }
}
export const routeLoader = RouteLoader.getInstance();
//# sourceMappingURL=loader.js.map