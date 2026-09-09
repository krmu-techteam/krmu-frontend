"use client";

import { useMemo, useState } from "react";
import { PlacementRecords as records } from "../constant";

const INITIAL_RECORDS = 7;

const PlacementRecords = () => {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredRecords = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return records;
    }

    return records.filter((record) =>
      [
        record.name,
        record.course,
        record.category,
        record.role,
        record.ctc,
        record.company,
      ].some((value) => value.toLowerCase().includes(query)),
    );
  }, [search]);

  const visibleRecords = showAll
    ? filteredRecords
    : filteredRecords.slice(0, INITIAL_RECORDS);

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
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(false);
            }}
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
          {visibleRecords.map((record) => (
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
                  {record.name}
                </h3>

                <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed text-[#667085] max-w-sm">
                  {record.course}
                </p>
              </div>

              {/* Role */}
              <div className="flex flex-col justify-center">
                <span className="text-[9px] sm:text-[10px] md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#7A1F2B] mb-1">
                  {record.category}
                </span>

                <span className="text-xs sm:text-sm md:text-[15px] leading-snug text-black">
                  {record.role}
                </span>
              </div>

              {/* CTC */}
              <div className="flex flex-col justify-center">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#667085] md:hidden mb-1">
                  CTC
                </span>

                <span className="text-sm sm:text-base text-black">
                  {record.ctc}
                </span>
              </div>

              {/* Company */}
              <div className="col-span-2 md:col-span-1 flex flex-col justify-center md:items-end">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#667085] md:hidden mb-1">
                  Company
                </span>

                <span className="text-sm sm:text-base md:text-base font-medium text-black md:text-right">
                  {record.company}
                </span>
              </div>
            </div>
          ))}

          {/* No results */}
          {visibleRecords.length === 0 && (
            <div className="py-10 sm:py-12 text-center text-xs sm:text-sm text-[#667085]">
              No placement records found.
            </div>
          )}
        </div>

        {/* View All */}
        {filteredRecords.length > INITIAL_RECORDS && (
          <div className="flex justify-center mt-7 sm:mt-8">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
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
              {showAll ? "Show less" : "View all Records"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacementRecords;
