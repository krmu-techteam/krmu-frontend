import Image from "next/image";
import { LibraryContentProps } from "@/features/life-at-krmu/library";
import { LibraryTabContent } from "../common/LibraryTabContent";

const FeedbackAndComplaints = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.feedbackAndComplaints) return null;
  const {
    tagLine,
    heading,
    description,
    feedbackAndComplaintsContents,
    imageUrl,
  } = libraryContent.feedbackAndComplaints;
  return (
    <div className="max-w-[1664px] mx-auto w-full libtabcontent flex flex-col lg:flex-row items-center gap-10">
      <LibraryTabContent
        tagLine={tagLine}
        heading={heading}
        description={description}
        items={feedbackAndComplaintsContents}
      />
      <div className="w-full lg:w-1/2">
        <Image src={imageUrl} width={540} height={768} alt="Overview" />
      </div>
    </div>
  );
};

export default FeedbackAndComplaints;
