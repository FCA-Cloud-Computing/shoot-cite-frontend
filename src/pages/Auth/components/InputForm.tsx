import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "@/models";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

export const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input id={name} type={type} {...field} />}
      />
      <p className="text-zinc-500 text-sm h-4">{error && error.message}</p>
    </div>
  );
};
