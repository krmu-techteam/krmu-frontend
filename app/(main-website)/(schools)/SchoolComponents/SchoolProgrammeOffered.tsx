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
      <section id="Explore-Courses">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="text-center max-w-5xl mx-auto w-full px-4">
            <h3 className="text-3xl mb-2 md:text-4xl lg:text-5xl font-semibold">
              {title}
            </h3>
            <p>{content}</p>
          </div>
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
        </div>
      </section>
    </>
  );
};

export default SchoolProgrammeOffered;
