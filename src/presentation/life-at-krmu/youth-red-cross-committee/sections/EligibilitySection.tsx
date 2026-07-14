import { Check } from "lucide-react";
import { EligibilitySectionProps } from "@/features/life-at-krmu/youth-red-cross-committee/types";

const EligibilitySection = ({
  eligibilitySection,
}: {
  eligibilitySection: EligibilitySectionProps;
}) => {
  const { heading, points } = eligibilitySection;
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(180deg,#051630 0%,#0060aa 100%)",
      }}
      className="py-8 md:py-12 xl:py-20"
    >
      <div className="max-w-[1530px] font-poppins mx-auto w-full px-6 md:px-7 xl:px-16">
        <div className="text-center text-white font-bold">
          <h3 className="mb-5">{heading}</h3>
        </div>
        <div>
          <ul className="text-white">
            {points?.map((point, idx) => {
              return (
                <li key={idx} className="flex items-center gap-3 py-1">
                  <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                    <Check color="#ffffff" strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
