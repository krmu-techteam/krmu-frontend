const feePoints = [
  "Total programme cost: ₹9,60,000 across 8 semesters (4 years).",
  "Apprenticeship stipends of ₹10,000–₹50,000/month during Semesters 6 & 8 help offset fees significantly.",
  "Scholarships and EMI options available.",
];

const eligibilityPoints = [
  "10+2 or equivalent from any recognised board",
  "Mathematics as a subject in the qualifying examination",
  "Minimum 50% aggregate marks (relaxation as per University norms)",
  "All streams welcome — Science, Commerce, Humanities",
];

const FeesSection = () => {
  return (
    <section
      className="relative py-14 sm:py-16 lg:py-24 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Hexagonal grid background */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url('/landingpage/bsc-finance-2026/dots-bg.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
        }}
      />

      {/* SVG hex pattern overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='115'%3E%3Cpolygon points='50,4 96,28 96,87 50,111 4,87 4,28' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "100px 115px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2
          className="m-0 mb-10 sm:mb-12 lg:mb-14 font-semibold italic text-center leading-[140%] tracking-[-0.02em]"
          style={{
            fontFamily: "'Libre Caslon Condensed', serif",
            fontSize: "clamp(28px, 5vw, 62px)",
          }}
        >
          <span className="text-[#DF3232]">Programme </span>
          <span className="text-white">Fees and Eligibility</span>
        </h2>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">

          {/* Left card — Fees */}
          <div className="flex flex-col gap-6 pr-0 lg:pr-10 pb-8 lg:pb-0">

            {/* Fee amount card */}
            <div
              className="rounded-2xl px-5 py-5 sm:px-6 sm:py-6 flex flex-col items-center gap-1.5 text-center"
              style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
            >
              <span
                className="text-white leading-none tracking-normal"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: "100%",
                }}
              >
                ₹1,20,000
              </span>
              <span
                className="text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0%",
                }}
              >
                Per semester (All Inclusive)
              </span>
            </div>

            {/* Fee bullet points */}
            <ul className="flex flex-col gap-3 m-0 pl-0 list-none">
              {feePoints.map((point, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span
                    className="shrink-0 mt-[9px] w-[5px] h-[5px] rounded-full"
                    style={{ background: "#FFFFFF" }}
                  />
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Finance partner logos */}
            <div className="flex flex-col gap-2 mt-2">
              <span
                className="font-medium text-[12px] leading-5 text-[#666666] uppercase tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Finance partners
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landingpage/bsc-finance-2026/finance-partners.png"
                alt="Finance partners: ICICI Bank, grayQuest, IDFC First Bank, Axis Bank, Kuhoo, propelld"
                className="w-full h-auto object-contain"
                style={{ maxWidth: "480px" }}
              />
            </div>
          </div>

          {/* Vertical dashed divider — desktop only */}

          {/* Right card — Eligibility */}
          <div className="flex flex-col pl-0 lg:pl-10">
            <div
              className="rounded-2xl px-6 pt-10 pb-6 sm:px-8 sm:pt-14 sm:pb-7 flex flex-col gap-4 justify-end"
              style={{
                background: "linear-gradient(63.44deg, #182230 16.72%, #475467 83.39%)",
              }}
            >
              <h3
                className="m-0 text-white tracking-normal"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  lineHeight: "38px",
                }}
              >
                Who can apply?
              </h3>

              <ul className="flex flex-col gap-4 m-0 pl-0 list-none">
                {eligibilityPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span
                      className="shrink-0 mt-[9px] w-[5px] h-[5px] rounded-full"
                      style={{ background: "#FFFFFF" }}
                    />
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0%",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom footer text */}
        <p
          className="m-0 mt-12 sm:mt-16 text-center text-white"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(15px, 2vw, 20px)",
            lineHeight: "30px",
            letterSpacing: "0%",
          }}
        >
          If you&apos;re curious about how money moves the world — this programme is for you.
        </p>

      </div>
    </section>
  );
};

export default FeesSection;
