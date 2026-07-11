import { LibraryContentProps } from "../../types";
import { LibraryTabContent } from "../common/LibraryTabContent";

const RenewalStatus = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.renewalStatus) return null;
  const { tagLine, heading, description, renewalStatusContents } =
    libraryContent.renewalStatus;
  return (
    <LibraryTabContent
      tagLine={tagLine}
      heading={heading}
      description={description}
      items={renewalStatusContents}
    />
  );
};

export default RenewalStatus;
