import Image from "next/image";
import { LibraryContentProps } from "@/features/life-at-krmu/library";
import { LibraryTabContent } from "../common/LibraryTabContent";

const PromptCorrection = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.promptCorrection) return null;
  const { tagLine, heading, description, promptCorrectionContents } =
    libraryContent.promptCorrection;
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row items-center gap-10">
      <LibraryTabContent
        tagLine={tagLine}
        heading={heading}
        description={description}
        items={promptCorrectionContents}
      />
      <div className="w-full lg:w-1/2">
        <Image
          src="/library/liabrary.webp"
          width={540}
          height={768}
          alt="Overview"
        />
      </div>
    </div>
  );
};

export default PromptCorrection;
