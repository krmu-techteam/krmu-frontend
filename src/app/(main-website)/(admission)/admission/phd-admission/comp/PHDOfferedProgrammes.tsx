import {
  EvenOddSemCard,
  PhdProgrammeSchools,
} from "@/lib/types/admissionenroll";
import OfferedProgrammeCard from "./OfferedProgrammeCard";
import SemesterCall from "./SemesterCall";

type Props = {
  heading: string;
  offeredSchools: PhdProgrammeSchools;
  evenOddCards: EvenOddSemCard[];
};

const PHDOfferedProgrammes = ({
  heading,
  offeredSchools,
  evenOddCards,
}: Props) => {
  const offeredSchoolsData = offeredSchools?.offered_schools;

  return (
    <section className="py-10 md:py-[60px]  bg-[url(/admission/phd-bg.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <h2
          className="text-white text-3xl md:text-[64px] font-semibold text-center leading-[1.2]"
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5">
          {offeredSchoolsData &&
            offeredSchoolsData?.map((school, i) => {
              return (
                <OfferedProgrammeCard
                  key={i}
                  heading={school?.heading}
                  content={school?.content}
                  url={school?.url}
                  imgUrl={school?.school_img?.url}
                />
              );
            })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-5 mt-10 md:my-20">
          {evenOddCards &&
            evenOddCards?.map((card, i) => {
              return (
                <SemesterCall key={i} heading={card?.title} url={card?.url} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PHDOfferedProgrammes;
