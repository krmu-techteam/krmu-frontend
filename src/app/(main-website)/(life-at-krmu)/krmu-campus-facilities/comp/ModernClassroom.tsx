import { ModernClassroomSection } from "@/lib/api/krmu-campus-facility";
import ModernClassSlide from "./ModernClassSlide";


type Props = {
  modernClassroom: ModernClassroomSection;
};

const ModernClassroom = ({modernClassroom}: Props) => {

  

  return (
    <section className="py-10">
      <div className="max-w-[1664px] mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          {modernClassroom?.heading}
        </h3>
        <p className="mb-10 text-center">{modernClassroom?.content}</p>
        <div>
          <ModernClassSlide data={modernClassroom?.modern_classrooms_imgs} />
        </div>
      </div>
    </section>
  )
}

export default ModernClassroom