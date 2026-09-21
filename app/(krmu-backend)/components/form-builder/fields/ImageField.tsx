"use client";

import { useEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const file = field.value as File | null;

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  const removeImage = () => {
    field.onChange(null);
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">{label}</label>

      <input
        ref={(el) => {
          inputRef.current = el;
          field.ref(el);
        }}
        type="file"
        name={field.name}
        accept={accept}
        onBlur={field.onBlur}
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null;
          field.onChange(file);
        }}
      />

      {preview && (
        <div className="relative inline-block">
          <img
            src={preview}
            alt="Preview"
            className="h-40 w-40 rounded-lg border object-cover"
          />

          <button
            type="button"
            onClick={removeImage}
            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white shadow transition hover:bg-red-700"
            aria-label="Remove image"
          >
            ×
          </button>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}