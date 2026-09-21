import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface Option {
  label: string;
  value: number | string;
}

interface Props<T extends FieldValues> {
  label: string;
  placeholder?: string;
  error?: string;
  options: Option[];
  field: ControllerRenderProps<T, Path<T>>;
}

export function SelectField<T extends FieldValues>({
  label,
  placeholder,
  error,
  options,
  field,
}: Props<T>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <select
        {...field}
        className="w-full rounded-lg border px-4 py-3 bg-white"
      >
        <option value="">{placeholder ?? "Select an option"}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
