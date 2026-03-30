import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { bscFinanceBrochureFileName } from "../content";
import { WhySectionData } from "../contentype";

interface WhySectionProps {
  data: WhySectionData;
}

const cardTitleClass =
  "m-0 font-semibold text-[15px] sm:text-[17px] lg:text-[18px] leading-[130%] tracking-[-0.02em] text-[#0061A6]";

const cardDescClass =
  "m-0 font-normal text-[13px] sm:text-[14px] leading-[22px] tracking-normal text-[#565656]";

const WhySection = ({ data }: WhySectionProps) => {
  return (
    <section
      className="py-14 sm:py-16 lg:py-20"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F3F7FB 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-12">

        {/* Heading */}
        <div className="flex flex-col gap-0">
          <h2
            className="m-0 font-semibold italic text-[34px] sm:text-[44px] lg:text-[62px] leading-[140%] tracking-[-0.02em] text-[#DF3232]"
            style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
          >
            {data.headingRed}
          </h2>
          <h2
            className="m-0 font-semibold italic text-[34px] sm:text-[44px] lg:text-[62px] leading-[140%] tracking-[-0.02em] text-[#1A1A1A]"
            style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
          >
            {data.headingDark}
          </h2>
        </div>

        {/* Feature grid
            Mobile  (1-col): stacked cards — bottom border between every card
            sm+     (3-col): right border between columns, bottom border between rows
        */}
        <div
          className="rounded-[4px] overflow-hidden"
          style={{ border: "2px solid #D1D1D1" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {data.features.map((card, idx) => {
              const isLastInRow = idx % 3 === 2;
              const isLastRow = idx >= 3;
              const isLastCard = idx === data.features.length - 1;

              const borderClasses = [
                // mobile: bottom divider for every card except the last
                !isLastCard ? "border-b-2 border-[#D1D1D1]" : "",
                // sm+: right divider for non-last column
                !isLastInRow ? "sm:border-r-2 sm:border-r-[#D1D1D1]" : "",
                // sm+: remove the mobile bottom border for second-row cards
                isLastRow ? "sm:border-b-0" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div
                  key={card.number}
                  className={`flex flex-col gap-3 p-5 sm:p-6 ${borderClasses}`}
                >
                  <span className="font-semibold text-[18px] sm:text-[20px] leading-[100%] tracking-normal text-[#DF3232]">
                    {card.number}
                  </span>
                  <p className={cardTitleClass}>{card.title}</p>
                  <p className={cardDescClass}>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA buttons — centred on mobile, left-aligned on sm+ */}
        <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start">
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

          <NpfPopup
            formId="047a23de933bd996c4c01578fad16790"
            btnClass="npfWidget-047a23de933bd996c4c01578fad16790 inline-flex items-center gap-2 px-5 py-[10px] rounded-lg bg-[#0060A7] text-white hover:bg-[#004f8c] font-semibold text-[14px] leading-5 tracking-normal transition-all duration-200"
            btnText={data.applyLabel}
          />
        </div>

      </div>
    </section>
  );
};

export default WhySection;
