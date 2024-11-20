import { Layout } from "@/layouts";
import { Form, InputForm } from "./components";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValuesLogin, schemaLogin } from "@/models";
import { Button } from "@/components";

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesLogin>({
    resolver: zodResolver(schemaLogin),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValuesLogin> = (data) => {
    console.log(data);
  };
  return (
    <Layout title="SC - Login">
      <main className="min-h-dvh flex flex-col items-center justify-center border-white/20">
        <section className="border border-white/50 p-8 rounded-xl flex flex-col gap-4">
          <header>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-zinc-400">
              Enter your email below to login to your account.
            </p>
          </header>
          <Form<FormValuesLogin> handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <InputForm
              name="email"
              control={control}
              label="Email"
              type="email"
              error={errors.email}
            />
            <InputForm
              name="password"
              control={control}
              label="Password"
              type="password"
              error={errors.password}
            />
            <Button
              variant="secondary"
              type="submit"
              className="rounded-sm w-full"
            >
              Login
            </Button>
          </Form>
          <footer>
            <p className="text-sm flex items-center gap-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-zinc-400 hover:underline">
                Sign up
              </Link>
            </p>
          </footer>
        </section>
      </main>
    </Layout>
  );
}
