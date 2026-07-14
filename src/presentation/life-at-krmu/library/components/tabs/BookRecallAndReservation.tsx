import { LibraryContentProps } from "@/features/life-at-krmu/library";
import { LibraryTabContent } from "../common/LibraryTabContent";

const BookRecallAndReservation = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.bookRecallAndReservation) return null;

  const { tagLine, heading, description, bookRecallAndReservationContents } =
    libraryContent.bookRecallAndReservation;

  return (
    <LibraryTabContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      items={bookRecallAndReservationContents}
    />
  );
};

export default BookRecallAndReservation;
