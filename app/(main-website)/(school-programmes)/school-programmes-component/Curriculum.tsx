import { Year } from "@/lib/types/school-programme";
import ProgrammeStructure from "../school-prog-global-comps/ProgrammeStructure";
import { ButtonType } from "@/lib/types/common";

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
      <section className="pt-12 pb-0 bg-gray-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
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
