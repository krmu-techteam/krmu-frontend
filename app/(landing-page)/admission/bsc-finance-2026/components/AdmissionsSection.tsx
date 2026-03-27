const statRows = [
  [
    { heading: "NAAC A+", sub: "Accredited" },
    { heading: "UGC", sub: "Approved" },
    { heading: "No. 1", sub: "in Haryana (Times B-School Survey 2026)" },
    { heading: "28+ Acres", sub: "Green Campus" },
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
    <section className="relative overflow-hidden" style={{ minHeight: "1100px" }}>

      {/* Campus image — full section background, tall enough for text to sit over sky/clouds */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/landingpage/bsc-finance-2026/apply-bg.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
          style={{ display: "block" }}
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

      {/* Content — heading + cards on top of image (over sky/cloud area) */}
      <div className="relative z-10 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">

          {/* Heading — centered, Libre Caslon Condensed, white + dark */}
          <h2
            className="m-0 mb-8 sm:mb-10 font-semibold italic leading-[140%] tracking-[-0.02em] text-center"
            style={{
              fontFamily: "'Libre Caslon Condensed', serif",
              fontSize: "clamp(28px, 5vw, 62px)",
            }}
          >
            <span className="text-white">KR Mangalam University · </span>
            <span className="text-[#111111]">Gurugram, Haryana</span>
          </h2>

          {/* Stat card rows */}
          <div className="flex flex-col gap-3">
            {statRows.map((row, rIdx) => (
              <div key={rIdx} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {row.map((card) => (
                  <div
                    key={card.heading}
                    className="bg-white rounded-xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col items-center gap-1 text-center"
                  >
                    <span
                      className="font-semibold text-[18px] sm:text-[22px] lg:text-[24px] leading-8 text-[#0061A6] tracking-normal"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {card.heading}
                    </span>
                    <span
                      className="font-medium text-[13px] sm:text-[16px] leading-6 text-[#344054] tracking-normal"
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
              <div key={rIdx} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {row.map((text) => (
                  <div
                    key={text}
                    className="bg-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-center text-center"
                  >
                    <span
                      className="font-medium text-[13px] sm:text-[16px] leading-6 text-[#344054] tracking-normal"
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
