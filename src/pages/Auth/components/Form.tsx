import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputForm } from "./InputForm";
import { FormValues, schema } from "@/models";
import { Button } from "@/components";

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues:{
      email: "",
      password: "",
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
      <Button variant="secondary" type="submit" className="rounded-sm">Login</Button>
    </form>
  );
};
