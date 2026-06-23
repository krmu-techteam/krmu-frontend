import { ResearchCenterRow } from "../components";
import { ResearchCentersSectionProps } from "../types";

const ResearchCentersSection = ({
  researchCentersSection,
}: {
  researchCentersSection: ResearchCentersSectionProps;
}) => {
  const { researchCenters } = researchCentersSection;
  return (
    <section className="py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16">
        <div className="overflow-x-auto rounded-sm font-poppins text-white border border-gray-400 shadow-sm">
          <table className="w-full">
            <tbody>
              {researchCenters.length > 0 &&
                researchCenters?.map((researchCenter, idx) => {
                  return (
                    <ResearchCenterRow
                      key={idx}
                      idx={idx}
                      researchCenter={researchCenter}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ResearchCentersSection;
