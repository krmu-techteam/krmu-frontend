"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateFaculty } from "../../features/faculty/hooks/useCreateFaculty";
import {
  CreateFacultyDto,
  createFacultySchema,
} from "../../features/faculty/schema";

export default function FacultyForm() {
  const mutation = useCreateFaculty();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CreateFacultyDto>({
    resolver: zodResolver(createFacultySchema),
    defaultValues: {
      name: "",
      designation: "",
      qualifications: "",
    },
  });

  const onSubmit = (data: CreateFacultyDto) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          {...register("name")}
          placeholder="Enter faculty name"
        />

        {errors.name && <p>{errors.name.message}</p>}
      </div>

      {/* Designation */}
      <div>
        <label htmlFor="designation">Designation</label>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0] ?? null;

            setValue("image_url", file, {
              shouldValidate: true,
            });
          }}
        />

        {errors.image_url && <p>{errors.image_url.message}</p>}
      </div>
      <div>
        <label htmlFor="designation">Designation</label>

        <input
          id="designation"
          {...register("designation")}
          placeholder="Enter designation"
        />

        {errors.designation && <p>{errors.designation.message}</p>}
      </div>

      {/* Qualification */}
      <div>
        <label htmlFor="qualifications">Qualification</label>

        <input
          id="qualifications"
          {...register("qualifications")}
          placeholder="Enter qualifications"
        />

        {errors.qualifications && <p>{errors.qualifications.message}</p>}
      </div>

      {/* Description */}

      {/* Submit */}
      <button type="submit" disabled={mutation.isPending} className="bg-red-500 p-2 text-white">
        {mutation.isPending ? "Creating..." : "Create Faculty"}
      </button>
    </form>
  );
}
