import { LibraryContentProps } from "@/features/life-at-krmu/library/types";
import { LibraryTabContent } from "../common/LibraryTabContent";

const DamagedBookPolicy = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.damagedBookPolicy) return null;
  const { tagLine, heading, description, damagedBookPolicyContents } =
    libraryContent?.damagedBookPolicy;
  return (
    <LibraryTabContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      items={damagedBookPolicyContents}
    />
  );
};

export default DamagedBookPolicy;
