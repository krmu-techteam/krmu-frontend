import { Year } from "@/lib/types/school-programme";
import ProgrammeStructure from "../school-prog-global-comps/ProgrammeStructure";
import { ButtonType } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  programStruct: Year[];
  currbtn: ButtonType;
  currFormId: string;
  currFormContainerId: string;
  isYear: boolean;
};

const Curriculum = ({
  heading,
  highlight,
  desc,
  programStruct,
  currbtn,
  currFormId,
  currFormContainerId,
  isYear
}: Props) => {
  return (
    <>
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom_right,#f1f5ff,#f8fafc,#eef4ff)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/syllabus_8ed0ea61db.png"
          fill
          className="object-cover xl:object-top 2xl:object-center"
          alt="Curriculum Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-4  md:px-6 lg:px-16 xl:px-0 2xl:px-0">
        <ProgrammeStructure
          currbtn={currbtn}
          currFormContainerId={currFormContainerId}
          currFormId={currFormId}
          programStruct={programStruct}
          isYear={isYear}
          heading={heading}
          highlight={highlight}
        />
      </div>
    </section>
    </>
  );
};

export default Curriculum;
