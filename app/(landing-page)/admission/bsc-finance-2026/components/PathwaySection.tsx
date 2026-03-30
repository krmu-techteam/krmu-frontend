import { bscFinanceBrochureFileName } from "../content";
import { PathwaySectionData } from "../contentype";

interface PathwaySectionProps {
  data: PathwaySectionData;
}

const PathwaySection = ({ data }: PathwaySectionProps) => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-start">

          {/* Left — heading + degree pathway + CTA */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Heading */}
            <h2
              className="m-0 font-semibold italic text-[32px] sm:text-[44px] lg:text-[54px] xl:text-[62px] leading-[140%] tracking-[-0.02em]"
              style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
            >
              <span className="block text-[#DF3232]">{data.headingRed}</span>
              <span className="block text-[#111111]">{data.headingDark}</span>
            </h2>

            {/* Degree pathway */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <p
                className="m-0 font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal uppercase text-[#000000]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {data.pathwayLabel}
              </p>

              <div className="flex flex-col gap-3 sm:gap-4">
                {data.pathwayItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <p
                      className="m-0 font-bold text-[15px] sm:text-[16px] leading-6 tracking-normal text-[#111111]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="m-0 font-normal text-[13px] sm:text-[14px] leading-5 tracking-normal text-[#475467]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={data.brochureHref}
                download={bscFinanceBrochureFileName}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg border border-[#D1D1D1] bg-white text-[#344054] hover:bg-gray-50 font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
                style={{ fontFamily: "Inter, sans-serif" }}
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
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg bg-[#0060A7] text-white hover:bg-[#004f8c] font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
                style={{ fontFamily: "Inter, sans-serif" }}
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

          {/* Right — vertical timeline */}
          <div className="flex flex-col">
            {data.timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6">

                {/* Rail: dot + vertical line */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Red solid dot — aligned with year label, pushed down slightly */}
                  <div
                    className="mt-[10px] w-3 h-3 rounded-full shrink-0"
                    style={{ background: "#DF3232" }}
                  />
                  {/* Connecting gray line — fills space between items, hidden on last */}
                  {idx < data.timeline.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{ background: "#D1D5DB" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-1 ${idx < data.timeline.length - 1 ? "pb-8 sm:pb-10" : "pb-0"}`}>
                  <span
                    className="font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal text-[#DF3232]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="m-0 font-semibold text-[20px] sm:text-[24px] leading-7 sm:leading-8 tracking-normal text-[#101828]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="m-0 font-normal text-[14px] sm:text-[16px] leading-6 tracking-normal text-[#344054]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PathwaySection;
