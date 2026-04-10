"use client";

import { useState, useMemo } from "react";
import { programs, schools, levels, Program } from "./programsData";


export default function ProgramsSection() {
  // Default selections
  const [selectedSchool, setSelectedSchool] =
    useState<string>("engineering-tech");
  const [selectedLevel, setSelectedLevel] = useState<string>("undergraduate");
  const [search, setSearch] = useState("");

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const matchSchool = selectedSchool ? p.category === selectedSchool : true;

      const matchLevel = selectedLevel ? p.level === selectedLevel : true;

      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());

      return matchSchool && matchLevel && matchSearch;
    });
  }, [selectedSchool, selectedLevel, search]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Transform Your Life{" "}
          <span className="text-red-500">with the Right Programme</span>
        </h2>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* School Dropdown (no Select option) */}
          <select
            className="border rounded-lg px-4 py-3 w-full"
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
          >
            {schools.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>

          {/* Level Dropdown (no Select option) */}
          <select
            className="border rounded-lg px-4 py-3 w-full"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            {levels.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by Programme Name..."
            className="border rounded-lg px-4 py-3 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog: Program) => (
            <div
              key={prog.id}
              className="bg-[#163c8c] text-white rounded-xl p-6 relative shadow-lg flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <h3 className="text-lg font-semibold mb-3 leading-snug">
                  {prog.title}
                </h3>

                <p className="text-sm mb-1">
                  <strong>Duration:</strong> {prog.duration}
                </p>

                {/* <p className="text-sm">
                  <strong>Fees:</strong> {prog.fees}
                </p> */}
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-4 right-4 opacity-40">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-white rounded-full block"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No result */}
        {filteredPrograms.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            No programmes found.
          </p>
        )}

        {/* <p className="text-right text-sm mt-6 text-gray-500">
          ** Subject to Approval
        </p> */}
      </div>
    </section>
  );
}
