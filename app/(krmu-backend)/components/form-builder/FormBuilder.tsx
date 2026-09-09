"use client";

import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

import { FieldRenderer } from "./FieldRenderer";
import { FormField } from "./types";

interface FormBuilderProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  fields: FormField[];
  onSubmit: SubmitHandler<T>;
  onInvalid?: (errors: any) => void;
}

export function FormBuilder<T extends FieldValues>({
  form,
  fields,
  onSubmit,
  onInvalid,
}: FormBuilderProps<T>) {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit, onInvalid)}
      className="space-y-6 p-5"
    >
      <div className="max-w-6xl mx-auto space-y-2">
        {fields.map((field) => (
          <FieldRenderer
            key={field.name}
            control={form.control}
            field={field}
          />
        ))}

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}
