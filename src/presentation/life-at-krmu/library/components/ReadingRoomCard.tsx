import { ChevronsRight } from "lucide-react";

type Props = {
  contents: string[];
};

const ReadingRoomCard = ({ contents }: Props) => {
  return (
    <div className="w-full lg:w-1/2 p-5 bg-[#051630] text-white rounded-[20px]">
      <ul>
        {contents.map((content, index) => (
          <li key={index} className="flex gap-2.5 pb-2">
            <ChevronsRight size={20} />

            <span>{content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingRoomCard;
