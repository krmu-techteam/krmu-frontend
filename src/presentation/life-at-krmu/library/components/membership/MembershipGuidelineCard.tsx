import Image from "next/image";
import { MembershipGuidelines } from "@/features/life-at-krmu/library";

export const MembershipGuidelineCard = ({
  content,
  pointNumber,
}: MembershipGuidelines) => {
  return (
    <div className="w-full relative libcountcard">
      <p>{content}</p>
      <Image
        src={pointNumber}
        width={100}
        height={100}
        alt=""
        className="libcount"
      />
    </div>
  );
};
