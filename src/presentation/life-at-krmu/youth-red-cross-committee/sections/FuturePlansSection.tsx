import SectionDivider from "@/components/common/SectionDivider";
import { FuturePlansSectionProps } from "@/features/life-at-krmu/youth-red-cross-committee/types";

const FuturePlansSection = ({
  futurePlansSection,
}: {
  futurePlansSection: FuturePlansSectionProps;
}) => {
  const { heading, description, points } = futurePlansSection;
  return (
    <>
      <section className="relative py-8 md:py-12 xl:py-20 font-poppins text-white">
        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
          <h3 className="text-4xl font-bold mb-5">{heading}</h3>
          <p>{description}</p>
          <br />
          <ol className="list-decimal pl-10">
            {points?.map((point, idx) => {
              return <li key={idx}>{point}</li>;
            })}
          </ol>
        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default FuturePlansSection;
