"use client";

import { useState } from "react";
import Image from "next/image";
import type { AcademicLeadership } from "@/features/about/academic-leadership";
import { STRAPI_URL } from "@/app/constant";

type AcademicLeaderDetailsProps = {
  leader: AcademicLeadership;
};

export const AcademicLeaderDetails = ({
  leader,
}: AcademicLeaderDetailsProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-t from-[#061623] from-40% to-[#0C385D] to-100% rounded-[4px] p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
            {leader.name}
          </h3>

          <h4 className="text-base md:text-lg text-brand-gold mt-3 font-semibold tracking-wide">
            {leader.designation}
          </h4>

          {leader.content && (
            <div className="relative mt-6">
              {/* Rich text container with forced background transparent & text white/slate */}
              <div
                className={`prose prose-invert max-w-none transition-all duration-500 ease-in-out text-slate-300 text-sm md:text-base leading-relaxed overflow-hidden !font-poppins ${
                  expanded
                    ? "max-h-[2000px]"
                    : "line-clamp-5 md:line-clamp-6 max-h-[114px] md:max-h-[156px]"
                } [&_*]:!bg-transparent [&_*]:!text-slate-300 [&_strong]:!text-white [&_b]:!text-white [&_a]:!text-[#00a2ff] [&_*]:!font-poppins`}
                dangerouslySetInnerHTML={{
                  __html: leader.content,
                }}
              />

              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-4 inline-flex font-poppins items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors group"
              >
                <span>{expanded ? "Read less" : "Read more"}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    expanded ? "rotate-180" : "group-hover:translate-y-0.5"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {leader.image && (
          <div className="w-full md:w-[350px] shrink-0 flex justify-center items-center">
            <div className="relative bg-gradient-to-t from-[#061623] from-40% to-[#0C385D] to-100% p-3 rounded-[4px] group">
              <div className="relative w-[280px] h-[360px] md:w-[300px] md:h-[400px] rounded-[4px] overflow-hidden ">
                <Image
                  src={`${STRAPI_URL}${leader.image}`}
                  fill
                  alt={leader.name}
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
