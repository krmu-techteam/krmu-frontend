"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { trainingMatrix } from "../constant";

const TrainingMatrix = () => {
  const [activeSchool, setActiveSchool] = useState(trainingMatrix[0]);

  const currentIndex = trainingMatrix.findIndex(
    (school) => school.code === activeSchool.code,
  );

  const handlePrevious = () => {
    const previousIndex =
      currentIndex === 0 ? trainingMatrix.length - 1 : currentIndex - 1;

    setActiveSchool(trainingMatrix[previousIndex]);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === trainingMatrix.length - 1 ? 0 : currentIndex + 1;

    setActiveSchool(trainingMatrix[nextIndex]);
  };

  return (
    <section className="bg-[#fdfaf5] px-5 pb-10 xl:pb-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            className="
              font-newsreader
              text-3xl font-medium
              leading-none
              text-[#001836]
              sm:text-4xl
              md:text-5xl
              lg:text-[55px]
            "
          >
            Training matrix
          </h2>

          <span
            className="
              font-poppins
              text-xs font-medium
              uppercase
              tracking-[0.12em]
              text-[#555]
              sm:text-sm
              md:text-base
              lg:text-lg
              lg:tracking-[0.16em]
            "
          >
            By school, program & semester
          </span>
        </div>

        {/* School Tabs */}
        <div
          className="
            mt-7
            flex gap-1.5
            overflow-x-auto
            pb-2
            scrollbar-hide
            sm:mt-8
            md:mt-10
          "
        >
          {trainingMatrix.map((school) => {
            const isActive = school.code === activeSchool.code;

            return (
              <button
                key={school.code}
                type="button"
                onClick={() => setActiveSchool(school)}
                className={`
                  shrink-0
                  border
                  px-3 py-2.5
                  font-poppins
                  text-xs font-medium
                  uppercase
                  tracking-[0.1em]
                  transition-colors
                  sm:px-4 sm:py-3
                  sm:text-sm
                  sm:tracking-[0.15em]
                  md:text-base
                  lg:text-lg

                  ${
                    isActive
                      ? "border-[#0d2948] bg-[#0d2948] text-white"
                      : "border-[#d7d4cf] bg-transparent text-[#001836] hover:bg-[#f3f0eb]"
                  }
                `}
              >
                {school.code}
              </button>
            );
          })}
        </div>

        {/* School Header */}
        <div
          className="
            mt-3
            flex
            min-h-[58px]
            items-center
            justify-between
            gap-3
            bg-[#0d2948]
            px-4 py-3
            text-white
            sm:mt-4
            sm:px-5 sm:py-4
            md:px-6
          "
        >
          <h3
            className="
              min-w-0
              font-poppins
              text-[10px]
              font-medium
              uppercase
              leading-4
              tracking-[0.1em]
              sm:text-sm
              sm:tracking-[0.14em]
              md:text-base
              lg:text-lg
            "
          >
            {activeSchool.name} ({activeSchool.code})
          </h3>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <span
              className="
                mr-1
                font-poppins
                text-[10px]
                sm:mr-2
                sm:text-xs
              "
            >
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(trainingMatrix.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous school"
              className="
                flex h-8 w-8
                items-center justify-center
                border border-white/60
                transition-colors
                hover:bg-white hover:text-[#0d2948]
                sm:h-9 sm:w-9
              "
            >
              <ChevronLeft
                size={16}
                strokeWidth={1.5}
                className="sm:h-[18px] sm:w-[18px]"
              />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next school"
              className="
                flex h-8 w-8
                items-center justify-center
                border border-white/60
                transition-colors
                hover:bg-white hover:text-[#0d2948]
                sm:h-9 sm:w-9
              "
            >
              <ChevronRight
                size={16}
                strokeWidth={1.5}
                className="sm:h-[18px] sm:w-[18px]"
              />
            </button>
          </div>
        </div>

        {/* Matrix */}
        <div className="border-x border-b border-[#d8d5d0]">
          {activeSchool.programs.map((program, index) => (
            <div
              key={program.name}
              className={`
                grid
                gap-5
                px-4 py-5
                sm:gap-6
                sm:px-5 sm:py-6
                md:grid-cols-[220px_1fr]
                md:px-6 md:py-7
                lg:grid-cols-[280px_1fr]

                ${
                  index !== activeSchool.programs.length - 1
                    ? "border-b border-[#d8d5d0]"
                    : ""
                }
              `}
            >
              {/* Program */}
              <div className="min-w-0">
                <h4
                  className="
                    break-words
                    font-newsreader
                    text-xl font-semibold
                    uppercase
                    leading-tight
                    tracking-wide
                    text-[#111]
                    sm:text-[23px]
                    md:text-[25px]
                  "
                >
                  {program.name}
                </h4>
              </div>

              {/* Semesters */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-2
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {program.semesters.map((semester) => (
                  <div
                    key={`${program.name}-${semester.semester}`}
                    className="
                      min-w-0
                      border-t-2
                      border-[#8d5552]
                      bg-[#fbf9f5]
                      px-3 py-3
                      sm:px-3.5
                      sm:py-3.5
                    "
                  >
                    <span
                      className="
                        font-poppins
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.05em]
                        text-[#8d5552]
                        sm:text-xs
                      "
                    >
                      {semester.semester}
                    </span>

                    <div
                      className="
                        mt-1
                        break-words
                        font-poppins
                        text-[10px]
                        leading-[1.5]
                        text-[#222]
                        sm:text-[11px]
                      "
                    >
                      {semester.modules.map((module, moduleIndex) => (
                        <p key={moduleIndex}>
                          {moduleIndex + 1}. {module}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-3 flex items-start gap-2 sm:mt-4">
          <span className="mt-2 block h-px w-3 shrink-0 bg-[#8d5552] sm:w-4" />

          <p
            className="
              font-poppins
              text-[10px]
              leading-5
              text-[#222]
              sm:text-xs
            "
          >
            Each card marks a semester carrying a scheduled training module.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingMatrix;
