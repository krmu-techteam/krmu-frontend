import { ImpactingLivesSectionProps } from "../types";

const ImpactingLivesSection = ({
  impactingLivesSection,
}: {
  impactingLivesSection: ImpactingLivesSectionProps;
}) => {
  const { tagLine, heading, description, cards } = impactingLivesSection;
  return (
    <div className="bg-[url(/gradient-3.webp)] font-poppins bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-20">
      <div className="max-w-[1690px] mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-24 items-center lg:items-start overflow-hidden">
        <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
          <h4 className="text-lg md:text-2xl font-medium text-white/80 uppercase tracking-wide mb-3">
            {tagLine}
          </h4>
          <h3 className="text-3xl md:text-6xl xl:text-7xl font-bold leading-tight mb-8">
            {heading}
          </h3>
          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
            {description?.map((item, idx) => (
              <p
                key={idx}
                className="text-lg md:text-xl font-semibold leading-relaxed"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col xl:flex-row gap-10 impactinglivescard">
            {cards.length > 0 &&
              cards?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full xl:w-1/3 text-white p-4 md:p-8 rounded-sm flex flex-col h-full"
                    style={{
                      background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.12) 100%)`,
                    }}
                  >
                    <h5 className="text-[26px] font-semibold leading-[1.12] mb-6">
                      {item?.title}
                    </h5>
                    <ul className="list-disc pl-0 md:pl-5 space-y-3">
                      {item?.points?.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactingLivesSection;
