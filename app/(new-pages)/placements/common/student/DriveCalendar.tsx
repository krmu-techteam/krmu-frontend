"use client";

import { useEffect, useState } from "react";

interface DriveRecord {
  id: number;
  drive_id: string | null;
  company: string | null;
  schools_eligible: string | null;
  drive_type: string | null;
  engagement_type: string | null;
  job_roles: string | null;
  detailed_ctc_offered: string | null;
  ctc_offered_lpa: string | number | null;
  float_date: string | null;
  drive_date: string | null;
  jd_link: string | null;
  students_registered: number | null;
  students_appeared: number | null;
  selected: number | null;
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
  data: DriveRecord[];
  pagination: Pagination;
  message?: string;
}

const API_URL =
  "https://forms.krmangalam.ac.in/back-desk/get-drive-calendar.php";

const DriveCalendar = () => {
  const [records, setRecords] = useState<DriveRecord[]>([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [limit] = useState(10);

  const [pagination, setPagination] =
    useState<Pagination | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // =====================================================
  // DEBOUNCED SEARCH
  // =====================================================

  const [debouncedSearch, setDebouncedSearch] =
    useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);


  // =====================================================
  // FETCH DATA
  // =====================================================

  useEffect(() => {
    const fetchDrives = async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          page: String(page),
          limit: String(limit),
        });

        if (debouncedSearch.trim()) {
          params.set(
            "search",
            debouncedSearch.trim(),
          );
        }

        const response = await fetch(
          `${API_URL}?${params.toString()}`,
          {
            method: "GET",
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch drive calendar",
          );
        }

        const result: ApiResponse =
          await response.json();

        if (!result.success) {
          throw new Error(
            result.message ||
              "Something went wrong",
          );
        }

        setRecords(result.data);
        setPagination(result.pagination);

      } catch (err) {
        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong",
        );

        setRecords([]);

      } finally {
        setLoading(false);
      }
    };

    fetchDrives();

  }, [
    page,
    limit,
    debouncedSearch,
  ]);


  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearch(e.target.value);

    // Reset pagination when searching
    setPage(1);
  };


  // =====================================================
  // DATE FORMAT
  // =====================================================

  const formatDate = (
    date: string | null,
  ) => {

    if (!date) {
      return "-";
    }

    const parsedDate = new Date(date);

    if (
      Number.isNaN(
        parsedDate.getTime(),
      )
    ) {
      return date;
    }

    return parsedDate.toLocaleDateString(
      "en-US",
      {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      },
    );
  };


  return (
    <section className="px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">

      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-7 flex flex-col gap-5 sm:mb-8 md:flex-row md:items-end md:justify-between">

          <h2 className="font-newsreader text-4xl font-medium leading-[1.05] text-[#001836] sm:text-5xl md:text-[52px] lg:text-[58px]">
            Drive calendar
          </h2>

          <div className="flex items-center gap-3 font-poppins text-[10px] font-medium uppercase tracking-[0.18em] text-[#001836] sm:text-xs">

            <button
              type="button"
              className="transition-opacity hover:opacity-60"
            >
              Filter
            </button>

            <span className="text-[#aaa]">
              ·
            </span>

            <span>
              Search company...
            </span>

          </div>

        </div>


        {/* =====================================================
            SEARCH
        ===================================================== */}

        <div className="w-full border border-[#d8d5d0] bg-white">

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search Company"
            aria-label="Search company"
            className="
              h-14
              w-full
              bg-transparent
              px-4
              font-poppins
              text-sm
              text-[#222]
              outline-none
              placeholder:text-[#777]
              sm:h-16
              sm:px-6
            "
          />

        </div>


        {/* Divider */}

        <div className="mt-3 border-t border-[#222]" />


        {/* =====================================================
            ERROR
        ===================================================== */}

        {error && (

          <div className="border-b border-[#d8d5d0] py-10 text-center">

            <p className="font-poppins text-sm text-red-600">
              {error}
            </p>

            <button
              type="button"
              onClick={() => setPage(1)}
              className="mt-4 font-poppins text-xs font-medium uppercase tracking-[0.15em] text-[#001836] underline"
            >
              Try again
            </button>

          </div>

        )}


        {/* =====================================================
            LOADING
        ===================================================== */}

        {!error && loading && (

          <div className="hidden md:block">

            {Array.from({
              length: 5,
            }).map((_, index) => (

              <div
                key={index}
                className="
                  grid
                  grid-cols-[minmax(150px,1.6fr)_minmax(80px,.8fr)_minmax(150px,1.3fr)_minmax(90px,.8fr)_minmax(140px,1.15fr)_minmax(75px,.6fr)]
                  gap-4
                  border-b
                  border-[#d8d5d0]
                  py-7
                  lg:gap-6
                  xl:gap-8
                "
              >

                <div className="h-12 animate-pulse bg-[#eee]" />

                <div className="h-5 animate-pulse bg-[#eee]" />

                <div className="h-10 animate-pulse bg-[#eee]" />

                <div className="h-5 animate-pulse bg-[#eee]" />

                <div className="h-10 animate-pulse bg-[#eee]" />

                <div className="h-5 animate-pulse bg-[#eee]" />

              </div>

            ))}

          </div>

        )}


        {/* =====================================================
            DESKTOP DATA
        ===================================================== */}

        {!error &&
          !loading && (

            <div className="hidden md:block">

              {records.length > 0 ? (

                records.map((record) => (

                  <div
                    key={record.id}
                    className="
                      grid
                      grid-cols-[minmax(150px,1.6fr)_minmax(80px,.8fr)_minmax(150px,1.3fr)_minmax(90px,.8fr)_minmax(140px,1.15fr)_minmax(75px,.6fr)]
                      items-start
                      gap-4
                      border-b
                      border-[#d8d5d0]
                      py-6
                      lg:gap-6
                      lg:py-7
                      xl:gap-8
                    "
                  >

                    {/* Company */}

                    <div className="min-w-0">

                      <h3 className="break-words font-newsreader text-lg leading-[1.2] text-[#111] lg:text-xl">
                        {record.company || "-"}
                      </h3>

                      <p className="mt-1 break-words font-poppins text-[10px] leading-4 text-[#5f7485] sm:text-xs">
                        {record.schools_eligible || "-"}
                      </p>

                    </div>


                    {/* Mode */}

                    <div className="min-w-0">

                      <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.15em] text-[#8d5552] lg:text-xs">
                        {record.drive_type || "-"}
                      </span>

                    </div>


                    {/* Role */}

                    <div className="min-w-0">

                      <p className="break-words font-poppins text-xs leading-[1.45] text-[#222] lg:text-sm">
                        {record.job_roles || "-"}
                      </p>

                    </div>


                    {/* Package */}

                    <div className="min-w-0">

                      <p className="break-words font-poppins text-xs text-[#111] lg:text-sm">

                        {record.ctc_offered_lpa
                          ? `${record.ctc_offered_lpa} LPA`
                          : record.detailed_ctc_offered ||
                            "-"}

                      </p>

                    </div>


                    {/* Dates */}

                    <div className="min-w-0 font-poppins text-[10px] leading-[1.6] text-[#333] lg:text-xs">

                      <p>
                        Float Date:{" "}
                        {formatDate(
                          record.float_date,
                        )}
                      </p>

                      <p>
                        Drive Date:{" "}
                        {formatDate(
                          record.drive_date,
                        )}
                      </p>

                    </div>


                    {/* Status */}

                    <div className="min-w-0 text-right">

                      <span className="font-poppins text-xs font-semibold text-[#111] lg:text-sm">
                        {record.status || "-"}
                      </span>

                    </div>

                  </div>

                ))

              ) : (

                <div className="border-b border-[#d8d5d0] py-12 text-center font-poppins text-sm text-[#666]">
                  {search
                    ? "No drives found."
                    : "No drive calendar records available."}
                </div>

              )}

            </div>

          )}


        {/* =====================================================
            MOBILE LOADING
        ===================================================== */}

        {!error && loading && (

          <div className="md:hidden">

            {Array.from({
              length: 3,
            }).map((_, index) => (

              <article
                key={index}
                className="border-b border-[#d8d5d0] py-6"
              >

                <div className="h-7 w-2/3 animate-pulse bg-[#eee]" />

                <div className="mt-2 h-4 w-1/3 animate-pulse bg-[#eee]" />

                <div className="mt-6 grid grid-cols-2 gap-5">

                  <div className="h-10 animate-pulse bg-[#eee]" />

                  <div className="h-10 animate-pulse bg-[#eee]" />

                </div>

                <div className="mt-5 h-12 animate-pulse bg-[#eee]" />

              </article>

            ))}

          </div>

        )}


        {/* =====================================================
            MOBILE DATA
        ===================================================== */}

        {!error &&
          !loading && (

            <div className="md:hidden">

              {records.length > 0 ? (

                records.map((record) => (

                  <article
                    key={record.id}
                    className="border-b border-[#d8d5d0] py-6"
                  >

                    {/* Company + Status */}

                    <div className="flex items-start justify-between gap-4">

                      <div className="min-w-0 flex-1">

                        <h3 className="break-words font-newsreader text-[22px] font-medium leading-[1.15] text-[#111]">
                          {record.company || "-"}
                        </h3>

                        <p className="mt-1 break-words font-poppins text-[10px] leading-4 text-[#5f7485]">
                          {record.schools_eligible || "-"}
                        </p>

                      </div>

                      <span className="shrink-0 pt-1 font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111]">
                        {record.status || "-"}
                      </span>

                    </div>


                    {/* Mode + Package */}

                    <div className="mt-6 grid grid-cols-2 gap-5">

                      <div>

                        <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                          Mode
                        </span>

                        <p className="mt-1 font-poppins text-xs text-[#222]">
                          {record.drive_type || "-"}
                        </p>

                      </div>


                      <div>

                        <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                          Package
                        </span>

                        <p className="mt-1 font-poppins text-xs text-[#222]">

                          {record.ctc_offered_lpa
                            ? `${record.ctc_offered_lpa} LPA`
                            : record.detailed_ctc_offered ||
                              "-"}

                        </p>

                      </div>

                    </div>


                    {/* Role */}

                    <div className="mt-5 border-t border-[#e1ded9] pt-5">

                      <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                        Role
                      </span>

                      <p className="mt-1 font-poppins text-xs leading-5 text-[#222]">
                        {record.job_roles || "-"}
                      </p>

                    </div>


                    {/* Dates */}

                    <div className="mt-5 grid grid-cols-2 gap-5 border-t border-[#e1ded9] pt-5">

                      <div>

                        <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                          Float Date
                        </span>

                        <p className="mt-1 font-poppins text-xs text-[#333]">
                          {formatDate(
                            record.float_date,
                          )}
                        </p>

                      </div>


                      <div>

                        <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                          Drive Date
                        </span>

                        <p className="mt-1 font-poppins text-xs text-[#333]">
                          {formatDate(
                            record.drive_date,
                          )}
                        </p>

                      </div>

                    </div>

                  </article>

                ))

              ) : (

                <div className="border-b border-[#d8d5d0] py-10 text-center font-poppins text-sm text-[#666]">
                  {search
                    ? "No drives found."
                    : "No drive calendar records available."}
                </div>

              )}

            </div>

          )}


        {/* =====================================================
            PAGINATION
        ===================================================== */}

        {!loading &&
          pagination &&
          pagination.totalPages > 1 && (

            <div className="flex items-center justify-center gap-6 pt-8 sm:pt-10 md:pt-12">

              <button
                type="button"
                disabled={
                  !pagination.hasPreviousPage
                }
                onClick={() =>
                  setPage((current) =>
                    Math.max(
                      1,
                      current - 1,
                    ),
                  )
                }
                className="
                  font-poppins
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-[#001836]
                  transition-opacity
                  hover:opacity-60
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                Previous
              </button>


              <span className="font-poppins text-xs text-[#666]">
                {pagination.page} /{" "}
                {pagination.totalPages}
              </span>


              <button
                type="button"
                disabled={
                  !pagination.hasNextPage
                }
                onClick={() =>
                  setPage(
                    (current) =>
                      current + 1,
                  )
                }
                className="
                  font-poppins
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-[#001836]
                  transition-opacity
                  hover:opacity-60
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                Next
              </button>

            </div>

          )}


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="flex justify-center pt-8 sm:pt-10 md:pt-12">

          <button
            type="button"
            className="
              w-full
              max-w-[220px]
              bg-[#001836]
              px-8
              py-3.5
              font-poppins
              text-sm
              font-medium
              text-white
              transition-colors
              hover:bg-[#0d2948]
              sm:py-4
            "
          >
            Book your slot
          </button>

        </div>

      </div>

    </section>
  );
};

export default DriveCalendar;