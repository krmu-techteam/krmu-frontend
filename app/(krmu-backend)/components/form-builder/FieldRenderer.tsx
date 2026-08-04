import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FormField } from "./types";
import { fieldRegistry } from "./fieldRegistry";

interface FieldRendererProps<T extends FieldValues> {
  control: Control<T>;
  field: FormField;
}

export function FieldRenderer<T extends FieldValues>({
  control,
  field,
}: FieldRendererProps<T>) {
  const Component = fieldRegistry[field.type];
  return (
    <Controller
      name={field.name as Path<T>}
      control={control}
      render={({ field: formField, fieldState }) => (
        <Component
          field={formField}
          label={field.label}
          placeholder={field.placeholder}
          error={fieldState.error?.message}
        />
      )}
    />
  );
}
