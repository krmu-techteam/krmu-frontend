"use client";

import { useEffect, useState } from "react";

const API_URL =
  "https://forms.krmangalam.ac.in/back-desk/get-placement-records.php";

interface PlacementRecord {
  id: number;
  offer_id: string | null;
  student_name: string | null;
  program: string | null;
  school: string | null;
  company: string | null;
  designation: string | null;
  job_profile: string | null;
  detailed_ctc: string | null;
  offer_type: string | null;
  created_at: string | null;
  updated_at: string | null;
  status: string | null;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface ApiResponse {
  success: boolean;
  data: PlacementRecord[];
  pagination: Pagination;
  message?: string;
}

const INITIAL_RECORDS = 7;

const PlacementRecords = () => {
  const [records, setRecords] = useState<PlacementRecord[]>([]);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(INITIAL_RECORDS);

  const [pagination, setPagination] = useState<Pagination | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================
  // SEARCH DEBOUNCE
  // ==========================

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // ==========================
  // FETCH PLACEMENT RECORDS
  // ==========================

  useEffect(() => {
    const fetchPlacementRecords = async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams();

        params.set("page", String(page));
        params.set("limit", String(limit));

        if (debouncedSearch.trim()) {
          params.set("search", debouncedSearch.trim());
        }

        const response = await fetch(
          `${API_URL}?${params.toString()}`,
          {
            method: "GET",
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch placement records");
        }

        const result: ApiResponse = await response.json();

        if (!result.success) {
          throw new Error(
            result.message || "Failed to fetch placement records",
          );
        }

        setRecords(result.data);
        setPagination(result.pagination);
      } catch (err) {
        console.error(err);

        setError(
          "Unable to load placement records. Please try again.",
        );

        setRecords([]);
        setPagination(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacementRecords();
  }, [page, limit, debouncedSearch]);

  // ==========================
  // SEARCH
  // ==========================

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearch(event.target.value);

    // Always go back to first page when searching
    setPage(1);

    // Reset View All when search changes
    setLimit(INITIAL_RECORDS);
  };

  // ==========================
  // VIEW ALL
  // ==========================

  const handleViewAll = () => {
    if (limit === INITIAL_RECORDS) {
      setPage(1);
      setLimit(100);
    } else {
      setPage(1);
      setLimit(INITIAL_RECORDS);
    }
  };

  const showViewAll =
    pagination && pagination.total > INITIAL_RECORDS;

  const isShowingAll =
    limit === 100 ||
    (pagination &&
      pagination.total <= limit);

  return (
    <section className="px-5 xl:px-0 py-10 sm:py-14 md:py-20">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-5 mb-6 md:mb-8">
          <h2 className="font-newsreader text-4xl sm:text-5xl md:text-[55px] leading-tight text-[#001836]">
            Placement Records
          </h2>

          <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#12233F]">
            Detailed log of individual accepted offers
          </span>
        </div>

        {/* Search */}
        <div className="relative mb-2">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search Company or role..."
            className="
              w-full
              h-12 sm:h-14 md:h-16
              border border-[#d8d8d8]
              bg-white
              px-4 sm:px-5
              text-xs sm:text-sm
              text-[#12233F]
              outline-none
              placeholder:text-[#777]
              focus:border-[#12233F]
              transition-colors
            "
          />
        </div>

        {/* Records */}
        <div className="border-t border-[#555]">

          {/* Loading */}
          {loading && (
            <>
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    grid
                    grid-cols-2
                    md:grid-cols-[2.2fr_1.4fr_0.7fr_1.4fr]
                    gap-x-4
                    gap-y-4
                    md:gap-6
                    border-b border-[#ddd]
                    py-5
                    sm:py-6
                    md:py-4
                  "
                >
                  {/* Student */}
                  <div className="col-span-2 md:col-span-1">
                    <div className="h-6 w-40 bg-gray-200 animate-pulse mb-2" />

                    <div className="h-4 w-56 bg-gray-200 animate-pulse" />
                  </div>

                  {/* Role */}
                  <div className="flex flex-col justify-center">
                    <div className="h-3 w-20 bg-gray-200 animate-pulse mb-2" />

                    <div className="h-4 w-28 bg-gray-200 animate-pulse" />
                  </div>

                  {/* CTC */}
                  <div className="flex flex-col justify-center">
                    <div className="h-4 w-20 bg-gray-200 animate-pulse" />
                  </div>

                  {/* Company */}
                  <div className="col-span-2 md:col-span-1 flex flex-col justify-center md:items-end">
                    <div className="h-4 w-32 bg-gray-200 animate-pulse" />
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="py-10 sm:py-12 text-center text-xs sm:text-sm text-red-500">
              {error}
            </div>
          )}

          {/* Records */}
          {!loading &&
            !error &&
            records.map((record) => (
              <div
                key={record.id}
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-[2.2fr_1.4fr_0.7fr_1.4fr]
                  gap-x-4
                  gap-y-4
                  md:gap-6
                  border-b border-[#ddd]
                  py-5
                  sm:py-6
                  md:py-4
                "
              >

                {/* Student */}
                <div className="col-span-2 md:col-span-1">
                  <h3 className="font-newsreader text-xl sm:text-2xl md:text-2xl leading-tight text-[#12233F] mb-1">
                    {record.student_name || "-"}
                  </h3>

                  <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed text-[#667085] max-w-sm">
                    {record.program || "-"}
                  </p>
                </div>

                {/* Role */}
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] sm:text-[10px] md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#7A1F2B] mb-1">
                    {record.offer_type || "-"}
                  </span>

                  <span className="text-xs sm:text-sm md:text-[15px] leading-snug text-black">
                    {record.designation || record.job_profile || "-"}
                  </span>
                </div>

                {/* CTC */}
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#667085] md:hidden mb-1">
                    CTC
                  </span>

                  <span className="text-sm sm:text-base text-black">
                    {record.detailed_ctc || "-"}
                  </span>
                </div>

                {/* Company */}
                <div className="col-span-2 md:col-span-1 flex flex-col justify-center md:items-end">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#667085] md:hidden mb-1">
                    Company
                  </span>

                  <span className="text-sm sm:text-base md:text-base font-medium text-black md:text-right">
                    {record.company || "-"}
                  </span>
                </div>

              </div>
            ))}

          {/* No Results */}
          {!loading &&
            !error &&
            records.length === 0 && (
              <div className="py-10 sm:py-12 text-center text-xs sm:text-sm text-[#667085]">
                No placement records found.
              </div>
            )}
        </div>

        {/* Pagination */}
        {!loading &&
          !error &&
          pagination &&
          pagination.totalPages > 1 &&
          limit === INITIAL_RECORDS && (
            <div className="flex justify-center items-center gap-3 mt-7 sm:mt-8">

              <button
                type="button"
                disabled={!pagination.hasPreviousPage}
                onClick={() =>
                  setPage((prev) => Math.max(1, prev - 1))
                }
                className="
                  border border-[#d8d8d8]
                  px-4 py-2
                  text-sm
                  text-[#12233F]
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                  hover:bg-[#12233F]
                  hover:text-white
                  transition-colors
                "
              >
                Previous
              </button>

              <span className="text-sm text-[#667085]">
                {pagination.page} / {pagination.totalPages}
              </span>

              <button
                type="button"
                disabled={!pagination.hasNextPage}
                onClick={() =>
                  setPage((prev) => prev + 1)
                }
                className="
                  border border-[#d8d8d8]
                  px-4 py-2
                  text-sm
                  text-[#12233F]
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                  hover:bg-[#12233F]
                  hover:text-white
                  transition-colors
                "
              >
                Next
              </button>

            </div>
          )}

        {/* View All */}
        {!loading &&
          !error &&
          showViewAll && (
            <div className="flex justify-center mt-7 sm:mt-8">
              <button
                type="button"
                onClick={handleViewAll}
                className="
                  border border-[#d8d8d8]
                  px-5 sm:px-6
                  py-2.5 sm:py-3
                  text-sm sm:text-base
                  text-[#12233F]
                  hover:bg-[#12233F]
                  hover:text-white
                  transition-colors
                "
              >
                {isShowingAll
                  ? "Show less"
                  : "View all Records"}
              </button>
            </div>
          )}

      </div>
    </section>
  );
};

export default PlacementRecords;