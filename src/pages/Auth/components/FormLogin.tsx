import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValuesLogin, schemaLogin } from "@/models";
import { InputForm } from "./InputForm";
import { Button } from "@/components";

export const FormLogin = () => {
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
};
