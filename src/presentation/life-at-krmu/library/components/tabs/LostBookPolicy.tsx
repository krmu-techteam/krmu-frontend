import { LibraryContentProps } from "@/features/life-at-krmu/library/types";
import { LibraryTabContent } from "../common/LibraryTabContent";

const LostBookPolicy = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.lostBookPolicy) return null;
  const { tagLine, heading, description, lostBookPolicyContents } =
    libraryContent?.lostBookPolicy;
  return (
    <LibraryTabContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      items={lostBookPolicyContents}
    />
  );
};

export default LostBookPolicy;
