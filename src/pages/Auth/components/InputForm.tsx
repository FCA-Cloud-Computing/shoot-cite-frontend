import { Control, Controller, FieldError, Path } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  error?: FieldError;
}
export const InputForm = <T extends FieldValues>({ name, control, label, type, error }: Props<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name as string}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input id={name as string} type={type} {...field} />}
      />
      <p className="text-zinc-500 text-sm h-4">{error && error.message}</p>
    </div>
  );
};
