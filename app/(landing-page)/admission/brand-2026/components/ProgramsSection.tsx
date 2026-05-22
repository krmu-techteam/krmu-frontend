"use client";

import { useState, useMemo, useEffect } from "react";
import { programs, schools, levels, Program } from "./programsData";

export default function ProgramsSection() {
  // Default selections
  const [selectedSchool, setSelectedSchool] =
    useState<string>("engineering-tech");
  const [selectedLevel, setSelectedLevel] = useState<string>("undergraduate");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleApplyClick = () => {
    const el = document.getElementById("apply-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              className="bg-[#163c8c] text-white rounded-xl p-6 relative shadow-lg flex flex-col justify-between min-h-[220px]"
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

              <div className="mt-5 flex gap-2.5 z-10 relative">
                <button
                  onClick={() => {
                    setSelectedProgram(prog);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 border border-white text-white hover:bg-white hover:text-[#163c8c] font-semibold py-2 px-3 text-xs md:text-sm rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Fee Structure
                </button>
                <button
                  onClick={handleApplyClick}
                  className="flex-1 bg-[#e31e24] hover:bg-red-700 text-white font-semibold py-2 px-3 text-xs md:text-sm rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none z-0">
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

      {/* Modal */}
      {isModalOpen && selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative z-10 transition-all duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Fee Structure</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Fee amount */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  PROGRAMME FEE PER YEAR
                </span>
                <span className="text-2xl md:text-3xl font-extrabold text-[#163c8c]">
                  {selectedProgram.fees || "N/A"}
                </span>
              </div>

              <hr className="border-gray-100" />

              {/* Duration */}
              <div>
                <p className="text-base text-gray-700">
                  <span className="font-semibold text-gray-900">Duration:</span> {selectedProgram.duration}
                </p>
              </div>



              {/* Apply Now button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    handleApplyClick();
                  }}
                  className="w-full bg-[#e31e24] hover:bg-[#c9181d] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
