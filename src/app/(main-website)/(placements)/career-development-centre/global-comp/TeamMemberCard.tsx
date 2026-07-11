import { STRAPI_URL } from "@/app/constant";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CdcTeamItem } from "@/lib/api/cdcteam";
import Image from "next/image";

type Props = {
  data: CdcTeamItem;
};

const TeamMemberCard = ({ data }: Props) => {
  return (
    <Card className="py-0 border-none lg:mx-[7.68%] gap-0 shadow-none bg-transparent">
      <div className="border-none flex justify-center p-0 gap-0 advisory-zoom-img overflow-hidden">
        {data?.cdc_team_img?.url && (
          <Image
            src={`${STRAPI_URL}${data?.cdc_team_img?.url}`}
            alt=""
            width={373}
            height={377}
            className="z-10000 relative object-cover"
            // unoptimized={isLocal}
          />
        )}
      </div>
      <CardContent className="bg-[#051630] px-2.5 pt-2.5 pb-4 text-white flex items-center justify-center flex-col f-full">
        <CardTitle className="text-xl leading-[1.6] font-semibold">
          {data?.cdc_name}
        </CardTitle>
        <CardDescription className=" text-center text-white text-base">
          {data?.cdc_designation}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
