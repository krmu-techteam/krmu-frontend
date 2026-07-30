"use client";

import React from "react";
import Image from "next/image";
import { studentMembers, getInitials } from "./data";

const StudentMembersGrid: React.FC = () => {
  return (
    <>
      {/* Top Gradient Divider Line */}
      <div className="w-full h-[1px] bg-[linear-gradient(90deg,#1A1A1A_0%,#FFFFFF_48.08%,#1A1A1A_100%)] opacity-80 mb-12" />

      {/* Section Title */}
      <h3 className="text-center font-semibold text-white text-xl sm:text-[22px] mb-8 tracking-wide font-sans">
        Student Members
      </h3>

      {/* 4-Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {studentMembers.map((member, index) => (
          <div key={index} className="flex items-center gap-4 py-2">
            {/* Circular Avatar / 2-Letter Initials */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#FFFFFF]/20 flex items-center justify-center bg-transparent">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full text-white font-normal text-lg flex items-center justify-center tracking-wider font-sans">
                  {getInitials(member.name)}
                </div>
              )}
            </div>

            {/* Info Column */}
            <div>
              <h4 className="text-white text-[14px] leading-tight">
                {member.name}
              </h4>
              {member.school && (
                <p className="text-white text-[14px] font-light mt-0.5">
                  {member.school}
                </p>
              )}
              {member.role && (
                <p className="text-white text-[14px] font-light">
                  {member.role}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentMembersGrid;
