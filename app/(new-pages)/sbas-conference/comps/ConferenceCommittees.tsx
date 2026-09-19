import Link from "next/link";
import { committees } from "../constant";

const ConferenceCommittees = () => {
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

            <Link
              href={committee.href}
              className="font-bold text-xs text-[#A9812F] hover:text-[#8f7025] transition-colors"
            >
              View All Members
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceCommittees;