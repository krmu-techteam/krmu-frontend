import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  placeholder?: string;
  error?: string;
  field: ControllerRenderProps<T, Path<T>>;
}

export function TextField<T extends FieldValues>({
  label,
  placeholder,
  error,
  field,
}: Props<T>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <input
        {...field}
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
