"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Vibha Thakur",
    designation: "Director - Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
    image: "/images/team/vibha-thakur.jpg",
  },
  {
    name: "Jharna Jagtiani",
    designation: "Senior Manager",
    email: "jharna.vijay.jagtiani@krmangalam.edu.in",
    image: "/images/team/jharna-jagtiani.jpg",
  },
  {
    name: "Charu Gola",
    designation: "Assistant Manager- CDC",
    email: "charu.gola@krmangalam.edu.in",
    image: "/images/team/charu-gola.jpg",
  },
  {
    name: "Sreejita Saha",
    designation: "Assistant- Career Development Centre",
    email: "sreejita.saha@krmangalam.edu.in",
    image: "/images/team/sreejita-saha.jpg",
  },
];

const MeetCDCTeam = () => {
  return (
    <section className="overflow-hidden bg-[#f8f5f0] py-12 md:py-14">
      <div className="mx-auto max-w-[1160px] px-5 md:px-8">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="font-newsreader text-[38px] leading-none text-[#172a42] sm:text-[44px] md:text-[48px]">
            Meet the CDC team
          </h2>

          <p className="text-sm text-[#3f464d]">
            Guiding students from enrollment to employment.
          </p>
        </div>

        {/* Team */}
        <div className="relative mt-12">
          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
            {teamMembers.map((member) => (
              <div key={member.name}>
                {/* Image */}
                <div className="relative aspect-[0.97/1] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="font-newsreader text-[19px] font-semibold text-[#20262c]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-[#3e4349]">
                    {member.designation}
                  </p>

                  <a
                    href={`mailto:${member.email}`}
                    className="mt-1.5 block text-[11px] text-[#3e4349] hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCDCTeam;
