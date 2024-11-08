import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValuesRegister, schemaRegister } from "@/models";
import { InputForm } from "./InputForm";
import { Button } from "@/components";

export const FormRegister = () => {
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

  const onSubmit: SubmitHandler<FormValuesRegister> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <InputForm
        name="name"
        control={control}
        label="Name"
        type="text"
        error={errors.name}
      />
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

      <InputForm
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        type="password"
        error={errors.confirmPassword}
      />
      <Button variant="secondary" type="submit" className="rounded-sm w-full">
        Sign Up
      </Button>
    </form>
  );
};
