import { Button } from "@/components";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="flex flex-col min-h-dvh items-center justify-center gap-3">
      <h1 className="text-5xl text-zinc-600 font-medium">
        404 - Page Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/dashboard/home">
        <Button variant="outline">Go home</Button>
      </Link>
    </main>
  );
}
