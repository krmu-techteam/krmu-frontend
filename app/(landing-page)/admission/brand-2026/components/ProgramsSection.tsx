"use client";

import { useState, useMemo, useEffect } from "react";
import { programs, schools, levels, Program } from "./programsData";
import { Calendar, IndianRupee, ChevronDown, Search } from "lucide-react";

export default function ProgramsSection() {
  // Default selections
  const [selectedSchool, setSelectedSchool] =
    useState<string>("engineering-tech");
  const [selectedLevel, setSelectedLevel] = useState<string>("undergraduate");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isSchoolDropdownOpen, setIsSchoolDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);

  useEffect(() => {
    const handleGlobalClick = () => {
      setIsSchoolDropdownOpen(false);
      setIsLevelDropdownOpen(false);
    };
    window.addEventListener("click", handleGlobalClick);
    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

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
    const normalize = (text: string) =>
      text.toLowerCase().replace(/[\.\s]/g, "");
    const query = search.trim();
    const isSearching = query.length > 0;
    const normalizedQuery = normalize(query);

    return programs.filter((p) => {
      // When the user is searching, ignore school/level filters so the
      // search works globally across all schools and levels.
      if (isSearching) {
        return normalize(p.title).includes(normalizedQuery);
      }

      const matchSchool = selectedSchool ? p.category === selectedSchool : true;
      const matchLevel = selectedLevel ? p.level === selectedLevel : true;
      return matchSchool && matchLevel;
    });
  }, [selectedSchool, selectedLevel, search]);

  const totalCards = filteredPrograms.length;

  const currentSchoolLabel =
    schools.find((s) => s.value === selectedSchool)?.label || "Select School";
  const currentLevelLabel =
    levels.find((l) => l.value === selectedLevel)?.label || "Select Level";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1530px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-[#051630]">
          Transform Your Life{" "}
          <span className="text-[#cb000d]">with the Right Programme</span>
        </h2>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-10 bg-white rounded-sm md:rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-200/80 flex flex-col md:flex-row items-center p-2 md:p-1 gap-0 relative">
          {/* Custom School Dropdown */}
          <div className="relative w-full md:w-[45%] px-4 py-3 md:py-3.5 select-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSchoolDropdownOpen(!isSchoolDropdownOpen);
                setIsLevelDropdownOpen(false);
              }}
              className="flex items-center justify-between w-full text-sm md:text-base font-semibold text-gray-850 hover:text-red-650 transition-colors focus:outline-none cursor-pointer text-left"
            >
              <span className="truncate">{currentSchoolLabel}</span>
              <span className="text-[#cb000d] flex-shrink-0 ml-2">
                <ChevronDown
                  size={18}
                  strokeWidth={2.5}
                  className={`transition-transform duration-200 ${isSchoolDropdownOpen ? "rotate-180" : ""}`}
                />
              </span>
            </button>

            {isSchoolDropdownOpen && (
              <div className="absolute left-0 right-0 mt-2.5 md:mt-4 bg-white border border-gray-100 rounded-xs shadow-[0_10px_35px_rgba(0,0,0,0.12)] z-50 overflow-hidden max-h-64 overflow-y-auto py-1">
                {schools.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => {
                      setSelectedSchool(s.value);
                      setIsSchoolDropdownOpen(false);
                    }}
                    className={`w-full cursor-pointer text-left px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-150 block ${
                      selectedSchool === s.value
                        ? "bg-[#001732]/5 text-[#001732]"
                        : "text-gray-700 hover:bg-[#001732]/5 hover:text-[#001732]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block h-8 w-[1px] bg-gray-200"></div>
          <div className="block md:hidden w-full h-[1px] bg-gray-100"></div>

          {/* Custom Level Dropdown */}
          <div className="relative w-full md:w-[27%] px-4 md:px-6 py-3 md:py-3.5 select-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLevelDropdownOpen(!isLevelDropdownOpen);
                setIsSchoolDropdownOpen(false);
              }}
              className="flex items-center justify-between w-full text-sm md:text-base font-semibold text-gray-850 hover:text-red-650 transition-colors focus:outline-none cursor-pointer text-left"
            >
              <span className="truncate">{currentLevelLabel}</span>
              <span className="text-[#cb000d] flex-shrink-0 ml-2">
                <ChevronDown
                  size={18}
                  strokeWidth={2.5}
                  className={`transition-transform duration-200 ${isLevelDropdownOpen ? "rotate-180" : ""}`}
                />
              </span>
            </button>

            {isLevelDropdownOpen && (
              <div className="absolute left-0 right-0 mt-2.5 md:mt-4 bg-white border border-gray-100 rounded-xs shadow-[0_10px_35px_rgba(0,0,0,0.12)] z-50 overflow-hidden py-1">
                {levels.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => {
                      setSelectedLevel(l.value);
                      setIsLevelDropdownOpen(false);
                    }}
                    className={`w-full cursor-pointer text-left px-4 py-2.5 text-xs md:text-sm font-semibold transition-all duration-150 block ${
                      selectedLevel === l.value
                        ? "bg-[#001732]/5 text-[#001732]"
                        : "text-gray-700 hover:bg-[#001732]/5 hover:text-[#001732]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block h-8 w-[1px] bg-gray-200"></div>
          <div className="block md:hidden w-full h-[1px] bg-gray-100"></div>

          {/* Search Input */}
          <div className="relative w-full md:w-[28%] flex items-center px-4 md:px-6 py-3 md:py-3.5">
            <input
              type="text"
              placeholder="Search by Programme Name..."
              className="bg-transparent w-full text-sm md:text-base font-semibold text-gray-800 placeholder-gray-400 focus:outline-none pr-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute right-4 md:right-6 pointer-events-none text-[#cb000d]">
              <Search size={18} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
        >
          {filteredPrograms.map((prog: Program, index: number) => {
            // 4-column layout on desktop (lg)
            const cardsPerRow = 4;
            const rowIndex = Math.floor(index / cardsPerRow);
            const positionInRow = index % cardsPerRow;
            const cardsInThisRow = Math.min(
              cardsPerRow,
              totalCards - rowIndex * cardsPerRow,
            );

            // Determine desktop glow type: "left", "center", "right"
            let lgGlowType = "center";
            if (cardsInThisRow === 4) {
              if (positionInRow === 0) lgGlowType = "left";
              else if (positionInRow === 3) lgGlowType = "right";
              else lgGlowType = "center";
            } else if (cardsInThisRow === 3) {
              if (positionInRow === 0) lgGlowType = "left";
              else if (positionInRow === 1) lgGlowType = "center";
              else if (positionInRow === 2) lgGlowType = "right";
            } else if (cardsInThisRow === 2) {
              if (positionInRow === 0) lgGlowType = "left";
              else lgGlowType = "right";
            } else {
              lgGlowType = "center";
            }

            // 2-column layout on tablet (sm)
            const smPositionInRow = index % 2;
            const smGlowType = smPositionInRow === 0 ? "left" : "right";

            // Construct class names
            let glowClass =
              "left-[50%] -translate-x-1/2 -bottom-[240px] right-auto"; // base/mobile

            // Add tablet classes
            if (smGlowType === "left") {
              glowClass +=
                " sm:left-[-237px] sm:right-auto sm:translate-x-0 sm:-bottom-[183px]";
            } else {
              glowClass +=
                " sm:right-[-133px] sm:left-auto sm:translate-x-0 sm:-bottom-[201px]";
            }

            // Add desktop classes
            if (lgGlowType === "left") {
              glowClass +=
                " lg:left-[-237px] lg:right-auto lg:translate-x-0 lg:-bottom-[183px]";
            } else if (lgGlowType === "right") {
              glowClass +=
                " lg:right-[-133px] lg:left-auto lg:translate-x-0 lg:-bottom-[201px]";
            } else {
              glowClass +=
                " lg:left-[50%] lg:right-auto lg:-translate-x-1/2 lg:-bottom-[240px]";
            }

            const formattedFee = prog.fees.replace(/[₹\s\/-]/g, "").trim();

            return (
              <div
                key={prog.id}
                className="w-full rounded-xl bg-[#001732] group h-full font-semibold p-5 2xl:p-6 flex flex-col gap-4 justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] transition duration-300 ease-in-out hover:-translate-y-1 overflow-hidden relative min-h-[258px]"
              >
                <div
                  className={`absolute ${glowClass} h-[320px] w-[320px] rounded-full bg-gradient-to-br from-[#001732] via-[#59122E] to-[#63174C] blur-[30px] opacity-80 pointer-events-none z-0`}
                ></div>

                <div className="z-10 pr-10">
                  <h6 className="block w-full text-white text-base md:text-lg font-semibold leading-snug">
                    {prog.title}
                  </h6>
                </div>

                <div className="flex flex-col sm:flex-row border-y border-[rgba(255,255,255,0.2)] sm:gap-5 z-20">
                  <div className="w-fit flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
                    <span>
                      <Calendar size={20} />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-xs">Duration:</span>
                      <span className="text-xs">{prog.duration}</span>
                    </div>
                  </div>
                  <div className="w-fit flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
                    <span>
                      <IndianRupee size={20} />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-xs">
                        Programme Fee:
                      </span>
                      <span className="text-xs">
                        Rs. {formattedFee} / Year{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1.5 sm:gap-2.5 items-center pt-2.5 z-20">
                  <button
                    onClick={() => {
                      setSelectedProgram(prog);
                      setIsModalOpen(true);
                    }}
                    className="bg-white cursor-pointer text-sm text-[#001732] border border-[#999999] rounded-[5px] p-2.5 2xl:px-5 2xl:py-2.5 w-1/2 font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Fee Structure
                  </button>
                  <button
                    onClick={handleApplyClick}
                    className="bg-[#cb000d] block text-sm text-white text-center border border-[#cb000d] rounded-[5px] p-2.5 2xl:px-5 2xl:py-2.5 w-1/2 font-semibold hover:bg-red-700 transition-all relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No result */}
        {filteredPrograms.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            No programmes found.
          </p>
        )}
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
          <div className="bg-white text-gray-900 rounded-sm shadow-2xl w-full max-w-[680px] overflow-hidden relative z-10 transition-all duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Fee Structure</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors p-1.5 rounded-xs hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
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

              {/* Semester Fees if available */}
              {(selectedProgram.semester1 || selectedProgram.semester2) && (
                <div className="grid grid-cols-2 gap-4">
                  {selectedProgram.semester1 && (
                    <div className="bg-gray-50 p-4 rounded-xs">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                        Semester I
                      </p>
                      <p className="text-lg font-bold text-[#163c8c]">
                        {selectedProgram.semester1}
                      </p>
                    </div>
                  )}
                  {selectedProgram.semester2 && (
                    <div className="bg-gray-50 p-4 rounded-xs">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                        Semester II
                      </p>
                      <p className="text-lg font-bold text-[#163c8c]">
                        {selectedProgram.semester2}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Eligibility Criteria if available */}
              {selectedProgram.Eligibility && (
                <div className="bg-gray-50 p-4 rounded-xs">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                    Eligibility Criteria
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {selectedProgram.Eligibility}
                  </p>
                </div>
              )}

              <hr className="border-gray-100" />

              {/* Duration */}
              <div>
                <p className="text-base text-gray-700">
                  <span className="font-semibold text-gray-900">Duration:</span>{" "}
                  {selectedProgram.duration}
                </p>
              </div>

              {/* Apply Now button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    handleApplyClick();
                  }}
                  className="w-full bg-[#cb000d] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-sm shadow-lg hover:shadow-xl transition-all duration-200 text-center cursor-pointer"
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
