"use client";

import { useDeleteFaculty } from "@/app/(krmu-backend)/features/faculty/hooks/useDeleteFaculty";
import { useState } from "react";


export default function DeleteFacultyPage() {
  const [id, setId] = useState("");

  const mutation = useDeleteFaculty();

  const handleDelete = () => {
    if (!id) {
      alert("Enter faculty ID");
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete faculty #${id}?`,
    );

    if (!confirmed) return;

    mutation.mutate(id);
  };

  return (
    <main className="mx-auto max-w-md space-y-6 py-10">
      <h1 className="text-2xl font-bold">Delete Faculty</h1>

      <input
        type="number"
        value={id}
        onChange={(event) => setId(event.target.value)}
        placeholder="Enter faculty ID"
        className="w-full rounded-md border px-4 py-2"
      />

      <button
        type="button"
        onClick={handleDelete}
        disabled={!id || mutation.isPending}
        className="rounded-md bg-red-600 px-5 py-2 text-white disabled:opacity-50"
      >
        {mutation.isPending ? "Deleting..." : "Delete Faculty"}
      </button>

      {mutation.isError && (
        <p className="text-red-600">Failed to delete faculty.</p>
      )}

      {mutation.isSuccess && (
        <p className="text-green-600">Faculty deleted successfully.</p>
      )}
    </main>
  );
}
