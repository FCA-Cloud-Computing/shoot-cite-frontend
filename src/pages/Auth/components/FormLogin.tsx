import { Button } from "@/components";
import { InputForm } from "./InputForm";
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

interface Props {
  handleSubmit: UseFormHandleSubmit<
    {
      email: string;
      password: string;
    },
    undefined
  >;
  control: Control<
    {
      email: string;
      password: string;
    },
    undefined
  >;
  errors: FieldErrors<{
    email: string;
    password: string;
  }>;
  onSubmit: SubmitHandler<{
    email: string;
    password: string;
}>;
}

function FormLogin({ handleSubmit, control, errors, onSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
      <Button variant="secondary" type="submit" className="rounded-sm w-full">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
