import { bscFinanceBrochureFileName } from "../content";
import { ApprenticeshipSectionData } from "../contentype";

interface ApprenticeshipSectionProps {
  data: ApprenticeshipSectionData;
}

const headingClass =
  "m-0 font-semibold italic text-[34px] sm:text-[44px] lg:text-[62px] leading-[140%] tracking-[-0.02em] text-center";

const headingFont = { fontFamily: "'Libre Caslon Condensed', serif" };

const ApprenticeshipSection = ({ data }: ApprenticeshipSectionProps) => {
  return (
    <section id="apprenticeship" className="bg-white overflow-hidden">

      {/* Outer container — grid bg is constrained to this max-width */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">

        {/* Subtle grid pattern — stays within the 1200px container */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            backgroundPosition: "40px 40px",
          }}
        />

        {/* All content above the grid */}
        <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-12">

          {/* Heading */}
          <div className="flex flex-col items-center text-center gap-0">
            <h2
              className={`${headingClass} text-[#111827]`}
              style={headingFont}
            >
              {data.headingLine1}
            </h2>
            <h2 className={`${headingClass} text-[#111827]`} style={headingFont}>
              {data.headingLine2Start}
              <span className="text-[#DF3232]" style={headingFont}>
                {data.headingLine2Highlight}
              </span>
              {data.headingLine2End}
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center text-center gap-4 max-w-[900px] w-full">
            {data.descriptionLines.map((line, idx) => (
              <p
                key={idx}
                className="m-0 font-normal text-[16px] leading-6 tracking-normal text-[#344054] text-center"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Stint cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {data.stints.map((stint, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-4 rounded-2xl px-6 py-7 sm:px-8 sm:py-8"
                style={{
                  background: "linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)",
                  border: "1px solid #ECEFF1",
                }}
              >
                {/* Badge */}
                <span
                  className="inline-flex items-center justify-center h-7 px-4 rounded-full font-semibold text-[12px] tracking-[0.04em] uppercase text-[#1570EF] bg-[#EFF8FF]"
                  style={{ border: "1px solid #B2DDFF" }}
                >
                  {stint.badge}
                </span>

                {/* Duration */}
                <p
                  className="m-0 font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[100%] tracking-[-0.02em] text-[#0061A6] text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stint.duration}
                </p>

                {/* Description */}
                <p className="m-0 font-normal text-[14px] sm:text-[16px] leading-[26px] tracking-normal text-[#565656] text-center">
                  {stint.description}
                </p>

                {/* Stipend */}
                <p
                  className="m-0 font-semibold text-[20px] sm:text-[24px] leading-[100%] tracking-normal text-[#111111] text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stint.stipend}
                </p>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="m-0 font-normal text-[14px] leading-[26px] tracking-normal text-[#565656] text-center max-w-[900px] w-full">
            {data.footnote}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <a
              href={data.brochureHref}
              download={bscFinanceBrochureFileName}
              className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg border border-[#D1D1D1] bg-white text-[#344054] hover:bg-gray-50 font-semibold text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
            >
              {data.brochureLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12l4 4 4-4" />
              </svg>
            </a>

            <a
              href={data.applyHref}
              className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg bg-[#0060A7] text-white hover:bg-[#004f8c] font-semibold text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
            >
              {data.applyLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApprenticeshipSection;
