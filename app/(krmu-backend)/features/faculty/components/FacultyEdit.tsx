"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateFacultySchema, type UpdateFacultyDto } from "../schema";

import { useFacultyById } from "../hooks/useFacultyById";
import { useUpdateFaculty } from "../hooks/useUpdateFaculty";

interface FacultyEditProps {
  id: string;
}

export default function FacultyEdit({ id }: FacultyEditProps) {
  const { data, isPending, isError, refetch } = useFacultyById(id);

  const mutation = useUpdateFaculty();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UpdateFacultyDto>({
    resolver: zodResolver(updateFacultySchema),
  });

  console.log('data', data);

  /*
   * Populate form after GET request
   */
  useEffect(() => {
    if (!data?.data) return;

    reset({
      name: data.data.name,
      designation: data.data.designation,
      qualifications: data.data.qualifications ?? "",
      school_category_id: data.data.school_category_id ?? undefined,
      image: null,
    });
  }, [data, reset]);

  if (isPending) {
    return <p>Loading faculty...</p>;
  }

  if (isError) {
    return (
      <div>
        <p>Failed to load faculty.</p>

        <button type="button" onClick={() => refetch()}>
          Try Again
        </button>
      </div>
    );
  }

  if (!data?.data) {
    return <p>Faculty not found.</p>;
  }

  const onSubmit = (formData: UpdateFacultyDto) => {
    mutation.mutate({
      id,
      data: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}

      <div>
        <label>Name</label>

        <input {...register("name")} className="w-full rounded border p-2" />

        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="image">Faculty Image</label>

        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0] ?? null;

            setValue("image", file, {
              shouldValidate: true,
              shouldDirty: true,
            });
          }}
        />

        {errors.image && (
          <p className="text-sm text-red-500">{errors.image.message}</p>
        )}
      </div>

      {data.data.image_url && (
        <div>
          <p className="mb-2 text-sm">Current Image</p>

          <img
            src={data.data.image_url}
            alt={data.data.name}
            className="h-32 w-32 rounded-md object-cover"
          />
        </div>
      )}
      {/* Designation */}

      <div>
        <label>Designation</label>

        <input
          {...register("designation")}
          className="w-full rounded border p-2"
        />

        {errors.designation && (
          <p className="text-sm text-red-500">{errors.designation.message}</p>
        )}
      </div>

      {/* Qualification */}

      <div>
        <label>Qualification</label>

        <input
          {...register("qualifications")}
          className="w-full rounded border p-2"
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="rounded bg-black px-5 py-2 text-white disabled:opacity-50"
      >
        {mutation.isPending ? "Updating..." : "Update Faculty"}
      </button>
    </form>
  );
}
