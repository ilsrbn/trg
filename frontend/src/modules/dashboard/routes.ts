import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Dashboard",
    path: "/",
    component: () => import("./feature/index.vue"),
  },
];

export default routes;
