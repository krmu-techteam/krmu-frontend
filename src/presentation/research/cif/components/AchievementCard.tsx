import { Achievement } from "@/features/research/cif";
import Image from "next/image";
import Link from "next/link";

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) => {
  return (
    <div key={index} className="mb-5 lg:w-1/3">
      <div className="mb-2.5">
        <Image
          src={achievement.imageUrl}
          width={500}
          height={382}
          alt="achievement card"
          className="w-full h-full"
        />
      </div>
      <div className="text-white">
        <h3 className="text-[16px] font-medium leading-[1.4em] text-wrap font-poppins">
          <Link href={achievement.url}>{achievement.title}</Link>
        </h3>
      </div>
    </div>
  );
};
export default AchievementCard;
