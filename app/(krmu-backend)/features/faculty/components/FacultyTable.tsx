"use client";

import { useState } from "react";

import { useFaculty } from "../hooks/useFaculty";
import { useDebounce } from "@/app/(krmu-backend)/hooks/useDebounce";
import DataTableSkeleton from "@/app/(krmu-backend)/components/common/DataTableSkeleton";
import ErrorState from "@/app/(krmu-backend)/components/common/ErrorState";
import EmptyState from "@/app/(krmu-backend)/components/common/EmptyState";

export default function FacultyTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  const { data, isPending, isFetching, isError, refetch } = useFaculty({
    page,
    limit: 10,
    search: debouncedSearch || undefined,
  });

  if (isPending) { 
    return <DataTableSkeleton rows={5} />;
  }

  if (isError) {
    return (
      <ErrorState
        title="Unable to load faculty"
        description="Please try again."
        onRetry={refetch}
      />
    );
  }

  const faculties = data?.data ?? [];
  const pagination = data?.pagination;

  return (
    <div className="space-y-6">
      {/* Search */}

      <input
        type="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setPage(1);
        }}
        placeholder="Search faculty..."
        className="w-full rounded-md border px-4 py-2"
      />

      {/* Background loading */}

      {isFetching && (
        <p className="text-sm text-muted-foreground">Updating...</p>
      )}

      {/* Empty */}

      {faculties.length === 0 ? (
        <EmptyState
          title="No faculty found"
          description={
            search
              ? `No faculty found for "${search}".`
              : "Create your first faculty member."
          }
        />
      ) : (
        <div className="space-y-3">
          {faculties.map((faculty) => (
            <div key={faculty.id} className="rounded-md border p-4">
              <h3 className="font-semibold">{faculty.name}</h3>

              <p className="text-sm">{faculty.designation}</p>

              {faculty.school_category_id && (
                <p className="text-sm text-muted-foreground">
                  {faculty.qualifications}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}

      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            disabled={page === 1 || isFetching}
            onClick={() => setPage((current) => current - 1)}
            className="rounded-md border px-4 py-2 disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm">
            Page {pagination.page} of {pagination.totalPages}
          </span>

          <button
            type="button"
            disabled={page >= pagination.totalPages || isFetching}
            onClick={() => setPage((current) => current + 1)}
            className="rounded-md border px-4 py-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
