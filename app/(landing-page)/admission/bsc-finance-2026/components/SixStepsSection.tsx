import { SixStepsSectionData } from "../contentype";

interface SixStepsSectionProps {
  data: SixStepsSectionData;
}

const SixStepsSection = ({ data }: SixStepsSectionProps) => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-24"
      style={{ background: "linear-gradient(360deg, #FFFFFF 0%, #F3F5F7 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-start">

          {/* Left — heading + CTA buttons */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:sticky lg:top-24">

            {/* Heading */}
            <h2
              className="m-0 font-semibold italic leading-[140%] tracking-[-0.02em]"
              style={{
                fontFamily: "'Libre Caslon Condensed', serif",
                fontSize: "clamp(32px, 5vw, 62px)",
              }}
            >
              <span className="block text-[#DF3232]">{data.headingRed}</span>
              <span className="block text-[#111111]">{data.headingDark}</span>
            </h2>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={data.brochureHref}
                download
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

          {/* Right — 6-step vertical timeline */}
          <div className="flex flex-col">
            {data.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6">

                {/* Rail: red dot + gray connecting line */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="mt-[12px] w-3 h-3 rounded-full shrink-0"
                    style={{ background: "#DF3232" }}
                  />
                  {idx < data.steps.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{ background: "#D1D5DB" }}
                    />
                  )}
                </div>

                {/* Step content */}
                <div
                  className={`flex flex-col gap-1 ${idx < data.steps.length - 1 ? "pb-7 sm:pb-9" : "pb-0"
                    }`}
                >
                  <h3
                    className="m-0 font-semibold text-[18px] sm:text-[20px] lg:text-[24px] leading-8 tracking-normal text-[#101828]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  {step.subtitleHref ? (
                    <a
                      href={step.subtitleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-0 font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-6 tracking-normal text-[#344054] underline decoration-solid underline-offset-2 hover:text-[#0060A7] transition-colors duration-150"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {step.subtitle}
                    </a>
                  ) : (
                    <p
                      className="m-0 font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-6 tracking-normal text-[#344054]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {step.subtitle}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SixStepsSection;
