import ProgrammeInfoDemo from "./schoolglobalcomponent/ProgrammeInfoDemo";

type Props = {
  degName: string;
  schoolCategoryName: string;
  title: string;
  content: string;
};

const SchoolProgrammeOffered = ({
  degName,
  schoolCategoryName,
  title,
  content,
}: Props) => {
  return (
    <>
      <section className="px-4" id="Explore-Courses">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="text-center max-w-5xl mx-auto w-full">
            <h3 className="text-3xl mb-5 md:text-4xl lg:text-5xl font-semibold">
              {title}
            </h3>
            <p>{content}</p>
          </div>
          <ProgrammeInfoDemo degName={degName} catName={schoolCategoryName} />
          {/* <ProgrammeInfoCards /> */}
        </div>
      </section>
    </>
  );
};

export default SchoolProgrammeOffered;
