import { getStudentsAchievements } from "@/lib/api/student-achievement";
import StudentAchievementCards from "../comp/StudentAchievementCards";
import StudentAchievementHero from "../comp/StudentAchievementHero";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const studentAchievementsCatName = slug.split("-")[0];

  const achievementData = await getStudentsAchievements(
    studentAchievementsCatName
  );

  if (!achievementData || achievementData.length === 0) {
    return notFound();
  }

  return (
    <>
      <StudentAchievementHero heading={studentAchievementsCatName} />
      <StudentAchievementCards achievementData={achievementData} />
    </>
  );
};

export default page;
