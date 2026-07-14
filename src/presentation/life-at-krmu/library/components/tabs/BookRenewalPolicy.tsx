import { LibraryContentProps } from "@/features/life-at-krmu/library";
import { LibraryTabContent } from "../common/LibraryTabContent";

const BookRenewalPolicy = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.bookRenewalPolicy) return null;

  const { tagLine, heading, description, bookRenewalPolicyContents } =
    libraryContent.bookRenewalPolicy;
  return (
    <LibraryTabContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      items={bookRenewalPolicyContents}
    />
  );
};

export default BookRenewalPolicy;
