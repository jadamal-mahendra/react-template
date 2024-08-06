import React from "react";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AuthGuard({ children }: { children: any }) {
  const isAuthenticated = true; // Replace with actual authentication check

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default AuthGuard;
