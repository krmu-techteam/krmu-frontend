"use client";

import { useEffect, useState } from "react";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  error?: string;
  accept?: string;
  field: ControllerRenderProps<T, Path<T>>;
}

export function ImageField<T extends FieldValues>({
  label,
  error,
  accept = "image/*",
  field,
}: Props<T>) {
  const [preview, setPreview] = useState<string | null>(null);

  const file = field.value as File | null;

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }

    setPreview(null);
  }, [file]);

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">{label}</label>

      <input
        type="file"
        name={field.name}
        ref={field.ref}
        onBlur={field.onBlur}
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null;
          field.onChange(file);
        }}
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="h-40 w-40 rounded-lg border object-cover"
        />
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
