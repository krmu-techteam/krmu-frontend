import StudentAchievementCard from "@/app/(main-website)/(schools)/SchoolComponents/schoolglobalcomponent/StudentAchievementCard";
import { StudentAchievement } from "@/lib/types/common";

type Props = {
  achievementData: StudentAchievement[];
};

const StudentAchievementCards = ({ achievementData }: Props) => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievementData &&
            achievementData?.map((student) => {
              return (
                <StudentAchievementCard
                  key={student.id}
                  info={student?.achievement_content}
                  achievementsImages={student?.achivementimage}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default StudentAchievementCards;
