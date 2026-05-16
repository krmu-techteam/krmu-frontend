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
    <section className="relative py-8 md:py-0 overflow-hidden bg-[linear-gradient(to_bottom_right,#f1f5ff,#f8fafc,#eef4ff)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/syllabus_8ed0ea61db.png"
          fill
          className="object-cover"
          alt="Curriculum Background"
          priority
        />
        {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div> */}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full md:px-8">
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
