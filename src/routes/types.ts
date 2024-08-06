import { ComponentType } from "react";

export interface MenuOptions {
  label: string;
  icon?: React.ReactNode;
  showInMenu?: boolean; // Control whether to show in the menu
}

export interface RouteConfig {
  id: string;
  path: string;
  component: ComponentType;
  header?: string;
  guard?: ComponentType<{ children: React.ReactNode }>;
  menuOptions?: MenuOptions;
  subRoutes?: RouteConfig[];
}
