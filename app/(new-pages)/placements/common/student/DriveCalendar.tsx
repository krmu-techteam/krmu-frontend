"use client";

import { useEffect, useState } from "react";

import { useDriveCalendar } from "@/app/(krmu-backend)/lib/api/drive-calendar/useDriveCalendar";

const formatDriveType = (type: string) => {
  if (type === "on_campus") return "On Campus";
  if (type === "virtual") return "Virtual";

  return type;
};

const formatEngagementType = (type: string) => {
  if (type === "internship") return "Internship";
  if (type === "placement") return "Placement";
  if (type === "ppo") return "PPO";
  if (type === "internship_ppo") return "Internship + PPO";

  return type;
};

const formatDate = (date: string | null) => {
  if (!date) return "—";

  const [year, month, day] = date.split("-");

  if (year && month && day) {
    return `${month}/${day}/${year}`;
  }

  return date;
};

const formatCTC = (
  ctc: number | null,
  detailedCTC: string | null,
) => {
  if (detailedCTC) return detailedCTC;

  if (ctc !== null && ctc !== undefined) {
    return `${ctc} LPA CTC`;
  }

  return "—";
};

const DriveCalendar = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Get data from API
  const {
    data,
    isLoading,
    isError,
  } = useDriveCalendar({
    page: 1,
    limit: 100,
    search: debouncedSearch,
    status: "published",
  });

  const driveRecords = data?.data ?? [];

  console.log("Drive Calendar Data:", driveRecords);

  return (
    <section className="px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= HEADER ================= */}
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

            <span className="text-[#aaa]">·</span>

            <span>Search company...</span>
          </div>
        </div>

        {/* ================= SEARCH ================= */}
        <div className="w-full border border-[#d8d5d0] bg-white">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Company"
            aria-label="Search company"
            className="h-14 w-full bg-transparent px-4 font-poppins text-sm text-[#222] outline-none placeholder:text-[#777] sm:h-16 sm:px-6"
          />
        </div>

        {/* Divider */}
        <div className="mt-3 border-t border-[#222]" />

        {/* ================= LOADING ================= */}
        {isLoading && (
          <div className="border-b border-[#d8d5d0] py-12 text-center">
            <p className="font-poppins text-sm text-[#666]">
              Loading drives...
            </p>
          </div>
        )}

        {/* ================= ERROR ================= */}
        {isError && !isLoading && (
          <div className="border-b border-[#d8d5d0] py-12 text-center">
            <p className="font-poppins text-sm text-red-500">
              Failed to load drives.
            </p>
          </div>
        )}

        {/* ================= DESKTOP ================= */}
        {!isLoading &&
          !isError &&
          driveRecords.length > 0 && (
            <div className="hidden md:block">

              {/* Table Header */}
              <div
                className="
                  grid
                  grid-cols-[minmax(150px,1.6fr)_minmax(80px,.8fr)_minmax(150px,1.3fr)_minmax(90px,.8fr)_minmax(140px,1.15fr)_minmax(75px,.6fr)]
                  gap-4
                  border-b
                  border-[#222]
                  py-5
                  font-poppins
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-[#777]
                  lg:gap-6
                  xl:gap-8
                "
              >
                <div>Company</div>
                <div>Mode</div>
                <div>Role</div>
                <div>Package</div>
                <div>Dates</div>
                <div className="text-right">Status</div>
              </div>

              {/* Records */}
              {driveRecords.map((record) => (
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
                      {record.company}
                    </h3>

                    <p className="mt-1 break-words font-poppins text-[10px] leading-4 text-[#5f7485] sm:text-xs">
                      {record.schools_eligible || "—"}
                    </p>
                  </div>

                  {/* Mode */}
                  <div className="min-w-0">
                    <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.15em] text-[#8d5552] lg:text-xs">
                      {formatDriveType(record.drive_type)}
                    </span>
                  </div>

                  {/* Role */}
                  <div className="min-w-0">
                    <p className="break-words font-poppins text-xs leading-[1.45] text-[#222] lg:text-sm">
                      {record.job_roles || "—"}
                    </p>

                    <p className="mt-1 font-poppins text-[10px] text-[#8d5552] lg:text-xs">
                      {formatEngagementType(
                        record.engagement_type,
                      )}
                    </p>
                  </div>

                  {/* Package */}
                  <div className="min-w-0">
                    <p className="break-words font-poppins text-xs text-[#111] lg:text-sm">
                      {formatCTC(
                        record.ctc_offered_lpa,
                        record.detailed_ctc_offered,
                      )}
                    </p>
                  </div>

                  {/* Dates */}
                  <div className="min-w-0 font-poppins text-[10px] leading-[1.6] text-[#333] lg:text-xs">
                    <p>
                      Float Date:{" "}
                      {formatDate(record.float_date)}
                    </p>

                    <p>
                      Drive Date:{" "}
                      {formatDate(record.drive_date)}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="min-w-0 text-right">
                    <span className="font-poppins text-xs font-semibold text-[#111] lg:text-sm">
                      {formatEngagementType(
                        record.engagement_type,
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        {/* ================= MOBILE ================= */}
        {!isLoading &&
          !isError &&
          driveRecords.length > 0 && (
            <div className="md:hidden">
              {driveRecords.map((record) => (
                <article
                  key={record.id}
                  className="border-b border-[#d8d5d0] py-6"
                >
                  {/* Company + Status */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words font-newsreader text-[22px] font-medium leading-[1.15] text-[#111]">
                        {record.company}
                      </h3>

                      <p className="mt-1 break-words font-poppins text-[10px] leading-4 text-[#5f7485]">
                        {record.schools_eligible || "—"}
                      </p>
                    </div>

                    <span className="shrink-0 pt-1 font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111]">
                      {formatEngagementType(
                        record.engagement_type,
                      )}
                    </span>
                  </div>

                  {/* Mode + Package */}
                  <div className="mt-6 grid grid-cols-2 gap-5">
                    <div>
                      <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                        Mode
                      </span>

                      <p className="mt-1 font-poppins text-xs text-[#222]">
                        {formatDriveType(record.drive_type)}
                      </p>
                    </div>

                    <div>
                      <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                        Package
                      </span>

                      <p className="mt-1 font-poppins text-xs text-[#222]">
                        {formatCTC(
                          record.ctc_offered_lpa,
                          record.detailed_ctc_offered,
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mt-5 border-t border-[#e1ded9] pt-5">
                    <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                      Role
                    </span>

                    <p className="mt-1 font-poppins text-xs leading-5 text-[#222]">
                      {record.job_roles || "—"}
                    </p>
                  </div>

                  {/* Dates */}
                  <div className="mt-5 grid grid-cols-2 gap-5 border-t border-[#e1ded9] pt-5">
                    <div>
                      <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                        Float Date
                      </span>

                      <p className="mt-1 font-poppins text-xs text-[#333]">
                        {formatDate(record.float_date)}
                      </p>
                    </div>

                    <div>
                      <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                        Drive Date
                      </span>

                      <p className="mt-1 font-poppins text-xs text-[#333]">
                        {formatDate(record.drive_date)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        {/* ================= EMPTY ================= */}
        {!isLoading &&
          !isError &&
          driveRecords.length === 0 && (
            <div className="border-b border-[#d8d5d0] py-12 text-center font-poppins text-sm text-[#666]">
              {debouncedSearch
                ? `No drives found for "${debouncedSearch}".`
                : "No drives found."}
            </div>
          )}

        {/* ================= CTA ================= */}
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