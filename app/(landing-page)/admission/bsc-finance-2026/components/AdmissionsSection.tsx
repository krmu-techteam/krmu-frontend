import Image from "next/image";

const statRows = [
  [
    { heading: "NAAC A+", sub: "Accredited" },
    { heading: "UGC", sub: "Approved" },
    { heading: "No. 1", sub: "in Haryana (Times B-School Survey 2026)" },
    { heading: "35+ Acres", sub: "Green Campus" },
  ],
  [
    { heading: "800+", sub: "Recruiters" },
    { heading: "92%", sub: "Placement Record" },
    { heading: "56.6 LPA", sub: "Highest Package" },
    { heading: "700+", sub: "Faculty" },
  ],
  [
    { heading: "12,000+", sub: "Students" },
    { heading: "18,000+", sub: "Global Alumni" },
    { heading: "100+", sub: "Programmes" },
    { heading: "500+ MNCs", sub: "within 20 km" },
  ],
];

const featureRows = [
  [
    "GPS-enabled AC Campus Buses",
    "Global banks within driving distance",
    "International Exchange Programmes",
    "Sponsored Study Tours to UK Universities",
  ],
  [
    "Separate Hostel Facility",
    "Smart Classrooms",
    "Hi-Tech Labs",
    "Big 4 in Gurugram",
  ],
];

const AdmissionsSection = () => {
  return (
    <section
      id="admissions"
      className="relative overflow-hidden min-h-[900px] sm:min-h-[1050px] lg:min-h-[1320px]"
    >
      {/* Campus photo — full section background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landingpage/bsc-finance-2026/image12.png"
          alt=""
          aria-hidden={true}
          fill
          className="object-cover object-top"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Subtle gradient overlay — only at very top for text legibility, fades out quickly */}
      <div
        className="absolute top-0 left-0 right-0 z-[1]"
        style={{
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(116,159,210,0.55) 0%, rgba(116,159,210,0) 100%)",
        }}
      />

      {/* Content — ~15px narrower than 1200px; smaller cards on mobile + desktop */}
      <div className="relative z-10 px-3 pt-8 pb-8 sm:px-5 sm:pt-12 sm:pb-12 lg:px-6 lg:pt-16 lg:pb-20">
        <div className="mx-auto w-full max-w-[1185px]">
          {/* Heading — centered, Libre Caslon Condensed, white + dark */}
          <h2
            className="m-0 mb-6 font-semibold italic leading-[140%] tracking-[-0.02em] text-center sm:mb-8 lg:mb-10"
            style={{
              fontFamily: "'Libre Caslon Condensed', serif",
              fontSize: "clamp(22px, 4.5vw, 58px)",
            }}
          >
            <span className="text-white">K.R. Mangalam University · </span>
            <span className="text-[#111111]">Gurugram, Haryana</span>
          </h2>

          {/* Stat card rows — narrower cards, larger gaps */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {statRows.map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid grid-cols-2  justify-items-center gap-x-3 gap-y-3  sm:gap-y-5 lg:grid-cols-4 lg:gap-y-5"
              >
                {row.map((card) => (
                  <div
                    key={card.heading}
                    className="flex w-full max-w-[140px] min-w-0 flex-col items-center gap-0.5 rounded-lg bg-white px-2 py-2 text-center sm:max-w-[178px] sm:gap-1 sm:rounded-xl sm:px-3 sm:py-2.5 lg:max-w-[220px] lg:px-3 lg:py-3"
                  >
                    <span
                      className="font-semibold leading-tight tracking-normal text-[#0061A6] text-[15px] sm:text-[17px] lg:text-[20px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {card.heading}
                    </span>
                    <span
                      className="font-medium leading-snug tracking-normal text-[#344054] text-[11px] sm:text-[13px] lg:text-[14px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {card.sub}
                    </span>
                  </div>
                ))}
              </div>
            ))}

            {/* Feature text rows */}
            {featureRows.map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-3 sm:gap-x-5 sm:gap-y-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-5"
              >
                {row.map((text) => (
                  <div
                    key={text}
                    className="flex w-full max-w-[140px] min-w-0 items-center justify-center rounded-lg bg-white px-2 py-2 text-center sm:max-w-[178px] sm:rounded-xl sm:px-2.5 sm:py-2 lg:max-w-[220px] lg:px-3 lg:py-2.5"
                  >
                    <span
                      className="font-medium leading-snug tracking-normal text-[#344054] text-[11px] sm:text-[13px] lg:text-[14px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
