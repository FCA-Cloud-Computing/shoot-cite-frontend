import { RoutesWithNotFound } from "@/components";
import { Dashboard } from "@/pages";
import { Route } from "react-router-dom";

export function PrivateRouter(){
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};