import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import { CardLISTITEM } from "@/lib/types/schools";
import Image from "next/image";

type Props = {
  cardImg: StrapiMedia;
  cardDesc: string;
  cardLists: CardLISTITEM[];
};

const IndustryCollabCard = ({ cardImg, cardDesc, cardLists }: Props) => {
  return (
    <div className="bg-[#172a45] p-5 text-white ic_list rounded-[20px] min-h-[1px] h-full">
      <Image
        src={`${STRAPI_URL}${cardImg?.url}`}
        width={163}
        height={128}
        alt={cardImg?.alternativeText || ""}
          
      />
      <p className="my-5">{cardDesc}</p>
      <ul>
        {cardLists &&
          cardLists?.map((list) => {
            return <li key={list?.id}>{list?.listtext}</li>;
          })}
      </ul>
    </div>
  );
};

export default IndustryCollabCard;
