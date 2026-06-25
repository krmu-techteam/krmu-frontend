import { StudentInterests, StudentWelfare } from "../components";
import { WellBeingAndInterestSectionProps } from "../types";

const WellBeingAndInterestSection = ({
  wellBeingAndInterestSection,
}: {
  wellBeingAndInterestSection: WellBeingAndInterestSectionProps;
}) => {
  const { studentwelfare, studentInterest } = wellBeingAndInterestSection;
  return (
    <section className="w-full">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/2 flex">
          <StudentWelfare {...studentwelfare} />
        </div>
        <div className="w-full lg:w-1/2 flex">
          <StudentInterests {...studentInterest} />
        </div>
      </div>
    </section>
  );
};
export default WellBeingAndInterestSection;
