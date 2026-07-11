import { getStudentsAchievements } from "@/lib/api/student-achievement";
import StudentAchievementCards from "../comp/StudentAchievementCards";
import StudentAchievementHero from "../comp/StudentAchievementHero";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const studentAchievementsCatName = slug.split("-")[0];

  const achievementData = await getStudentsAchievements(
    studentAchievementsCatName
  );

  return (
    <>
      <StudentAchievementHero heading={studentAchievementsCatName} />
      {achievementData && (
        <StudentAchievementCards achievementData={achievementData} />
      )}
    </>
  );
};

export default page;
