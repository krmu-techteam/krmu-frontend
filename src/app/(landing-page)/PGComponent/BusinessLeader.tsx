import { BusinessLeaderContent, ProgramCardType } from "../admission/PGType";
import SemesterTabs from "./SemesterTabs";

type Props = {
  data: BusinessLeaderContent;
  progData: ProgramCardType;
};

const BusinessLeader = ({ data, progData }: Props) => {
  return (
    <section className="pt-12 pb-20 sm:py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-[1000px] mx-auto w-full text-center mb-12">
        <h3
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003fa1] mb-5"
          dangerouslySetInnerHTML={{
            __html: data?.sectionTitle,
          }}
        />

        <p className="text-[#636464] text-base sm:text-lg">
          {data?.sectionDescription}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto w-full">
        <SemesterTabs semesters={data?.semesters} progData={progData} />
      </div>
    </section>
  );
};

export default BusinessLeader;
