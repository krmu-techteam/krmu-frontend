import { LibraryContentProps } from "../../types";
import { LibraryContent } from "../common/LibraryContent";

const FeedbackRequest = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  const { tagLine, heading, imageUrl } = libraryContent.feedbackRequest;
  return (
    <LibraryContent tagLine={tagLine} heading={heading} imageUrl={imageUrl} />
  );
};

export default FeedbackRequest;
