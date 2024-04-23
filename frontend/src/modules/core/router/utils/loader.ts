import { RouteRecordRaw } from "vue-router";

export class RouteLoader {
  public routes: RouteRecordRaw[] = [];

  public add(routes: RouteRecordRaw[]): void {
    this.routes = [...this.routes, ...routes];
  }

  // INFO: Singleton logic
  private static instance: RouteLoader;

  private constructor() { }

  public static getInstance(): RouteLoader {
    if (!RouteLoader.instance) {
      RouteLoader.instance = new RouteLoader();
    }

    return RouteLoader.instance;
  }
}

export const routeLoader = RouteLoader.getInstance();
