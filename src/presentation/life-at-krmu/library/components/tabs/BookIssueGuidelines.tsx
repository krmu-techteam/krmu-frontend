import { LibraryContentProps } from "@/features/life-at-krmu/library/types";
import { LibraryTabContent } from "../common/LibraryTabContent";

const BookIssueGuidelines = ({
  libraryContent,
}: {
  libraryContent?: LibraryContentProps;
}) => {
  if (!libraryContent?.bookIssueGuidelines) return null;

  const { tagLine, heading, description, bookIssueContents } =
    libraryContent.bookIssueGuidelines;

  return (
    <LibraryTabContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      items={bookIssueContents}
    />
  );
};

export default BookIssueGuidelines;
