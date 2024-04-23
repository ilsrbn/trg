import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Contractors",
    path: "/",
    component: () => import("./feature/index.vue"),
  },
  {
    name: "Add-Contractor",
    path: "/add",
    component: () => import("./feature/add.vue"),
  },
];

export default routes;
