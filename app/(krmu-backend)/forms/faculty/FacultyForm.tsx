"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateFaculty } from "../../features/faculty/hooks/useCreateFaculty";
import {
  CreateFacultyDto,
  createFacultySchema,
} from "../../features/faculty/schema";
import { FormBuilder } from "../../components/form-builder/FormBuilder";
import { facultyFields } from "./fields";

export default function FacultyForm() {
  const mutation = useCreateFaculty();

  const form = useForm<CreateFacultyDto>({
    resolver: zodResolver(createFacultySchema),
    defaultValues: {
      name: "",
      // sort_order: "",
      qualifications: "",
      designation: "", 
      emails: "",
      linkedin_profiles: "",
      interest_areas: "",
      profile: "",
      education: "",
      experience: "",
      research: "",
      project_achievements: "",
      conferences: "",
      publications: "",
      // image: null,
      status: "published",
    },
  });

  const onSubmit = (data: CreateFacultyDto) => {
    console.log("data", data);
    mutation.mutate(data);
  };

  return <FormBuilder form={form} fields={facultyFields} onSubmit={onSubmit} />;
}
