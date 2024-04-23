const routes = [
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
//# sourceMappingURL=routes.js.map