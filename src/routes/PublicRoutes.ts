import { RouteConfig } from "src/routes/types";
import Home from "src/pages/home";

const publicRoutes: RouteConfig[] = [
  {
    id: "public1",
    path: "/public1",
    component: Home,
    header: "Public Header 1",
  },
];

export default publicRoutes;
