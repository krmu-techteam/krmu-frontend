import { Input } from "@/components/ui/input";

interface DateFieldProps {
  field: any;
  label: string;
  placeholder?: string;
  error?: string;
}

export function DateField({
  field,
  label,
  placeholder,
  error,
}: DateFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <Input
        {...field}
        type="date"
        placeholder={placeholder}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}