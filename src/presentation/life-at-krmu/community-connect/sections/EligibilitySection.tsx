import { EligibilitySectionProps } from "@/features/life-at-krmu/community-connect";
import { EligibilityPoint } from "../components";

const EligibilitySection = ({
  eligibilitySection,
}: {
  eligibilitySection: EligibilitySectionProps;
}) => {
  const { joinCriteria, certificateCriteria } = eligibilitySection;
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(180deg,#051630 0%,#0060aa 100%)",
      }}
      className="py-[50px]"
    >
      <div className="max-w-[1530px] font-poppins mx-auto w-full px-6 md:px-8 xl:px-16">
        <div className="text-center text-white font-bold">
          <h3 className="mb-5">{joinCriteria?.heading}</h3>
        </div>
        <EligibilityPoint points={joinCriteria.points} />

        <div className="text-center text-white font-bold mt-5">
          <h3 className="mb-5">{certificateCriteria.heading}</h3>
        </div>
        <EligibilityPoint points={certificateCriteria.points} />
      </div>
    </section>
  );
};

export default EligibilitySection;
