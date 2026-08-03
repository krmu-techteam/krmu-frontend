import { Control, FieldValues, Path } from "react-hook-form";
import { TextFieldConfig } from "../type";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface TextFieldProps<T extends FieldValues> {
  control: Control<T>;
  field: TextFieldConfig;
}

export function TextField<T extends FieldValues>({
  control,
  field,
}: TextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={field.name as Path<T>}
      render={({ field: formField }) => (
        <FormItem>
          <FormLabel>
            {field.label}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </FormLabel>

          <FormControl>
            <Input
              {...formField}
              placeholder={field.placeholder}
              disabled={field.disabled}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
}
