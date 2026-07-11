import { STRAPI_URL } from "@/app/constant";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ADVISORYBOARD } from "@/lib/types/advisory-type";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

interface AdvisoryProps {
  advisoryMembers: ADVISORYBOARD[];
}

const AdvisoryBoardCard = ({ advisoryMembers }: AdvisoryProps) => {
  return (
    <>
      {/* Card */}
      {advisoryMembers
        ? advisoryMembers.map((member) => (
            <Card
              key={member.id}
              className="py-0 border-none lg:mx-[7.68%] gap-0 shadow-none"
            >
              <div className="border-none flex justify-center p-0 gap-0 advisory-zoom-img overflow-hidden">
                {member?.advisoryimage?.url && (
                  <Image
                    src={`${STRAPI_URL}${member?.advisoryimage?.url}`}
                    alt={member?.title}
                    width={373}
                    height={377}
                    className="z-10000 relative object-cover"
                  />
                )}
              </div>
              <CardContent className="bg-[#051630] px-2.5 pt-2.5 pb-4 text-white flex items-center justify-center flex-col min-h-[202px] f-full">
                <CardTitle className="text-xl leading-[1.6] font-semibold">
                  {member?.title}
                </CardTitle>
                <CardDescription className="min-h-24 text-center text-white text-base">
                  <BlocksRenderer content={member?.advisoryboardinfo} />
                </CardDescription>
              </CardContent>
            </Card>
          ))
        : // Render 4 skeleton cards
          Array.from({ length: 4 }).map((_, index) => (
            <Card
              key={index}
              className="py-0 border-none mx-[7.68%] gap-0 shadow-none"
            >
              <div className="border-none block p-0 gap-0 advisory-zoom-img overflow-hidden">
                <Skeleton className="h-[377px] w-[373px] rounded-xl" />
              </div>
              <CardContent className="bg-[#051630] px-2.5 pt-2.5 pb-4 text-white flex items-center justify-center flex-col min-h-[202px] w-full">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-[70%] mt-1" />
              </CardContent>
            </Card>
          ))}
    </>
  );
};

export default AdvisoryBoardCard;
