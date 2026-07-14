import { LibraryContentProps } from "@/features/life-at-krmu/library/types";
import ReadingRoomCard from "../ReadingRoomCard";

const ReadingRoom = ({
  libraryContent,
}: {
  libraryContent: LibraryContentProps;
}) => {
  if (!libraryContent.readingRoom) return null;

  const { tagLine, heading, description, leftContents, rightContents } =
    libraryContent.readingRoom;
  return (
    <div className="libtabcontent font-poppins text-white">
      <p>{tagLine}</p>
      <br />
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className="flex flex-col lg:flex-row gap-5">
        <ReadingRoomCard contents={leftContents} />
        <ReadingRoomCard contents={rightContents} />
      </div>
    </div>
  );
};

export default ReadingRoom;
