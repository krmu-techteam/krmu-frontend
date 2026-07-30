"use client";

import React from "react";
import Image from "next/image";
import { committeeMembers, getInitials, Member } from "./data";

const StandingCommittee: React.FC = () => {
  // Group committee members into rows of 3
  const memberRows: Member[][] = [];
  for (let i = 0; i < committeeMembers.length; i += 3) {
    memberRows.push(committeeMembers.slice(i, i + 3));
  }

  return (
    <div className="pt-6">
      {/* Top Gradient Divider Line */}
      <div className="w-full h-[1px] bg-[linear-gradient(90deg,#1A1A1A_0%,#FFFFFF_48.08%,#1A1A1A_100%)] opacity-80 mb-10" />

      {/* Section Title & Subtitle */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white text-center font-bold mb-4">
        Sustainable Standing Committee
      </h2>
      <p className="text-gray-300 text-xs sm:text-sm text-center font-light max-w-3xl mx-auto mb-10 leading-relaxed">
        The university has institutional committees for sustainability-related
        initiatives, supported through the Centre of Excellence and SDG
        activities.
      </p>

      <h3 className="text-center font-bold text-white text-base sm:text-lg mb-12 tracking-wide font-sans">
        Members of Sustainable Standing Committee
      </h3>

      {/* 3-Column Members Grid with Full-Height Unbroken Vertical Lines & Horizontal Dividers */}
      <div className="relative">
        {/* Continuous Unbroken Vertical Lines (Visible on lg screens) */}
        <div className="hidden lg:block absolute inset-y-0 left-1/3 border-r border-white/15 pointer-events-none z-0" />
        <div className="hidden lg:block absolute inset-y-0 left-2/3 border-r border-white/15 pointer-events-none z-0" />

        {/* Grid Rows */}
        <div className="relative z-10 space-y-8">
          {memberRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 ${
                rowIndex < memberRows.length - 1
                  ? "border-b border-white/15 pb-8"
                  : ""
              }`}
            >
              {row.map((member, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 py-2 ${
                    index === 0
                      ? "lg:pr-8"
                      : index === 1
                        ? "lg:px-8"
                        : "lg:pl-8"
                  }`}
                >
                  {/* Circular Avatar / 2-Letter Initials */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-white/20 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full text-white bg-transparent font-bold text-lg flex items-center justify-center tracking-wider font-sans">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>

                  {/* Info Column */}
                  <div>
                    <h4 className="text-white font-bold text-[14px] sm:text-[16px]">
                      {member.name}
                    </h4>
                    {member.school && (
                      <p className="text-white/90 text-[14px] font-light">
                        {member.school}
                      </p>
                    )}
                    {member.role && (
                      <p className="text-white/80 text-[14px] font-light">
                        {member.role}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandingCommittee;
