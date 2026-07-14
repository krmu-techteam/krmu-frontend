import { LibraryContentProps } from "@/features/life-at-krmu/library/types";
import { LibraryContent } from "../common/LibraryContent";

const HelpAndSupport = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.helpAndSupport) return null;

  const { tagLine, heading, description, imageUrl } =
    libraryContent.helpAndSupport;

  return (
    <LibraryContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      imageUrl={imageUrl}
    />
  );
};

export default HelpAndSupport;
