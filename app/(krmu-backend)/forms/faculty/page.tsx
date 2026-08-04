"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FacultyForm, facultySchema } from "./schema";
import { facultyDefaultValues } from "./defaultValues";
import { FormBuilder } from "../../components/form-builder/FormBuilder";
import { facultyFields } from "./fields";

export default function FacultyPage() {
  const form = useForm<FacultyForm>({
    resolver: zodResolver(facultySchema),
    defaultValues: facultyDefaultValues,
  });

  function onSubmit(data: FacultyForm) {
    console.log(data);
  }

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Create Faculty</h1>

      <FormBuilder form={form} fields={facultyFields} onSubmit={onSubmit} />
    </div>
  );
}
