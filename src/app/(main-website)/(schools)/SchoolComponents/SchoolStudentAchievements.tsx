import Link from "next/link";
import StudentAchievementsGrid from "./schoolglobalcomponent/StudentAchievementsGrid";
import { Button } from "@/lib/types/home";

type Props = {
  title: string;
  btn: Button;
  schoolCat: string;
};

const SchoolStudentAchievements = ({ title, btn, schoolCat }: Props) => {
  return (
    <section className="py-5 md:py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-5xl xl:text-[80px] font-medium">
            {title}
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 xl:gap-20">
          <StudentAchievementsGrid schoolCat={schoolCat} />
        </div>
        <div className="flex items-center justify-center my-10">
          {(btn?.buttonclass || btn?.buttonlink) && (
            <Link
              href={btn?.buttonlink}
              className={`py-3.5 px-8 bg-[#cb000d] font-bold rounded-sm inline-block text-white ${btn?.buttonclass}`}
              target="_blank" rel="noopener noreferrer"
            >
              {btn?.buttontext}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default SchoolStudentAchievements;
