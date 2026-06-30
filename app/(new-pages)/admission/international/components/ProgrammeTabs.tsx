"use client";

import { useState } from "react";
import { internationalAdmissionSchools } from "../constant";

export default function ProgrammeTabs() {
  const [active, setActive] = useState(0);

  const programmes = internationalAdmissionSchools[active]?.programmes ?? [];

  return (
    <section className="bg-[#F5F2EC]">
      <div className="overflow-hidden bg-[#F5F2EC] lg:flex">
        {/* ================= LEFT SIDEBAR ================= */}

        <aside className="bg-[#061B38] lg:w-[320px] xl:w-1/4 lg:shrink-0">
          {/* Mobile Tabs */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex w-max gap-3 p-4">
              {internationalAdmissionSchools.map((school, index) => (
                <button
                  key={school.id}
                  onClick={() => setActive(index)}
                  className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300
                      ${
                        active === index
                          ? "bg-[#E31B23] text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                >
                  {school.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Tabs */}

          <div className="hidden lg:block sticky top-24">
            <div className="flex flex-col gap-2 p-8">
              {internationalAdmissionSchools.map((school, index) => (
                <button
                  key={school.id}
                  onClick={() => setActive(index)}
                  className={`rounded-md px-5 py-3 text-left text-sm font-semibold leading-5 transition-all duration-300
                      ${
                        active === index
                          ? "bg-[#E31B23] text-white shadow"
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

        <div className="flex-1 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {programmes.length ? (
              programmes.map((programme, index) => (
                <div
                  key={index}
                  className="rounded-md border border-[#E5E2DC] bg-white p-4 transition hover:shadow-md"
                >
                  <h3 className="text-[15px] font-semibold leading-6 text-[#082240]">
                    {programme.title}

                    {programme.lateral && (
                      <span className="ml-1 text-[#E31B23]">(Lateral)</span>
                    )}
                  </h3>

                  <p className="mt-2 text-sm text-[#5D5D5D]">
                    - {programme.duration}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full flex h-40 items-center justify-center rounded-md border bg-white text-gray-500">
                No programmes available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
