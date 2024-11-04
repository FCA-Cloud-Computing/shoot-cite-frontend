import { RoutesWithNotFound } from "@/components";
import { APP_ROUTES } from "@/models";
import { Dashboard } from "@/pages";
import { Navigate, Route } from "react-router-dom";

export function PrivateRouter(){
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={APP_ROUTES.dashboard.home}/>} />
      <Route path={APP_ROUTES.dashboard.home} element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};