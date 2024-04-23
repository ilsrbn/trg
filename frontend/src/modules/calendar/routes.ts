import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "", component: () => import("./feature/index.vue") },
];

export default routes;
