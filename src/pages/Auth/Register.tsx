import { Layout } from "@/layouts";
import { Form, InputForm } from "./components";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValuesRegister, schemaRegister } from "@/models";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components";

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesRegister>({
    resolver: zodResolver(schemaRegister),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubtmit: SubmitHandler<FormValuesRegister> = (data) => {
    console.log(data);
  };
  return (
    <Layout title="SC - Register">
      <main className="min-h-dvh flex flex-col items-center justify-center border-white/20">
        <section className="border border-white/50 p-8 rounded-xl flex flex-col gap-4 w-[30%]">
          <header>
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-zinc-400">
              Welcome! Please provide a name, email and password to register
            </p>
          </header>
          <Form<FormValuesRegister> handleSubmit={handleSubmit} onSubmit={onSubtmit}>
            <InputForm<FormValuesRegister>
              name="name"
              control={control}
              label="Name"
              type="text"
              error={errors.name}
            />
            <InputForm<FormValuesRegister>
              name="email"
              control={control}
              label="Email"
              type="email"
              error={errors.email}
            />
            <InputForm<FormValuesRegister>
              name="password"
              control={control}
              label="Password"
              type="password"
              error={errors.password}
            />

            <InputForm<FormValuesRegister>
              name="confirmPassword"
              control={control}
              label="Confirm Password"
              type="password"
              error={errors.confirmPassword}
            />
            <Button
              variant="secondary"
              type="submit"
              className="rounded-sm w-full"
            >
              Sign Up
            </Button>
          </Form>
          <footer>
            <p className="text-sm flex items-center gap-2">
              You already have an account?{" "}
              <Link to="/login" className="text-zinc-400 hover:underline">
                Log In
              </Link>
            </p>
          </footer>
        </section>
      </main>
    </Layout>
  );
}
