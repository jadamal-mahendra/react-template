import { RouteConfig } from "src/routes/types";
import Home from "src/pages/home";
import AuthGuard from "src/routes/AuthGaurd";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProfileIcon from "@mui/icons-material/Person";
import React from "react";

const protectedRoutes: RouteConfig[] = [
  {
    id: "protected1",
    path: "/protected1",
    component: Home,
    header: "Protected Header 1",
    guard: AuthGuard,
    menuOptions: {
      label: "Protected Route 1",
      icon: <HomeIcon />,
      showInMenu: true,
    },
    subRoutes: [
      {
        id: "subMenu1",
        path: "/protected1/dashboard",
        component: Home,
        header: "Dashboard",
        guard: AuthGuard,
        menuOptions: {
          label: "Dashboard",
          icon: <DashboardIcon />,
          showInMenu: true,
        },
      },
      {
        id: "subMenu2",
        path: "/protected1/profile",
        component: Home,
        header: "Profile",
        guard: AuthGuard,
        menuOptions: {
          label: "Profile",
          icon: <ProfileIcon />,
          showInMenu: true,
        },
      },
    ],
  },
  {
    id: "protected2",
    path: "/protected2",
    component: Home,
    header: "Protected Header 2",
    guard: AuthGuard,
    menuOptions: {
      label: "Protected Route 2",
      icon: <HomeIcon />,
      showInMenu: true,
    },
  },
];

export default protectedRoutes;
