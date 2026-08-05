"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { facultySchema, FacultyForm } from "./schema";
import { facultyDefaultValues } from "./defaultValues";
import { facultyFields } from "./fields";
import { createFaculty } from "./api";
import { FormBuilder } from "../../components/form-builder/FormBuilder";
import { objectToFormData } from "../../components/utils/formData";

export default function FacultyFormComponent() {
  const form = useForm<FacultyForm>({
    resolver: zodResolver(facultySchema),
    defaultValues: facultyDefaultValues,
    mode: "onSubmit",
  });

  const onSubmit = async (data: FacultyForm) => {
    const formData = objectToFormData(data);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const res = await createFaculty(formData);
    console.log("res");
  };

  return <FormBuilder form={form} fields={facultyFields} onSubmit={onSubmit} />;
}
