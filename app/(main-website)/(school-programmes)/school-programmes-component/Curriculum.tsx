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
    <section className="relative py-8 md:py-16 overflow-hidden bg-[#051630]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/curriculum-s.jpeg"
          fill
          className="object-cover object-top opacity-100"
          alt="Curriculum Background"
          priority
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div>
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
