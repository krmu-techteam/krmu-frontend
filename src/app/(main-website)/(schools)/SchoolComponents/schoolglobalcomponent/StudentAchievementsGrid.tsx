import { getSchoolStudentAchievements } from "@/lib/api/common";
import StudentAchievementCard from "./StudentAchievementCard";

type Props = {
  schoolCat: string;
};

const StudentAchievementsGrid = async ({ schoolCat }: Props) => {

  const achievements = await getSchoolStudentAchievements(schoolCat);

  return (
    <>
      {achievements &&
        achievements.map((achievement) => (
          <StudentAchievementCard
            key={achievement?.id}
            info={achievement?.achievement_content}
            achievementsImages={achievement?.achivementimage}
          />
        ))}
    </>
  );
};

export default StudentAchievementsGrid;
