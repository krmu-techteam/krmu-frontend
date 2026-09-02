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
    const rawTitle =
        fac_adv?.fac_title || `Faculty At ${schoolCat.toUpperCase()}`;
    const cleanTitle = rawTitle.replace(/^<p>(.*)<\/p>$/i, "$1");

    return (
        <section className="relative pb-1 pt-10 md:pt-12 md:pb-4 xl:pt-16 xl:pb-10  bg-transparent font-poppins">
            <div className="max-w-[1440px] mx-auto w-full  px-4 md:px-8 lg:px-12">
                {/* Faculty List */}
                <div>
                    <h2
                        dangerouslySetInnerHTML={{
                            __html: cleanTitle,
                        }}
                        className="heading-primary mb-4 md:mb-8"
                    />
                    <FacultyAdvisoryCards schoolCat={schoolCat} />
                </div>

                {/* Advisory List (if applicable) */}
                {isBoth && (
                    <div>
                        <h2 className="heading-primary mb-4 md:mb-8">
                            Advisory Board
                        </h2>
                        <AdvisoryCards schoolCat={schoolCat} />
                    </div>
                )}
            </div>
            <SectionDivider />
        </section>
    );
};

export default FacultyAdvisorySection;
