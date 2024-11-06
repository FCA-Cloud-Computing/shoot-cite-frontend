import { APP_ROUTES } from "@/models";
import { NotFound } from "@/pages";
import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to={APP_ROUTES.notFound} />} />
      <Route path={APP_ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
}
