"use client";

import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

import { FieldRenderer } from "./FieldRenderer";
import { FormField } from "./types";

interface FormBuilderProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  fields: FormField[];
  onSubmit: SubmitHandler<T>;
}

export function FormBuilder<T extends FieldValues>({
  form,
  fields,
  onSubmit,
}: FormBuilderProps<T>) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {fields.map((field) => (
        <FieldRenderer key={field.name} control={form.control} field={field} />
      ))}

      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white"
      >
        Save
      </button>
    </form>
  );
}
