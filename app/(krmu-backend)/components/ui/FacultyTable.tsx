"use client";

import { useState } from "react";
import Link from "next/link";
import { useDebounce } from "../../hooks/useDebounce";
import { useFaculty } from "../../features/faculty/hooks/useFaculty";



export default function FacultyTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const limit = 10;

  const debouncedSearch = useDebounce(search, 300);

  const {
    data,
    isPending,
    isFetching,
    isError,
    refetch,
  } = useFaculty({
    page,
    limit,
    search: debouncedSearch || undefined,
    // status: "published",
  });

//   const trashMutation = useTrashFaculty();

  const faculties = data?.data ?? [];
  const pagination = data?.pagination;

  const handleSearch = (
    value: string
  ) => {
    setSearch(value);
    setPage(1);
  };

//   const handleTrash = (
//     id: number,
//     name: string
//   ) => {
//     const confirmed = window.confirm(
//       `Are you sure you want to move "${name}" to trash?`
//     );

//     if (!confirmed) return;

//     trashMutation.mutate(id);
//   };

  /*
   * Initial loading
   */
  if (isPending) {
    return (
      <div className="space-y-4">
        <div className="h-10 w-full animate-pulse rounded-md bg-muted" />

        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-16 animate-pulse rounded-md bg-muted"
          />
        ))}
      </div>
    );
  }

  /*
   * Error
   */
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-lg font-semibold">
          Unable to load faculty
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong while loading the faculty.
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="mt-4 rounded-md border px-4 py-2"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header / Toolbar */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Faculty
          </h2>

          <p className="text-sm text-muted-foreground">
            Manage faculty members.
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href="/faculty/create"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Create Faculty
          </Link>

          <Link
            href="/faculty/trash"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Trash
          </Link>
        </div>
      </div>

      {/* Search */}

      <div className="relative">
        <input
          type="search"
          value={search}
          onChange={(event) =>
            handleSearch(event.target.value)
          }
          placeholder="Search faculty..."
          className="w-full rounded-md border px-4 py-2 outline-none focus:ring-2"
        />

        {isFetching && (
          <span className="absolute right-3 top-2.5 text-xs text-muted-foreground">
            Loading...
          </span>
        )}
      </div>

      {/* Empty */}

      {faculties.length === 0 ? (
        <div className="rounded-md border py-16 text-center">
          <h3 className="font-semibold">
            No faculty found
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {search
              ? `No faculty found for "${search}".`
              : "No published faculty available."}
          </p>
        </div>
      ) : (
        <>
          {/* Table */}

          <div className="overflow-x-auto rounded-md border">
            <table className="w-full text-sm">

              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">
                    ID
                  </th>

                  <th className="px-4 py-3 text-left font-medium">
                    Faculty
                  </th>

                  <th className="px-4 py-3 text-left font-medium">
                    Designation
                  </th>

                  <th className="px-4 py-3 text-left font-medium">
                    Qualifications
                  </th>

                  <th className="px-4 py-3 text-left font-medium">
                    Status
                  </th>

                  <th className="px-4 py-3 text-right font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {faculties.map((faculty) => (
                  <tr
                    key={faculty.id}
                    className="border-b last:border-0 hover:bg-muted/30"
                  >
                    {/* ID */}

                    <td className="px-4 py-4">
                      {faculty.id}
                    </td>

                    {/* Faculty */}

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">

                        {/* {faculty.image ? (
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            {faculty.name
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )} */}

                        <div>
                          <p className="font-medium">
                            {faculty.name}
                          </p>

                          {faculty.description && (
                            <p className="max-w-xs truncate text-xs text-muted-foreground">
                              {faculty.description}
                            </p>
                          )}
                        </div>

                      </div>
                    </td>

                    {/* Designation */}

                    <td className="px-4 py-4">
                      {faculty.designation || "-"}
                    </td>

                    {/* Qualifications */}

                    <td className="px-4 py-4">
                      {faculty.qualifications || "-"}
                    </td>

                    {/* Status */}

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                        Published
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-4 py-4">
                      <div className="flex justify-end gap-2">

                        <Link
                          href={`/faculty/${faculty.id}/edit`}
                          className="rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                        >
                          Edit
                        </Link>

                        {/* <button
                          type="button"
                          disabled={
                            trashMutation.isPending
                          }
                          onClick={() =>
                            handleTrash(
                              faculty.id,
                              faculty.name
                            )
                          }
                          className="rounded-md border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
                        >
                          {trashMutation.isPending
                            ? "Moving..."
                            : "Trash"}
                        </button> */}

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Pagination */}

          {pagination &&
            pagination.totalPages > 1 && (
              <div className="flex items-center justify-between">

                <p className="text-sm text-muted-foreground">
                  Page {pagination.page} of{" "}
                  {pagination.totalPages}
                </p>

                <div className="flex gap-2">

                  <button
                    type="button"
                    disabled={
                      page === 1 ||
                      isFetching
                    }
                    onClick={() =>
                      setPage(
                        (current) =>
                          current - 1
                      )
                    }
                    className="rounded-md border px-4 py-2 text-sm disabled:opacity-50"
                  >
                    Previous
                  </button>

                  <button
                    type="button"
                    disabled={
                      page >=
                        pagination.totalPages ||
                      isFetching
                    }
                    onClick={() =>
                      setPage(
                        (current) =>
                          current + 1
                      )
                    }
                    className="rounded-md border px-4 py-2 text-sm disabled:opacity-50"
                  >
                    Next
                  </button>

                </div>
              </div>
            )}
        </>
      )}
    </div>
  );
}