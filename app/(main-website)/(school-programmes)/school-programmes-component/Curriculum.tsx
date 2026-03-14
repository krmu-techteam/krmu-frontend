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
      <section className="pt-10">
        <div className="max-w-[1320px] mx-auto w-full">
          <div className="common-prog-container">
            <h2 className="heading">
              {heading} <span className="prog-highlight-text">{highlight}</span>
            </h2>
            <p className="sub-heading">{desc}</p>
          </div>
          <ProgrammeStructure
            currbtn={currbtn}
            currFormContainerId={currFormContainerId}
            currFormId={currFormId}
            programStruct={programStruct}
            isYear={isYear}
          />
        </div>
      </section>
    </>
  );
};

export default Curriculum;
