import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Reports",
    path: "/",
    component: () => import("./feature/index.vue"),
  },
  {
    name: "Add-Report",
    path: "/add",
    component: () => import("./feature/add.vue"),
  },
];

export default routes;
