import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const isAuthenticated = false; // Substitua com lógica real

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
