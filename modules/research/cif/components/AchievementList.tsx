import { Achievement } from "../types";
import AchievementCard from "./AchievementCard";

const AchievementList = ({ achievements }: { achievements: Achievement[] }) => {
  return (
    <div className="lg:flex gap-10">
      {achievements.map((achievement, index) => {
        return (
          <AchievementCard
            key={index}
            achievement={achievement}
            index={index}
          />
        );
      })}
    </div>
  );
};
export default AchievementList;
