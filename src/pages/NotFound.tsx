import { Button } from "@/components";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="flex flex-col min-h-dvh items-center justify-center gap-3">
      <h1 className="text-5xl text-zinc-600 font-medium">404 - Página No Encontrada</h1>
      <p>
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link to="/dashboard/home">
        <Button variant="outline">
        Volver al Inicio
        </Button>
      </Link>
    </main>
  );
}
