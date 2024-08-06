import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import publicRoutes from "src/routes/PublicRoutes";
import protectedRoutes from "src/routes/ProtectedRoutes";
import { RouteConfig } from "src/routes/types";
import WebLayout from "src/components/ui/layout";

function AllRoutes() {
  const ALL_ROUTES: RouteConfig[] = [...publicRoutes, ...protectedRoutes];

  return (
    <Router>
      <Routes>
        {ALL_ROUTES.map((route) => {
          const Guard = route.guard || React.Fragment;

          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Guard>
                  <WebLayout>
                    <route.component />
                  </WebLayout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default AllRoutes;
