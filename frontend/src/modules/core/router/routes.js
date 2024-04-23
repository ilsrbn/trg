import ContractorRoutes from "../../contractor/routes";
import ReportRoutes from "../../report/routes";
import DashboardRoutes from "../../dashboard/routes";
import MyDetailsRoutes from "../../my-details/routes";
export const routes = [
    { path: "/", children: DashboardRoutes },
    { path: "/contractors", children: ContractorRoutes },
    { path: "/reports", children: ReportRoutes },
    { path: "/my-details", children: MyDetailsRoutes },
];
//# sourceMappingURL=routes.js.map