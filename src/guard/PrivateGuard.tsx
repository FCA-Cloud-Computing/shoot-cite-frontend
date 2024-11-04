import { APP_ROUTES } from "@/models";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateGuard() {
  const token = true
  // const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={APP_ROUTES.login} replace />;
}
