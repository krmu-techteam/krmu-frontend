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

  const removeSubToApproval = [
    "school-of-architecture-design",
    "school-of-liberal-arts",
    "school-of-engineering-and-technology",
    "school-of-education",
    "school-of-physiotherapy-and-rehabilitation-sciences",
    "school-of-agriculutural-sciences",
    "school-of-hotel-management-and-catering-technology",
    "school-of-basic-and-applied-sciences",
    "school-of-medical-and-allied-sciences",
    "school-of-legal-studies",
    "school-of-emerging-media-and-creator-economy",
  ];
  return (
    <>
      <section id="Explore-Courses" className="pt-10 md:pt-20">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="text-center max-w-5xl mx-auto w-full px-4">
            <h3 className=" mb-5 text-2xl sm:text-4xl font-semibold">
              {title}
            </h3>
            <p>{content}</p>
          </div>
          <ProgrammeInfoDemo
            degName={degName}
            catName={schoolCategoryName}
            slug={slug}
          />
          {/* <ProgrammeInfoCards /> */}
          {!removeSubToApproval.includes(slug) && (
            <p className="text-right text-sm mt-2 mr-8 text-muted-foreground">
              ** Subject to Approval
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default SchoolProgrammeOffered;
