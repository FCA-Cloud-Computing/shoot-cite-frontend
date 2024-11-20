import { ReactNode } from "react";
import { FieldValues, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

interface Props<T extends FieldValues> {
  children: ReactNode
  handleSubmit: UseFormHandleSubmit<T>
  onSubmit: SubmitHandler<T>
}

export const Form = <T extends FieldValues>({children, handleSubmit, onSubmit}: Props<T>) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {children}
    </form>
  );
};
