import { Control, FieldValues } from "react-hook-form";

import { fieldRegistry } from "./fieldRegistry";
import { FormField } from "@/components/ui/form";

interface FieldRendererProps<T extends FieldValues> {
  control: Control<T>;
  field: FormField;
}

export function FieldRenderer<T extends FieldValues>({
  control,
  field,
}: FieldRendererProps<T>) {
  const Component = fieldRegistry[field.type];

  if (!Component) {
    return (
      <p className="text-destructive">Unsupported field type: {field.type}</p>
    );
  }
  return <Component control={control} field={field as never} />;
}
