import ProgrammeInfoDemo from "./schoolglobalcomponent/ProgrammeInfoDemo";

type Props = {
  degName: string;
  schoolCategoryName: string;
  title: string;
  content: string;
  slug: string;
};

const SchoolProgrammeOffered = ({
  degName,
  schoolCategoryName,
  title,
  content,
  slug,
}: Props) => {
  const STA = [
    "school-of-management-and-commerce",
    "school-of-engineering-and-technology",
    "school-of-medical-and-allied-sciences",
    "school-of-architecture-design",
    "school-of-liberal-arts",
  ];
  return (
    <>
      <section id="Explore-Courses" className="pt-10 md:pt-20">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="text-center max-w-5xl mx-auto w-full px-4">
            <h3 className="text-3xl mb-5 md:text-4xl lg:text-5xl font-semibold">
              {title}
            </h3>
            <p>{content}</p>
          </div>
<<<<<<< HEAD
          <ProgrammeInfoDemo degName={degName} catName={schoolCategoryName} />
          {/* <ProgrammeInfoCards /> */}
=======
          <ProgrammeInfoDemo
            degName={degName}
            catName={schoolCategoryName}
            title={title}
          />
          {STA.includes(slug) && (
            <p className="text-right text-sm mr-8 mt-2 text-muted-foreground">
              ** Subject to Approval
            </p>
          )}
>>>>>>> 5079e22537d8e6c406bb14bec19c2431dc8b9fba
        </div>
      </section>
    </>
  );
};

export default SchoolProgrammeOffered;
