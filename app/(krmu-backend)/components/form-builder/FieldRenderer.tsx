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
  return (
    <Controller
      name={field.name as Path<T>}
      control={control}
      render={({ field: formField, fieldState }) => {
        if (field.type === "image") {
          const Component = fieldRegistry.image;

          return (
            <Component
              field={formField}
              label={field.label}
              error={fieldState.error?.message}
              accept={field.accept}
            />
          );
        }
        if (field.type === "select") {
          const Component = fieldRegistry.select;

          return (
            <Component
              field={formField}
              label={field.label}
              placeholder={field.placeholder}
              error={fieldState.error?.message}
              options={field.options}
            />
          );
        }

        const Component = fieldRegistry[field.type];

        return (
          <Component
            field={formField}
            label={field.label}
            placeholder={field.placeholder}
            error={fieldState.error?.message}
          />
        );
      }}
    />
  );
}
