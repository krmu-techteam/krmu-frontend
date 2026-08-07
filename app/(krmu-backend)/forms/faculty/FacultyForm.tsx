"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateFaculty } from "../../features/faculty/hooks/useCreateFaculty";
import { CreateFacultyDto } from "../../features/faculty/type";
import { facultySchema } from "./schema";

export default function FacultyForm() {
  const mutation = useCreateFaculty();

  const { register, handleSubmit } = useForm<CreateFacultyDto>({
    resolver: zodResolver(facultySchema),
  });

  const onSubmit = (data: CreateFacultyDto) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Faculty Name" />

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
