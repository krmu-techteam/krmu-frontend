import AboutTabsOrAccordion from "@/app/(main-website)/components/TabsOrAccordion/AboutTabsOrAccordion";
import { getFacultyAdvisory } from "@/lib/api/facAdv";

const AdvisoryOrDean = async () => {

  const advisoryData = await getFacultyAdvisory();



  return (
    <>
      <section className="overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full flex justify-center px-4 py-8 md:py-16">
          <AboutTabsOrAccordion data={advisoryData} />
        </div>
      </section>
    </>
  );
};

export default AdvisoryOrDean;
