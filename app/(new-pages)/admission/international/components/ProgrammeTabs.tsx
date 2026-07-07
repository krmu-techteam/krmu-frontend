"use client";

import { useRef, useState } from "react";
import { internationalAdmissionSchools } from "../constant";

export default function ProgrammeTabs() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const programmes = internationalAdmissionSchools[active]?.programmes ?? [];

  const handleTabClick = (index: number) => {
    setActive(index);

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      id="programmes"
      className="relative scroll-mt-24 bg-[#F5F2EC]"
    >
      {/* Left Background */}
      <div className="programtab-blue-div absolute inset-y-0 left-0 hidden w-[22%] bg-[#001732] lg:block 2xl:w-[50%]" />

      <div className="relative z-10 mx-auto flex max-w-[1486px] flex-col lg:flex-row">
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="bg-[#001732] sticky top-0 lg:h-fit lg:w-[320px] lg:flex-shrink-0 xl:w-[30%]">
          {/* Mobile Dropdown */}
          <div className="block p-4 lg:hidden">
            <label
              htmlFor="school-select"
              className="mb-2 block text-sm font-semibold text-white"
            >
              Choose Your School & Programme for dropdown
            </label>

            <select
              id="school-select"
              value={active}
              onChange={(e) => handleTabClick(Number(e.target.value))}
              className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-sm font-medium text-[#001732] outline-none transition focus:border-[#E31B23] focus:ring-2 focus:ring-[#E31B23]/20"
            >
              {internationalAdmissionSchools.map((school, index) => (
                <option key={school.id} value={index}>
                  {school.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className="flex flex-col gap-3 px-6 py-8">
              {internationalAdmissionSchools.map((school, index) => (
                <button
                  key={school.id}
                  onClick={() => handleTabClick(index)}
                  className={`rounded-md px-5 py-3 text-left font-roboto-condensed text-lg font-semibold transition-all duration-300 cursor-pointer ${
                    active === index
                      ? "bg-[#E31B23] text-white shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {school.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1 bg-[#F5F2EC] p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {programmes.length ? (
              programmes.map((programme, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[#E5E2DC] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-poppins text-base font-semibold leading-6 text-[#082240] sm:text-[17px]">
                    {programme.title}

                    {programme.lateral && (
                      <span className="ml-1 text-[#E31B23]">
                        (Lateral)
                      </span>
                    )}
                  </h3>

                  <p className="mt-3 text-sm text-[#5D5D5D]">
                    {programme.duration}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-[#E5E2DC] bg-white text-gray-500">
                No programmes available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}