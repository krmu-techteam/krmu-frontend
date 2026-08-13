import SectionDivider from "@/components/common/SectionDivider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FACADV } from "@/lib/types/schools";
import {
  AdvisoryCards,
  FacultyAdvisoryCards,
} from "@/presentation/school/components";

type Props = {
  schoolCat: string;
  WordSchoolslug?: string;
  fac_adv: FACADV;
};

const FacultyAdvisorySection = ({ schoolCat, fac_adv }: Props) => {
  const isBoth = fac_adv?.fac_adv !== "Single";

  return (
    <section className="relative pb-1 pt-10 md:pt-12 md:pb-4 xl:pt-16 xl:pb-10  bg-transparent font-poppins">
      <div className="max-w-[1440px] mx-auto w-full  px-4 md:px-8 lg:px-12">
        {/* Faculty List */}
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                fac_adv?.fac_title || `Faculty At ${schoolCat.toUpperCase()}`,
            }}
            className="heading-primary mb-4 md:mb-8"
          />
          <FacultyAdvisoryCards schoolCat={schoolCat} />
        </div>

        {/* Advisory List (if applicable) */}
        {isBoth && (
          <div>
            <div className="heading-primary mb-4 md:mb-8">Advisory Board</div>
            <AdvisoryCards schoolCat={schoolCat} />
          </div>
        )}
      </div>
      <SectionDivider />
    </section>
  );
};

export default FacultyAdvisorySection;
