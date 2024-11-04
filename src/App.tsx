import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateRouter, RoutesWithNotFound } from "@/components";
import { APP_ROUTES } from "@/models";
import { Login, Register } from "@/pages";
import { PrivateGuard } from "@/guard";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={APP_ROUTES.login} />} />
          <Route path={APP_ROUTES.login} element={<Login />} />
          <Route
            path={APP_ROUTES.register}
            element={<Register />}
          />
          <Route element={<PrivateGuard />}>
            <Route path={`${APP_ROUTES.dashboard}/*`} element={<PrivateRouter />}/>
          </Route>
        </  RoutesWithNotFound>
      </BrowserRouter>
    </>
  );
}

export default App;
