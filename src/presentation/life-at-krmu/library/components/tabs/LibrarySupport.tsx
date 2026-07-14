import { LibraryContentProps } from "@/features/life-at-krmu/library/types";
import { LibraryContent } from "../common/LibraryContent";

const LibrarySupport = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.librarySupport) return null;

  const { tagLine, heading, imageUrl } = libraryContent.librarySupport;
  return (
    <LibraryContent tagLine={tagLine} heading={heading} imageUrl={imageUrl} />
  );
};

export default LibrarySupport;
