"use client";

import { useState } from "react";
import { committees } from "../constant";

type Committee = {
  title: string;
  members: string[];
};

const ConferenceCommittees = () => {
  const [selectedCommittee, setSelectedCommittee] =
    useState<Committee | null>(null);

  const closeModal = () => {
    setSelectedCommittee(null);
  };

  return (
    <section className="bg-[#ede9dd] pb-14 sm:pb-16 md:pb-20 xl:pb-24 px-5 sm:px-6 md:px-10 xl:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 xl:gap-x-6 xl:gap-y-10">
        {committees.map((committee) => (
          <div
            key={committee.title}
            className="bg-white w-full rounded-lg overflow-hidden border border-[#D1C9B8] space-y-2 p-5 sm:p-6"
          >
            <h5 className="font-bold font-lora text-base text-[#1c2822] leading-snug">
              {committee.title}
            </h5>

            <button
              type="button"
              onClick={() => setSelectedCommittee(committee)}
              className="font-bold text-xs text-[#A9812F] hover:text-[#8f7025] transition-colors cursor-pointer"
            >
              View All Members
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCommittee && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 py-8"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-5 px-5 sm:px-7 py-5 border-b border-[#D1C9B8]">
              <h3 className="font-lora font-bold text-xl sm:text-2xl text-[#1C2822]">
                {selectedCommittee.title}
              </h3>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="shrink-0 w-8 h-8 cursor-pointer flex items-center justify-center rounded-full bg-[#ede9dd] text-[#1C2822] text-lg hover:bg-[#D1C9B8] transition-colors"
              >
                ×
              </button>
            </div>

            {/* Members */}
            <div className="px-5 sm:px-7 py-6">
              <ol className="space-y-3 list-decimal list-outside ml-5">
                {selectedCommittee.members.map((member, index) => (
                  <li
                    key={`${member}-${index}`}
                    className="pl-2 text-sm sm:text-[15px] leading-6 text-[#37413D]"
                  >
                    {member}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConferenceCommittees;