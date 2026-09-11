"use client";

import { useMemo, useState } from "react";

interface DriveRecord {
  id: number;
  company: string;
  schools: string;
  mode: "Virtual" | "On Campus";
  role: string;
  package: string;
  floatDate: string;
  driveDate: string;
  status: string;
}

const driveRecords: DriveRecord[] = [
  {
    id: 1,
    company: "Cloud Certitude Pvt Ltd",
    schools: "SOET", 
    mode: "Virtual",
    role: "Salesforce Trainee",
    package: "4 LPA CTC",
    floatDate: "6/12/2025",
    driveDate: "6/17/2025",
    status: "Placement",
  },
  {
    id: 2,
    company: "Sonalika tractors",
    schools: "SOMC",
    mode: "On Campus",
    role: "MT- Digital marketer",
    package: "4 LPA CTC",
    floatDate: "5/1/2025",
    driveDate: "5/8/2025",
    status: "Placement",
  },
  {
    id: 3,
    company: "Investors Clinic",
    schools: "SOHS/ SOMC",
    mode: "Virtual",
    role: "Sales and Marketing Executive",
    package: "4.2 LPA",
    floatDate: "6/23/2025",
    driveDate: "7/3/2025",
    status: "Placement",
  },
  {
    id: 4,
    company: "Cvent 1",
    schools: "SOMC/ SOET/SBAS/SOHS",
    mode: "Virtual",
    role: "Associate Product Consultant - Event Phones",
    package: "6 LPA",
    floatDate: "6/23/2025",
    driveDate: "6/30/2025",
    status: "Placement",
  },
  {
    id: 5,
    company: "Shriram Group",
    schools: "SOET/SOMC",
    mode: "Virtual",
    role: "Engineering/ Management Trainees",
    package: "3.18 LPA",
    floatDate: "6/28/2025",
    driveDate: "7/2/2025",
    status: "Placement",
  },
];

const DriveCalendar = () => {
  const [search, setSearch] = useState("");

  const filteredRecords = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return driveRecords;

    return driveRecords.filter((record) =>
      [
        record.company,
        record.schools,
        record.mode,
        record.role,
        record.package,
        record.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <section className="px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
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

        {/* Search */}
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

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
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
                    {record.schools}
                  </p>
                </div>

                {/* Mode */}
                <div className="min-w-0">
                  <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.15em] text-[#8d5552] lg:text-xs">
                    {record.mode}
                  </span>
                </div>

                {/* Role */}
                <div className="min-w-0">
                  <p className="break-words font-poppins text-xs leading-[1.45] text-[#222] lg:text-sm">
                    {record.role}
                  </p>
                </div>

                {/* Package */}
                <div className="min-w-0">
                  <p className="break-words font-poppins text-xs text-[#111] lg:text-sm">
                    {record.package}
                  </p>
                </div>

                {/* Dates */}
                <div className="min-w-0 font-poppins text-[10px] leading-[1.6] text-[#333] lg:text-xs">
                  <p>Float Date: {record.floatDate}</p>
                  <p>Drive Date: {record.driveDate}</p>
                </div>

                {/* Status */}
                <div className="min-w-0 text-right">
                  <span className="font-poppins text-xs font-semibold text-[#111] lg:text-sm">
                    {record.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="border-b border-[#d8d5d0] py-12 text-center font-poppins text-sm text-[#666]">
              No drives found.
            </div>
          )}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
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
                      {record.schools}
                    </p>
                  </div>

                  <span className="shrink-0 pt-1 font-poppins text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111]">
                    {record.status}
                  </span>
                </div>

                {/* Mode + Package */}
                <div className="mt-6 grid grid-cols-2 gap-5">
                  <div>
                    <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                      Mode
                    </span>

                    <p className="mt-1 font-poppins text-xs text-[#222]">
                      {record.mode}
                    </p>
                  </div>

                  <div>
                    <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                      Package
                    </span>

                    <p className="mt-1 font-poppins text-xs text-[#222]">
                      {record.package}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="mt-5 border-t border-[#e1ded9] pt-5">
                  <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                    Role
                  </span>

                  <p className="mt-1 font-poppins text-xs leading-5 text-[#222]">
                    {record.role}
                  </p>
                </div>

                {/* Dates */}
                <div className="mt-5 grid grid-cols-2 gap-5 border-t border-[#e1ded9] pt-5">
                  <div>
                    <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                      Float Date
                    </span>

                    <p className="mt-1 font-poppins text-xs text-[#333]">
                      {record.floatDate}
                    </p>
                  </div>

                  <div>
                    <span className="font-poppins text-[9px] font-medium uppercase tracking-[0.15em] text-[#8d5552]">
                      Drive Date
                    </span>

                    <p className="mt-1 font-poppins text-xs text-[#333]">
                      {record.driveDate}
                    </p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="border-b border-[#d8d5d0] py-10 text-center font-poppins text-sm text-[#666]">
              No drives found.
            </div>
          )}
        </div>

        {/* CTA */}
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
