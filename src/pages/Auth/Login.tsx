import { Layout } from "@/layouts";
import { FormLogin } from "./components";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Layout title="SC - Login">
      <main className="min-h-dvh flex flex-col items-center justify-center border-white/20">
        <section className="border border-white/50 p-8 rounded-xl flex flex-col gap-4">
          <header>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-zinc-400">Enter your email below to login to your account.</p>
          </header>
          <FormLogin />
          <footer>
            <p className="text-sm flex items-center gap-2">
              Don't have an account? <Link to="/register" className="text-zinc-400 hover:underline">Sign up</Link>
            </p>
          </footer>
        </section>
      </main>
    </Layout>
  );
}
