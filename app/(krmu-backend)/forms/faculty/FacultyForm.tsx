"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { facultySchema, FacultyForm } from "./schema";
import { facultyDefaultValues } from "./defaultValues";
import { facultyFields } from "./fields";
import { createFaculty } from "./api";
import { FormBuilder } from "../../components/form-builder/FormBuilder";

export default function FacultyFormComponent() {
  const form = useForm<FacultyForm>({
    resolver: zodResolver(facultySchema),
    defaultValues: facultyDefaultValues,
    mode: "onSubmit",
  });

  const onSubmit = async (data: FacultyForm) => {
    try {
      const response = await createFaculty(data);

      console.log("Success", response);

    //   form.reset();
    } catch (error) {
      console.error("Failed", error);
    }
  };

  return <FormBuilder form={form} fields={facultyFields} onSubmit={onSubmit} />;
}
