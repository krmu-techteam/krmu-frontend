import { LibraryContentProps } from "@/features/life-at-krmu/library/types";
import { LibraryTabContent } from "../common/LibraryTabContent";

const DigitalLibraryServices = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.digitalLibrary) return null;

  const { tagLine, heading, description, digitalLibraryContents } =
    libraryContent.digitalLibrary;
  return (
    <LibraryTabContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      items={digitalLibraryContents}
    />
  );
};

export default DigitalLibraryServices;
