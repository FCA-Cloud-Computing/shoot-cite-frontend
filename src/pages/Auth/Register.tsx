import { Layout } from "@/layouts";
import { FormRegister } from "./components";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <Layout title="SC - Register">
      <main className="min-h-dvh flex flex-col items-center justify-center border-white/20">
        <section className="border border-white/50 p-8 rounded-xl flex flex-col gap-4 w-[30%]">
          <header>
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-zinc-400">Welcome! Please provide a name, email and password to register</p>
          </header>
          <FormRegister />
          <footer>
            <p className="text-sm flex items-center gap-2">
            You already have an account? <Link to="/login" className="text-zinc-400 hover:underline">Log In</Link>
            </p>
          </footer>
        </section>
      </main>
    </Layout>
  );
}
